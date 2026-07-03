# Bayt al-Hikma — Ibrahim's Learning OS

One app for the whole machine: Quranic + spoken Arabic, the maths roadmap, Year 2 ChemEng modules, formulation drills, Python → MATLAB → GitHub projects, and a theme-first polymath track across philosophy, economics, politics and history. All progress lives in your browser (localStorage) and syncs nowhere — export a backup from the Today screen.

## Use it right now
Open `index.html` in any browser. Everything works, including voice and progress tracking.

## Install it on your phone (PWA)
1. Create a GitHub account repo called `bayt-al-hikma` (this doubles as your first Git rep — see Coding → Git).
2. Upload every file in this folder.
3. Repo Settings → Pages → deploy from branch `main`, root folder. Wait a minute.
4. Open `https://<your-username>.github.io/bayt-al-hikma/` on your phone.
5. iPhone: Share → **Add to Home Screen**. Android: Chrome menu → **Install app**.

It then launches full-screen like a native app and works offline. A real App Store listing needs an Apple developer account (£79/yr) and a wrapper like Capacitor — the PWA gives you the same daily experience for free.

## The method, briefly
- **Leitner spaced repetition** (5 boxes: now / 1 / 3 / 7 / 21 days) across Arabic vocab and all polymath flashcards.
- **Unlimited sentence generation** with a real conjugation engine — past/present, gender agreement, VSO — in both directions (translate and build-from-tiles).
- **Voice on everything Arabic** via your device's speech engine (normal + slow shadowing speed).
- **Formulation drills**: setup-only engineering problems targeting your diagnosed gap.
- **XP, streaks, levels** and honest mastery bars (mastered = box 4+, not "seen once").

## Files
`index.html` shell + styles · `app.js` logic · `data_arabic.js` vocab/phrases/grammar/sentence engine · `data_stem.js` roadmap/modules/drills/life · `content_polymath.js` humanities + coding curricula · `sw.js` + `manifest.webmanifest` + icons = PWA.
