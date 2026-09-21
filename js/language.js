/* ============================================================
   LANGUAGE.JS — EN / AR Full Translation & RTL Support
   The Colosseum — The Eternal Arena
   ============================================================ */

const translations = {
  en: {
    // Loading
    loadingTitle: "THE COLOSSEUM",
    loadingSubtitle: "Rome, Italy · The Eternal Arena",

    // Nav
    navHome: "Home",
    navHistory: "History",
    navArchitecture: "Architecture",
    nav3D: "3D Experience",
    navTimeline: "Timeline",
    navGladiators: "Gladiators",
    navHypogeum: "Hypogeum",
    navGallery: "Gallery",
    navVisit: "Visit & Tickets",
    navQuiz: "Quiz",
    navLocation: "Location",
    navFacts: "Facts",
    navMyth: "Myth vs. Fact",
    navSubtitle: "The Eternal Arena · Rome",
    searchBtnLabel: "Search (Ctrl+K)",
    soundToggleLabel: "Toggle Roman Arena Audio",

    // Soundscape
    soundTitle: "Roman Arena Soundscape",
    soundDesc: "Atmospheric ambient acoustics of the Flavian Amphitheatre",
    soundPlay: "Play Soundscape",
    soundMute: "Mute",

    // Search
    searchPlaceholder: "Search history, gladiators, tickets, architecture…",
    searchTitle: "Quick Search",
    searchClose: "Close",
    searchNoResults: "No matching historical records found.",

    // Hero
    heroEyebrow: "Rome, Italy · 72–80 CE · UNESCO World Heritage",
    heroMotto: "SENATVS POPVLVSQVE ROMANVS",
    heroTitlePrefix: "THE ETERNAL",
    heroTitleMain: "COLOSSEUM",
    heroSubtitle: "Anfiteatro Flavio · Roma Aeterna",
    heroQuote: "Where the stones of Rome still remember the roar of eighty thousand souls.",
    heroDesc: "The monumental heart of the Roman Empire — an elliptical wonder of travertine limestone and Roman concrete, commissioned by Emperor Vespasian, inaugurated by Titus, and enduring for two millennia as the supreme symbol of human ambition.",
    heroCTA1: "Explore the Monument",
    heroCTA2: "Enter 3D Arena",
    heroCTA3: "Plan Your Visit",
    heroBadge1: "72–80 CE",
    heroBadge1Label: "Construction",
    heroBadge2: "50,000+",
    heroBadge2Label: "Capacity",
    heroBadge3: "48 Metres",
    heroBadge3Label: "Original Height",
    heroBadge4: "80 Arches",
    heroBadge4Label: "Per Tier",

    // Introduction
    introLabel: "The Monument",
    introTitle: "The Sovereign Icon of Ancient Rome",
    introImageLabel: "Exterior · South Facade Arches",
    introText1: "The Colosseum — officially the Flavian Amphitheatre (Anfiteatro Flavio) — stands as the absolute zenith of Roman structural engineering. Commenced under Emperor Vespasian in 72 CE and inaugurated by his son Titus in 80 CE with a spectacle of one hundred days, it remains the largest amphitheatre ever erected on Earth.",
    introText2: "For over four centuries, this stadium captivated Rome with public munera (gladiatorial contests), venationes (wild animal hunts), dramatic executions, and grand mythological pageants. An engineering marvel, its tiered cavea seated between 50,000 and 80,000 citizens in strict social hierarchy.",
    statConstruction: "Construction Began",
    statCapacity: "Est. Spectator Capacity",
    statHeight: "Original Height",
    statLocation: "Rome, Italy 🇮🇹",

    // History
    historyLabel: "Through the Ages",
    historyTitle: "Two Thousand Years of Triumph & Ruin",
    historySubtitle: "From imperial triumph to world wonder",
    era1: "Construction",
    era2: "Inauguration",
    era3: "The Spectacles",
    era4: "Decline",
    era5: "Medieval Quarry",
    era6: "Modern Heritage",
    hist1Title: "The Flavian Vision Begins (72 CE)",
    hist1Text: "Emperor Vespasian financed the amphitheatre from the spoils of the Jewish War, deliberately draining Emperor Nero's private artificial lake at the Domus Aurea to return the land to the Roman people.",
    hist2Title: "Titus Opens the Arena (80 CE)",
    hist2Text: "Emperor Titus inaugurated the arena with 100 days of extravagant games. Ancient historian Cassius Dio recorded that 9,000 animals were slain, and simulated naval battles (naumachiae) were staged on a flooded arena floor.",
    hist3Title: "The Golden Age of Games (81–399 CE)",
    hist3Text: "Under Domitian, the underground hypogeum and fourth attic tier were completed. For three centuries, the Colosseum served as the stage where emperors demonstrated their benevolence and military power to the citizenry.",
    hist4Title: "Fire, Earthquake & Transition (217–523 CE)",
    hist4Text: "Devastating fires in 217 CE and major earthquakes in 443 and 484 CE damaged the superstructure. Gladiatorial games officially ceased by 404 CE, while animal hunts continued until 523 CE.",
    hist5Title: "Fortress, Quarry & Sanctuary (1200–1750 CE)",
    hist5Text: "The 1349 earthquake collapsed the south exterior wall. For centuries, fallen travertine and bronze clamps were salvaged to build Renaissance palaces, including Palazzo Venezia and St. Peter's Basilica, until Pope Benedict XIV consecrated it as holy ground in 1749.",
    hist6Title: "UNESCO Wonder of the World (1980–Present)",
    hist6Text: "Today, meticulously conserved through international restoration projects, the Colosseum welcomes over 7 million visitors annually. It was elected one of the New Seven Wonders of the World and stands as a global monument opposing capital punishment.",

    // Timeline
    timelineLabel: "Key Dates",
    timelineTitle: "Chronicle of the Eternal Arena",
    timelineSubtitle: "Milestones across twenty centuries of history",
    tl1Title: "Construction Begins",
    tl1Text: "Emperor Vespasian commissions the amphitheatre on the site of Nero's artificial lake.",
    tl2Title: "Grand Inauguration",
    tl2Text: "Titus inaugurates the Colosseum with 100 consecutive days of public games and festivals.",
    tl3Title: "Domitian's Additions",
    tl3Text: "Domitian completes the subterranean hypogeum network, lifts, and the fourth seating tier.",
    tl4Title: "Great Fire Damage",
    tl4Text: "Lightning strike ignites upper wooden structures; restoration spans decades under Macrinus and Severus Alexander.",
    tl5Title: "Gladiatorial Games End",
    tl5Text: "Emperor Honorius officially bans gladiatorial combat under growing Christian influence.",
    tl6Title: "Major Earthquakes",
    tl6Text: "Seismic shocks in 443, 484, and 508 CE crack the stone arches; the last recorded animal hunts take place.",
    tl7Title: "Great Collapse of 1349",
    tl7Text: "A cataclysmic earthquake collapses the entire southern outer facade, creating its iconic modern silhouette.",
    tl8Title: "Papal Consecration",
    tl8Text: "Pope Benedict XIV halts stone quarrying and consecrates the site in memory of early Christian martyrs.",
    tl9Title: "UNESCO World Heritage",
    tl9Text: "Inscribed as a UNESCO World Heritage site, recognized as a masterpiece of creative genius.",
    tl10Title: "Global Icon & Conservation",
    tl10Text: "Major 21st-century conservation uncovers the hypogeum corridors and restores the facade to pristine travertine glory.",

    // Architecture
    archLabel: "Structure & Engineering",
    archTitle: "Masterwork of Roman Engineering",
    archSubtitle: "An elliptical triumph of stone that redefined monumental architecture",
    archClickMsg: "Click the glowing hotspots on the diagram to explore structural components.",
    af1Name: "Travertine Limestone",
    af1Text: "Over 100,000 cubic metres of dense travertine limestone was quarried at Tibur (Tivoli) and transported along a purpose-built 20-mile road.",
    af2Name: "Elliptical Geometry",
    af2Text: "Measuring 188m by 156m, the oval geometry granted unobstructed viewing angles from every seat while eliminating blind corners in combat.",
    af3Name: "The Vomitoria Network",
    af3Text: "Eighty numbered arched entrances allowed up to 70,000 spectators to fill or evacuate the stadium in roughly 15 minutes without bottlenecking.",
    af4Name: "Roman Concrete & Vaults",
    af4Text: "Opus caementicium (volcanic pozzolana concrete) formed the lightweight annular barrel vaults supporting thousands of tons of upper seating.",
    af5Name: "Classical Architectural Orders",
    af5Text: "The facade features ascending classical column orders: robust Doric on Tier 1, elegant Ionic on Tier 2, ornate Corinthian on Tier 3, and Corinthian pilasters on Tier 4.",
    af6Name: "The Underground Hypogeum",
    af6Text: "A two-storey subterranean maze featuring 28 mechanical counterweight elevators that vaulted beasts and fighters directly into daylight.",

    // 3D Experience
    threeLabel: "Interactive Simulation",
    threeTitle: "3D Colosseum Arena",
    threeSubtitle: "Orbit · Zoom · Explore · Illuminate",
    threeLoading: "Constructing 3D stone geometry…",
    threeExterior: "Exterior Orbit",
    threeInterior: "Arena Floor",
    threeAerial: "Bird's Eye",
    threeEmperor: "Imperial Box",
    threeGladiator: "Gladiator Gate",
    threeReset: "Reset View",
    threeDragHint: "Drag to rotate · Scroll to zoom · Switch camera presets",
    lightingTitle: "Lighting",
    lightDay: "Daylight",
    lightDusk: "Golden Sunset",
    lightNight: "Torchlight Night",
    threeEcoOn: "Eco Mode: ON",
    threeEcoOff: "Eco Mode: OFF",

    // Then & Now
    thenNowLabel: "Past & Present",
    thenNowTitle: "Ancient Glory vs. Modern Wonder",
    thenNowSubtitle: "Drag the slider to compare imperial Rome with the present day",
    thenLabel: "Ancient Rome (80 CE)",
    nowLabel: "Modern Rome (Present)",

    // Gladiators
    gladiatorsLabel: "Warriors of the Arena",
    gladiatorsTitle: "Gladiatorial Classes & Culture",
    gladiatorsSubtitle: "Equipment, fighting styles, and tactical pairing in the sand",
    gladText: "Roman gladiators were elite martial athletes who lived and trained at specialized ludi under a lanista. Combat was governed by strict rules, overseen by umpires (summa rudis), and fought according to specialized class pairings designed for asymmetric dramatic balance.",
    gladHeavy: "Heavy Class",
    gladMedium: "Medium Class",
    gladLight: "Agile Class",
    gladEquip: "Armament & Armour",
    attrAttack: "Attack",
    attrDefense: "Defense",
    attrAgility: "Agility",
    attrFame: "Imperial Fame",

    // Gladiator 1: Murmillo
    murmilloName: "MURMILLO",
    murmilloDesc: "The fish-crested powerhouse. Armed with the massive Roman legionary scutum and short gladius, the Murmillo was designed to absorb heavy blows and advance relentlessly.",
    murmilloWeapons: "Cassis cristata (visored helmet with fish motif), Scutum (large rectangular shield), Gladius (short thrusting sword), Ocrea (left leg greave), Manica (right arm guard).",

    // Gladiator 2: Thraex
    thraexName: "THRAEX",
    thraexDesc: "The nimble Thracian fighter. Equipped with a distinctive curved sica blade engineered to hook behind an opponent's shield and strike exposed flanks.",
    thraexWeapons: "Galea with griffin crest, Sica (curved scythe sword), Parmula (small square shield), two high greaves (ocreae) extending to thighs, arm guard (manica).",

    // Gladiator 3: Retiarius
    retiariusName: "RETIARIUS",
    retiariusDesc: "The fisherman warrior. With zero helmet protection and bare chest, the Retiarius used superior agility to ensnare opponents in his weighted net before delivering lethal trident thrusts.",
    retiariusWeapons: "Rete (weighted fishing net), Tridens / Fuscina (three-pronged iron spear), Pugio (concealed iron dagger), Galerus (bronze shoulder guard protecting neck).",

    // Gladiator 4: Secutor
    secutorName: "SECUTOR",
    secutorDesc: "The Pursuer, created specifically to hunt down the nimble Retiarius. His completely smooth egg-shaped helmet prevented the Retiarius's net from snagging.",
    secutorWeapons: "Smooth egg-shaped visor helmet with narrow pinhole eye openings, Scutum curved shield, Gladius sword, padded greaves, leather arm wrapping.",

    // Hypogeum
    hypoLabel: "Subterranean Machinery",
    hypoTitle: "The Hypogeum: Theatre of Mechanisms",
    hypoSubtitle: "The mechanical labyrinth engineered beneath the sand",
    arenaView: "Arena Surface View",
    undergroundView: "Underground Network View",
    arenaViewLabel: "From Above",
    arenaViewTitle: "The Arena Floor (Harena)",
    arenaViewText: "The oval battleground measured 83m by 48m, consisting of wooden floorboards covered with yellow sand (harena in Latin) brought from the Tiber riverbank to absorb blood and provide sure footing. Dozens of hidden trapdoors opened simultaneously to release beasts into the sunlight.",
    undergroundLabel: "Beneath the Floor",
    undergroundTitle: "Labyrinth of Corridors & Winches",
    undergroundText: "Constructed by Emperor Domitian, the hypogeum was a complex two-storey network of 32 animal pens, service corridors, hydraulic drains, and 28 wooden counterweight lifts. Hundreds of enslaved stagehands worked in smoke and darkness to orchestrate awe-inspiring theatrical illusions.",
    portaPompa: "Porta Triumphalis (Pompae)",
    portaPompaText: "The ceremonial western portal through which emperors, magistrates, and gladiators entered in grand procession before the contest.",
    portaLib: "Porta Libitinaria",
    portaLibText: "Named after Libitina, goddess of funerals. Casualties and slain beasts were discreetly removed through this solemn southern exit.",
    trapDoors: "Hydraulic Trapdoors",
    trapDoorsText: "Counterweighted hinged trapdoors that sprang open in seconds, lifting lions, tigers, and elaborate stage sets into the center of the arena.",
    liftsTitle: "28 Mechanical Elevators",
    liftsText: "Operated by ropes, pulleys, and capstans manned by up to eight men per lift, capable of hoisting 300 kg cages directly to arena level.",
    cagesTitle: "Subterranean Beast Dens",
    cagesText: "Reinforced masonry holding cells for exotic predators shipped from North Africa, Germania, and the Near East.",
    sceneryTitle: "Theatrical Set Machinery",
    sceneryText: "Collapsible scenery platforms representing forests, rocky mountains, and mythological underworlds raised via pulleys.",

    // Gallery
    galleryLabel: "Visual Archive",
    galleryTitle: "Imperial Visual Archive",
    gallerySubtitle: "High-definition photography of stone, shadow, and two millennia of history",
    filterAll: "All Views",
    filterExterior: "Exterior",
    filterInterior: "Interior & Cavea",
    filterArchitecture: "Architecture",
    filterHistory: "Reconstructions",
    filterNight: "Night Illuminations",

    gal1: "Sunset over the Flavian Arcade",
    gal1Desc: "Golden twilight radiating through the three classical tiers of travertine arches.",
    gal2: "Travertine Arch Arcade Detail",
    gal2Desc: "Close examination of the Doric, Ionic, and Corinthian order engaged columns.",
    gal3: "Modern Colosseum & Roman Skyline",
    gal3Desc: "The monumental southern ruin standing resolute in the bustling modern city of Rome.",
    gal4: "Imperial Glory: Ancient Reconstruction",
    gal4Desc: "Historical visualization of the Colosseum in 80 CE crowned by the monumental Velarium awning.",
    gal5: "Night Illumination & Starry Sky",
    gal5Desc: "Amber lighting glowing through the subterranean arches beneath a clear Roman midnight sky.",
    gal6: "The Hypogeum Labyrinth",
    gal6Desc: "Sunlight piercing through the vaulted brick ruins of the subterranean service corridors.",
    gal7: "Classical Roman Arch Orders",
    gal7Desc: "A master study in Roman monumental masonry, crafted without mortar using bronze dowels.",
    gal8: "The Cavea & Arena Interior",
    gal8Desc: "Vast panoramic perspective from the upper tiers overlooking the exposed hypogeum floor.",

    // Visit & Tickets Planner
    visitLabel: "Plan Your Visit",
    visitTitle: "Visitor Guide & Ticket Calculator",
    visitSubtitle: "Practical information, seasonal schedules, and instant price estimation",
    liveStatusTitle: "Opening Status Today",
    liveStatusOpen: "OPEN TODAY",
    liveStatusHours: "08:30 – 19:15 CET (Last entry 18:15)",
    romeTimeLabel: "Rome Local Time",
    calcTitle: "Instant Ticket Price Calculator",
    calcSubtitle: "Select your visit tier and party size for instant pricing",
    ticketTierStandard: "Standard Ticket (Colosseum, Forum & Palatine)",
    ticketTierFull: "Full Experience (Includes Arena Floor & Hypogeum)",
    ticketTierNight: "Night VIP Tour (Exclusive After-Hours Access)",
    labelAdults: "Adults (25+ years)",
    labelEuYouth: "EU Citizens (18–25 years)",
    labelUnder18: "Under 18 / Disabled (Free)",
    calcTotal: "Estimated Total",
    bookOfficialBtn: "Official Booking on CoopCulture / Colosseo.it",
    rulesTitle: "Essential Visitor Rules",
    rule1: "Mandatory photo ID or passport required for entry matching ticket names.",
    rule2: "Strict security checkpoint: no large luggage, backpacks over 30L, or glass bottles.",
    rule3: "Wheelchair accessible ramps and modern elevators serve Tier 1 and Tier 2.",
    rule4: "Best viewing light: early morning (08:30) or golden hour before sunset.",

    // Interactive Quiz
    quizLabel: "Knowledge Challenge",
    quizTitle: "The Roman Colosseum Quiz",
    quizSubtitle: "Test your knowledge of ancient history and earn your imperial rank",
    quizQuestionPrefix: "Question",
    quizOf: "of",
    quizScoreLabel: "Your Score",
    quizBtnSubmit: "Confirm Answer",
    quizBtnNext: "Next Question",
    quizBtnRestart: "Retake Challenge",
    rankGladiator: "Gladiator Recruit (Keep studying the arena!)",
    rankCenturion: "Roman Centurion (Well versed in Roman culture!)",
    rankSenator: "Roman Senator (Master of Imperial history!)",
    rankEmperor: "Imperial Caesar (Absolute mastery of the Colosseum!)",

    // Quiz Questions
    q1Title: "What was the Colosseum originally called in ancient Rome?",
    q1_optA: "The Flavian Amphitheatre (Amphitheatrum Flavium)",
    q1_optB: "The Nero Circus",
    q1_optC: "The Great Stadium of Rome",
    q1_optD: "The Imperial Arena",
    q1_expl: "Correct! Built during the Flavian Dynasty (Vespasian, Titus, Domitian), it was officially called the Amphitheatrum Flavium. The name 'Colosseum' came centuries later from the colossal statue of Nero nearby.",

    q2Title: "What was the purpose of the 80 numbered arched entrances (Vomitoria)?",
    q2_optA: "To confuse invading armies",
    q2_optB: "To fill or evacuate 70,000 spectators in just 15 minutes",
    q2_optC: "To separate different social classes into separate buildings",
    q2_optD: "To house soldiers and gladiators",
    q2_expl: "Correct! The vomitoria were an engineering marvel designed for rapid egress, evacuating tens of thousands of citizens in roughly 15 minutes.",

    q3Title: "Which gladiator class fought with a weighted net and a trident?",
    q3_optA: "Murmillo",
    q3_optB: "Secutor",
    q3_optC: "Retiarius",
    q3_optD: "Thraex",
    q3_expl: "Correct! The Retiarius (meaning 'net-man') fought unarmoured with a weighted net (rete) and trident (tridens), relying entirely on agility.",

    q4Title: "What was the massive canvas awning deployed to shield spectators from the sun?",
    q4_optA: "Velarium",
    q4_optB: "Tessera",
    q4_optC: "Spina",
    q4_optD: "Palatium",
    q4_expl: "Correct! The Velarium was an enormous fabric sun-shield operated by a special detachment of imperial Roman sailors stationed on the top masts.",

    q5Title: "Why does the south outer wall of the Colosseum look collapsed today?",
    q5_optA: "A major earthquake in 1349 CE caused the catastrophic collapse",
    q5_optB: "It was intentionally bombarded during modern wars",
    q5_optC: "It was never finished by Emperor Titus",
    q5_optD: "Flooding of the Tiber River eroded the foundation",
    q5_expl: "Correct! The cataclysmic 1349 earthquake fractured the outer limestone arcade where the ground beneath was soft river sediment, causing the south wall to collapse.",

    // Rome Map & Location
    romeLabel: "In the Heart of Rome",
    romeTitle: "The Archaeological Epicentre",
    romeSubtitle: "Surrounded by two millennia of imperial monuments",
    romeText: "The Colosseum occupies the central archaeological basin of Rome, bordered by the Roman Forum to the northwest, the Palatine Hill to the southwest, and the monumental Arch of Constantine just paces from its southern gates.",
    lm1: "Roman Forum (Foro Romano)",
    lm2: "Palatine Hill (Colle Palatino)",
    lm3: "Arch of Constantine (Arco di Costantino)",
    lm4: "Circus Maximus (Circo Massimo)",
    lm5: "Trevi Fountain (Fontana di Trevi)",
    lm6: "Pantheon of Agrippa",
    locationLabel: "Coordinates & Transit",
    locationTitle: "Locate the Colosseum",
    locAddress: "Address",
    locCoords: "Coordinates",
    locTransport: "Public Transit",
    locCTA: "Open in Google Maps",

    // Facts
    factsLabel: "Did You Know",
    factsTitle: "Fascinating Imperial Realities",
    fact1Title: "One of the New Seven Wonders",
    fact1Text: "Elected to the New Seven Wonders of the World in 2007 by over 100 million global votes, standing alongside the Great Wall of China and Petra.",
    fact2Title: "Record-Breaking Evacuation",
    fact2Text: "With 80 numbered arches and concentric perimeter corridors, the Colosseum could empty its 70,000 spectators in just 15 minutes, inspiring modern stadium engineering.",
    fact3Title: "Ancient Naval Battles (Naumachiae)",
    fact3Text: "Under Titus, the arena could be flooded via aqueducts within hours to stage mock naval clashes with flat-bottomed warships before the hypogeum was built.",
    fact4Title: "Renaissance Marble Quarry",
    fact4Text: "Following medieval earthquakes, thousands of tons of fallen travertine were carted away to build St. Peter's Basilica, Palazzo Barberini, and Roman river embankments.",
    fact5Title: "Unique Botanical Sanctuary",
    fact5Text: "Botanists catalogued over 420 exotic plant species thriving within the microclimate of the Colosseum ruins, many carried as seeds in wild animal fodder.",
    fact6Title: "Global Beacon Against the Death Penalty",
    fact6Text: "Since 1999, Rome switches the Colosseum's night illumination from white to glowing gold whenever any country abolishes capital punishment.",

    // Myth vs Fact
    mythLabel: "Historical Truth",
    mythTitle: "Myth vs. Historical Reality",
    mythSubtitle: "Click each card to flip and discover the documented truth",
    mythTag: "Popular Myth",
    factTag: "Historical Reality",
    flipHint: "Click card to flip",
    myth1: '"Every single gladiatorial bout ended in the bloody death of the loser."',
    fact1m: '"Mortality rates were around 10–20%; highly trained fighters were valuable."',
    fact1detail: "Gladiators represented enormous investments by school managers (lanistae). Combat was strictly refereed; defeated gladiators who fought bravely were routinely granted missio (reprieve) by the audience and games organizer.",
    myth2: '"The ancient Romans called the amphitheatre \'The Colosseum\'."',
    fact2m: '"Romans called it the Amphitheatrum Flavium for centuries."',
    fact2detail: "The name 'Colosseo' only appeared in the Middle Ages, referencing the nearby 'Colossus of Nero' — a 30-metre bronze statue of Emperor Nero that stood adjacent to the arena.",
    myth3: '"Masses of Christian martyrs were systematically executed inside the Colosseum."',
    fact3m: '"Ancient Roman records indicate Circus Maximus and Circus of Nero were the primary sites."',
    fact3detail: "While Christians were persecuted in Rome, direct historical records of mass martyrdom specifically inside the Colosseum are scarce. The association solidified in the 18th century when Pope Benedict XIV consecrated it as a sacred memorial.",
    myth4: '"All gladiators were enslaved convicts forced to fight against their will."',
    fact4m: '"Many were free Roman citizens (auctorati) who volunteered for wealth and fame."',
    fact4detail: "By the 1st century CE, an estimated 20% or more of gladiators were free volunteers who signed formal contracts for sign-on bonuses, celebrity status, and lucrative purse earnings.",

    // Architectural Details
    detailsLabel: "Stone by Stone",
    detailsTitle: "Architectural Elements in Stone",
    detailsSubtitle: "Master craftsmanship enduring twenty centuries",
    det1: "The Tiered Arches",
    det1d: "80 arcades per level · Doric, Ionic, and Corinthian classical orders.",
    det2: "Opus Caementicium Vaults",
    det2d: "Lightweight volcanic pozzolana concrete barrel and groin vaults.",
    det3: "Travertine Masonry",
    det3d: "100,000 m³ quarried at Tivoli, clamped with 300 tons of iron.",
    det4: "Engaged Columns",
    det4d: "Structural pilasters distributing massive weight down into bedrock.",
    det5: "Vaulted Staircases & Corridors",
    det5d: "Interlocking annular corridors routing thousands of citizens swiftly.",
    det6: "Elliptical Silhouette",
    det6d: "188m × 156m · The grandest amphitheatre ever built by human hands.",

    // Footer
    footerTagline: '"Where history speaks through stone. Explore, discover, and remember ancient Rome."',
    footerExplore: "Explore Sections",
    footerDiscover: "Discovery",
    footerSources: "Official Sources",
    footerCopyright: "© 2026 The Colosseum — The Eternal Arena. Educational and cultural historical guide.",
    backToTop: "Return to Top"
  },

  ar: {
    // Loading
    loadingTitle: "الكولوسيوم",
    loadingSubtitle: "روما، إيطاليا · الساحة الأبدية",

    // Nav
    navHome: "الرئيسية",
    navHistory: "التاريخ",
    navArchitecture: "العمارة",
    nav3D: "التجربة ثلاثية الأبعاد",
    navTimeline: "الجدول الزمني",
    navGladiators: "المصارعون",
    navHypogeum: "الهايبوجيوم",
    navGallery: "المعرض",
    navVisit: "الزيارة والتذاكر",
    navQuiz: "اختبار المعلومات",
    navLocation: "الموقع",
    navFacts: "حقائق",
    navMyth: "الأسطورة والحقيقة",
    navSubtitle: "الساحة الأبدية · روما",
    searchBtnLabel: "بحث (Ctrl+K)",
    soundToggleLabel: "صوت الساحة الرومانية",

    // Soundscape
    soundTitle: "المؤثرات الصوتية لساحة الكولوسيوم",
    soundDesc: "أجواء صوتية بيئية تحاكي صدى الساحة الرومانية العظيمة",
    soundPlay: "تشغيل الأجواء الصوتية",
    soundMute: "كتم الصوت",

    // Search
    searchPlaceholder: "ابحث في التاريخ، المصارعين، التذاكر، العمارة…",
    searchTitle: "البحث السريع",
    searchClose: "إغلاق",
    searchNoResults: "لم يتم العثور على نتائج مطابقة في السجلات التاريخية.",

    // Hero
    heroEyebrow: "روما، إيطاليا · ٧٢–٨٠ م · موقع تراث عالمي لليونسكو",
    heroMotto: "SENATVS POPVLVSQVE ROMANVS · مجلس شيوخ وشعب روما",
    heroTitlePrefix: "الساحة الأبدية",
    heroTitleMain: "الكولوسيوم",
    heroSubtitle: "الأمفيتياتر الفلافي · روما الخالدة",
    heroQuote: "حيث لا تزال حجارة روما العتيقة تتذكر هدير ثمانين ألف حنجرة تصدح عبر التاريخ.",
    heroDesc: "القلب النابض للإمبراطورية الرومانية — أعجوبة بيضاوية مشيدة من حجر الترافرتين الجيري والخرسانة الرومانية. بدأ بناءه الإمبراطور فيسبازيان، وافتتحه ابنه تيتوس، ليظل لألفي عام الرمز الأسمى للطموح البشري.",
    heroCTA1: "استكشف المعلم العظيم",
    heroCTA2: "ادخل ساحة 3D",
    heroCTA3: "خطط لزيارتك الآن",
    heroBadge1: "٧٢–٨٠ م",
    heroBadge1Label: "فترة البناء",
    heroBadge2: "+٥٠٬٠٠٠",
    heroBadge2Label: "السعة الجماهيرية",
    heroBadge3: "٤٨ متراً",
    heroBadge3Label: "الارتفاع الأصلي",
    heroBadge4: "٨٠ قوساً",
    heroBadge4Label: "لكل طابق",

    // Introduction
    introLabel: "المعلم الخالد",
    introTitle: "رمز روما القديمة وسيد الآثار في العالم",
    introImageLabel: "أقواس الواجهة الجنوبية لحجر الترافرتين",
    introText1: "الكولوسيوم — المعروف تاريخياً باسم المدرج الفلافي (Amphitheatrum Flavium) — يمثل ذروة الإعجاز الهندسي الروماني في العالم القديم. أطلق الإمبراطور فيسبازيان مشروع بنائه عام ٧٢ م، وافتتحه ابنه الإمبراطور تيتوس عام ٨٠ م باحتفالات أسطورية امتدت مائة يوم متواصلة، ليبقى حتى اليوم أضخم مدرج بيضاوي شيد في تاريخ البشرية.",
    introText2: "على مدى أكثر من أربعة قرون، كان هذا الصرح مسرحاً للألعاب الكبرى: مباريات المصارعين (munera)، ومطاردات الوحوش المفترسة (venationes)، والعروض المسرحية. وكان نظام المقاعد المتدرجة يستوعب ما بين ٥٠٬٠٠٠ إلى ٨٠٬٠٠٠ متفرج جالسين وفق تسلسل هرمي اجتماعي دقيق يجسد نسيج المجتمع الروماني.",
    statConstruction: "بدء البناء",
    statCapacity: "السعة الاستيعابية التقديرية",
    statHeight: "الارتفاع الأصلي",
    statLocation: "روما، إيطاليا 🇮🇹",

    // History
    historyLabel: "عبر العصور",
    historyTitle: "ألفا عام من المجد والدمار والتخليد",
    historySubtitle: "من انتصارات الأباطرة إلى إحدى عجائب الدنيا",
    era1: "مرحلة التشييد",
    era2: "حفل الافتتاح",
    era3: "عصر الألعاب",
    era4: "الانحدار والزلازل",
    era5: "مقلع العصور الوسطى",
    era6: "التراث العالمي",
    hist1Title: "بداية الرؤية الفلافية (٧٢ م)",
    hist1Text: "موّل الإمبراطور فيسبازيان المشروع من غنائم حرب اليهود، وقام بتجفيف البحيرة الاصطناعية لقصور الإمبراطور نيرون ليعيد الأرض العامة لشعب روما.",
    hist2Title: "تيتوس يفتتح الساحة (٨٠ م)",
    hist2Text: "افتتح تيتوس الكولوسيوم بـ ١٠٠ يوم من الألعاب الخارقة. يروي المؤرخ كاسيوس ديو التضحية بـ ٩٠٠٠ حيوان مفترس وإغراق الساحة لخوض معارك بحرية حقيقية.",
    hist3Title: "عصر الاستعراضات الذهبي (٨١–٣٩٩ م)",
    hist3Text: "في عهد دوميتيان استُكملت شبكة الهايبوجيوم تحت الأرض والطابق الرابع. كان الكولوسيوم أداة الإمبراطور السياسية الأولى لكسب ود الشعب.",
    hist4Title: "الحرائق والزلازل والتحول (٢١٧–٥٢٣ م)",
    hist4Text: "تعرض الكولوسيوم لصواعق وحرائق عام ٢١٧ م ولزلازل مدمرة في ٤٤٣ م. توقفت معارك المصارعين بحلول ٤٠٤ م، واستمر صيد الحيوانات حتى ٥٢٣ م.",
    hist5Title: "القلعة والمقلع الحجري (١٢٠٠–١٧٥٠ م)",
    hist5Text: "أسقط زلزال ١٣٤٩ الجدار الخارجي الجنوبي. واستُخدمت أحجاره الترافرتينية لقرون في تشييد قصور عصر النهضة وكنيسة القديس بطرس حتى قدسه البابا عام ١٧٤٩.",
    hist6Title: "أعجوبة الدنيا والتراث العالمي (١٩٨٠–اليوم)",
    hist6Text: "يستقبل الكولوسيوم اليوم أكثر من ٧ ملايين زائر سنوياً بعد ترميم شبكة الهايبوجيوم، وصُنّف كأحد عجائب الدنيا السبع الجديدة ورمزاً عالمياً لمناهضة عقوبة الإعدام.",

    // Timeline
    timelineLabel: "أبرز المحطات",
    timelineTitle: "السجل الزمني للساحة الأبدية",
    timelineSubtitle: "محطات فاصلة عبر عشرين قرناً من الزمان",
    tl1Title: "بدء أعمال البناء",
    tl1Text: "أمر الإمبراطور فيسبازيان ببناء الصرح على أرض بحيرة نيرون المجففة في قلب روما.",
    tl2Title: "الافتتاح الإمبراطوري المهيب",
    tl2Text: "الإمبراطور تيتوس يفتتح المدرج بمائة يوم متواصلة من المهرجانات والألعاب العامة.",
    tl3Title: "إضافات دوميتيان الهندسية",
    tl3Text: "دوميتيان يكمل شبكة الهايبوجيوم والمصاعد السفلية تحت الأرض والطابق العلوي الرابع.",
    tl4Title: "حريق روما العظيم والترميم",
    tl4Text: "صاعقة رعدية تشعل مقاعد الخشب العلوية، واستمرت أعمال إعادة الإعمار لعقود متتالية.",
    tl5Title: "نهاية عصر مباريات المصارعة",
    tl5Text: "الإمبراطور هونوريوس يحظر قتال المصارعين نهائياً تحت تأثير انتشار المسيحية.",
    tl6Title: "سلسلة الزلازل المدمرة",
    tl6Text: "زلازل متتالية تصدع الأقواس الحجرية الضخمة، وسُجلت آخر عروض صيد الحيوانات عام ٥٢٣ م.",
    tl7Title: "انهيار الجدار الجنوبي الكبير",
    tl7Text: "زلزال عام ١٣٤٩ الهائل يسقط الواجهة الخارجية الجنوبية ليمنح المبنى شكله الشهير الحالي.",
    tl8Title: "التقديس البابوي وحماية الحجارة",
    tl8Text: "البابا بنديكتوس الرابع عشر يعلن الكولوسيوم مكاناً مقدساً ويوقف نهب أحجاره للأبد.",
    tl9Title: "موقع تراث عالمي لليونسكو",
    tl9Text: "إدراج الكولوسيوم ومركز روما الأثري في قائمة التراث الإنساني العالمي لليونسكو.",
    tl10Title: "رمز عالمي ومشاريع الترميم الحديثة",
    tl10Text: "إطلاق مشاريع ترميم حديثة كبرى فتحت سراديب الهايبوجيوم ونظفت حجارة الترافرتين التاريخية.",

    // Architecture
    archLabel: "الهيكل والإعجاز المعماري",
    archTitle: "تحفة الهندسة الرومانية المعجزة",
    archSubtitle: "بيضوية حجرية خالدة أعادت تعريف الطموح المعماري للإنسانية",
    archClickMsg: "انقر على النقاط الذهبية التفاعلية في المخطط لاستكشاف تفاصيل البناء.",
    af1Name: "حجر الترافرتين الجيري",
    af1Text: "استُخرج أكثر من ١٠٠٬٠٠٠ متر مكعب من حجر الترافرتين الصلب من مقالع تيفولي وجرى نقلها عبر طريق خاص طوله ٢٠ ميلاً.",
    af2Name: "الهندسة البيضاوية الفريدة",
    af2Text: "بأبعاد ١٨٨ م × ١٥٦ م، أمّن التصميم البيضاوي رؤية بانورامية واضحة للجميع ومنع المقاتلين من الاحتماء بالزوايا الميتة.",
    af3Name: "شبكة المداخل السريعة (Vomitoria)",
    af3Text: "٨٠ مدخلاً وقوساً مرقماً أتاحت إخلاء ما يقارب ٧٠٬٠٠٠ متفرج في ١٥ دقيقة فقط دون تدافع، وهو إعجاز يدرسه مهندسو الملاعب حتى اليوم.",
    af4Name: "الخرسانة الرومانية والأقبية",
    af4Text: "صُنعت الخرسانة الرومانية من رماد بوزولانا البركاني فائق الصلابة لإنشاء أقبية برميلية خفيفة تحمل آلاف الأطنان من المدرجات العلوية.",
    af5Name: "الأعمدة الكلاسيكية المتدرجة",
    af5Text: "تتدرج أنماط الأعمدة جمالياً: النظام الدوري الرصين في الطابق الأول، الأيوني الأنيق في الثاني، والكورنثي المزخرف في الثالث والرابع.",
    af6Name: "الهايبوجيوم تحت الساحة",
    af6Text: "متاهة جوفية من طابقين تضم ٢٨ مصعداً ميكانيكياً ترفع الوحوش والمقاتلين فجأة إلى ضوء الشمس عبر أبواب سرية مخفية تحت الرمال.",

    // 3D Experience
    threeLabel: "المحاكاة التفاعلية",
    threeTitle: "تجربة الكولوسيوم ثلاثية الأبعاد",
    threeSubtitle: "تدوير · تكبير · استكشاف · إضاءة",
    threeLoading: "جارٍ بناء مجسم الحجارة ثلاثي الأبعاد…",
    threeExterior: "المدار الخارجي",
    threeInterior: "أرضية الساحة",
    threeAerial: "عين الطائر",
    threeEmperor: "المقصورة الإمبراطورية",
    threeGladiator: "بوابة المصارعين",
    threeReset: "إعادة الضبط",
    threeDragHint: "اسحب للتدوير · حرّك العجلة للتكبير · بدّل زوايا الكاميرا",
    lightingTitle: "الإضاءة",
    lightDay: "ضوء النهار",
    lightDusk: "غروب ذهبي",
    lightNight: "شعلات ليلية",
    threeEcoOn: "وضع توفير الطاقة: مفعّل",
    threeEcoOff: "وضع توفير الطاقة: معطل",

    // Then & Now
    thenNowLabel: "الماضي والحاضر",
    thenNowTitle: "مجد روما القديمة مقابل الحاضر",
    thenNowSubtitle: "اسحب الفاصل لمقارنة الكولوسيوم قديماً بوضعه اليوم في روما المعاصرة",
    thenLabel: "روما القديمة (٨٠ م)",
    nowLabel: "روما المعاصرة (اليوم)",

    // Gladiators
    gladiatorsLabel: "فرسان الحلبة",
    gladiatorsTitle: "فئات وثقافة المصارعين",
    gladiatorsSubtitle: "العتاد، أساليب النزال، والمبارزات غير المتناظرة في الرمال",
    gladText: "لم يكن مصارعو روما مجرد سجناء، بل رياضيين محترفين تدربوا في مدارس متخصصة (Ludi) تحت إشراف مدربين محترفين. خضعت المعارك لقواعد صارمة بحضور حكام، وكانت الثنائيات مصممة بتفاوت تكتيكي مدروس ومثير للجماهير.",
    gladHeavy: "الفئة الثقيلة",
    gladMedium: "الفئة المتوسطة",
    gladLight: "الفئة الرشيقة",
    gladEquip: "السلاح والدروع",
    attrAttack: "الهجوم",
    attrDefense: "الدفاع",
    attrAgility: "الرشاقة",
    attrFame: "المجد الإمبراطوري",

    // Gladiator 1: Murmillo
    murmilloName: "مورميلو (MURMILLO)",
    murmilloDesc: "المقاتل المدرع برمز السمكة. متسلح بدرع الفيلق الروماني المستطيل الضخم وسيف الجلاديوس القصير، يتقدم بثبات لامتصاص الضربات وسحق الخصم.",
    murmilloWeapons: "خوذة كاسيس ذات عرف سمكة، درع سكوتوم مستطيل كبير، سيف جلاديوس، واقي ساق معدني (أوكريا)، وواقي ذراع مصفح (مانيكا).",

    // Gladiator 2: Thraex
    thraexName: "ثراكس (THRAEX)",
    thraexDesc: "المقاتل التراقي السريع والمباغت. مسلح بسيف السيكا المقوس الشهير القادر على الالتفاف خلف درع الخصم وطعن النقاط المكشوفة.",
    thraexWeapons: "خوذة بتاج غريفين الأسطوري، سيف سيكا مقوس، درع بارمولا مربع صغير، واقيا ساقين طويلان حتى الفخذين، وواقي ذراع جلدي مدرع.",

    // Gladiator 3: Retiarius
    retiariusName: "ريتياريوس (RETIARIUS)",
    retiariusDesc: "مقاتل الشبكة والصياد. دون خوذة أو درع صدر، يعتمد كلياً على سرعته وخفة حركته لمحاصرة خصمه بالشبكة المثقلة ثم طعنه بالرمح الثلاثي الفتاك.",
    retiariusWeapons: "شبكة صيد مثقلة بالرصاص (ريتي)، رمح ثلاثي الشعب فولاذي (تريدنس)، خنجر مخفي (بوجيو)، وواقي كتف برونزي مرتفع (غاليروس).",

    // Gladiator 4: Secutor
    secutorName: "سيكوتور (SECUTOR)",
    secutorDesc: "المطارد، صُمم خصيصاً لمواجهة الريتياريوس. خوذته الملساء البيضاوية صُممت بدقة لمنع شبكة الصياد من الاشتباك بها أو سحبها.",
    secutorWeapons: "خوذة بيضاوية ملساء بثقبين ضيقين للعينين، درع سكوتوم مقوس، سيف جلاديوس، لفائف جلدية حامية وواقي ساق واحد.",

    // Hypogeum
    hypoLabel: "الآلات الخفية",
    hypoTitle: "الهايبوجيوم: مسرح الآليات والمفاجآت",
    hypoSubtitle: "المتاهة الميكانيكية المذهلة تحت أرضية الساحة الرملية",
    arenaView: "منظر سطح الساحة",
    undergroundView: "منظر الشبكة التحتية",
    arenaViewLabel: "من الأعلى",
    arenaViewTitle: "أرضية الساحة (Harena)",
    arenaViewText: "بلغت أبعاد ساحة النزال البيضاوية ٨٣ م × ٤٨ م، مكونة من ألواح خشبية مغطاة برمال صفراء ناعمة مستجلبة من ضفاف نهر التيبر لامتصاص الدماء وتثبيت أقدام المقاتلين. وكانت أبواب الفخاخ تفتح في انسجام لإطلاق المفاجآت.",
    undergroundLabel: "تحت السطح",
    undergroundTitle: "متاهة الممرات ومحركات الرفع",
    undergroundText: "بناها الإمبراطور دوميتيان كشبكة متطورة من طابقين تضم ٣٢ حظيرة حيوانات وممرات تصريف و٢٨ مصعداً توازنياً خشبياً يعمل عليها مئات العمال في الظلام لتقديم أكثر الخدع المسرحية إثارة في العالم القديم.",
    portaPompa: "بوابة الموكب والظفر (Porta Pompae)",
    portaPompaText: "البوابة الغربية الاحتفالية التي يدخل منها الأباطرة والفرسان والمصارعون في موكب مهيب قبل انطلاق النزالات.",
    portaLib: "بوابة المقبرة (Porta Libitinaria)",
    portaLibText: "سُميت نسبة لآلهة الجنائز ليبيتينا، واستُخدمت لإخراج جثث الضحايا والحيوانات المصروعة بكل هدوء بعيداً عن أعين الجمهور.",
    trapDoors: "الأبواب المخفية الهيدروليكية",
    trapDoorsText: "أبواب مفصلية تُفتح في ثوانٍ معدودة لترفع الأسود والنمور والديكورات المسرحية الضخمة مباشرة إلى قلب الحلبة المضيئة.",
    liftsTitle: "٢٨ مصعداً توازنياً ميكانيكياً",
    liftsText: "تدار بالحبال والبكرات ونواقل الحركة بواسطة ما يصل إلى ٨ رجال لكل مصعد لرفع أقفاص وزنها ٣٠٠ كغ إلى مستوى الساحة.",
    cagesTitle: "أقفاص الوحوش والضواري",
    cagesText: "غرف حجرية محصنة لاحتجاز الحيوانات المفترسة المستوردة من شمال إفريقيا وجبال أوروبا والشرق الأدنى.",
    sceneryTitle: "ديكورات ومناظر الغابات المسرحية",
    sceneryText: "منصات متحركة قابلة للطي تحاكي غابات كاملة وجبالاً صخرية تنبثق من تحت الأرض لتمثيل الأساطير الرومانية.",

    // Gallery
    galleryLabel: "الأرشيف البصري",
    galleryTitle: "الأرشيف البصري الإمبراطوري",
    gallerySubtitle: "صور فوتوغرافية فائقة الجودة تروي ملحمة الحجر وظلال التاريخ",
    filterAll: "كافة المشاهد",
    filterExterior: "الواجهات الخارجية",
    filterInterior: "الداخل والمدرجات",
    filterArchitecture: "التفاصيل المعمارية",
    filterHistory: "الرسوم التاريخية",
    filterNight: "المشاهد الليلية",

    gal1: "غروب الشمس الذهبي فوق الأقواس",
    gal1Desc: "أشعة الشفق الذهبية تنفذ عبر طبقات الأقواس الرومانية الكلاسيكية المصنوعة من حجر الترافرتين.",
    gal2: "تفاصيل أقواس الحجر الترافرتيني",
    gal2Desc: "نظرة مقربة لأعمدة النظام الدوري والأيوني والكورنثي المندمجة في واجهة الصرح.",
    gal3: "الكولوسيوم المعاصر في قلب روما",
    gal3Desc: "الأطلال الجنوبية الشامخة وسط حركة وحيوية العاصمة الإيطالية المعاصرة.",
    gal4: "مجد روما القديمة: إعادة بناء تاريخية",
    gal4Desc: "لوحة تخيلية دقيقة لمدرج الكولوسيوم عام ٨٠ م متوجاً بمظلة الفيلاريوم الإمبراطورية الضخمة.",
    gal5: "الإنارة الليلية وسماء روما المرصعة بالنجوم",
    gal5Desc: "إضاءة عنبرية ساحرة تتوهج عبر السراديب والأروقة تحت سماء ليل روما الصافية.",
    gal6: "أروقة وسراديب الهايبوجيوم",
    gal6Desc: "أشعة الشمس الساطعة تخترق أروقة الطوب والأقواس العتيقة في الشبكة السفلية تحت الأرض.",
    gal7: "تفاصيل عمارة الأقواس الكلاسيكية",
    gal7Desc: "دراسة في العمارة الرومانية الكبرى المشيدة بدقة متناهية دون ملاط بواسطة أوتاد برونزية.",
    gal8: "مدرجات الكافيا وحلبة الصراع",
    gal8Desc: "إطلالة بانورامية مهيبة من المدرجات العلوية على الساحة وشبكة الهايبوجيوم المكشوفة.",

    // Visit & Tickets Planner
    visitLabel: "التخطيط للزيارة",
    visitTitle: "دليل الزائر وحاسبة التذاكر",
    visitSubtitle: "معلومات عملية، مواعيد العمل الرسمية، وحساب فوري لتكلفة التذاكر",
    liveStatusTitle: "حالة الدخول اليوم",
    liveStatusOpen: "مفتوح للزوار اليوم",
    liveStatusHours: "٠٨:٣٠ ص – ٠٧:١٥ م (آخر دخول ٠٦:١٥ م)",
    romeTimeLabel: "توقيت روما المحلي",
    calcTitle: "حاسبة أسعار التذاكر الفورية",
    calcSubtitle: "اختر نوع الجولة وعدد الزوار للحصول على التكلفة المقدرة فوراً",
    ticketTierStandard: "تذكرة عادية (الكولوسيوم، المنتدى الروماني وتل بالاتين)",
    ticketTierFull: "التجربة الشاملة (تشمل أرضية الساحة وسراديب الهايبوجيوم)",
    ticketTierNight: "جولة VIP الليلية الحصرية (دخول بعد ساعات العمل الرسمية)",
    labelAdults: "البالغون (٢٥ سنة فأكثر)",
    labelEuYouth: "مواطنو الاتحاد الأوروبي (١٨–٢٥ سنة)",
    labelUnder18: "دون ١٨ عاماً / ذوو الاحتياجات (مجاناً)",
    calcTotal: "المجموع التقديري",
    bookOfficialBtn: "الحجز عبر المنصة الرسمية (CoopCulture / Colosseo)",
    rulesTitle: "إرشادات هامة للزائرين",
    rule1: "إلزامية إبراز جواز السفر أو بطاقة الهوية الرسمية المطابقة للاسم المسجل على التذكرة.",
    rule2: "إجراءات تفتيش أمني دقيقة: يُمنع إدخال الحقائب الكبيرة (فوق ٣٠ لتراً) والزجاجات الزجاجية.",
    rule3: "مسارات مخصصة ومصاعد حديثة تخدم مستخدمي الكراسي المتحركة في الطابقين الأول والثاني.",
    rule4: "أفضل أوقات الزيارة لتجنب الزحام والتقاط أفضل الصور: الصباح الباكر (٠٨:٣٠) أو قبل الغروب.",

    // Interactive Quiz
    quizLabel: "تحدي المعرفة",
    quizTitle: "اختبار معلومات الكولوسيوم",
    quizSubtitle: "اختبر معلوماتك في التاريخ الروماني واحصل على رتبتك الإمبراطورية",
    quizQuestionPrefix: "السؤال",
    quizOf: "من",
    quizScoreLabel: "نتيجتك النهائية",
    quizBtnSubmit: "تأكيد الإجابة",
    quizBtnNext: "السؤال التالي",
    quizBtnRestart: "إعادة التحدي",
    rankGladiator: "مصارع مبتدئ (واصل دراسة أسرار الساحة!)",
    rankCenturion: "قائد مئة روماني (معرفة تاريخية متميزة!)",
    rankSenator: "عضو مجلس شيوخ (خبير في التاريخ الروماني الإمبراطوري!)",
    rankEmperor: "إمبراطور روما (معرفة استثنائية مطلقة بصرح الكولوسيوم!)",

    // Quiz Questions
    q1Title: "ما هو الاسم التاريخي الحقيقي للكولوسيوم في روما القديمة؟",
    q1_optA: "الأمفيتياتر الفلافي (Amphitheatrum Flavium)",
    q1_optB: "سيرك نيرون",
    q1_optC: "ميدان روما الأعظم",
    q1_optD: "الساحة الإمبراطورية",
    q1_expl: "صحيح! شُيد في عهد السلالة الفلافية (فيسبازيان، تيتوس، دوميتيان) وكان اسمه الرسمي الأمفيتياتر الفلافي، وجاء اسم الكولوسيوم لاحقاً نسبة لتمثال نيرون الضخم (Colossus).",

    q2Title: "ما الغرض الرئيسي من المداخل الثمانين المرقّمة (Vomitoria)؟",
    q2_optA: "إرباك الجيوش الغازية",
    q2_optB: "إخلاء أو ملء ٧٠٬٠٠٠ متفرج في ١٥ دقيقة فقط",
    q2_optC: "فصل الطبقات الاجتماعية في مبانٍ مستقلة",
    q2_optD: "إيواء الجنود والمصارعين",
    q2_expl: "صحيح! كانت الفوميتوريا إعجازاً هندسياً فريداً صُمم لتفريغ الحشود الهائلة بسرعة فائقة ومنع التدافع المميت.",

    q3Title: "أي فئات المصارعين كانت تقاتل بالشبكة المثقلة والرمح ثلاثي الشعب؟",
    q3_optA: "المورميلو",
    q3_optB: "السيكوتور",
    q3_optC: "الريتياريوس",
    q3_optD: "الثراكس",
    q3_expl: "صحيح! الريتياريوس (رجل الشبكة) كان يقاتل دون خوذة أو درع صدر معتمداً كلياً على خفة حركته لرمي الشبكة وطعن الخصم بالرمح الثلاثي.",

    q4Title: "ما هو اسم المظلة القماشية العملاقة التي كانت تحمي المتفرجين من حرارة الشمس؟",
    q4_optA: "فيلاريوم (Velarium)",
    q4_optB: "تيسيرا (Tessera)",
    q4_optC: "سبينا (Spina)",
    q4_optD: "بالاتيوم (Palatium)",
    q4_expl: "صحيح! الفيلاريوم كانت مظلة قماشية هائلة يشارك في شدها والتحكم بها مئات من بحارة الأسطول الإمبراطوري الروماني المدربين.",

    q5Title: "ما هو السبب الحقيقي وراء انهيار الجدار الخارجي الجنوبي للكولوسيوم؟",
    q5_optA: "زلزال عنيف ضرب روما عام ١٣٤٩ م وأسقط الواجهة",
    q5_optB: "قصف مدفعي متعمد في الحروب الحديثة",
    q5_optC: "لم يكمله الإمبراطور تيتوس أبداً",
    q5_optD: "فيضان نهر التيبر جرف الأساسات",
    q5_expl: "صحيح! زلزال عام ١٣٤٩ الكارثي هو من أسقط الواجهة الجنوبية لأن الأرض تحتها كانت طمي نهر هشا، بينما صمدت الواجهة الشمالية المبنية على تربة صلبة.",

    // Rome Map & Location
    romeLabel: "في قلب روما",
    romeTitle: "المركز الأثري لروما الخالدة",
    romeSubtitle: "محاط بألفي عام من الآثار الإمبراطورية الشامخة",
    romeText: "يقع الكولوسيوم في قلب الحوض الأثري التاريخي لروما، محاطاً بأهم معالم العالم القديم: المنتدى الروماني من الشمال الغربي، وتل بالاتين من الجنوب الغربي، وقوس قسطنطين التاريخي المهيب على بعد خطوات من بواباته الجنوبية.",
    lm1: "المنتدى الروماني (Foro Romano)",
    lm2: "تل بالاتين (Colle Palatino)",
    lm3: "قوس قسطنطين (Arco di Costantino)",
    lm4: "سيركوس ماكسيموس (Circo Massimo)",
    lm5: "نافورة تريفي (Fontana di Trevi)",
    lm6: "بانثيون أغريبا (Pantheon)",
    locationLabel: "الموقع والمواصلات",
    locationTitle: "كيف تصل إلى الكولوسيوم",
    locAddress: "العنوان الرسمي",
    locCoords: "الإحداثيات الجغرافية",
    locTransport: "وسائل النقل العامة",
    locCTA: "افتح في خرائط Google",

    // Facts
    factsLabel: "هل تعلم",
    factsTitle: "حقائق إمبراطورية مذهلة",
    fact1Title: "إحدى عجائب الدنيا السبع الجديدة",
    fact1Text: "اختير الكولوسيوم ضمن عجائب الدنيا السبع الجديدة عام ٢٠٠٧ بتصويت عالمي تجاوز ١٠٠ مليون شخص بجانب سور الصين العظيم والبتراء.",
    fact2Title: "إخلاء قياسي في ١٥ دقيقة",
    fact2Text: "بفضل تصميمه الدائري ومداخله الثمانين الموزعة، كان بمقدور ٧٠٬٠٠٠ متفرج مغادرة المدرج في ربع ساعة فقط، وهو نموذج يحتذى به في ملاعب العصر الحديث.",
    fact3Title: "المعارك البحرية في قلب الساحة",
    fact3Text: "في عهد تيتوس، كانت الساحة تُغمر بالمياه عبر قنوات مائية خاصة خلال ساعات لخوض معارك بحرية استعراضية بسفن حقيقية قبل إنشاء الهايبوجيوم.",
    fact4Title: "مقلع أحجار لعصر النهضة",
    fact4Text: "بعد زلازل العصور الوسطى، نُقلت آلاف الأطنان من حجر الترافرتين المتساقط لبناء كاتدرائية القديس بطرس وقصر باربريني وجسور نهر التيبر.",
    fact5Title: "محمية نباتية فريدة ونادرة",
    fact5Text: "وثّق علماء النبات أكثر من ٤٢٠ نوعاً من النباتات النادرة تنمو بين شقوق حجارة الكولوسيوم، نُقلت بذورها قديماً مع أعلاف الوحوش المستوردة.",
    fact6Title: "منارة عالمية لنبذ عقوبة الإعدام",
    fact6Text: "منذ عام ١٩٩٩، تضيء روما الكولوسيوم باللون الذهبي الباهر بدلاً من الأبيض كلما ألغت أي دولة في العالم عقوبة الإعدام أو أوقفت تنفيذها.",

    // Myth vs Fact
    mythLabel: "الحقيقة التاريخية",
    mythTitle: "الأسطورة مقابل الواقع التاريخي",
    mythSubtitle: "انقر على كل بطاقة لاكتشاف الحقيقة الموثقة تاريخياً",
    mythTag: "الأسطورة الشائعة",
    factTag: "الواقع التاريخي",
    flipHint: "انقر على البطاقة لقلبها",
    myth1: '"كل نزال في الساحة كان ينتهي حتماً بموت المقاتل الخاسر."',
    fact1m: '"نسبة الوفيات لم تتجاوز ١٠–٢٠٪؛ فالمصارعون المحترفون استثمار ثمين."',
    fact1detail: "كان تدريب المصارع يكلف مبالغ طائلة للمدارس. أدار النزالات حكام صارمون، وكان المصارع المنهزم الذي قاتل ببسالة ينال العفو (missio) بإشارة من الجمهور ومنظم الألعاب.",
    myth2: '"أطلق الرومان القدماء اسم \'الكولوسيوم\' على هذا الصرح."',
    fact2m: '"أطلق عليه الرومان اسم المدرج الفلافي لعدة قرون."',
    fact2detail: "اسم 'الكولوسيوم' ظهر فقط في العصور الوسطى إشارة إلى تمثال نيرون البرونزي الهائل (Colossus) الذي كان منتصباً على بعد خطوات من المدرج وبلغ ارتفاعه ٣٠ متراً.",
    myth3: '"أُعدمت أعداد هائلة من الشهداء المسيحيين حصراً داخل الكولوسيوم."',
    fact3m: '"تشير السجلات إلى أن سيرك نيرون وسيركوس ماكسيموس كانا المقرين الرئيسيين."',
    fact3detail: "رغم اضطهاد المسيحيين في روما، فإن الأدلة الأثرية المباشرة على إعدامات جماعية خاصة داخل الكولوسيوم محدودة تاريخياً. ترسخ هذا الربط في القرن الثامن عشر حين قدسه البابا تخليداً لذكراهم.",
    myth4: '"كان جميع المصارعين عبيداً أُجبروا على القتال قسراً."',
    fact4m: '"كان كثير منهم مواطنين أحراراً تطوعوا طلباً للشهرة والمال الوفير."',
    fact4detail: "بحلول القرن الأول الميلادي، بلغت نسبة المتطوعين الأحرار (auctorati) أكثر من ٢٠٪، حيث وقعوا عقوداً احترافية مقابل مكافآت مالية سخية وشهرة شعبية طاغية تشبه مشاهير الرياضة اليوم.",

    // Architectural Details
    detailsLabel: "حجراً حجراً",
    detailsTitle: "عناصر البناء بالحجر الروماني",
    detailsSubtitle: "إتقان هندسي رفيع صمد في وجه عوادي الزمان لألفي عام",
    det1: "الأقواس المتدرجة",
    det1d: "٨٠ قوساً في كل طابق تجسد النظام الدوري والأيوني والكورنثي.",
    det2: "أقبية الخرسانة الرومانية",
    det2d: "أقبية خرسانية من رماد بوزولانا البركاني فائق المتانة والخفة.",
    det3: "حجارة الترافرتين الصلبة",
    det3d: "١٠٠٬٠٠٠ م³ استُخرجت من تيفولي ورُبطت بـ ٣٠٠ طن من مشابك الحديد والبرونز.",
    det4: "الأعمدة المندمجة بالجدار",
    det4d: "أعمدة جدارية تسند الأحمال الهائلة وتوزعها نحو صخور الأساس.",
    det5: "السلالم والأروقة المتشابكة",
    det5d: "ممرات دائرية متشابكة تُسيّر حركة عشرات الآلاف في دقائق معدودة.",
    det6: "الصورة الظلية البيضاوية",
    det6d: "١٨٨ م × ١٥٦ م · أضخم مدرج بيضاوي شيدته يد الإنسان في التاريخ القديم.",

    // Footer
    footerTagline: '"حيث يتحدث التاريخ عبر الحجر. استكشف، تعلّم، وعش مجد روما القديمة."',
    footerExplore: "أقسام الاستكشاف",
    footerDiscover: "المعالم والاكتشاف",
    footerSources: "المصادر الرسمية",
    footerCopyright: "© ٢٠٢٦ الكولوسيوم — الساحة الأبدية. دليل تاريخي وثقافي وتعليمي شامل.",
    backToTop: "العودة للأعلى"
  }
};

let currentLang = localStorage.getItem('colosseum-lang') || 'en';

function switchLang(lang) {
  currentLang = lang;
  localStorage.setItem('colosseum-lang', lang);

  // Set HTML dir and lang attributes
  document.documentElement.setAttribute('lang', lang);
  document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

  // Update all translatable elements
  const elements = document.querySelectorAll('[data-translate]');
  elements.forEach(el => {
    const key = el.getAttribute('data-translate');
    if (translations[lang] && translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });

  // Update placeholder translations
  const placeholderElements = document.querySelectorAll('[data-translate-placeholder]');
  placeholderElements.forEach(el => {
    const key = el.getAttribute('data-translate-placeholder');
    if (translations[lang] && translations[lang][key]) {
      el.setAttribute('placeholder', translations[lang][key]);
    }
  });

  // Update active lang button states
  document.querySelectorAll('.lang-btn').forEach(btn => {
    const isActive = btn.dataset.lang === lang;
    btn.classList.toggle('active', isActive);
    btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
  });

  // Update document title
  if (lang === 'ar') {
    document.title = 'الكولوسيوم — الساحة الأبدية | روما، إيطاليا';
  } else {
    document.title = 'The Colosseum — The Eternal Arena | Rome, Italy';
  }

  // Dispatch event for other components (like quiz, timeline, map)
  window.dispatchEvent(new CustomEvent('colosseum-lang-change', { detail: { lang } }));
}

// Apply on load
document.addEventListener('DOMContentLoaded', () => {
  switchLang(currentLang);
});

// Export for global usage
window.switchLang = switchLang;
window.translations = translations;
window.currentLang = () => currentLang;
