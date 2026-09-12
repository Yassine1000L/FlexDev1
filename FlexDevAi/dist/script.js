document.documentElement.classList.add("js");
const translations= {
  fr: {
    "nav__services": "Services",
    "nav__about": "À propos",
    "nav__why": "Pourquoi",
    "nav__process": "Processus",
    "nav__projects": "Projets",
    "nav__contact": "Parlons de votre projet ",
    "hero__eyebrow": "DÉVELOPPEUR & RÉSOLVEUR DE PROBLÈMES",
    "hero__title": "Je construis.<br><span>Je répare.</span>",
    "hero__intro": "Votre idée mérite un site qui fonctionne.<br>Développement sur mesure, optimisation et résolution de bugs : je m’occupe de la technique.",
    "hero__cta": "Demander un devis gratuit ",
    "hero__see_work": "Voir mon travail <span>↓</span>",
    "hero__note": "Un interlocuteur. Des solutions concrètes.",
    "hero__img_label": "DE L’IDÉE À LA MISE EN LIGNE",
    "hero__img_label_strong": "Du code.<br>Et du concret.",
    "strip__creation": "CRÉATION",
    "strip__optimisation": "OPTIMISATION",
    "strip__maintenance": "MAINTENANCE",
    "strip__bugs": "RÉSOLUTION DE BUGS",
    "about__eyebrow": "01 / À PROPOS",
    "about__title": "Un partenaire pour<br>faire avancer votre web.",
    "about__p1": "Titulaire d’un bachelor en informatique et de plusieurs certifications, je suis passionné de développement web depuis mon plus jeune âge. C’était une évidence : j’ai toujours su que c’était ce que je voulais faire, et j’ai commencé à coder dès que possible.",
    "about__p2": "Aujourd’hui, chaque projet reçoit la même attention : des sites performants, soignés et pensés pour évoluer.",
    "stat__projects": "Projets réalisés",
    "stat__exp": "Années d’expérience",
    "stat__satisfied": "Clients satisfaits",
    "stat__response": "Délai de réponse",
    "services__eyebrow": "02 / SERVICES",
    "services__title": "Ce que je peux<br>faire pour vous.",
    "services__sub": "Créer, améliorer, réparer.<br>La bonne solution pour votre projet.",
    "s1__title": "Développement web",
    "s1__desc": "Des sites modernes et adaptés à tous les écrans, développés avec Laravel, PHP et Tailwind CSS.",
    "s2__title": "Correction de bugs",
    "s2__desc": "Identification et résolution des erreurs dans votre code existant, pour retrouver un site fiable.",
    "s3__title": "Performances",
    "s3__desc": "Des applications plus rapides et une navigation plus fluide pour vos utilisateurs.",
    "s4__title": "Référencement naturel",
    "s4__desc": "Optimisation de votre site pour améliorer sa visibilité sur Google et faciliter sa découverte.",
    "s5__title": "Maintenance & assistance",
    "s5__desc": "Mises à jour, sauvegardes et suivi de la sécurité pour garder votre site en bon état.",
    "s6__title": "Adaptation mobile",
    "s6__desc": "Une expérience soignée sur téléphone, tablette et ordinateur, même pour un site existant.",
    "why__eyebrow": "03 / POURQUOI FLEX DEV ?",
    "why__title": "La technique,<br>sans les<br><em>complications.</em>",
    "why__p": "Une collaboration directe, des engagements clairs et le souci du travail bien fait.",
    "why__link": "Discutons de votre projet ",
    "b1__title": "Une réponse sous 24 h",
    "b1__desc": "Votre message mérite une réponse rapide.",
    "b2__title": "Du code propre et maintenable",
    "b2__desc": "Une base documentée, pensée pour évoluer.",
    "b3__title": "Des tarifs adaptés",
    "b3__desc": "Une proposition cohérente avec vos besoins et votre budget.",
    "b4__title": "Présent après la livraison",
    "b4__desc": "Je reste disponible pour vos questions et vos améliorations.",
    "b5__title": "À l’aise sur tous les écrans",
    "b5__desc": "Votre site s’adapte à chaque appareil.",
    "b6__title": "Un devis transparent",
    "b6__desc": "Un périmètre détaillé avant de commencer, sans coûts cachés.",
    "process__eyebrow": "04 / PROCESSUS",
    "process__title": "Une idée. Cinq étapes.<br>Votre site en ligne.",
    "p1__title": "Premier contact",
    "p1__desc": "Nous discutons de vos besoins et de vos objectifs.",
    "p2__title": "Analyse",
    "p2__desc": "Vous recevez une proposition avec calendrier et budget.",
    "p3__title": "Développement",
    "p3__desc": "Le projet avance par étapes, avec des échanges réguliers.",
    "p4__title": "Mise en ligne",
    "p4__desc": "Votre site est publié et prêt à accueillir ses visiteurs.",
    "p5__title": "Suivi",
    "p5__desc": "Je reste disponible pour les questions et les améliorations.",
    "projects__eyebrow": "05 / PROJETS",
    "projects__title": "Du travail concret.",
    "projects__sub": "Les présentations détaillées arrivent bientôt.",
    "coming_soon": "À DÉCOUVRIR BIENTÔT",
    "proj__01_title": "Projet 01",
    "proj__02_title": "Projet 02",
    "proj__03_title": "Projet 03",
    "proj__04_title": "Projet 04",
    "proj__desc": "Plus d’informations sur ce projet à venir.",
    "contact__eyebrow": "05 / PARLONS-EN",
    "contact__title": "Votre prochain projet<br>commence <em>ici.</em>",
    "contact__p": "Un nouveau site, un bug tenace ou une idée à concrétiser ?<br>Racontez-moi ce dont vous avez besoin.",
    "q_need": "De quoi avez-vous besoin ?",
    "need_new": "Un nouveau site web",
    "need_redesign": "Refonte d’un site existant",
    "need_bug": "Corriger un bug",
    "need_perf": "Optimisation & performances",
    "need_maint": "Maintenance",
    "need_other": "Autre",
    "q_project": "Parlez-moi de votre projet",
    "project_hint": "Décrivez brièvement votre projet, les fonctionnalités souhaitées ou le problème que vous rencontrez.",
    "project_ph": "Décrivez votre projet…",
    "url_ph": "Vous avez déjà un site ? Ajoutez son lien (facultatif)",
    "q_features": "Quelles fonctionnalités souhaitez-vous ?",
    "features_hint": "Plusieurs réponses possibles.",
    "feat_contact": "Formulaire de contact",
    "feat_booking": "Prise de rendez-vous / réservation",
    "feat_payment": "Paiement en ligne",
    "feat_shop": "Boutique en ligne",
    "feat_account": "Espace client / connexion",
    "feat_lang": "Plusieurs langues",
    "feat_anim": "Animations / design personnalisé",
    "feat_unknown": "Je ne sais pas encore",
    "feat_other": "Autre",
    "q_launch": "Quand souhaitez-vous lancer votre projet ?",
    "launch_soon": "Dès que possible",
    "launch_month": "Dans moins d’un mois",
    "launch_3m": "Dans 1 à 3 mois",
    "launch_3plus": "Dans plus de 3 mois",
    "launch_open": "Je n’ai pas de date précise",
    "q_contact": "Comment puis-je vous contacter ?",
    "name_ph": "Nom / entreprise",
    "email_ph": "Adresse e-mail",
    "phone_ph": "Téléphone (facultatif)",
    "q_budget": "Avez-vous déjà défini un budget pour ce projet ?",
    "budget_yes": "Oui",
    "budget_no": "Pas encore",
    "budget_estimate": "J’aimerais recevoir une estimation",
    "budget_ph": "Budget approximatif (ex. 1 500 €)",
    "next": "Continuer",
    "back": "Retour",
    "btn_wa": "Discuter sur WhatsApp",
    "btn_mail": "Envoyer un e-mail",
    "q_channel": "Comment souhaitez-vous être contacté ?",
    "greeting": "Bonjour Flex Dev !",
    "summary_need": "Besoin : ",
    "summary_desc": "Projet : ",
    "summary_url": "Site actuel : ",
    "summary_features": "Fonctionnalités : ",
    "summary_timing": "Délai : ",
    "summary_budget": "Budget : ",
    "summary_name": "Nom : ",
    "summary_email": "E-mail : ",
    "summary_phone": "Téléphone : ",
    "email_subject": "Projet Flex Dev — contact",
    "contact__detail1": "Réponse sous 24 h",
    "contact__detail2": "Devis gratuit",
    "contact__detail3": "Sans engagement",
    "footer__tagline": "Développement web. Solutions concrètes.",
    "footer__top": "Retour en haut ↑",
    "title": "Flex Dev — Je construis. Je répare.",
    "meta_description": "Flex Dev : création de sites web sur mesure, correction de bugs, optimisation et maintenance. Discutons de votre projet."
  },
  en: {
    "nav__services": "Services",
    "nav__about": "About",
    "nav__why": "Why",
    "nav__process": "Process",
    "nav__projects": "Projects",
    "nav__contact": "Let’s talk about your project ",
    "hero__eyebrow": "DEVELOPER & PROBLEM SOLVER",
    "hero__title": "I build.<br><span>I fix.</span>",
    "hero__intro": "Your idea deserves a website that works.<br>Custom development, optimization and bug fixing: I take care of the technical side.",
    "hero__cta": "Get a free quote ",
    "hero__see_work": "See my work <span>↓</span>",
    "hero__note": "One contact. Concrete solutions.",
    "hero__img_label": "FROM IDEA TO LAUNCH",
    "hero__img_label_strong": "Code.<br>And results.",
    "strip__creation": "CREATION",
    "strip__optimisation": "OPTIMIZATION",
    "strip__maintenance": "MAINTENANCE",
    "strip__bugs": "BUG FIXING",
    "about__eyebrow": "01 / ABOUT",
    "about__title": "A partner to keep<br>your web moving forward.",
    "about__p1": "With a bachelor’s degree in computer science and several certifications, I have been passionate about web development since I was young. It was obvious from the start: I always knew this was what I wanted to do, and I started coding as soon as I could.",
    "about__p2": "Today, every project gets the same care: fast, polished websites built to evolve.",
    "stat__projects": "Projects completed",
    "stat__exp": "Years of experience",
    "stat__satisfied": "Happy clients",
    "stat__response": "Response time",
    "services__eyebrow": "02 / SERVICES",
    "services__title": "What I can<br>do for you.",
    "services__sub": "Create, improve, fix.<br>The right solution for your project.",
    "s1__title": "Web development",
    "s1__desc": "Modern websites adapted to every screen, built with Laravel, PHP and Tailwind CSS.",
    "s2__title": "Bug fixing",
    "s2__desc": "Finding and fixing errors in your existing code, to get a reliable site back.",
    "s3__title": "Performance",
    "s3__desc": "Faster apps and smoother navigation for your users.",
    "s4__title": "SEO",
    "s4__desc": "Optimizing your site to improve its visibility on Google and help it get discovered.",
    "s5__title": "Maintenance & support",
    "s5__desc": "Updates, backups and security monitoring to keep your site healthy.",
    "s6__title": "Mobile adaptation",
    "s6__desc": "A polished experience on phone, tablet and desktop, even for an existing site.",
    "why__eyebrow": "03 / WHY FLEX DEV?",
    "why__title": "The tech,<br>without the<br><em>complications.</em>",
    "why__p": "Direct collaboration, clear commitments and a focus on doing things right.",
    "why__link": "Let’s discuss your project ",
    "b1__title": "A reply within 24 h",
    "b1__desc": "Your message deserves a quick answer.",
    "b2__title": "Clean, maintainable code",
    "b2__desc": "A documented base, built to evolve.",
    "b3__title": "Fair pricing",
    "b3__desc": "A proposal that fits your needs and budget.",
    "b4__title": "Here after delivery",
    "b4__desc": "I stay available for your questions and improvements.",
    "b5__title": "At ease on every screen",
    "b5__desc": "Your site adapts to every device.",
    "b6__title": "Transparent quotes",
    "b6__desc": "A detailed scope before starting, no hidden costs.",
    "process__eyebrow": "04 / PROCESS",
    "process__title": "One idea. Five steps.<br>Your site live.",
    "p1__title": "First contact",
    "p1__desc": "We discuss your needs and goals.",
    "p2__title": "Analysis",
    "p2__desc": "You receive a proposal with timeline and budget.",
    "p3__title": "Development",
    "p3__desc": "The project progresses in steps, with regular exchanges.",
    "p4__title": "Launch",
    "p4__desc": "Your site is published and ready for visitors.",
    "p5__title": "Follow-up",
    "p5__desc": "I remain available for questions and improvements.",
    "projects__eyebrow": "05 / PROJECTS",
    "projects__title": "Real, concrete work.",
    "projects__sub": "Detailed case studies are coming soon.",
    "coming_soon": "COMING SOON",
    "proj__01_title": "Project 01",
    "proj__02_title": "Project 02",
    "proj__03_title": "Project 03",
    "proj__04_title": "Project 04",
    "proj__desc": "More details about this project coming soon.",
    "contact__eyebrow": "06 / LET’S TALK",
    "contact__title": "Your next project<br>starts <em>here.</em>",
    "contact__p": "A new website, a stubborn bug or an idea to bring to life?<br>Tell me what you need.",
    "q_need": "What do you need?",
    "need_new": "A new website",
    "need_redesign": "Redesign of an existing site",
    "need_bug": "Fix a bug",
    "need_perf": "Optimization & performance",
    "need_maint": "Maintenance",
    "need_other": "Other",
    "q_project": "Tell me about your project",
    "project_hint": "Briefly describe your project, the features you want or the problem you are facing.",
    "project_ph": "Describe your project…",
    "url_ph": "Do you already have a site? Add its link (optional)",
    "q_features": "Which features would you like?",
    "features_hint": "Several answers are possible.",
    "feat_contact": "Contact form",
    "feat_booking": "Appointment / booking",
    "feat_payment": "Online payment",
    "feat_shop": "Online store",
    "feat_account": "Client area / login",
    "feat_lang": "Multiple languages",
    "feat_anim": "Animations / custom design",
    "feat_unknown": "Not sure yet",
    "feat_other": "Other",
    "q_launch": "When would you like to launch your project?",
    "launch_soon": "As soon as possible",
    "launch_month": "Within a month",
    "launch_3m": "In 1 to 3 months",
    "launch_3plus": "In more than 3 months",
    "launch_open": "No specific date",
    "q_contact": "How can I reach you?",
    "name_ph": "Name / company",
    "email_ph": "Email address",
    "phone_ph": "Phone (optional)",
    "q_budget": "Have you already set a budget for this project?",
    "budget_yes": "Yes",
    "budget_no": "Not yet",
    "budget_estimate": "I would like an estimate",
    "budget_ph": "Approximate budget (e.g. €1,500)",
    "next": "Continue",
    "back": "Back",
    "btn_wa": "Chat on WhatsApp",
    "btn_mail": "Send an email ↗",
    "q_channel": "How would you like to be contacted?",
    "greeting": "Hello Flex Dev!",
    "summary_need": "Need: ",
    "summary_desc": "Project: ",
    "summary_url": "Current site: ",
    "summary_features": "Features: ",
    "summary_timing": "Timeline: ",
    "summary_budget": "Budget: ",
    "summary_name": "Name: ",
    "summary_email": "Email: ",
    "summary_phone": "Phone: ",
    "email_subject": "Flex Dev project — contact",
    "contact__detail1": "Reply within 24 h",
    "contact__detail2": "Free quote",
    "contact__detail3": "No obligation",
    "footer__tagline": "Web development. Concrete solutions.",
    "footer__top": "Back to top ↑",
    "title": "Flex Dev — I build. I fix.",
    "meta_description": "Flex Dev: custom website development, bug fixing, optimization and maintenance. Let’s talk about your project."
  },
  nl: {
    "nav__services": "Diensten",
    "nav__about": "Over mij",
    "nav__why": "Waarom",
    "nav__process": "Werkwijze",
    "nav__projects": "Projecten",
    "nav__contact": "Laten we over je project praten ",
    "hero__eyebrow": "ONTWIKKELAAR & PROBLEEMOPLOSSER",
    "hero__title": "Ik bouw.<br><span>Ik verbeter.</span>",
    "hero__intro": "Uw idee verdient een website die werkt.<br>Maatwerk, optimalisatie en het oplossen van bugs: ik regel de techniek.",
    "hero__cta": "Vraag een gratis offerte ",
    "hero__see_work": "Bekijk mijn werk <span>↓</span>",
    "hero__note": "Eén aanspreekpunt. Concrete oplossingen.",
    "hero__img_label": "VAN IDEE TOT LIVE",
    "hero__img_label_strong": "Code.<br>En resultaat.",
    "strip__creation": "CREATIE",
    "strip__optimisation": "OPTIMALISATIE",
    "strip__maintenance": "ONDERHOUD",
    "strip__bugs": "BUGS OPLOSSEN",
    "about__eyebrow": "01 / OVER MIJ",
    "about__title": "Een partner om<br>jouw web vooruit te helpen.",
    "about__p1": "Met een bachelor in de informatica en verschillende certificaten op zak, ben ik al van kinds af aan gepassioneerd door webontwikkeling. Het was meteen duidelijk: ik wist altijd al dat ik dit wilde doen, en ik begon zo vroeg mogelijk met coderen.",
    "about__p2": "Vandaag krijgt elk project dezelfde aandacht: snelle, verzorgde websites die gebouwd zijn om te groeien.",
    "stat__projects": "Projecten gerealiseerd",
    "stat__exp": "Jaar ervaring",
    "stat__satisfied": "Tevreden klanten",
    "stat__response": "Reactietijd",
    "services__eyebrow": "02 / DIENSTEN",
    "services__title": "Wat ik voor<br>jou kan doen.",
    "services__sub": "Creëren, verbeteren, repareren.<br>De juiste oplossing voor jouw project.",
    "s1__title": "Webontwikkeling",
    "s1__desc": "Moderne websites die zich aanpassen aan elk scherm, gebouwd met Laravel, PHP en Tailwind CSS.",
    "s2__title": "Bugfixes",
    "s2__desc": "Fouten in je bestaande code opsporen en oplossen, voor een betrouwbare website.",
    "s3__title": "Prestaties",
    "s3__desc": "Snellere apps en vloeiendere navigatie voor je gebruikers.",
    "s4__title": "Zoekmachineoptimalisatie",
    "s4__desc": "Je website optimaliseren voor betere zichtbaarheid op Google en beter gevonden worden.",
    "s5__title": "Onderhoud & ondersteuning",
    "s5__desc": "Updates, back-ups en beveiligingscontrole om je website in topvorm te houden.",
    "s6__title": "Mobiele aanpassing",
    "s6__desc": "Een verzorgde ervaring op telefoon, tablet en desktop, ook voor een bestaande site.",
    "why__eyebrow": "03 / WAAROM FLEX DEV?",
    "why__title": "De techniek,<br>zonder de<br><em>complicaties.</em>",
    "why__p": "Directe samenwerking, duidelijke afspraken en oog voor goed werk.",
    "why__link": "Laten we over je project praten ",
    "b1__title": "Reactie binnen 24 uur",
    "b1__desc": "Je bericht verdient een snel antwoord.",
    "b2__title": "Schone, onderhoudbare code",
    "b2__desc": "Een gedocumenteerde basis, gebouwd om te groeien.",
    "b3__title": "Aangepaste tarieven",
    "b3__desc": "Een voorstel dat past bij je behoeften en budget.",
    "b4__title": "Aanwezig na oplevering",
    "b4__desc": "Ik blijf beschikbaar voor vragen en verbeteringen.",
    "b5__title": "Comfortabel op elk scherm",
    "b5__desc": "Je website past zich aan elk apparaat aan.",
    "b6__title": "Transparante offerte",
    "b6__desc": "Een duidelijke scope voordat we beginnen, geen verborgen kosten.",
    "process__eyebrow": "04 / WERKWIJZE",
    "process__title": "Eén idee. Vijf stappen.<br>Jouw site online.",
    "p1__title": "Eerste contact",
    "p1__desc": "We bespreken je behoeften en doelen.",
    "p2__title": "Analyse",
    "p2__desc": "Je ontvangt een voorstel met planning en budget.",
    "p3__title": "Ontwikkeling",
    "p3__desc": "Het project vordert in stappen, met regelmatig overleg.",
    "p4__title": "Live gaan",
    "p4__desc": "Je site is gepubliceerd en klaar voor bezoekers.",
    "p5__title": "Opvolging",
    "p5__desc": "Ik blijf beschikbaar voor vragen en verbeteringen.",
    "projects__eyebrow": "05 / PROJECTEN",
    "projects__title": "Concreet werk.",
    "projects__sub": "Gedetailleerde presentaties komen binnenkort.",
    "coming_soon": "BINNENKORT",
    "proj__01_title": "Project 01",
    "proj__02_title": "Project 02",
    "proj__03_title": "Project 03",
    "proj__04_title": "Project 04",
    "proj__desc": "Meer informatie over dit project volgt binnenkort.",
    "contact__eyebrow": "06 / ER OVER PRATEN",
    "contact__title": "Je volgende project<br>begint <em>hier.</em>",
    "contact__p": "Een nieuwe website, een hardnekkige bug of een idee dat je wilt realiseren?<br>Vertel me wat je nodig hebt.",
    "q_need": "Wat heb je nodig?",
    "need_new": "Een nieuwe website",
    "need_redesign": "Herontwerp van een bestaande site",
    "need_bug": "Een bug oplossen",
    "need_perf": "Optimalisatie & prestaties",
    "need_maint": "Onderhoud",
    "need_other": "Anders",
    "q_project": "Vertel me over je project",
    "project_hint": "Beschrijf kort je project, de gewenste functionaliteiten of het probleem dat je tegenkomt.",
    "project_ph": "Beschrijf je project…",
    "url_ph": "Heb je al een website? Voeg de link toe (optioneel)",
    "q_features": "Welke functionaliteiten wil je?",
    "features_hint": "Meerdere antwoorden mogelijk.",
    "feat_contact": "Contactformulier",
    "feat_booking": "Afspraak / reservering",
    "feat_payment": "Online betaling",
    "feat_shop": "Webwinkel",
    "feat_account": "Klantportaal / inloggen",
    "feat_lang": "Meerdere talen",
    "feat_anim": "Animaties / custom design",
    "feat_unknown": "Weet ik nog niet",
    "feat_other": "Anders",
    "q_launch": "Wanneer wil je je project lanceren?",
    "launch_soon": "Zo snel mogelijk",
    "launch_month": "Binnen een maand",
    "launch_3m": "Binnen 1 tot 3 maanden",
    "launch_3plus": "Over meer dan 3 maanden",
    "launch_open": "Geen vaste datum",
    "q_contact": "Hoe kan ik je bereiken?",
    "name_ph": "Naam / bedrijf",
    "email_ph": "E-mailadres",
    "phone_ph": "Telefoon (optioneel)",
    "q_budget": "Heb je al een budget vastgesteld voor dit project?",
    "budget_yes": "Ja",
    "budget_no": "Nog niet",
    "budget_estimate": "Ik wil graag een schatting",
    "budget_ph": "Geschat budget (bijv. € 1.500)",
    "next": "Verder",
    "back": "Terug",
    "btn_wa": "Chatten via WhatsApp",
    "btn_mail": "Stuur een e-mail",
    "q_channel": "Hoe wil je gecontacteerd worden?",
    "greeting": "Hallo Flex Dev!",
    "summary_need": "Behoefte: ",
    "summary_desc": "Project: ",
    "summary_url": "Bestaande site: ",
    "summary_features": "Functionaliteiten: ",
    "summary_timing": "Planning: ",
    "summary_budget": "Budget: ",
    "summary_name": "Naam: ",
    "summary_email": "E-mail: ",
    "summary_phone": "Telefoon: ",
    "email_subject": "Flex Dev project — contact",
    "contact__detail1": "Reactie binnen 24 uur",
    "contact__detail2": "Gratis offerte",
    "contact__detail3": "Vrijblijvend",
    "footer__tagline": "Webontwikkeling. Concrete oplossingen.",
    "footer__top": "Terug naar boven ↑",
    "title": "Flex Dev — Ik bouw. Ik verbeter.",
    "meta_description": "Flex Dev: maatwerk websites, bugfixes, optimalisatie en onderhoud. Laten we over je project praten."
  }
};
const STORE = "flexdev-lang";
const menuButton = document.querySelector(".menu");
const nav = document.querySelector("nav");
menuButton.addEventListener("click", () => {
  const open = menuButton.getAttribute("aria-expanded") !== "true";
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.setAttribute("aria-label", open ? "Fermer le menu" : "Ouvrir le menu");
  nav.classList.toggle("open", open);
});
nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.setAttribute("aria-label", "Ouvrir le menu");
  nav.classList.remove("open");
}));
document.addEventListener("keydown", event => {
  if (event.key === "Escape" && nav.classList.contains("open")) {
    menuButton.click();
    menuButton.focus();
  }
});
function applyLang(code) {
  if (!translations[code]) { code = "fr"; }
  const t = translations[code];
  document.documentElement.lang = code;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (t[key] != null) { el.innerHTML = t[key]; }
  });
  document.querySelectorAll("[data-i18n-ph]").forEach(el => {
    const key = el.getAttribute("data-i18n-ph");
    if (t[key] != null) { el.setAttribute("placeholder", t[key]); }
  });
  const meta = document.querySelector('meta[name="description"]');
  if (meta && t.meta_description) { meta.setAttribute("content", t.meta_description); }
  if (t.title) { document.title = t.title; }
  const select = document.getElementById("lang");
  if (select) { select.value = code; }
  try { localStorage.setItem(STORE, code); } catch (e) {}
}
(function initLang() {
  let code = "fr";
  try { code = localStorage.getItem(STORE) || (navigator.language || "fr").slice(0, 2); } catch (e) {}
  applyLang(code);
  const select = document.getElementById("lang");
  if (select) {
    select.addEventListener("change", event => applyLang(event.target.value));
  }
})();
const WHATSAPP_NUMBER = "32483563735";
const CONTACT_EMAIL = "flexdev.web@gmail.com";
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  const steps = [...contactForm.querySelectorAll(".form-step")];
  const stepcount = document.getElementById("formStepcount");
  const backBtn = document.getElementById("formBack");
  const summary = document.getElementById("formSummary");
  const waLink = document.getElementById("waLink");
  const mailLink = document.getElementById("mailLink");
  const nameInput = document.getElementById("formName");
  const emailInput = document.getElementById("formEmail");
  const phoneInput = document.getElementById("formPhone");
  const msgInput = document.getElementById("formMsg");
  const urlInput = document.getElementById("formUrl");
  const budgetInput = document.getElementById("formBudget");
  const featureStep = contactForm.querySelector('.form-step[data-step="3"]');
  const budgetStep = contactForm.querySelector('.form-step[data-step="5"]');
  const answers = { need: "", project: "", url: "", features: [], launch: "", budget: "", budgetAmount: "", name: "", email: "", phone: "" };
  let currentStep = 1;
  function goStep(n) {
    if (n < 1) { n = 1; }
    if (n > steps.length) { n = steps.length; }
    currentStep = n;
    steps.forEach(s => s.classList.toggle("active", parseInt(s.dataset.step, 10) === n));
    if (stepcount) { stepcount.textContent = n + " / " + steps.length; }
    if (backBtn) { backBtn.style.display = n > 1 ? "inline-block" : "none"; }
  }
  ["1", "4"].forEach(num => {
    const step = contactForm.querySelector('.form-step[data-step="' + num + '"]');
    if (step) {
      step.querySelectorAll(".form-option").forEach(btn => {
        btn.addEventListener("click", () => {
          step.querySelectorAll(".form-option").forEach(b => b.classList.remove("selected"));
          btn.classList.add("selected");
          if (num === "1") { answers.need = btn.dataset.key; }
          if (num === "4") { answers.launch = btn.dataset.key; }
          goStep(currentStep + 1);
        });
      });
    }
  });
  if (featureStep) {
    featureStep.querySelectorAll(".form-option").forEach(btn => {
      btn.addEventListener("click", () => btn.classList.toggle("selected"));
    });
  }
  if (budgetStep) {
    budgetStep.querySelectorAll(".form-option").forEach(btn => {
      btn.addEventListener("click", () => {
        budgetStep.querySelectorAll(".form-option").forEach(b => b.classList.remove("selected"));
        btn.classList.add("selected");
        answers.budget = btn.dataset.key;
        if (budgetInput) { budgetInput.style.display = btn.dataset.key === "budget_yes" ? "block" : "none"; }
      });
    });
  }
  if (backBtn) { backBtn.addEventListener("click", () => goStep(currentStep - 1)); }
  contactForm.querySelectorAll(".form-next").forEach(btn => {
    btn.addEventListener("click", () => {
      const num = btn.closest(".form-step").dataset.step;
      if (num === "2") {
        answers.project = msgInput ? msgInput.value.trim() : "";
        answers.url = urlInput ? urlInput.value.trim() : "";
      }
      if (num === "3") {
        answers.features = featureStep ? [...featureStep.querySelectorAll(".form-option.selected")].map(b => b.dataset.key) : [];
      }
      if (num === "5") {
        answers.name = nameInput ? nameInput.value.trim() : "";
        answers.email = emailInput ? emailInput.value.trim() : "";
        answers.phone = phoneInput ? phoneInput.value.trim() : "";
        answers.budgetAmount = budgetInput ? budgetInput.value.trim() : "";
        buildResult();
      }
      goStep(currentStep + 1);
    });
  });
  function buildResult() {
    const lang = document.documentElement.lang in translations ? document.documentElement.lang : "fr";
    const t = translations[lang];
    const featuresText = answers.features.length ? answers.features.map(k => t[k] || k).join(", ") : "-";
    let budgetText = answers.budget ? (t[answers.budget] || answers.budget) : "-";
    if (answers.budget === "budget_yes" && answers.budgetAmount) { budgetText += " (" + answers.budgetAmount + ")"; }
    const lines = [
      t.greeting,
      "",
      t.summary_need + (answers.need ? t[answers.need] : "-"),
      t.summary_desc + (answers.project || "-"),
      answers.url ? t.summary_url + answers.url : null,
      t.summary_features + featuresText,
      t.summary_timing + (answers.launch ? t[answers.launch] : "-"),
      t.summary_budget + budgetText,
      "",
      t.summary_name + (answers.name || "-"),
      t.summary_email + (answers.email || "-"),
      answers.phone ? t.summary_phone + answers.phone : null
    ].filter(l => l !== null);
    const body = lines.join("\n");
    if (summary) { summary.textContent = body; }
    if (waLink) {
      waLink.href = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(body);
    }
    if (mailLink) {
      const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
      const subject = encodeURIComponent(t.email_subject);
      const bodyEncoded = encodeURIComponent(body);
      if (isMobile) {
        mailLink.href = "mailto:" + CONTACT_EMAIL + "?subject=" + subject + "&body=" + bodyEncoded;
      } else {
        mailLink.href = "https://mail.google.com/mail/?view=cm&fs=1&to=" + CONTACT_EMAIL + "&su=" + subject + "&body=" + bodyEncoded;
      }
    }
  }
  goStep(1);
}
(function initReveal(){
  if (!("IntersectionObserver" in window)) { return; }
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
        setTimeout(function(){ entry.target.style.transitionDelay = ""; entry.target.removeAttribute("data-reveal"); }, 1000);
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
  function set(el, delay){
    if (!el) { return; }
    el.setAttribute("data-reveal", "");
    if (delay) { el.style.transitionDelay = delay + "ms"; }
    io.observe(el);
  }
  document.querySelectorAll(".hero-text > *").forEach(function(el, i){ set(el, i * 100); });
  set(document.querySelector(".hero-visual"), 150);
  set(document.querySelector(".tech-strip"), 0);
  document.querySelectorAll(".about > div").forEach(function(el, i){ set(el, i * 120); });
  document.querySelectorAll(".section-head").forEach(function(el){ set(el, 0); });
  document.querySelectorAll(".service-grid article").forEach(function(el, i){ set(el, (i % 3) * 90); });
  document.querySelectorAll(".why-layout > div:first-child").forEach(function(el){ set(el, 0); });
  document.querySelectorAll(".benefits article").forEach(function(el, i){ set(el, i * 70); });
  document.querySelectorAll(".steps article").forEach(function(el, i){ set(el, i * 90); });
  document.querySelectorAll(".contact > div:first-child").forEach(function(el){ set(el, 0); });
  set(document.querySelector(".contact-details"), 150);
})();
(function initStepsCarousel(){
  var track = document.getElementById("steps");
  var prev = document.getElementById("stepsPrev");
  var next = document.getElementById("stepsNext");
  if (!track) { return; }
  function cardStep(){
    var card = track.querySelector("article");
    if (!card) { return 0; }
    var gap = parseFloat(getComputedStyle(track).columnGap) || 0;
    return card.getBoundingClientRect().width + gap;
  }
  function update(){
    if (!prev || !next) { return; }
    var max = track.scrollWidth - track.clientWidth;
    prev.disabled = track.scrollLeft <= 2;
    next.disabled = track.scrollLeft >= max - 2;
  }
  if (prev) { prev.addEventListener("click", function(){ track.scrollBy({ left: -cardStep(), behavior: "smooth" }); }); }
  if (next) { next.addEventListener("click", function(){ track.scrollBy({ left: cardStep(), behavior: "smooth" }); }); }
  track.addEventListener("scroll", update);
  window.addEventListener("resize", update);
  update();
  track.addEventListener("wheel", function(e){
    if (track.scrollWidth <= track.clientWidth) { return; }
    var atStart = track.scrollLeft <= 0;
    var atEnd = track.scrollLeft >= track.scrollWidth - track.clientWidth - 1;
    if ((atStart && e.deltaY < 0) || (atEnd && e.deltaY > 0)) { return; }
    if (Math.abs(e.deltaY) < Math.abs(e.deltaX)) { return; }
    e.preventDefault();
    var amount = e.deltaMode === 1 ? e.deltaY * 16 : e.deltaY;
    track.scrollLeft += amount;
  }, { passive: false });
})();