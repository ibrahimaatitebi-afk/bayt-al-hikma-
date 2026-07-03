/* ===== BAYT AL-HIKMA — app logic ===== */
"use strict";

/* ---------- State ---------- */
const KEY = "bayt_state_v1";
let S = load();
function load(){
  try{ const s = JSON.parse(localStorage.getItem(KEY)); if(s && typeof s==="object") return migrate(s); }catch(e){}
  return migrate({});
}
function migrate(s){
  s.xp = s.xp||0;
  s.log = s.log||{};            // date -> action count
  s.srs = s.srs||{};            // cardId -> {b:box1-5, due:"YYYY-MM-DD"}
  s.checks = s.checks||{};      // checklistId -> true
  s.mods = s.mods||{};          // moduleId -> status
  s.star = s.star||{};          // idx -> text
  s.sent = s.sent||{n:0, ok:0};
  s.drill = s.drill||{};        // drillId -> "got"|"redo"
  s.notes = s.notes||{};
  return s;
}
function save(){ localStorage.setItem(KEY, JSON.stringify(S)); }
function today(){ return new Date().toISOString().slice(0,10); }
function addDays(d,n){ const x=new Date(d+"T12:00:00"); x.setDate(x.getDate()+n); return x.toISOString().slice(0,10); }
function logAct(n=1){ S.log[today()]=(S.log[today()]||0)+n; save(); paintSide(); }
function xp(n,msg){ S.xp+=n; logAct(); save(); paintSide(); if(msg) toast(`+${n} XP — ${msg}`); }
function level(){ return Math.floor(Math.sqrt(S.xp/100))+1; }
function streak(){
  let n=0, d=today();
  if(!S.log[d]) d=addDays(d,-1);            // today not yet logged doesn't break streak
  while(S.log[d]){ n++; d=addDays(d,-1); }
  return n;
}
function toast(t){ const el=document.getElementById("toast"); el.textContent=t; el.classList.add("show"); clearTimeout(el._t); el._t=setTimeout(()=>el.classList.remove("show"),1900); }
function esc(s){ return String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c])); }

/* ---------- Voice ---------- */
let AR_VOICE=null;
function pickVoice(){
  const vs=speechSynthesis.getVoices();
  AR_VOICE = vs.find(v=>/^ar/i.test(v.lang)&&/sa|eg/i.test(v.lang)) || vs.find(v=>/^ar/i.test(v.lang)) || null;
}
if("speechSynthesis" in window){ pickVoice(); speechSynthesis.onvoiceschanged=pickVoice; }
function speak(txt, rate){
  if(!("speechSynthesis" in window)){ toast("No speech support in this browser"); return; }
  speechSynthesis.cancel();
  const u=new SpeechSynthesisUtterance(txt);
  u.lang = AR_VOICE ? AR_VOICE.lang : "ar-SA";
  if(AR_VOICE) u.voice=AR_VOICE;
  u.rate = rate||0.85;
  speechSynthesis.speak(u);
}
window.speakAr = t=>speak(t);
window.speakSlow = t=>speak(t,0.6);

/* ---------- SRS (Leitner, 5 boxes) ---------- */
const BOX_DAYS=[0,1,3,7,21];
function allCards(){
  const cards=[];
  QURANIC_VOCAB.forEach((w,i)=>cards.push({id:"q"+i, deck:"Quranic Arabic", ar:true,
    front:`<div class="ar-lg">${w.ar}</div><div class="tiny">root ${esc(w.root)} · ≈${w.freq}× in the Quran</div>`,
    back:`<div class="tr">${esc(w.tr)}</div><div style="font-size:19px">${esc(w.en)}</div>`, say:w.ar}));
  Object.entries(POLYMATH).forEach(([dom,d])=>{
    (d.cards||[]).forEach((c,i)=>cards.push({id:dom+i, deck:dom[0].toUpperCase()+dom.slice(1),
      front:`<div style="font-size:17px;max-width:520px">${esc(c.q)}</div>`,
      back:`<div class="muted" style="font-size:15px;max-width:520px">${esc(c.a)}</div>`}));
  });
  return cards;
}
const CARDS = allCards();
function dueCards(deckFilter){
  const t=today(); const due=[], fresh=[];
  for(const c of CARDS){
    if(deckFilter && !deckFilter(c)) continue;
    const st=S.srs[c.id];
    if(!st) fresh.push(c);
    else if(st.due<=t) due.push(c);
  }
  return due.concat(fresh.slice(0,10));   // all due + up to 10 new
}
function grade(card, good){
  const st=S.srs[card.id]||{b:1,due:today()};
  st.b = good ? Math.min(5, st.b+1) : 1;
  st.due = addDays(today(), BOX_DAYS[st.b-1]||0 || (good?1:0));
  if(good && st.b===1) st.due=addDays(today(),1);
  S.srs[card.id]=st; save();
  xp(good?5:2, good?null:"kept for review");
}
function srsProgress(prefix){
  let n=0, mastered=0;
  for(const c of CARDS){ if(prefix && !c.id.startsWith(prefix)) continue; n++;
    const st=S.srs[c.id]; if(st && st.b>=4) mastered++; }
  return n? mastered/n : 0;
}

/* ---------- Review session ---------- */
let RV={q:[],i:0};
function startReview(filterName){
  const filters={
    all:null,
    arabic:c=>c.id.startsWith("q"),
    poly:c=>!c.id.startsWith("q")
  };
  RV.q = dueCards(filters[filterName]); RV.i=0;
  shuffle(RV.q);
  if(!RV.q.length){ toast("Nothing due — come back tomorrow"); return; }
  showView("home"); renderReview();
}
function renderReview(){
  const host=document.getElementById("v-home");
  if(RV.i>=RV.q.length){
    host.innerHTML=`<div class="crumb">Review</div><h1>Session complete</h1>
      <div class="card hl" style="margin-top:22px;text-align:center;padding:40px">
        <div style="font-size:44px">☪</div>
        <h3>${RV.q.length} cards reviewed</h3>
        <p class="muted">Spaced retrieval is the retention system. Same time tomorrow.</p>
        <div class="rowbtns"><button class="btn" onclick="renderHome()">Back to Today</button></div>
      </div>`;
    return;
  }
  const c=RV.q[RV.i]; const st=S.srs[c.id]; const box=st?st.b:0;
  host.innerHTML=`<div class="crumb">Review · ${RV.i+1} / ${RV.q.length}</div>
    <div class="card flash" id="flash">
      <div class="meta">${esc(c.deck)} ${box?("· box "+box):"· new"}</div>
      ${c.front}
      ${c.say?`<button class="iconbtn" onclick="event.stopPropagation();speakAr('${c.say.replace(/'/g,"\\'")}')" title="Listen">▶</button>`:""}
      <div class="ans">${c.back}</div>
      <div class="boxdots">${[1,2,3,4,5].map(b=>`<i class="${box>=b?'on':''}"></i>`).join("")}</div>
      <div class="tiny" id="flash-hint">tap card to reveal</div>
    </div>
    <div class="rowbtns" id="grade-row" style="visibility:hidden">
      <button class="btn quiet" onclick="doGrade(false)">Again</button>
      <button class="btn" onclick="doGrade(true)">Got it</button>
    </div>
    <div class="rowbtns"><button class="btn ghost small" onclick="renderHome()">End session</button></div>`;
  document.getElementById("flash").onclick=()=>{
    document.getElementById("flash").classList.add("flipped");
    document.getElementById("grade-row").style.visibility="visible";
    document.getElementById("flash-hint").style.display="none";
  };
}
window.doGrade=(g)=>{ grade(RV.q[RV.i],g); RV.i++; renderReview(); };
function shuffle(a){ for(let i=a.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]]; } }

/* ---------- Sentence engine ---------- */
const PAST_SUF={huwa:"َ", hiya:"َتْ", ana:"ْتُ", anta:"ْتَ", anti:"ْتِ", nahnu:"ْنَا", hum:"ُوا"};
const PRES_PRE={ana:"أَ", anta:"تَ", anti:"تَ", huwa:"يَ", hiya:"تَ", nahnu:"نَ", hum:"يَ"};
const VERB_OBJ={
  katab:["the letter","the lesson","the book"],
  daras:["the lesson","the book","the Quran"],
  sharib:["the coffee","the tea","the water"],
  fahim:["the lesson","the book","the news","the Quran"],
  "fataḥ":["the door","the book","the letter"],
  "ḥamal":["the book","the letter","the water","the coffee","the tea"],
  "samiʿ":["the news"],
  "ṭalab":["knowledge","the water","the coffee","the book","the tea"]
};
function conjPast(v, key, beforeAl){
  let suf=PAST_SUF[key];
  if(key==="hiya" && beforeAl) suf="َتِ";
  return v.past+suf;
}
function conjPres(v, key){
  const suf = key==="anti" ? "ِينَ" : key==="hum" ? "ُونَ" : "ُ";
  return PRES_PRE[key]+v.pres+suf;
}
function rnd(a){ return a[Math.floor(Math.random()*a.length)]; }
function genSentence(){
  const v=rnd(SENT_VERBS);
  const subj=rnd(SENT_SUBJECTS);
  const tense=Math.random()<0.55?"past":"pres";
  const key = subj.pron ? subj.pron : (subj.g==="f"?"hiya":"huwa");
  let tail={ar:"",en:"",words:[]};
  if(v.obj){
    const allowed=VERB_OBJ[v.tr]||null;
    const pool=allowed?SENT_OBJECTS.filter(o=>allowed.includes(o.en)):SENT_OBJECTS;
    const o=rnd(pool.length?pool:SENT_OBJECTS);
    tail={ar:o.ar, en:" "+o.en, words:[o.ar]};
  }else{
    const ppool=v.places?SENT_PLACES.filter(p=>v.places.includes(p.en)):SENT_PLACES;
    const p=rnd(ppool.length?ppool:SENT_PLACES);
    tail={ar:v.prep+" "+p.ar, en:(v.prepEn?" "+v.prepEn:"")+" "+p.en, words:[v.prep,p.ar]};
  }
  let verbAr, verbEn;
  if(tense==="past"){
    verbAr=conjPast(v,key, subj.third);
    verbEn=v.en[0];
  }else{
    verbAr=conjPres(v,key);
    verbEn=(subj.third)?v.en[1]:v.en[2];
  }
  let words, en;
  if(subj.third){ // VSO
    words=[verbAr, subj.ar, ...tail.words];
    en=`${cap(subj.en)} ${verbEn}${tail.en}.`;
  }else{
    words=[subj.ar, verbAr, ...tail.words];
    en=`${cap(subj.en)} ${verbEn}${tail.en}.`;
  }
  return {ar:words.join(" "), words, en, tense};
}
function cap(s){ return s[0].toUpperCase()+s.slice(1); }

let SB={cur:null, mode:"ar2en", built:[]};
window.newSentence=()=>{
  SB.cur=genSentence(); SB.built=[];
  const c=SB.cur;
  const host=document.getElementById("sb-host");
  if(SB.mode==="ar2en"){
    host.innerHTML=`
      <div class="kicker">${c.tense==="past"?"Past (māḍī)":"Present (muḍāriʿ)"} · translate to English</div>
      <div class="ar-lg" style="text-align:center;margin:14px 0">${c.ar}</div>
      <div class="rowbtns">
        <button class="iconbtn" onclick="speakAr('${c.ar}')" title="Listen">▶</button>
        <button class="iconbtn" onclick="speakSlow('${c.ar}')" title="Slow">🐢</button>
      </div>
      <div style="text-align:center;margin-top:14px">
        <button class="btn ghost" onclick="revealSent()">Reveal translation</button>
      </div>
      <div id="sb-reveal" style="display:none;text-align:center;margin-top:14px">
        <div style="font-size:18px">${esc(c.en)}</div>
        <div class="rowbtns">
          <button class="btn quiet" onclick="gradeSent(false)">Missed it</button>
          <button class="btn" onclick="gradeSent(true)">Got it</button>
        </div>
      </div>`;
  }else{
    const sh=[...c.words]; shuffle(sh);
    host.innerHTML=`
      <div class="kicker">${c.tense==="past"?"Past (māḍī)":"Present (muḍāriʿ)"} · build the Arabic</div>
      <div style="text-align:center;font-size:17px;margin:12px 0">${esc(c.en)}</div>
      <div id="sb-answer"></div>
      <div style="text-align:center;margin-top:10px">${sh.map((w,i)=>`<span class="tile" data-w="${w}" onclick="pickTile(this)">${w}</span>`).join("")}</div>
      <div class="rowbtns">
        <button class="btn quiet small" onclick="newSentence()">Skip</button>
        <button class="btn ghost small" onclick="undoTile()">Undo</button>
        <button class="btn small" onclick="checkBuilt()">Check</button>
      </div>
      <div id="sb-verdict" style="text-align:center;margin-top:10px"></div>`;
  }
  const st=document.getElementById("sb-stats");
  if(st) st.textContent=`${S.sent.ok} correct of ${S.sent.n} attempted`;
};
window.revealSent=()=>{ document.getElementById("sb-reveal").style.display="block"; };
window.gradeSent=(ok)=>{ S.sent.n++; if(ok)S.sent.ok++; save(); xp(ok?10:3, ok?"sentence translated":null); newSentence(); };
window.pickTile=(el)=>{ if(el.classList.contains("used"))return; el.classList.add("used"); SB.built.push(el.dataset.w);
  document.getElementById("sb-answer").innerHTML=SB.built.map(w=>`<span class="tile" style="cursor:default">${w}</span>`).join(" "); };
window.undoTile=()=>{ const w=SB.built.pop(); if(w===undefined)return;
  const tiles=[...document.querySelectorAll("#sb-host .tile.used")];
  for(let i=tiles.length-1;i>=0;i--){ if(tiles[i].dataset.w===w){ tiles[i].classList.remove("used"); break; } }
  document.getElementById("sb-answer").innerHTML=SB.built.map(x=>`<span class="tile" style="cursor:default">${x}</span>`).join(" "); };
window.checkBuilt=()=>{
  const v=document.getElementById("sb-verdict");
  const ok = SB.built.join(" ")===SB.cur.words.join(" ");
  S.sent.n++; if(ok)S.sent.ok++; save();
  if(ok){ v.innerHTML=`<span class="good">✓ Correct</span> — <span class="ar-md">${SB.cur.ar}</span>`; xp(12,"sentence built"); speak(SB.cur.ar); setTimeout(newSentence,1800); }
  else{ v.innerHTML=`<span class="bad">✗ Not yet.</span> Correct: <span class="ar-md">${SB.cur.ar}</span>`; xp(3); }
};
window.setSbMode=(m,btn)=>{ SB.mode=m; document.querySelectorAll("#sb-modes .tab").forEach(t=>t.classList.remove("on")); btn.classList.add("on"); newSentence(); };

/* ---------- Checklist helpers ---------- */
function ck(id, label, done){
  const isDone = done || !!S.checks[id];
  return `<div class="ck ${isDone?'done':''}" onclick="toggleCk('${id}',this)">
    <div class="box">${isDone?"✓":""}</div><div class="t">${label}</div></div>`;
}
window.toggleCk=(id,el)=>{
  S.checks[id]=!S.checks[id];
  if(!S.checks[id]) delete S.checks[id]; else xp(10,"progress logged");
  save(); el.classList.toggle("done"); el.querySelector(".box").textContent=S.checks[id]?"✓":"";
  paintSide();
};
function ckProgress(ids){ const done=ids.filter(i=>S.checks[i]).length; return ids.length?done/ids.length:0; }

/* ---------- Views ---------- */
const VIEWS=["home","arabic","stem","code","poly","life"];
function showView(v){
  VIEWS.forEach(x=>{
    document.getElementById("v-"+x).classList.toggle("on",x===v);
    document.querySelectorAll(`[data-v="${x}"]`).forEach(b=>b.classList.toggle("on",x===v));
  });
  window.scrollTo({top:0});
  if(v==="home") renderHome();
}
document.querySelectorAll("[data-v]").forEach(b=>b.onclick=()=>showView(b.dataset.v));

/* ---------- HOME ---------- */
function sparkline(){
  const days=[]; for(let i=13;i>=0;i--) days.push(addDays(today(),-i));
  const max=Math.max(1,...days.map(d=>S.log[d]||0));
  return `<div class="spark">${days.map(d=>`<i style="height:${Math.max(4,(S.log[d]||0)/max*100)}%" class="${d===today()?'today':''}" title="${d}: ${S.log[d]||0}"></i>`).join("")}</div>`;
}
function domainBars(){
  const pyIds=CODING.python.lessons.map(l=>"py"+l.n);
  const pyDone=CODING.python.lessons.filter(l=>l.done||S.checks["py"+l.n]).length/CODING.python.lessons.length;
  const stemIds=MATH_ROADMAP.flatMap(p=>p.items.map(i=>i.id));
  const polyIds=Object.entries(POLYMATH).flatMap(([k,d])=>d.units.map(u=>"read_"+u.id));
  const lifeIds=LIFE_TRACK.flatMap(s=>s.items.map(i=>i.id));
  const rows=[
    ["Arabic", srsProgress("q")],
    ["Maths & Eng", ckProgress(stemIds)],
    ["Coding", pyDone],
    ["Polymath", ckProgress(polyIds)],
    ["Life", ckProgress(lifeIds)]
  ];
  return rows.map(([n,p])=>`<div style="margin-top:10px"><div style="display:flex;justify-content:space-between;font-size:12.5px"><span>${n}</span><span class="tiny">${Math.round(p*100)}%</span></div><div class="bar"><i style="width:${Math.round(p*100)}%"></i></div></div>`).join("");
}
function planForToday(){
  const due=dueCards().length;
  const hour=new Date().getHours();
  const dow=new Date().getDay();
  const drills=FORMULATION_DRILLS.filter(d=>S.drill[d.id]!=="got");
  const nextPy=CODING.python.lessons.find(l=>!l.done && !S.checks["py"+l.n]);
  const domains=Object.keys(POLYMATH);
  const dom=domains[dow % domains.length];
  const items=[
    {t:`Arabic review — ${due} card${due===1?"":"s"} due`, sub:"Non-negotiable. Do this first.", act:`startReview('all')`, cta:"Review now"},
    {t:"Morning deep work: one formulation drill", sub:drills.length?`${drills.length} drills remaining — this is your highest-leverage hour`: "All drills cleared — redo one from memory", act:`showView('stem');switchTab('stem','drill')`, cta:"Open drills"},
    {t:"Sentence builder — 5 sentences", sub:`${S.sent.ok}/${S.sent.n} lifetime · unlimited supply`, act:`showView('arabic');switchTab('arabic','sent')`, cta:"Build"},
    nextPy?{t:`Python — Lesson ${nextPy.n}: ${nextPy.title}`, sub:"One lesson, then stop. Momentum over perfection.", act:`showView('code')`, cta:"Open"}:null,
    {t:`Evening reading — ${dom[0].toUpperCase()+dom.slice(1)}`, sub:"One unit, theme-first. Add its cards to tomorrow's review.", act:`showView('poly')`, cta:"Read"}
  ].filter(Boolean);
  if(hour>=18) items.push({t:"Weekly honesty check", sub:"Sunday only: update every tracker.", act:`showView('life')`, cta:"Life"});
  return items;
}
function renderHome(){
  const due=dueCards().length;
  const hour=new Date().getHours();
  const greet = hour<12?"Good morning":hour<18?"Good afternoon":"Good evening";
  const host=document.getElementById("v-home");
  host.innerHTML=`
    <div class="crumb">${new Date().toLocaleDateString("en-GB",{weekday:"long",day:"numeric",month:"long",year:"numeric"})}</div>
    <h1>${greet}, Ibrahim <span class="amp">·</span> <span style="font-family:var(--arab)">أَهْلًا</span></h1>
    <p class="lede">Degree first, breadth always. You peak in the morning — spend it on the hard thing.</p>

    <div class="grid g4">
      <div class="card stat"><div class="big">${streak()}</div><div class="lbl">day streak</div></div>
      <div class="card stat"><div class="big">${due}</div><div class="lbl">cards due</div>
        ${due?`<button class="btn small" style="margin-top:8px" onclick="startReview('all')">Review</button>`:""}</div>
      <div class="card stat"><div class="big">${level()}</div><div class="lbl">level · ${S.xp} xp</div></div>
      <div class="card stat"><div class="lbl" style="margin-bottom:2px">last 14 days</div>${sparkline()}</div>
    </div>

    <div class="grid g2">
      <div class="card hl">
        <h4>Today's plan</h4>
        ${planForToday().map(p=>`
          <div style="display:flex;align-items:center;gap:12px;padding:9px 0;border-bottom:1px solid rgba(42,48,64,.5)">
            <div style="flex:1"><div style="font-size:14px;font-weight:500">${p.t}</div><div class="tiny">${p.sub}</div></div>
            <button class="btn ghost small" onclick="${p.act}">${p.cta}</button>
          </div>`).join("")}
      </div>
      <div class="card">
        <h4>Mastery</h4>
        ${domainBars()}
        <hr class="sep">
        <div class="tiny">Mastered = SRS box 4+ (Arabic) or items checked. Honest numbers only.</div>
        <div class="rowbtns" style="justify-content:flex-start;margin-top:12px">
          <button class="btn quiet small" onclick="exportState()">Export progress</button>
          <button class="btn quiet small" onclick="importState()">Import</button>
        </div>
      </div>
    </div>

    <div class="card" style="margin-top:14px">
      <h4>The doctrine</h4>
      <p class="muted" style="font-size:13.5px">Formulation before solution — the gap is upstream of the algebra. Roots before words — one Arabic root unlocks a family. Retrieval before re-reading — if it isn't recalled, it isn't learned. Constrained optimisation is the most portable skill in your degree; Process Control is the bridge to quant. Foundations assemble through engagement, not as prerequisites.</p>
    </div>`;
}
window.renderHome=renderHome;
window.startReview=startReview;

/* ---------- Export / import ---------- */
window.exportState=()=>{
  const blob=new Blob([JSON.stringify(S,null,1)],{type:"application/json"});
  const a=document.createElement("a"); a.href=URL.createObjectURL(blob); a.download="bayt-progress.json"; a.click();
  toast("Progress exported");
};
window.importState=()=>{
  const inp=document.createElement("input"); inp.type="file"; inp.accept=".json";
  inp.onchange=e=>{ const f=e.target.files[0]; if(!f)return; const r=new FileReader();
    r.onload=()=>{ try{ S=migrate(JSON.parse(r.result)); save(); toast("Imported"); renderAll(); }catch(err){ toast("Invalid file"); } };
    r.readAsText(f); };
  inp.click();
};

/* ---------- Tabs helper ---------- */
window.switchTab=(view,tab)=>{
  document.querySelectorAll(`#v-${view} .tabs .tab`).forEach(t=>t.classList.toggle("on",t.dataset.t===tab));
  document.querySelectorAll(`#v-${view} .subview`).forEach(s=>s.classList.toggle("on",s.dataset.t===tab));
};
function tabbar(view,tabs){
  return `<div class="tabs">${tabs.map((t,i)=>`<button class="tab ${i===0?'on':''}" data-t="${t[0]}" onclick="switchTab('${view}','${t[0]}')">${t[1]}</button>`).join("")}</div>`;
}

/* ---------- ARABIC ---------- */
function renderArabic(){
  const host=document.getElementById("v-arabic");
  const dueAr=dueCards(c=>c.id.startsWith("q")).length;
  host.innerHTML=`
    <div class="crumb">العربية</div>
    <h1>Arabic <span class="amp">·</span> Quran first, tongue second</h1>
    <p class="lede">Method: high-frequency vocabulary on a Leitner schedule (the ~80 words below cover a large share of Quranic tokens), unlimited generated sentences for output practice, and voice on everything. Comprehensible input + active recall + speaking aloud — the three methods that survive the research.</p>
    ${tabbar("arabic",[["rev","Review ("+dueAr+")"],["vocab","Vocabulary"],["sent","Sentence builder"],["quran","Quran phrases"],["speak","Speaking"],["gram","Grammar"]])}

    <div class="subview on" data-t="rev">
      <div class="card hl" style="margin-top:14px;text-align:center;padding:34px">
        <div class="ar-lg" style="text-align:center">رَبِّ زِدْنِي عِلْمًا</div>
        <p class="tr">rabbi zidnī ʿilmā — My Lord, increase me in knowledge</p>
        <p class="muted">${dueAr} Arabic card${dueAr===1?"":"s"} waiting. Five minutes, every day, forever.</p>
        <div class="rowbtns">
          <button class="btn" onclick="startReview('arabic')">Start Arabic review</button>
          <button class="btn ghost" onclick="startReview('all')">Review everything due</button>
        </div>
      </div>
    </div>

    <div class="subview" data-t="vocab">
      <p class="muted" style="margin-top:14px">Tap ▶ to hear any word. Sorted by Quranic frequency — learn top-down.</p>
      <div class="grid g3">
        ${QURANIC_VOCAB.map((w,i)=>{
          const st=S.srs["q"+i]; const box=st?st.b:0;
          return `<div class="card" style="padding:14px">
            <div style="display:flex;justify-content:space-between;align-items:flex-start">
              <div class="ar-md">${w.ar}</div>
              <button class="iconbtn" onclick="speakAr('${w.ar}')">▶</button>
            </div>
            <div class="tr">${esc(w.tr)}</div>
            <div style="font-size:13.5px">${esc(w.en)}</div>
            <div class="tiny" style="margin-top:5px">root ${esc(w.root)} · ≈${w.freq}× · ${esc(w.cat)}</div>
            <div class="boxdots" style="justify-content:flex-start;margin-top:7px">${[1,2,3,4,5].map(b=>`<i class="${box>=b?'on':''}"></i>`).join("")}</div>
          </div>`;}).join("")}
      </div>
    </div>

    <div class="subview" data-t="sent">
      <div class="card" style="margin-top:14px">
        <div class="tabs" id="sb-modes" style="margin:0 0 8px">
          <button class="tab on" onclick="setSbMode('ar2en',this)">Arabic → English</button>
          <button class="tab" onclick="setSbMode('en2ar',this)">English → Arabic (build)</button>
        </div>
        <div id="sb-host"></div>
        <hr class="sep">
        <div class="tiny" id="sb-stats"></div>
        <div class="tiny">Generated with real conjugation rules — past and present, gender agreement, VSO order with noun subjects. The supply never runs out.</div>
      </div>
    </div>

    <div class="subview" data-t="quran">
      <p class="muted" style="margin-top:14px">Read, listen, shadow. You already know most of these by ear — now own them by grammar.</p>
      ${QURAN_PHRASES.map(p=>`<div class="card" style="margin-top:10px">
        <div style="display:flex;justify-content:space-between;align-items:center;gap:10px">
          <div class="ar-md" style="flex:1">${p.ar}</div>
          <div style="display:flex;gap:6px"><button class="iconbtn" onclick="speakAr('${p.ar}')">▶</button><button class="iconbtn" onclick="speakSlow('${p.ar}')">🐢</button></div>
        </div>
        <div class="tr">${esc(p.tr)}</div>
        <div style="font-size:13.5px">${esc(p.en)} <span class="tiny">· ${esc(p.ref)}</span></div>
      </div>`).join("")}
    </div>

    <div class="subview" data-t="speak">
      <p class="muted" style="margin-top:14px">The shadowing loop: play → repeat aloud → play again → repeat at full speed. Out loud or it doesn't count.</p>
      ${SPOKEN_PHRASES.map(g=>`<div class="card" style="margin-top:12px"><h4>${esc(g.cat)}</h4>
        ${g.items.map(p=>`<div style="display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid rgba(42,48,64,.5)">
          <div style="flex:1"><span class="ar-md">${p.ar}</span><div class="tr" style="font-size:12.5px">${esc(p.tr)}</div><div class="tiny">${esc(p.en)}</div></div>
          <button class="iconbtn" onclick="speakAr('${p.ar}')">▶</button>
          <button class="iconbtn" onclick="speakSlow('${p.ar}')">🐢</button>
        </div>`).join("")}
      </div>`).join("")}
    </div>

    <div class="subview" data-t="gram">
      <p class="muted" style="margin-top:14px">Ten units. Read one, then go find it in a verse the same day — grammar sticks when it explains something you already met.</p>
      ${ARABIC_GRAMMAR.map(g=>`<div class="card" style="margin-top:10px">
        <h3>${esc(g.title)}</h3>
        <p class="muted" style="font-size:13.5px">${esc(g.core)}</p>
        ${ck("gram_"+g.id,"Studied and spotted in a real verse")}
      </div>`).join("")}
    </div>`;
  newSentence();
}

/* ---------- STEM ---------- */
function renderStem(){
  const host=document.getElementById("v-stem");
  host.innerHTML=`
    <div class="crumb">∂ / ∂t</div>
    <h1>Maths <span class="amp">&amp;</span> Engineering</h1>
    <p class="lede">Target: a First. Diagnosis: the formulation gap — you solve well but set up slowly. Fix is upstream: daily setup-only drills, roadmap phases in dependency order, and module-by-module honesty.</p>
    ${tabbar("stem",[["road","Maths roadmap"],["mods","Year 2 modules"],["drill","Formulation drills"],["final","Final year"]])}

    <div class="subview on" data-t="road">
      ${MATH_ROADMAP.map(p=>{
        const ids=p.items.map(i=>i.id); const pr=ckProgress(ids);
        return `<div class="card" style="margin-top:12px">
          <div style="display:flex;justify-content:space-between;align-items:center"><h3>${esc(p.phase)}</h3><span class="tiny">${Math.round(pr*100)}%</span></div>
          <div class="bar" style="margin-bottom:6px"><i style="width:${Math.round(pr*100)}%"></i></div>
          ${p.items.map(i=>ck(i.id,esc(i.t))).join("")}
          <div class="tiny" style="margin-top:8px">📚 ${esc(p.res)}</div>
        </div>`;}).join("")}
    </div>

    <div class="subview" data-t="mods">
      <p class="muted" style="margin-top:14px">2026/27 — six 20-credit modules. Set an honest status; the notes are your strategy per module.</p>
      ${YEAR2_MODULES.map(m=>`<div class="card" style="margin-top:12px">
        <div class="mod"><div class="cr">${m.cr}</div>
          <div style="flex:1">
            <h3>${esc(m.name)}</h3>
            <p class="muted" style="font-size:13px">${esc(m.note)}</p>
            <select class="status" onchange="setMod('${m.id}',this.value)">
              ${["Not started","In progress","Shaky","Solid","Exam-ready"].map(s=>`<option ${S.mods[m.id]===s?"selected":""}>${s}</option>`).join("")}
            </select>
          </div></div>
      </div>`).join("")}
    </div>

    <div class="subview" data-t="drill">
      <p class="muted" style="margin-top:14px">Rules: write the governing equations and boundary conditions on paper. Do NOT solve. Then reveal the model setup and self-grade without mercy. One per morning.</p>
      ${FORMULATION_DRILLS.map(d=>{
        const st=S.drill[d.id];
        return `<div class="card ${st==="got"?"":"hl"}" style="margin-top:12px">
          <div class="kicker">${esc(d.cat)} ${st==="got"?"· ✓ cleared":st==="redo"?"· needs redo":""}</div>
          <p style="font-size:14.5px">${esc(d.q)}</p>
          <details><summary>Hint</summary><div class="body">${esc(d.hint)}</div></details>
          <details><summary>Model setup</summary><div class="body">${esc(d.a)}</div>
            <div class="rowbtns" style="justify-content:flex-start">
              <button class="btn quiet small" onclick="gradeDrill('${d.id}',false)">Redo later</button>
              <button class="btn small" onclick="gradeDrill('${d.id}',true)">Nailed the setup</button>
            </div></details>
        </div>`;}).join("")}
    </div>

    <div class="subview" data-t="final">
      <div class="card" style="margin-top:14px"><h4>Core</h4>
        ${FINAL_YEAR.core.map(c=>`<div class="mod" style="padding:6px 0"><div class="cr">${c.cr}</div><div style="align-self:center">${esc(c.name)}</div></div>`).join("")}
      </div>
      <div class="card" style="margin-top:12px"><h4>Optional — select 40 credits</h4>
        <p class="muted" style="font-size:13px">${esc(FINAL_YEAR.optionalNote)}</p>
        ${FINAL_YEAR.optional.map(o=>`<div class="readli">${esc(o)}${/Optimisation|Economics/.test(o)?' <span class="tiny" style="color:var(--gold2)">★ quant signal</span>':""}</div>`).join("")}
      </div>
    </div>`;
}
window.setMod=(id,v)=>{ S.mods[id]=v; save(); xp(5,"module status updated"); };
window.gradeDrill=(id,ok)=>{ S.drill[id]=ok?"got":"redo"; save(); xp(ok?15:5, ok?"formulation drill cleared":"drill queued for redo"); renderStem(); switchTab('stem','drill'); };

/* ---------- CODE ---------- */
function renderCode(){
  const host=document.getElementById("v-code");
  host.innerHTML=`
    <div class="crumb">λ</div>
    <h1>Coding <span class="amp">·</span> Python → MATLAB → shipped projects</h1>
    <p class="lede">Finance-grounded Python first, MATLAB as a transfer (not a restart), then projects that live on GitHub where recruiters can see them.</p>
    ${tabbar("code",[["py","Python (10 lessons)"],["ml","MATLAB"],["proj","Projects"],["git","Git & GitHub"]])}

    <div class="subview on" data-t="py">
      ${CODING.python.lessons.map(l=>{
        const done=l.done||!!S.checks["py"+l.n];
        return `<div class="card ${done?"":""}" style="margin-top:10px">
          <div style="display:flex;gap:12px;align-items:flex-start">
            <div class="cr" style="font-family:var(--serif);font-size:20px;color:${done?"var(--green)":"var(--gold2)"};min-width:30px">${done?"✓":l.n}</div>
            <div style="flex:1">
              <h3 style="font-size:17px">Lesson ${l.n} — ${esc(l.title)}</h3>
              <div class="tiny">${l.topics.map(esc).join(" · ")}</div>
              <details><summary>Exercise</summary><div class="body">${esc(l.exercise)}</div></details>
              ${l.done?'<div class="tiny good" style="margin-top:6px">Completed ✓</div>':ck("py"+l.n,"Lesson complete (exercise done, not just read)")}
            </div>
          </div>
        </div>`;}).join("")}
    </div>

    <div class="subview" data-t="ml">
      <p class="muted" style="margin-top:14px">${esc(CODING.matlab.note)}</p>
      ${CODING.matlab.units.map(u=>`<div class="card" style="margin-top:10px">
        <h3 style="font-size:17px">${esc(u.title)}</h3>
        <p class="muted" style="font-size:13.5px">${esc(u.core)}</p>
        ${ck("ml_"+u.id,"Worked through with real code")}
      </div>`).join("")}
    </div>

    <div class="subview" data-t="proj">
      ${CODING.projects.map((p,pi)=>`<div class="card" style="margin-top:12px">
        <h3>${esc(p.title)}</h3>
        <p class="muted" style="font-size:13px">${esc(p.why)}</p>
        ${p.milestones.map((m,mi)=>ck(`proj${pi}_${mi}`,esc(m))).join("")}
      </div>`).join("")}
    </div>

    <div class="subview" data-t="git">
      ${CODING.git.units.map(u=>`<div class="card" style="margin-top:10px">
        <h3 style="font-size:17px">${esc(u.title)}</h3>
        <p class="muted" style="font-size:13.5px">${esc(u.core)}</p>
        ${ck("git_"+u.id,"Done in a real repo")}
      </div>`).join("")}
    </div>`;
}

/* ---------- POLYMATH ---------- */
function renderPoly(){
  const host=document.getElementById("v-poly");
  const doms=Object.keys(POLYMATH);
  host.innerHTML=`
    <div class="crumb">✦</div>
    <h1>Polymath <span class="amp">·</span> the jack-of-all-trades engine</h1>
    <p class="lede">Theme-first, question-driven — your way. Each unit: a driving question, a direct summary, two or three books. Every domain's flashcards feed the same daily review as your Arabic.</p>
    ${tabbar("poly",doms.map(d=>[d,d[0].toUpperCase()+d.slice(1)]))}
    ${doms.map((d,di)=>{
      const D=POLYMATH[d];
      return `<div class="subview ${di===0?"on":""}" data-t="${d}">
        <div class="card hl" style="margin-top:14px">
          <h4>The five questions</h4>
          ${D.questions.map(q=>`<div class="readli">“${esc(q)}”</div>`).join("")}
          <div class="rowbtns" style="justify-content:flex-start;margin-top:10px">
            <button class="btn ghost small" onclick="startReview('poly')">Review all polymath cards due</button>
          </div>
        </div>
        ${D.units.map(u=>`<div class="card" style="margin-top:12px">
          <div class="kicker">${esc(u.question||"")}</div>
          <h3>${esc(u.title)}</h3>
          <p class="muted" style="font-size:13.5px">${esc(u.core)}</p>
          <div class="tiny" style="margin:6px 0">Thinkers: ${u.thinkers.map(esc).join(", ")}</div>
          <details><summary>Reading</summary><div class="body">
            ${u.reading.map(r=>`<div class="readli"><b>${esc(r.title)}</b> — ${esc(r.author)}<div class="why">${esc(r.note)}</div></div>`).join("")}
          </div></details>
          ${ck("read_"+u.id,"Unit engaged (read + one page of notes)")}
        </div>`).join("")}
      </div>`;}).join("")}`;
}

/* ---------- LIFE ---------- */
function renderLife(){
  const host=document.getElementById("v-life");
  host.innerHTML=`
    <div class="crumb">☾</div>
    <h1>Life <span class="amp">·</span> the rest of the machine</h1>
    <p class="lede">Skills that compound quietly: driving, cooking, typing, career assets, and the discipline layer that protects everything else.</p>
    <div class="grid g2">
      ${LIFE_TRACK.map(s=>`<div class="card">
        <h3>${esc(s.title)}</h3>
        ${s.items.map(i=>ck(i.id,esc(i.t),i.done)).join("")}
      </div>`).join("")}
    </div>
    <div class="card" style="margin-top:14px">
      <h3>STAR story bank</h3>
      <p class="muted" style="font-size:13px">Situation → Task → Action → Result. Write them now; edit under no pressure; deliver them in interviews from memory.</p>
      ${STAR_PROMPTS.map((p,i)=>`<details style="margin-top:8px"><summary>${esc(p)}</summary>
        <div class="body"><textarea rows="4" placeholder="S / T / A / R…" onchange="saveStar(${i},this.value)">${esc(S.star[i]||"")}</textarea></div>
      </details>`).join("")}
    </div>`;
}
window.saveStar=(i,v)=>{ S.star[i]=v; save(); xp(8,"story banked"); };

/* ---------- Side + boot ---------- */
function paintSide(){
  document.getElementById("side-streak").textContent=streak();
  document.getElementById("side-level").textContent=level();
  document.getElementById("side-xp").textContent=S.xp+" XP";
  const due=dueCards().length;
  const pill=document.getElementById("due-pill");
  pill.style.display=due?"inline-block":"none"; pill.textContent=due;
}
function renderAll(){
  renderHome(); renderArabic(); renderStem(); renderCode(); renderPoly(); renderLife(); paintSide();
}
renderAll();
showView("home");
