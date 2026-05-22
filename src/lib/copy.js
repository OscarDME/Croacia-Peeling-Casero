// src/lib/copy.js
// Cjelokupni tekstualni sadržaj landing stranice je ovdje. Komponente ga samo čitaju.
// Jezik: Hrvatski (hr-HR) - Transkreacija s direktnim marketinškim stilom.

export const copy = {
  // Dodani tekstovi iz zadatka (oglasi i dodatne ponude/upsells)
  campaign: {
    adText: {
      headline: "Otkrijte tajnu 🔓",
      body: "💫 Domaći piling s profesionalnim rezultatima!\nPoznajete li onaj sjaj i onu kožu meku poput baršuna, kao nakon skupog tretmana u estetskoj klinici? 😍 Možete to postići kod kuće, trošeći tek nekoliko centi po nanošenju!\nOvaj domaći piling:\n✨ Sužava pore\n✨ Kontrolira masnoću\n✨ Posvjetljuje mrlje\n✨ Potiče proizvodnju kolagena\n✨ Čini vašu kožu blistavom, sjajnom i pomlađenom\n👉 Kliknite na „Saznajte više“ u nastavku i otkrijte kako doći do besprijekorne kože bez trošenja čitavog bogatstva."
    },
    upsells: [
      {
        title: "👁️ Gumica za podočnjake: Tajni trik za vrećice i bore oko očiju",
        description: "Odličan izbor! Sada imate piling za obnovu lica, ali... koža oko očiju je pretanka i preosjetljiva za njega. Savršen ten vam neće pomoći ako vam tamni podočnjaci dodaju 10 godina. Dodajte ovaj tajni priručnik s 15 mikro-recepata s lifting efektom koji smanjuju natečenost, brišu tamnu boju i zaglađuju bore smijalice u samo 5 minuta. Pomladite svoj pogled u trenu, bez ikakvih igala!"
      },
      {
        title: "💆‍♀️ Efekt „Liftinga“: 5-minutna samomasaža za zatezanje lica",
        description: "Vaša će koža imati onaj nevjerojatan sjaj kao iz klinike, ali... piling poboljšava samo teksturu, on ne zateže opuštene mišiće i ne uklanja podbradak. Ne dopustite gravitaciji da vam pokvari izgled. Dodajte ovaj vizualni vodič s tajnim azijskim tehnikama limfne drenaže i masaže lica koje učvršćuju mišiće i skulpturiraju liniju čeljusti. Postignite vizualni efekt facelifta bez da uopće kročite u operacijsku salu!"
      },
      {
        title: "💧 Prirodni „Botoks“: Serum za popunjavanje dubokih bora",
        description: "Sada imate formulu za sužavanje pora i brisanje površinskih mrlja, ali... što ćemo s onim dubokim mimičkim borama na čelu i oko usta? Piling obnavlja, ali ne popunjava. Dodajte ovaj tajni recept za ultra-koncentrirani domaći serum koji imitira filer efekt hijaluronske kiseline. Popunite bore iznutra prema van i zaključajte hidrataciju u svojoj novoj koži!"
      },
      {
        title: "✋ Vremenski stroj: Tajni protokol za vrat i ruke",
        description: "Piling će transformirati vaše lice, ali... 95% žena radi jednu fatalnu grešku: zaboravljaju na vrat i ruke – dvije zone koje u sekundi odaju vaše prave godine. Ne dopustite da imate lice od 30 i ruke od 50 godina. Dodajte ovu posebno razvijenu formulu koja zgušnjava, zateže i uklanja hiperpigmentaciju s osjetljive kože dekoltea i gornjeg dijela ruku. Pomladite svoj cjelokupni izgled!"
      }
    ]
  },

  hero: {
    banner: "EKSKLUZIVNO ZA ŽENE KOJE ŽELE VRATITI KOLAGEN U SVOJU KOŽU",
    timerLabels: { days: "Dana", hours: "Sati", minutes: "Minuta", seconds: "Sekundi" },
    timerNote: "Ponuda istječe za",
    eyebrow: "DOMAĆI ANTI-AGE PILING",
    headline: {
      line1: "Domaći piling s",
      highlight: "profesionalnim rezultatima",
      line2: "bez odlaska u kozmetički salon.",
    },
    subheadline:
      "Uštedite vrijeme i novac uz provjeren i potpuno siguran recept. Obnovljena, čvrsta i blistava koža u roku od 28 dana — već od prvog nanošenja.",
    bullets: [
      "Nanosi se jednostavno za manje od 20 minuta",
      "Koristi pristupačne i potpuno sigurne sastojke",
      "Jamči vidljive rezultate već u prvom tjednu",
    ],
    cta: "DA, ŽELIM VRATITI SVOJ KOLAGEN",
    secondaryNote: "14-dnevno bezuvjetno jamstvo",
    imageAlt: "Mockup tečaja Domaći Anti-Age Piling",
  },

  story: {
    eyebrow: "ONO ŠTO SKRIVAJU OD VAS",
    headline: "Dermatolozi ne žele da saznate ovu tajnu.",
    paragraphs: [
      "Aktivni sastojak za koji vam estetske klinike naplaćuju stotine eura isti je onaj koji možete pripremiti kod kuće za svega nekoliko minuta, trošeći tek par centi.",
      "On pripada obitelji salicilne kiseline — dokazano učinkovite za staničnu obnovu, poticanje kolagena, brisanje bora, pigmentacijskih mrlja i rješavanje opuštene kože.",
      "Evo zašto se ova formula ne dijeli na YouTubeu ili društvenim mrežama. Industrija preferira da i dalje svakog mjeseca plaćate skupe konzultacije i tretmane."
    ],
    highlights: [
      { value: "Manje od 1 €", label: "po tretmanu kod kuće" },
      { value: "28 dana", label: "za potpunu transformaciju" },
      { value: "1. tretman", label: "za osjetno glađu kožu" },
    ],
    cta: "ŽELIM SVOJ PILING SADA",
    industryImageAlt: "Tajna kozmetičke industrije je razotkrivena",
    scienceImageAlt: "Znanstveno dokazano djelovanje pilinga sa salicilnom kiselinom",
  },

  benefits: {
    eyebrow: "ŠTO ĆE VAŠA KOŽA OSJETITI",
    headline: "Rezultati koje odmah vidite u ogledalu.",
    subheadline:
      "Jednostavna rutina kreirana za žene koje žele zdrav i prekrasan izgled, bez ovisnosti o skupim odlascima na kozmetičke tretmane.",
    items: [
      {
        title: "Zaglađuje fine linije i duboke bore",
        desc: "Potiče prirodnu proizvodnju kolagena kako bi se popunile nesavršenosti na koži.",
      },
      {
        title: "Zateže kožu i vraća joj sjaj",
        desc: "Pomlađuje cjelokupan izgled lica, ostavljajući kožu baršunasto mekom i blistavom.",
      },
      {
        title: "Posvjetljuje pigmentacijske mrlje",
        desc: "Ubrzava staničnu obnovu kako bi ujednačio ten vašeg lica.",
      },
      {
        title: "Sužava vidljivo proširene pore",
        desc: "Čini kožu savršeno glatkom na dodir, s pročišćenom i čistom teksturom.",
      },
    ],
  },

  features: {
    eyebrow: "ŠTO ĆETE NAUČITI",
    headline: "6 modula koji će transformirati vašu kožu u 28 dana.",
    subheadline: "Konkretne i praktične informacije, bez praznih priča. Pogledate, primijenite i vidite razliku.",
    items: [
      {
        n: "01",
        title: "Tajna ljudi koji ne stare",
        desc: "Mindset, navike i svakodnevna rutina žena koje stare lijepo, njegovano i s klasom.",
      },
      {
        n: "02",
        title: "Profesionalni piling za par centi",
        desc: "Tajni recept s 3 lako dostupna sastojka: aspirin, ocat i prirodno ulje.",
      },
      {
        n: "03",
        title: "Anti-age shot za udarnu dozu kolagena",
        desc: "Detoks recept koji snažno potiče proizvodnju kolagena iznutra prema van.",
      },
      {
        n: "04",
        title: "Protokol „Zmajeva krv“",
        desc: "Kako koristiti ovu moćnu smolu za brzu i dubinsku obnovu kože nakon pilinga.",
      },
      {
        n: "05",
        title: "Profesionalne tehnike nanošenja",
        desc: "Korak po korak: kako pravilno pripremiti i nanijeti piling pomoću sterilne gaze.",
      },
      {
        n: "06",
        title: "Vidljivi rezultati i sigurnost",
        desc: "Raspored nanošenja: glađa koža za samo 7 dana, a potpuna transformacija za 28 dana.",
      },
    ],
  },

  targetAudience: {
    eyebrow: "OVAJ TEČAJ JE ZA VAS AKO...",
    headline: "Prepoznajete li se u nekoj od ovih situacija?",
    items: [
      {
        title: "Vaša je koža beživotna, gruba i bez sjaja",
        desc: "Čak i uz skupe kreme, vaše lice i dalje izgleda umorno, sivo i bez vitalnosti.",
        imageAlt: "Žena s beživotnom i umornom kožom lica",
      },
      {
        title: "Vaše bore postaju sve dublje",
        desc: "Grimase i fine linije počinju se urezivati u lice, zbog čega se osjećate nesigurno.",
        imageAlt: "Koža s dubokim borama",
      },
      {
        title: "Nakon 35. godine konture lica su se opustile",
        desc: "Čvrstoća je nestala, a gravitacija je počela vidljivo raditi svoje.",
        imageAlt: "Opuštena koža lica",
      },
      {
        title: "Skupa kozmetika jednostavno ne djeluje",
        desc: "Već ste bacili stotine eura na proizvode koji obećavaju čuda, a ne donose nikakve rezultate.",
        imageAlt: "Skupi, ali neučinkoviti kozmetički proizvodi",
      },
    ],
  },

  howItWorks: {
    eyebrow: "KORAK PO KORAK",
    headline: "Jednostavno i sigurno nanošenje kod kuće.",
    subheadline:
      "Potrebno vam je samo 20 minuta i tri sastojka koja vjerojatno već imate u svom kuhinjskom ormariću.",
    steps: [
      {
        n: "01",
        title: "Pripremite formulu",
        desc: "Pomiješajte sastojke u točnim omjerima prikazanim u videu. Sve je prirodno, domaće i lako dostupno.",
      },
      {
        n: "02",
        title: "Nanesite sterilnom gazom",
        desc: "Koristite nježne pokrete po licu prateći profesionalnu tehniku. Bez boli i bez neugodnog peckanja.",
      },
      {
        n: "03",
        title: "Uživajte u rezultatima",
        desc: "Glađa koža već nakon 7 dana. A nakon 28 dana – potpuna transformacija: svježina, čvrstoća i sjaj.",
      },
    ],
    leftImageAlt: "Žena nanosi domaći piling gazom",
    rightImageAlt: "Rezultat prije i poslije domaćeg pilinga",
  },

  carouselSection: {
    eyebrow: "STVARNI REZULTATI",
    headline: "Stvarne žene. Stvarne transformacije.",
    subheadline: "Pogledajte slike prije i poslije žena koje su primijenile ovaj protokol kod kuće.",
    cta: "ŽELIM OVAKVE REZULTATE",
  },

  bonuses: {
    badge: "SVE JE UKLJUČENO",
    headline: "Što sve dobivate ako naručite danas",
    subheadline: "Doživotan pristup cijelom tečaju + ekskluzivni bonusi.",
    items: [
      {
        title: "Pristup platformi ES Video",
        desc: "Najveća platforma za zdravlje i estetiku – potpuno uključena u cijenu.",
      },
      {
        title: "Video s tajnim receptom za piling",
        desc: "Cjelovita formula s točnim omjerima i praktičnom demonstracijom izrade.",
      },
      {
        title: "Anti-age shot za kolagen",
        desc: "Recept za detoks napitak koji snažno pojačava učinak pilinga iznutra prema van.",
      },
      {
        title: "Protokol „Zmajeva krv“",
        desc: "Video vodič korak-po-korak za brzu obnovu kože nakon pilinga uz pomoć moćne smole.",
      },
      {
        title: "Priručnik korak-po-korak (PDF)",
        desc: "Praktični PDF materijal koji možete isprintati kako biste sigurno pratili svako nanošenje.",
      },
    ],
  },

  testimonials: {
    eyebrow: "RECENZIJE",
    headline: "Ne morate vjerovati meni. Vjerujte ovim ženama.",
    items: [
      {
        name: "Marija",
        role: "Zagreb",
        quote:
          "Bojala sam se sama tretirati lice kod kuće. Ali pratila sam korake i razlika je bila vidljiva već u prvom tjednu. Danas sam potpuno druga osoba kad se pogledam u ogledalo.",
      },
      {
        name: "Ana",
        role: "Split",
        quote:
          "Trošila sam lud novac po klinikama i nisam si to mogla stalno priuštiti. Kod kuće ovo radim opušteno, bez boli, a cijena je smiješna u usporedbi s rezultatima koje dobivam.",
      },
      {
        name: "Martina",
        role: "Rijeka",
        quote:
          "Prijateljice me stalno pitaju što sam radila na licu. Mrlje su izblijedjele, a koža mi je postala glatka poput svile. Preporučujem od sveg srca.",
      },
    ],
    socialBadge: "STVARNE RECENZIJE S MREŽA",
    socialHeadline: "Istinski komentari naših polaznica",
    socialAlt: "Recenzije polaznica na Instagramu",
  },

  finalCta: {
    badge: "VREMENSKI OGRANIČENA PONUDA",
    headline: "Započnite danas. 14-dnevno jamstvo.",
    guaranteeText:
      "Ako se u roku od 14 dana ne zaljubite u rezultate, vratit ćemo vam 100% uplaćenog iznosa. Bez suvišnih pitanja, bez komplicirane administracije. Cijeli rizik je na meni.",
    bundleHeadline: "Što sve dobivate kada kliknete sada",
    bundleList: [
      "Potpuni tečaj Domaći Anti-Age Piling",
      "Anti-age shot za udarnu dozu kolagena",
      "Protokol za obnovu „Zmajeva krv“",
      "Priručnik korak-po-korak u PDF formatu",
      "Doživotni pristup platformi ES Video",
    ],
    regularPriceLabel: "Prije",
    regularPrice: "19,90 €",
    offerLabel: "Samo za",
    offerPrice: "8,90 €",
    installments: "Jednokratno plaćanje",
    economy: "Štedite 55%",
    urgencyText: "Ponuda vrijedi samo danas",
    button: "ŽELIM VRATITI SVOJ KOLAGEN SADA",
    secureNote: "100% sigurno plaćanje · Obrađuje OrioPay",
    imageAlt: "Mockup tečaja Domaći Anti-Age Piling",
    guaranteeImageAlt: "Pečat 14-dnevnog jamstva",
  },

  about: {
    eyebrow: "TKO STOJI IZA OVOGA",
    title: "Estetičarka poznatih",
    name: "Petra Horvat",
    paragraphs: [
      "Petra Horvat je vodeći stručnjak u regiji na području estetike lica i njege kože. Razvila je prirodne protokole za uklanjanje mrlja, melazme, akni i gubitka kose koji su već pomogli tisućama žena da vrate svoje samopouzdanje.",
      "Osnivačica je vlastite estetske klinike i brenda dermo-kozmetike. Vodi najveći YouTube kanal o zdravlju i ljepoti u Hrvatskoj s milijunskim pregledima.",
      "Njezina je filozofija jednostavna: stvarni rezultati, s puno njege i znanosti — bez potrebe da budete ovisni o bezobrazno skupim tretmanima ili uvoznim proizvodima.",
    ],
    stats: [
      { value: "7,68M", label: "Pratitelja na YouTubeu" },
      { value: "+1.000", label: "Zadovoljnih žena" },
      { value: "Hrvatska", label: "Zlatni standard u njezi kože" },
    ],
    photoAlt: "Petra Horvat, vodeći estetski stručnjak u Hrvatskoj",
  },

  faq: {
    eyebrow: "ČESTO POSTAVLJANA PITANJA",
    headline: "Sve što trebate znati prije narudžbe.",
    items: [
      {
        q: "Što točno kupujem?",
        a: "Kupujete digitalni mini-tečaj „Domaći Anti-Age Piling“ s pristupom platformi ES Video. Sadržaj vas uči točnoj formuli, pravilnom nanošenju, receptu za anti-age shot i sigurnosnom protokolu.",
      },
      {
        q: "Što je sve uključeno u cijenu?",
        a: "Video s tajnom formulom, detaljan PDF priručnik i pristup platformi ES Video s dodatnim tečajevima i edukativnim materijalima.",
      },
      {
        q: "Kako ću dobiti sadržaj?",
        a: "Odmah nakon uspješne uplate primit ćete e-mail s poveznicom za pristup platformi, gdje se nalaze video lekcije i PDF priručnik. Svakako provjerite i mapu Neželjenog sadržaja (Spam). Pristup obično stiže u roku od nekoliko minuta.",
      },
      {
        q: "Koliko brzo nakon kupnje dobivam pristup?",
        a: "Dostava je automatska i trenutačna nakon odobrenja uplate — najčešće u roku od jedne minute.",
      },
      {
        q: "Tko može raditi ovaj Domaći Piling?",
        a: "Prikladan je za žene i muškarce starije od 35 godina koji žele potaknuti proizvodnju kolagena, smanjiti bore, mrlje i riješiti se beživotnog izgleda kože. Ne preporučuje se osobama alergičnima na aspirin, iznimno osjetljivoj koži ili koži s otvorenim ranama. Test na alergiju je obavezan prije prvog nanošenja.",
      },
      {
        q: "Djeluje li ovo uistinu?",
        a: "Da. Aktivni sastojak (acetilsalicilna kiselina) pripada istoj obitelji kiselina koje se koriste u profesionalnim klinikama za staničnu obnovu: uklanja sloj mrtvih stanica i stimulira kolagen. Rezultat je usporediv s površinskim kemijskim pilingom, ali po minimalnoj cijeni.",
      },
      {
        q: "Kako su lekcije predstavljene?",
        a: "Putem video lekcija kombiniranih s informativnim tekstovima, u iznimno jednostavnom, jasnom i izravnom formatu.",
      },
      {
        q: "Postoji li jamstvo zadovoljstva?",
        a: "Da. Imate punih 14 dana za testiranje ove metode. Ako niste zadovoljni, jednostavno kontaktirajte našu korisničku podršku i vratit ćemo vam 100% uplaćenog iznosa, bez ikakvih pitanja.",
      },
    ],
  },

  closing: {
    eyebrow: "ZA OGRANIČENO VRIJEME",
    headline: "Vaša koža može izgledati potpuno drugačije za samo 28 dana.",
    body: "Izbor je jednostavan: nastavite bacati novac na kreme koje ne djeluju ili investirajte jednokratno u prirodnu, praktičnu metodu uz bezuvjetno jamstvo.",
    cta: "ŽELIM ZAPOČETI SADA",
    timerNote: "Ponuda istječe za",
    timerLabels: { days: "Dana", hours: "Sati", minutes: "Minuta", seconds: "Sekundi" },
  },

  footer: {
    brand: "Petra Horvat",
    tagline: "Ljepota stvorena uz pomoć znanosti i njege.",
    rights: "Sva prava pridržana.",
    legalLinks: [
      { label: "Politika privatnosti", href: "#" },
      { label: "Uvjeti korištenja", href: "#" },
    ],
    disclaimer:
      "Ova stranica nije povezana s Facebookom niti tvrtkom Meta. Rezultati su individualni i mogu varirati od osobe do osobe.",
  },

  pixel: {
    id: "2099946003917342",
  },

  a11y: {
    skipToContent: "Prijeđi na sadržaj",
    faqExpand: "Prikaži odgovor",
    faqCollapse: "Sakrij odgovor",
    carouselPrev: "Prethodna fotografija",
    carouselNext: "Sljedeća fotografija",
  },

  metadata: {
    title: "Domaći Anti-Age Piling | Petra Horvat",
    description:
      "Naučite kako napraviti domaći piling s profesionalnim rezultatima. Obnovljena, čvrsta i blistava koža u roku od 28 dana. 14-dnevno jamstvo.",
  },
};