// ===== ARABIC DATA — Quranic vocabulary, spoken track, grammar, sentence engine =====
// Frequencies are approximate occurrence counts in the Quran (root-based where noted).

const QURANIC_VOCAB = [
  {ar:"اللّٰه", tr:"Allāh", en:"God", root:"أ ل هـ", freq:2699, cat:"divine"},
  {ar:"رَبّ", tr:"rabb", en:"Lord, Sustainer", root:"ر ب ب", freq:975, cat:"divine"},
  {ar:"قَالَ", tr:"qāla", en:"he said", root:"ق و ل", freq:1722, cat:"verb"},
  {ar:"إِنَّ", tr:"inna", en:"indeed, truly", root:"—", freq:1682, cat:"particle"},
  {ar:"مِن", tr:"min", en:"from, of", root:"—", freq:3226, cat:"particle"},
  {ar:"فِي", tr:"fī", en:"in", root:"—", freq:1701, cat:"particle"},
  {ar:"عَلَى", tr:"ʿalā", en:"on, upon", root:"—", freq:1445, cat:"particle"},
  {ar:"إِلَى", tr:"ilā", en:"to, towards", root:"—", freq:742, cat:"particle"},
  {ar:"لَا", tr:"lā", en:"no, not", root:"—", freq:1809, cat:"particle"},
  {ar:"مَا", tr:"mā", en:"what; not", root:"—", freq:2153, cat:"particle"},
  {ar:"إِلَّا", tr:"illā", en:"except", root:"—", freq:664, cat:"particle"},
  {ar:"الَّذِينَ", tr:"alladhīna", en:"those who", root:"—", freq:1080, cat:"particle"},
  {ar:"هُوَ", tr:"huwa", en:"he, He", root:"—", freq:481, cat:"pronoun"},
  {ar:"كُلّ", tr:"kull", en:"every, all", root:"ك ل ل", freq:358, cat:"noun"},
  {ar:"شَيْء", tr:"shayʾ", en:"thing", root:"ش ي أ", freq:283, cat:"noun"},
  {ar:"أَرْض", tr:"arḍ", en:"earth, land", root:"أ ر ض", freq:461, cat:"noun"},
  {ar:"سَمَاء", tr:"samāʾ", en:"sky, heaven", root:"س م و", freq:310, cat:"noun"},
  {ar:"يَوْم", tr:"yawm", en:"day", root:"ي و م", freq:365, cat:"noun"},
  {ar:"قَوْم", tr:"qawm", en:"people, nation", root:"ق و م", freq:383, cat:"noun"},
  {ar:"نَاس", tr:"nās", en:"people, mankind", root:"ن و س", freq:241, cat:"noun"},
  {ar:"نَفْس", tr:"nafs", en:"soul, self", root:"ن ف س", freq:295, cat:"noun"},
  {ar:"قَلْب", tr:"qalb", en:"heart", root:"ق ل ب", freq:132, cat:"noun"},
  {ar:"كِتَاب", tr:"kitāb", en:"book, scripture", root:"ك ت ب", freq:230, cat:"noun"},
  {ar:"آيَة", tr:"āyah", en:"sign, verse", root:"أ ي ي", freq:382, cat:"noun"},
  {ar:"رَسُول", tr:"rasūl", en:"messenger", root:"ر س ل", freq:332, cat:"noun"},
  {ar:"نَبِيّ", tr:"nabiyy", en:"prophet", root:"ن ب أ", freq:75, cat:"noun"},
  {ar:"حَقّ", tr:"ḥaqq", en:"truth, right", root:"ح ق ق", freq:287, cat:"noun"},
  {ar:"خَيْر", tr:"khayr", en:"good, better", root:"خ ي ر", freq:196, cat:"noun"},
  {ar:"أَمْر", tr:"amr", en:"command, affair", root:"أ م ر", freq:166, cat:"noun"},
  {ar:"سَبِيل", tr:"sabīl", en:"path, way", root:"س ب ل", freq:176, cat:"noun"},
  {ar:"عَذَاب", tr:"ʿadhāb", en:"punishment", root:"ع ذ ب", freq:373, cat:"noun"},
  {ar:"جَنَّة", tr:"jannah", en:"garden, paradise", root:"ج ن ن", freq:147, cat:"noun"},
  {ar:"نَار", tr:"nār", en:"fire", root:"ن و ر", freq:145, cat:"noun"},
  {ar:"رَحْمَة", tr:"raḥmah", en:"mercy", root:"ر ح م", freq:339, cat:"noun"},
  {ar:"هُدًى", tr:"hudā", en:"guidance", root:"هـ د ي", freq:316, cat:"noun"},
  {ar:"عِلْم", tr:"ʿilm", en:"knowledge", root:"ع ل م", freq:854, cat:"noun"},
  {ar:"صَلَاة", tr:"ṣalāh", en:"prayer", root:"ص ل و", freq:99, cat:"noun"},
  {ar:"زَكَاة", tr:"zakāh", en:"purifying alms", root:"ز ك و", freq:32, cat:"noun"},
  {ar:"صَبْر", tr:"ṣabr", en:"patience, steadfastness", root:"ص ب ر", freq:103, cat:"noun"},
  {ar:"دُنْيَا", tr:"dunyā", en:"this world", root:"د ن و", freq:115, cat:"noun"},
  {ar:"آخِرَة", tr:"ākhirah", en:"the Hereafter", root:"أ خ ر", freq:115, cat:"noun"},
  {ar:"مَوْت", tr:"mawt", en:"death", root:"م و ت", freq:165, cat:"noun"},
  {ar:"حَيَاة", tr:"ḥayāh", en:"life", root:"ح ي ي", freq:184, cat:"noun"},
  {ar:"مَلَك", tr:"malak", en:"angel", root:"م ل ك", freq:88, cat:"noun"},
  {ar:"شَيْطَان", tr:"shayṭān", en:"satan, devil", root:"ش ط ن", freq:88, cat:"noun"},
  {ar:"عَبْد", tr:"ʿabd", en:"servant, slave (of God)", root:"ع ب د", freq:275, cat:"noun"},
  {ar:"آمَنَ", tr:"āmana", en:"to believe", root:"أ م ن", freq:537, cat:"verb"},
  {ar:"كَفَرَ", tr:"kafara", en:"to disbelieve, reject", root:"ك ف ر", freq:525, cat:"verb"},
  {ar:"عَمِلَ", tr:"ʿamila", en:"to do, act", root:"ع م ل", freq:360, cat:"verb"},
  {ar:"خَلَقَ", tr:"khalaqa", en:"to create", root:"خ ل ق", freq:261, cat:"verb"},
  {ar:"عَلِمَ", tr:"ʿalima", en:"to know", root:"ع ل م", freq:854, cat:"verb"},
  {ar:"جَعَلَ", tr:"jaʿala", en:"to make, place", root:"ج ع ل", freq:346, cat:"verb"},
  {ar:"ذَكَرَ", tr:"dhakara", en:"to remember, mention", root:"ذ ك ر", freq:292, cat:"verb"},
  {ar:"دَعَا", tr:"daʿā", en:"to call, invoke", root:"د ع و", freq:212, cat:"verb"},
  {ar:"غَفَرَ", tr:"ghafara", en:"to forgive", root:"غ ف ر", freq:234, cat:"verb"},
  {ar:"تَابَ", tr:"tāba", en:"to repent, turn back", root:"ت و ب", freq:87, cat:"verb"},
  {ar:"خَافَ", tr:"khāfa", en:"to fear", root:"خ و ف", freq:124, cat:"verb"},
  {ar:"سَمِعَ", tr:"samiʿa", en:"to hear", root:"س م ع", freq:185, cat:"verb"},
  {ar:"رَأَى", tr:"raʾā", en:"to see", root:"ر أ ي", freq:328, cat:"verb"},
  {ar:"جَاءَ", tr:"jāʾa", en:"to come", root:"ج ي أ", freq:278, cat:"verb"},
  {ar:"آتَى", tr:"ātā", en:"to give, grant", root:"أ ت ي", freq:274, cat:"verb"},
  {ar:"اتَّقَى", tr:"ittaqā", en:"to be mindful of God", root:"و ق ي", freq:258, cat:"verb"},
  {ar:"ظَلَمَ", tr:"ẓalama", en:"to wrong, oppress", root:"ظ ل م", freq:315, cat:"verb"},
  {ar:"كَذَّبَ", tr:"kadhdhaba", en:"to deny, call a lie", root:"ك ذ ب", freq:282, cat:"verb"},
  {ar:"نَزَّلَ", tr:"nazzala", en:"to send down (revelation)", root:"ن ز ل", freq:293, cat:"verb"},
  {ar:"هَدَى", tr:"hadā", en:"to guide", root:"هـ د ي", freq:316, cat:"verb"},
  {ar:"شَكَرَ", tr:"shakara", en:"to be grateful", root:"ش ك ر", freq:75, cat:"verb"},
  {ar:"عَبَدَ", tr:"ʿabada", en:"to worship", root:"ع ب د", freq:275, cat:"verb"},
  {ar:"قَبْل", tr:"qabla", en:"before", root:"ق ب ل", freq:242, cat:"particle"},
  {ar:"بَعْد", tr:"baʿda", en:"after", root:"ب ع د", freq:196, cat:"particle"},
  {ar:"عِنْد", tr:"ʿinda", en:"with, in the presence of", root:"ع ن د", freq:201, cat:"particle"},
  {ar:"بَيْن", tr:"bayna", en:"between", root:"ب ي ن", freq:266, cat:"particle"},
  {ar:"عَظِيم", tr:"ʿaẓīm", en:"great, tremendous", root:"ع ظ م", freq:107, cat:"adjective"},
  {ar:"عَلِيم", tr:"ʿalīm", en:"All-Knowing", root:"ع ل م", freq:140, cat:"divine"},
  {ar:"حَكِيم", tr:"ḥakīm", en:"All-Wise", root:"ح ك م", freq:97, cat:"divine"},
  {ar:"غَفُور", tr:"ghafūr", en:"Oft-Forgiving", root:"غ ف ر", freq:91, cat:"divine"},
  {ar:"رَحِيم", tr:"raḥīm", en:"Most Merciful", root:"ر ح م", freq:115, cat:"divine"},
  {ar:"قَدِير", tr:"qadīr", en:"All-Powerful", root:"ق د ر", freq:45, cat:"divine"},
  {ar:"سَمِيع", tr:"samīʿ", en:"All-Hearing", root:"س م ع", freq:45, cat:"divine"},
  {ar:"بَصِير", tr:"baṣīr", en:"All-Seeing", root:"ب ص ر", freq:42, cat:"divine"}
];

// Short, well-known Quranic phrases for reading + recitation practice.
const QURAN_PHRASES = [
  {ar:"بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ", tr:"bismi llāhi r-raḥmāni r-raḥīm", en:"In the name of God, the Most Gracious, the Most Merciful", ref:"1:1"},
  {ar:"الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ", tr:"al-ḥamdu li-llāhi rabbi l-ʿālamīn", en:"All praise belongs to God, Lord of the worlds", ref:"1:2"},
  {ar:"إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ", tr:"iyyāka naʿbudu wa-iyyāka nastaʿīn", en:"You alone we worship, and You alone we ask for help", ref:"1:5"},
  {ar:"اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ", tr:"ihdinā ṣ-ṣirāṭa l-mustaqīm", en:"Guide us on the straight path", ref:"1:6"},
  {ar:"قُلْ هُوَ اللَّهُ أَحَدٌ", tr:"qul huwa llāhu aḥad", en:"Say: He is God, the One", ref:"112:1"},
  {ar:"إِنَّ مَعَ الْعُسْرِ يُسْرًا", tr:"inna maʿa l-ʿusri yusrā", en:"Indeed, with hardship comes ease", ref:"94:6"},
  {ar:"وَاللَّهُ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ", tr:"wa-llāhu ʿalā kulli shayʾin qadīr", en:"And God has power over all things", ref:"2:284 (recurring)"},
  {ar:"رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً", tr:"rabbanā ātinā fī d-dunyā ḥasanah", en:"Our Lord, give us good in this world", ref:"2:201"},
  {ar:"إِنَّ اللَّهَ مَعَ الصَّابِرِينَ", tr:"inna llāha maʿa ṣ-ṣābirīn", en:"Indeed, God is with the patient", ref:"2:153"},
  {ar:"وَقُل رَّبِّ زِدْنِي عِلْمًا", tr:"wa-qul rabbi zidnī ʿilmā", en:"And say: My Lord, increase me in knowledge", ref:"20:114"},
  {ar:"فَاذْكُرُونِي أَذْكُرْكُمْ", tr:"fa-dhkurūnī adhkurkum", en:"So remember Me; I will remember you", ref:"2:152"},
  {ar:"لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ", tr:"lā ilāha illā huwa l-ḥayyu l-qayyūm", en:"There is no god but He, the Ever-Living, the Sustainer", ref:"2:255"},
  {ar:"وَمَا تَوْفِيقِي إِلَّا بِاللَّهِ", tr:"wa-mā tawfīqī illā bi-llāh", en:"My success is only through God", ref:"11:88"},
  {ar:"حَسْبُنَا اللَّهُ وَنِعْمَ الْوَكِيلُ", tr:"ḥasbunā llāhu wa-niʿma l-wakīl", en:"God is sufficient for us — an excellent Trustee", ref:"3:173"},
  {ar:"إِنَّا لِلَّهِ وَإِنَّا إِلَيْهِ رَاجِعُونَ", tr:"innā li-llāhi wa-innā ilayhi rājiʿūn", en:"Indeed we belong to God, and to Him we return", ref:"2:156"}
];

// Spoken MSA phrase track — say these aloud with the voice button, then shadow.
const SPOKEN_PHRASES = [
  {cat:"Greetings", items:[
    {ar:"السَّلامُ عَلَيْكُم", tr:"as-salāmu ʿalaykum", en:"Peace be upon you"},
    {ar:"وَعَلَيْكُمُ السَّلام", tr:"wa-ʿalaykumu s-salām", en:"And upon you be peace"},
    {ar:"صَباحُ الخَيْر", tr:"ṣabāḥu l-khayr", en:"Good morning"},
    {ar:"مَساءُ الخَيْر", tr:"masāʾu l-khayr", en:"Good evening"},
    {ar:"كَيْفَ حالُك؟", tr:"kayfa ḥāluk?", en:"How are you?"},
    {ar:"أَنا بِخَيْر، الحَمْدُ لِلّٰه", tr:"anā bi-khayr, al-ḥamdu lillāh", en:"I am well, praise God"},
    {ar:"مَعَ السَّلامَة", tr:"maʿa s-salāmah", en:"Goodbye (go with safety)"}
  ]},
  {cat:"Introducing yourself", items:[
    {ar:"اِسْمِي إِبْراهِيم", tr:"ismī Ibrāhīm", en:"My name is Ibrahim"},
    {ar:"أَنا مِنْ بِرِيطانِيا", tr:"anā min brīṭāniyā", en:"I am from Britain"},
    {ar:"أَنا طالِبُ هَنْدَسَة", tr:"anā ṭālibu handasah", en:"I am an engineering student"},
    {ar:"أَدْرُسُ في جامِعَة بِرْمِنْغْهام", tr:"adrusu fī jāmiʿat birmingham", en:"I study at the University of Birmingham"},
    {ar:"أَتَعَلَّمُ العَرَبِيَّة", tr:"ataʿallamu l-ʿarabiyyah", en:"I am learning Arabic"},
    {ar:"تَشَرَّفْنا", tr:"tasharrafnā", en:"Pleased to meet you"}
  ]},
  {cat:"Daily essentials", items:[
    {ar:"مِنْ فَضْلِك", tr:"min faḍlik", en:"Please"},
    {ar:"شُكْرًا جَزيلًا", tr:"shukran jazīlan", en:"Thank you very much"},
    {ar:"عَفْوًا", tr:"ʿafwan", en:"You're welcome / excuse me"},
    {ar:"نَعَمْ / لا", tr:"naʿam / lā", en:"Yes / No"},
    {ar:"لا أَفْهَم", tr:"lā afham", en:"I don't understand"},
    {ar:"هَلْ يُمْكِنُكَ أَنْ تُعِيدَ؟", tr:"hal yumkinuka an tuʿīd?", en:"Can you repeat?"},
    {ar:"تَكَلَّمْ بِبُطْء مِنْ فَضْلِك", tr:"takallam bi-buṭʾ min faḍlik", en:"Speak slowly, please"},
    {ar:"ماذا يَعْني هٰذا؟", tr:"mādhā yaʿnī hādhā?", en:"What does this mean?"},
    {ar:"كَمْ الثَّمَن؟", tr:"kam ath-thaman?", en:"How much is it?"},
    {ar:"أَيْنَ المَسْجِد؟", tr:"ayna l-masjid?", en:"Where is the mosque?"}
  ]},
  {cat:"Opinions & conversation", items:[
    {ar:"أَعْتَقِدُ أَنَّ...", tr:"aʿtaqidu anna...", en:"I believe that..."},
    {ar:"في رَأْيِي", tr:"fī raʾyī", en:"In my opinion"},
    {ar:"هٰذا صَحِيح", tr:"hādhā ṣaḥīḥ", en:"That is correct"},
    {ar:"لَسْتُ مُتَأَكِّدًا", tr:"lastu mutaʾakkidan", en:"I'm not sure"},
    {ar:"ما رَأْيُكَ؟", tr:"mā raʾyuka?", en:"What do you think?"},
    {ar:"هٰذا سُؤال مُمْتاز", tr:"hādhā suʾāl mumtāz", en:"That is an excellent question"}
  ]}
];

// Grammar curriculum — Quranic-first, spoken-reinforced.
const ARABIC_GRAMMAR = [
  {id:"g1", title:"The root system (جذر)", core:"Nearly every Arabic word grows from a 3-consonant root. k-t-b gives kitāb (book), kātib (writer), maktab (office), maktabah (library). Learn roots, not isolated words — one root unlocks a family. The vocab deck shows each word's root for exactly this reason."},
  {id:"g2", title:"Word types: ism, fiʿl, ḥarf", core:"Every Quranic word is one of three: ism (noun/adjective), fiʿl (verb), or ḥarf (particle). Particles like inna, min, ʿalā dominate the Quran by token count — master the particle deck first for the fastest comprehension gain."},
  {id:"g3", title:"Definiteness: al- and tanwīn", core:"al- makes a noun definite (al-kitāb, the book); tanwīn (-un/-an/-in) marks indefiniteness (kitābun, a book). Sun letters assimilate the l: ash-shams not al-shams. Moon letters keep it: al-qamar."},
  {id:"g4", title:"Gender and agreement", core:"Nouns are masculine or feminine (usually marked by ة). Adjectives and verbs agree: aṭ-ṭālibu l-jadīd (the new male student) vs aṭ-ṭālibatu l-jadīdah. The sentence builder enforces this — watch the verb change with a feminine subject."},
  {id:"g5", title:"Iḍāfah (possession)", core:"Two nouns side by side: kitābu llāhi = the Book of God. First noun never takes al-; second is genitive. The Quran is saturated with iḍāfah chains — rabbi l-ʿālamīn, yawmi d-dīn."},
  {id:"g6", title:"Attached pronouns", core:"Possession and objects attach as suffixes: kitābī (my book), kitābuka (your book), rabbunā (our Lord). Spot -hu/-hum/-ka/-nā endings in verses and comprehension jumps immediately."},
  {id:"g7", title:"The past verb (māḍī)", core:"Conjugated by suffix: katab-tu (I wrote), katab-ta (you wrote), katab-a (he wrote), katab-at (she wrote), katab-nā (we wrote), katab-ū (they wrote). The Quran's narratives are heavily māḍī: qāla, khalaqa, jaʿala."},
  {id:"g8", title:"The present verb (muḍāriʿ)", core:"Conjugated by prefix (+ suffix): a-ktubu (I write), ta-ktubu (you write), ya-ktubu (he writes), na-ktubu (we write), ya-ktubūna (they write). Divine actions in the Quran often use muḍāriʿ for ongoing truth: yaʿlamu, yarzuqu."},
  {id:"g9", title:"Prepositions + genitive", core:"After fī, min, ʿalā, ilā, bi-, li- the noun takes kasrah: fī l-arḍi, min as-samāʾi. Preposition + iḍāfah chains are the skeleton of most verses — parse them first."},
  {id:"g10", title:"Iʿrāb: case endings", core:"-u marks the subject (rafʿ), -a the object (naṣb), -i after prepositions/possession (jarr). You don't need full iʿrāb to read, but recognising who-did-what-to-whom from endings is what separates decoding from reading. Do the sentence builder daily; it drills exactly this."}
];

// ===== SENTENCE ENGINE — sound verbs only, so conjugation is fully regular =====
const SENT_VERBS = [
  {past:"كَتَب", pres:"كْتُب", tr:"katab", en:["wrote","writes","write"], obj:true},
  {past:"دَرَس", pres:"دْرُس", tr:"daras", en:["studied","studies","study"], obj:true},
  {past:"شَرِب", pres:"شْرَب", tr:"sharib", en:["drank","drinks","drink"], obj:true, drinkOnly:true},
  {past:"فَهِم", pres:"فْهَم", tr:"fahim", en:["understood","understands","understand"], obj:true},
  {past:"فَتَح", pres:"فْتَح", tr:"fataḥ", en:["opened","opens","open"], obj:true},
  {past:"حَمَل", pres:"حْمِل", tr:"ḥamal", en:["carried","carries","carry"], obj:true},
  {past:"سَمِع", pres:"سْمَع", tr:"samiʿ", en:["heard","hears","hear"], obj:true},
  {past:"طَلَب", pres:"طْلُب", tr:"ṭalab", en:["requested","requests","request"], obj:true},
  {past:"ذَهَب", pres:"ذْهَب", tr:"dhahab", en:["went","goes","go"], obj:false, prep:"إِلَى", prepEn:"to"},
  {past:"جَلَس", pres:"جْلِس", tr:"jalas", en:["sat","sits","sit"], obj:false, prep:"فِي", prepEn:"in"},
  {past:"سَكَن", pres:"سْكُن", tr:"sakan", en:["lived","lives","live"], obj:false, prep:"فِي", prepEn:"in", places:["the house","the city"]},
  {past:"عَمِل", pres:"عْمَل", tr:"ʿamil", en:["worked","works","work"], obj:false, prep:"فِي", prepEn:"in"},
  {past:"دَخَل", pres:"دْخُل", tr:"dakhal", en:["entered","enters","enter"], obj:false, prep:"إِلَى", prepEn:""}
];
const SENT_SUBJECTS = [
  {ar:"الطَّالِبُ", en:"the student", g:"m", third:true},
  {ar:"المُهَنْدِسُ", en:"the engineer", g:"m", third:true},
  {ar:"الوَلَدُ", en:"the boy", g:"m", third:true},
  {ar:"الرَّجُلُ", en:"the man", g:"m", third:true},
  {ar:"المُعَلِّمُ", en:"the teacher", g:"m", third:true},
  {ar:"الطَّالِبَةُ", en:"the (female) student", g:"f", third:true},
  {ar:"البِنْتُ", en:"the girl", g:"f", third:true},
  {ar:"المُعَلِّمَةُ", en:"the (female) teacher", g:"f", third:true},
  {ar:"أَنَا", en:"I", g:"m", pron:"ana"},
  {ar:"أَنْتَ", en:"you (m)", g:"m", pron:"anta"},
  {ar:"أَنْتِ", en:"you (f)", g:"f", pron:"anti"},
  {ar:"نَحْنُ", en:"we", g:"m", pron:"nahnu"},
  {ar:"هُمْ", en:"they", g:"m", pron:"hum"}
];
const SENT_OBJECTS = [
  {ar:"الكِتَابَ", en:"the book"},
  {ar:"الدَّرْسَ", en:"the lesson"},
  {ar:"القُرْآنَ", en:"the Quran"},
  {ar:"الرِّسَالَةَ", en:"the letter"},
  {ar:"القَهْوَةَ", en:"the coffee", drink:true},
  {ar:"الشَّايَ", en:"the tea", drink:true},
  {ar:"المَاءَ", en:"the water", drink:true},
  {ar:"البَابَ", en:"the door"},
  {ar:"الخَبَرَ", en:"the news"},
  {ar:"العِلْمَ", en:"knowledge"}
];
const SENT_PLACES = [
  {ar:"البَيْتِ", en:"the house"},
  {ar:"المَسْجِدِ", en:"the mosque"},
  {ar:"الجَامِعَةِ", en:"the university"},
  {ar:"المَكْتَبَةِ", en:"the library"},
  {ar:"السُّوقِ", en:"the market"},
  {ar:"المَدِينَةِ", en:"the city"}
];
