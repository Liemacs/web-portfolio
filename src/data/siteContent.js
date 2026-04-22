import enter from "../assets/brands/enter.svg";
import estComputer from "../assets/brands/est-computer.svg";
import makeIT from "../assets/brands/make-it.svg";
import preonMode from "../assets/brands/preon-mode.svg";
import avatar from "../assets/avatar.jpg";

const projectAsset = (path) => `/projects/${path}`;
const adpDiaImage1 = projectAsset("adp-dia/548608222_18264181363304856_7097300522165478111_n.jpg");
const adpDiaImage2 = projectAsset("adp-dia/549484131_18264181381304856_1621171512432320843_n.jpg");
const adpDiaImage3 = projectAsset("adp-dia/549650530_18264181378304856_3722004945578060094_n.jpg");
const caparolImage1 = projectAsset("caparol/4378f3b5-daf3-4816-99a1-dd3a0031da56.jpeg");
const caparolImage2 = projectAsset("caparol/d14f9986-6c04-4e44-87d5-8bb90871e3c7.jpeg");
const euroconsImage1 = projectAsset("eurocons/f169966d-55b8-4e0c-ba18-24bbf8e9423f.jpeg");
const euroconsImage2 = projectAsset("eurocons/2eb5cc79-02e2-4676-8ca4-5dd3aa14a1df.jpeg");
const euroconsImage3 = projectAsset("eurocons/b0969d8b-4d6d-4c2c-b4db-e8657ef55f37.jpeg");
const euroconsImage4 = projectAsset("eurocons/c2ddbac5-eeb8-4f59-90b3-a17a98c5b604.jpeg");
const vreauImage1 = projectAsset("vreau/562952958_18268475050304856_5528007544543473249_n.jpg");
const vreauImage2 = projectAsset("vreau/565500058_18268475053304856_8198870660212880753_n.jpg");
const vreauImage3 = projectAsset("vreau/e4f474e2-cedf-4db4-9e5e-121fd853baf6.jpeg");
const dentwolfImage1 = projectAsset("dentwolf/55abe485-8007-4281-b46d-6f32d0d6405c.jpeg");
const dentwolfImage2 = projectAsset("dentwolf/53e6afb6-d886-4a90-98ad-854b6ec1a165.jpeg");
const dentwolfImage3 = projectAsset("dentwolf/3df81778-0e34-4bba-8c53-d9bc3ac0145b.jpeg");
const dentwolfImage4 = projectAsset("dentwolf/abbbb0ea-023d-4606-9787-f2fcc8f965fd.jpeg");
const dgetsImage1 = projectAsset("dgets/b811f0d1-b6ad-4f3b-8f20-37df69f8f1d5.jpeg");
const dgetsImage2 = projectAsset("dgets/361c7c3a-7c1e-4696-b8f9-abaaba2b1807.jpeg");
const dgetsImage3 = projectAsset("dgets/a9baf66b-c1a3-49ce-acdc-f9604161acc7.jpeg");
const primaudirImage1 = projectAsset("primaudit/fe343f37-e440-4321-9462-4241356b0486.jpeg");
const primaudirImage2 = projectAsset("primaudit/342ba647-6f9d-492e-86ef-8d760181642f.jpeg");
const primaudirImage3 = projectAsset("primaudit/db8c29f3-8a60-4175-b97c-60aca1f22da1.jpeg");
const prisdentImage1 = projectAsset("prisdent/a3f1c9e7-5b2d-4d8a-9c71-2f6b8e3a4d90.webp");
const businessmarketImage1 = projectAsset("businessmarket/7d2a6c1f-3e54-4b91-8a0d-5f2c9e7b1a63.webp");

const profileLinks = {
  avatar: avatar,
  email: "ciubari@mail.ru",
  phone: "+373 60 53 1017",
  cv: "https://maximciubari.netlify.app/static/media/cv.5942376022c248f37a32.pdf",
};

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ciub-max",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/braislug1/",
  },
  // {
  //   label: 'Freelancehunt',
  //   href: 'https://freelancehunt.com/freelancer/Liemax.html',
  // },
  {
    label: "Instagram",
    href: "https://www.instagram.com/liemacs/profilecard/?igsh=MWVuNTd4bndtNXFodw==",
  },
];

const projects = [
  {
    id: "dent-wolf-inc",
    order: 1,
    title: "Dent Wolf Inc",
    year: "2025",
    categories: ["web-development", "marketing"],
    href: "https://www.dentwolf.com/",
    images: [dentwolfImage1, dentwolfImage2, dentwolfImage3, dentwolfImage4],
    partner: "Make IT",
    partnerLink: "https://makeit.md/",
  },
  {
    id: "adp-dia",
    order: 2,
    title: "Adp-dia",
    year: "2025",
    categories: ["web-development"],
    href: "https://adp-dia.com/ru",
    images: [adpDiaImage1, adpDiaImage2, adpDiaImage3],
    partner: "Make IT",
    partnerLink: "https://makeit.md/",
  },
  {
    id: "vreau",
    order: 3,
    title: "Vreau",
    year: "2025",
    categories: ["web-development", "marketing"],
    href: "https://vreau.md",
    images: [vreauImage1, vreauImage2, vreauImage3],
    partner: "Make IT",
    partnerLink: "https://makeit.md/",
  },
  {
    id: "eurocons",
    order: 4,
    title: "Eurocons",
    year: "2025",
    categories: ["branding", "web-development", "marketing"],
    href: "http://eurocons.md",
    images: [euroconsImage1, euroconsImage2, euroconsImage3, euroconsImage4],
    partner: "Make IT",
    partnerLink: "https://makeit.md/",
  },
  {
    id: "caparol-termoizolatii",
    order: 5,
    title: "Caparol Moldova – Termoizolatii",
    year: "2025",
    categories: ["web-development", "marketing"],
    href: "https://termoizolatii.md/",
    images: [caparolImage1, caparolImage2],
    partner: "Make IT",
    partnerLink: "https://makeit.md/",
  },
  {
    id: "dgets",
    order: 6,
    title: "DGETS.md – Platforma Educației din Chișinău",
    year: "2025",
    categories: ["web-development", "web-app"],
    href: "https://chisinauedu.dgets.md/",
    images: [dgetsImage1, dgetsImage2, dgetsImage3],
    partner: "Make IT",
    partnerLink: "https://makeit.md/",
  },
  {
    id: "primaudit",
    order: 7,
    title: "PrimAudit",
    year: "2026",
    categories: ["web-development", "web-app"],
    href: "https://primaudit.md/",
    images: [primaudirImage1, primaudirImage2, primaudirImage3],
    partner: "Make IT",
    partnerLink: "https://makeit.md/",
  },
  {
    id: "prisdent",
    order: 8,
    title: "Prisdent",
    year: "2026",
    categories: ["web-development", "web-app", "branding"],
    href: "https://prisdent.md/",
    images: [prisdentImage1],
    status: "În dezvoltare",
  },
  {
    id: "sanmarino",
    order: 9,
    title: "San Marino",
    year: "2026",
    categories: ["web-development", "web-app", "marketing"],
    href: "https://sanmarino-web.vercel.app/",
    images: [prisdentImage1],
    status: "În dezvoltare",
  },
  {
    id: "eduresurse",
    order: 10,
    title: "EduResurse",
    year: "2026",
    categories: ["web-development", "web-app"],
    href: "https://eduresurse.justit.md/",
    images: [prisdentImage1],
    status: "În dezvoltare",
  },
  {
    id: "alpina",
    order: 11,
    title: "Alpina",
    year: "2026",
    categories: ["web-development", "marketing"],
    href: "https://alpina.justit.md/",
    images: [prisdentImage1],
    status: "În dezvoltare",
    partner: "Make IT",
    partnerLink: "https://makeit.md/",
  },
  {
    id: "business-market",
    order: 12,
    title: "Business Market",
    year: "2026",
    categories: ["web-development"],
    href: "https://www.businessmarket.md/",
    images: [businessmarketImage1],
    status: "În dezvoltare",
    partner: "Make IT",
    partnerLink: "https://makeit.md/",
  },
  // {
  //   title: "Preon Mode",
  //   year: "2025",
  //   categories: ["web-development", "dashboard", "web-app"],
  //   href: "https://preonmode.com/",
  //   image:
  //     "https://cdn.prod.website-files.com/69b5342710f42330586abea2/69b53ab58b03552fa6f3ebaf_thumb-3.webp",
  // },
];

const availableLocales = [
  {
    code: "ro",
    shortLabel: "Ro",
    label: "Română",
  },
  {
    code: "en",
    shortLabel: "En",
    label: "English",
  },
  {
    code: "it",
    shortLabel: "It",
    label: "Italiană",
    // disabled: true,
  },
];

const siteContentByLocale = {
  ro: {
    profile: {
      ...profileLinks,
      eyebrow: "Salut, eu sunt",
      name: "Ciubari Maxim",
      role: "Full Stack Developer.",
      location: "Lucrez din Moldova",
      rating: "4.9/5",
      trust:
        "De încredere pentru fondatori și echipe care lansează produse web",
      contactLabel: "Contactează-mă",
    },
    header: {
      languageButtonLabel: "Selectează limba",
      languageOptionsLabel: "Opțiuni de limbă",
    },
    navigation: [
      "Dezvoltare Laravel",
      "Design website",
      "Design de produs",
      "Automatizări DevOps",
    ],
    hero: {
      title: "Creez sisteme web gândite pentru utilizare reală",
      description:
        "Construiesc sisteme backend și frontend care funcționează simplu, clar și scalabil în producție.",
      ctaLabel: "Programează un apel gratuit",
    },
    metrics: [
      {
        value: "10+",
        label: "Proiecte finalizate",
      },
      {
        value: "05",
        label: "Proiecte în dezvoltare",
      },
      {
        value: "05+",
        label: "Tehnologii principale",
      },
      {
        value: "03+",
        label: "Ani de experiență",
      },
    ],
    projectsSection: {
      title: "Vezi câteva dintre lucrările mele",
      description:
        "O privire de ansamblu asupra experienței mele în website-uri, dashboard-uri și aplicații web pregătite pentru producție.",
      imageAltLabel: "previzualizare proiect",
    },
    projectCategories: [
      {
        id: "all",
        label: "Toate proiectele",
      },
      {
        id: "branding",
        label: "Branding",
      },
      {
        id: "web-development",
        label: "Dezvoltare web",
      },
      // {
      //   id: "product-design",
      //   label: "Design de produs",
      // },
      {
        id: "web-app",
        label: "Aplicație web",
      },
      {
        id: "marketing",
        label: "Ecommerce",
      },
      {
        id: "dashboard",
        label: "Dashboard",
      },
    ],
    projects,
    servicesSection: {
      title: "Cum te pot ajuta",
      ctaLabel: "Programează un apel gratuit",
    },
    services: [
      {
        title: "Dezvoltare Laravel",
        tags: ["REST API-uri", "Autentificare", "Sisteme backend"],
        description:
          "Construiesc aplicații Laravel pentru logică de business, autentificare, gestionare de date și sisteme backend structurate și scalabile.",
      },
      {
        title: "Frontend cu Vue.js",
        tags: ["UI dinamic", "Componente", "SPA"],
        description:
          "Dezvolt interfețe moderne cu Vue.js conectate la backend, cu accent pe experiență de utilizare și arhitectură componentizată.",
      },
      {
        title: "Web Design & UI",
        tags: ["Design responsive", "Landing pages", "UI modern"],
        description:
          "Creez design-uri de website clare și responsive, unde structura, estetica și experiența utilizatorului lucrează împreună.",
      },
      {
        title: "CI/CD & Automatizare",
        tags: ["GitLab CI/CD", "Deploy", "Fluxuri automatizate"],
        description:
          "Configurez pipeline-uri de deploy și procese de automatizare pentru livrare stabilă și predictibilă a aplicațiilor.",
      },
    ],
    experienceSection: {
      title: "Experiența mea profesională",
    },
    experience: [
      {
        company: "Preon Mode",
        brandLogo: preonMode,
        role: "Full Stack Developer",
        period: "Martie 2024 - Present",
        location: "Remote",
        type: "Freelance",
        skills: [
          "Laravel",
          "Vue.js",
          "React",
          "MySQL",
          "JavaScript",
          "REST API",
          "UI/UX",
        ],
        details: `Lucrez la dezvoltarea de aplicații web complete, acoperind atât partea de backend cât și frontend, cu focus pe structură și scalabilitate.
    • Dezvoltare aplicații folosind Laravel, Vue.js și React  
    • Proiectare arhitectură backend și organizare cod  
    • Integrare API-uri și servicii externe  
    • Creare interfețe UI/UX responsive  
    • Optimizare performanță și baze de date  
    • Deployment pe platforme moderne  
    `,
      },
      {
        company: "Make IT",
        brandLogo: makeIT,
        role: "Full Stack Developer",
        period: "Iunie 2025 - Present",
        location: "Remote",
        type: "Freelance",
        skills: ["Laravel", "Vue.js", "UI/UX", "Web Development"],
        details: `Colaborez ca freelancer pe proiecte web, dezvoltând soluții adaptate cerințelor de business.
    • Dezvoltare și mentenanță aplicații Laravel  
    • Integrare API-uri și funcționalități custom  
    • Implementare soluții în funcție de cerințele clientului  
    `,
      },
      {
        company: "Est Computer",
        brandLogo: estComputer,
        role: "DevOps Developer",
        period: "Octombrie 2021 - Ianuarie 2025",
        location: "Chișinău, Moldova",
        type: "Full-Time",
        skills: [
          "Linux",
          "Docker",
          "CI/CD",
          "YAML",
          "Git",
          "Bash",
          "VMware",
          "SAST",
          "DAST",
        ],
        details: `Am lucrat pe partea de infrastructură și automatizare, asigurând procese stabile de livrare și deployment.
    • Administrare sisteme Linux (Rocky, Ubuntu)  
    • Configurare și mentenanță pipeline-uri CI/CD  
    • Creare și gestionare containere Docker  
    • Automatizare procese cu YAML și Bash scripting  
    • Configurare mașini virtuale (VMware vRA8)  
    • Utilizare Git și SVN pentru versionare  
    • Implementare tool-uri de securitate (SAST, DAST)  
    `,
      },
      {
        company: "Enter",
        brandLogo: enter,
        role: "Web Content Manager",
        period: "August 2020 - Octombrie 2021",
        location: "Chișinău, Moldova",
        type: "Full-Time",
        skills: [
          "Content Management",
          "QA Testing",
          "Photoshop",
          "1C",
          "Bitrix24",
        ],
        details: `Am gestionat conținutul digital și am contribuit la menținerea calității platformei.
    • Testare și validare actualizări website  
    • Raportare bug-uri în Bitrix24  
    • Editare imagini în Adobe Photoshop  
    • Publicare produse și conținut  
    • Lucru cu sistemul 1C  
    `,
      },
    ],
    faqSection: {
      title: "Întrebări frecvente",
    },
    faqs: [
      {
        question: "De ce informații ai nevoie pentru a începe?",
        answer:
          "Un brief scurt al proiectului, obiectivele, termenul de livrare, funcționalitățile necesare, acces la materialele existente și orice constrângeri tehnice.",
      },
      {
        question: "Care sunt costurile pentru serviciile tale?",
        answer:
          "Prețul depinde de scop, complexitate, termen și nivelul de suport necesar. După o consultație scurtă pot oferi o estimare clară și un plan de livrare.",
      },
      {
        question: "Poți lucra după ghiduri tehnice existente?",
        answer:
          "Da. Mă pot adapta la arhitectura existentă, standarde de cod, design system-uri, workflow-uri de deployment și convențiile echipei.",
      },
      {
        question: "Oferi suport după finalizarea proiectului?",
        answer:
          "Da. Pot ajuta cu îmbunătățiri, mentenanță, bug fixing, verificări de performanță, funcționalități noi și suport pentru deployment după lansare.",
      },
      {
        question: "Cum începem colaborarea?",
        answer:
          "Trimite o descriere scurtă a proiectului, obiectivele, deadline-urile și orice linkuri sau materiale existente. Le voi analiza și voi propune următorii pași practici.",
      },
    ],
    contactSection: {
      title: "Ai o idee de proiect în minte?",
      description:
        "Trimite detaliile proiectului și te voi ajuta să pornești cu un plan tehnic practic.",
      ctaLabel: "Programează un apel gratuit",
      socialTitle: "Urmărește-mă",
      highlights: [
        {
          icon: "clock",
          label: "Răspuns rapid în 24 de ore",
        },
        {
          icon: "pricing",
          label: "Prețuri accesibile",
        },
        {
          icon: "schedule",
          label: "Programare simplă",
        },
      ],
    },
    footer: {
      rights: "Toate drepturile rezervate",
    },
    socials: socialLinks,
  },
  en: {
    profile: {
      ...profileLinks,
      eyebrow: "Hi, I’m",
      name: "Ciubari Maxim",
      role: "Full Stack Developer.",
      location: "Working remotely from Moldova",
      rating: "4.9/5",
      trust:
        "Trusted by founders and teams across shipped web products",
      contactLabel: "Contact me",
    },
    header: {
      languageButtonLabel: "Select language",
      languageOptionsLabel: "Language options",
    },
    navigation: [
      "Laravel Development",
      "Website Design",
      "Product Design",
      "DevOps Automation",
    ],
    hero: {
      title: "I build web systems designed for real-world use",
      description:
        "I develop backend and frontend systems that are simple, clear, and scalable in production.",
      ctaLabel: "Book a free call",
    },
    metrics: [
      {
        value: "06+",
        label: "Projects completed",
      },
      {
        value: "15+",
        label: "Core technologies",
      },
      {
        value: "03+",
        label: "Years of experience",
      },
      {
        value: "12+",
        label: "Years of volunteering",
      },
    ],
    projectsSection: {
      title: "Explore some of my work",
      description:
        "An overview of my experience across websites, dashboards, and production-ready web applications.",
      imageAltLabel: "project preview",
    },
    projectCategories: [
      {
        id: "all",
        label: "All projects",
      },
      {
        id: "branding",
        label: "Branding",
      },
      {
        id: "web-development",
        label: "Web Development",
      },
      {
        id: "product-design",
        label: "Product Design",
      },
      {
        id: "web-app",
        label: "Web Application",
      },
      {
        id: "marketing",
        label: "Ecommerce",
      },
      {
        id: "dashboard",
        label: "Dashboard",
      },
    ],
    projects,
    servicesSection: {
      title: "How I can help",
      ctaLabel: "Book a free call",
    },
    services: [
      {
        title: "Laravel Development",
        tags: ["REST APIs", "Authentication", "Backend Systems"],
        description:
          "I build Laravel applications focused on business logic, authentication, data management, and scalable backend architecture.",
      },
      {
        title: "Frontend with Vue.js",
        tags: ["Dynamic UI", "Components", "SPA"],
        description:
          "I develop modern interfaces with Vue.js connected to backend systems, with a strong focus on user experience and component-based architecture.",
      },
      {
        title: "Web Design & UI",
        tags: ["Responsive Design", "Landing Pages", "Modern UI"],
        description:
          "I create clean and responsive website designs where structure, aesthetics, and user experience work together.",
      },
      {
        title: "CI/CD & Automation",
        tags: ["GitLab CI/CD", "Deployment", "Automated Workflows"],
        description:
          "I set up deployment pipelines and automation processes to ensure stable and predictable application delivery.",
      },
    ],
    experienceSection: {
      title: "Professional Experience",
    },
    experience: [
      {
        company: "Preon Mode",
        role: "Full Stack Developer",
        period: "March 2024 - Present",
        location: "Remote",
        type: "Freelance",
        skills: [
          "Laravel",
          "Vue.js",
          "React",
          "MySQL",
          "JavaScript",
          "REST API",
          "UI/UX",
        ],
        details: `I work on developing full web applications, covering both backend and frontend, with a focus on structure and scalability.
    • Building applications using Laravel, Vue.js, and React  
    • Designing backend architecture and organizing code  
    • Integrating APIs and external services  
    • Creating responsive UI/UX interfaces  
    • Optimizing performance and databases  
    • Deployment on modern platforms  
    `,
      },
      {
        company: "Make IT",
        role: "Full Stack Developer",
        period: "June 2025 - Present",
        location: "Remote",
        type: "Freelance",
        skills: ["Laravel", "Vue.js", "UI/UX", "Web Development"],
        details: `I collaborate as a freelancer on web projects, developing solutions tailored to business requirements.
    • Developing and maintaining Laravel applications  
    • Integrating APIs and custom functionalities  
    • Implementing solutions based on client requirements  
    `,
      },
      {
        company: "Est Computer",
        role: "DevOps Developer",
        period: "October 2021 - January 2025",
        location: "Chișinău, Moldova",
        type: "Full-Time",
        skills: [
          "Linux",
          "Docker",
          "CI/CD",
          "YAML",
          "Git",
          "Bash",
          "VMware",
          "SAST",
          "DAST",
        ],
        details: `I worked on infrastructure and automation, ensuring stable delivery and deployment processes.
    • Linux system administration (Rocky, Ubuntu)  
    • Configuring and maintaining CI/CD pipelines  
    • Creating and managing Docker containers  
    • Automating processes with YAML and Bash scripting  
    • Configuring virtual machines (VMware vRA8)  
    • Using Git and SVN for version control  
    • Implementing security tools (SAST, DAST)  
    `,
      },
      {
        company: "Enter",
        role: "Web Content Manager",
        period: "August 2020 - October 2021",
        location: "Chișinău, Moldova",
        type: "Full-Time",
        skills: [
          "Content Management",
          "QA Testing",
          "Photoshop",
          "1C",
          "Bitrix24",
        ],
        details: `I managed digital content and contributed to maintaining platform quality.
    • Testing and validating website updates  
    • Reporting bugs in Bitrix24  
    • Editing images in Adobe Photoshop  
    • Publishing products and content  
    • Working with the 1C system  
    `,
      },
    ],
    faqSection: {
      title: "Frequently Asked Questions",
    },
    faqs: [
      {
        question: "What information do you need to get started?",
        answer:
          "A short project brief, objectives, timeline, required features, access to existing materials, and any technical constraints.",
      },
      {
        question: "What are your service costs?",
        answer:
          "Pricing depends on scope, complexity, timeline, and level of support required. After a short consultation, I can provide a clear estimate and delivery plan.",
      },
      {
        question: "Can you work with existing technical guidelines?",
        answer:
          "Yes. I can adapt to existing architecture, coding standards, design systems, deployment workflows, and team conventions.",
      },
      {
        question: "Do you provide support after project completion?",
        answer:
          "Yes. I can help with improvements, maintenance, bug fixing, performance checks, new features, and post-launch support.",
      },
      {
        question: "How do we start working together?",
        answer:
          "Send a short description of your project, objectives, deadlines, and any existing materials or links. I’ll review them and propose the next practical steps.",
      },
    ],
    contactSection: {
      title: "Have any project idea in your mind",
      description:
        "Send your project details and I’ll help you start with a practical technical plan.",
      ctaLabel: "Book a free call",
      socialTitle: "Follow me",
      highlights: [
        {
          icon: "clock",
          label: "Response within 24 hours",
        },
        {
          icon: "pricing",
          label: "Affordable pricing",
        },
        {
          icon: "schedule",
          label: "Easy scheduling",
        },
      ],
    },
    footer: {
      rights: "All rights reserved",
    },
    socials: socialLinks,
  },
  it: {
    profile: {
      ...profileLinks,
      eyebrow: "Ciao, sono",
      name: "Ciubari Maxim",
      role: "Full Stack Developer.",
      location: "Lavoro da remoto dalla Moldavia",
      rating: "4.9/5",
      trust:
        "Scelto da founder e team che costruiscono e lanciano prodotti web",
      contactLabel: "Contattami",
    },
    header: {
      languageButtonLabel: "Seleziona lingua",
      languageOptionsLabel: "Opzioni lingua",
    },
    navigation: [
      "Sviluppo Laravel",
      "Web Design",
      "Product Design",
      "Automazione DevOps",
    ],
    hero: {
      title: "Realizzo sistemi web pensati per l’uso reale",
      description:
        "Sviluppo sistemi backend e frontend semplici, chiari e scalabili in produzione.",
      ctaLabel: "Prenota una call gratuita",
    },
    metrics: [
      {
        value: "06+",
        label: "Progetti completati",
      },
      {
        value: "15+",
        label: "Tecnologie principali",
      },
      {
        value: "03+",
        label: "Anni di esperienza",
      },
      {
        value: "12+",
        label: "Anni di volontariato",
      },
    ],
    projectsSection: {
      title: "Scopri alcuni dei miei lavori",
      description:
        "Una panoramica della mia esperienza in siti web, dashboard e applicazioni web pronte per la produzione.",
      imageAltLabel: "anteprima progetto",
    },
    projectCategories: [
      {
        id: "all",
        label: "Tutti i progetti",
      },
      {
        id: "branding",
        label: "Branding",
      },
      {
        id: "web-development",
        label: "Sviluppo Web",
      },
      {
        id: "product-design",
        label: "Product Design",
      },
      {
        id: "web-app",
        label: "Applicazione Web",
      },
      {
        id: "marketing",
        label: "Ecommerce",
      },
      {
        id: "dashboard",
        label: "Dashboard",
      },
    ],
    projects,
    servicesSection: {
      title: "Come posso aiutarti",
      ctaLabel: "Prenota una call gratuita",
    },
    services: [
      {
        title: "Sviluppo Laravel",
        tags: ["REST API", "Autenticazione", "Sistemi Backend"],
        description:
          "Sviluppo applicazioni Laravel focalizzate su logica di business, autenticazione, gestione dei dati e architetture backend scalabili.",
      },
      {
        title: "Frontend con Vue.js",
        tags: ["UI dinamica", "Componenti", "SPA"],
        description:
          "Creo interfacce moderne con Vue.js collegate al backend, con attenzione all’esperienza utente e a un’architettura basata su componenti.",
      },
      {
        title: "Web Design & UI",
        tags: ["Design responsive", "Landing page", "UI moderna"],
        description:
          "Realizzo design di siti web chiari e responsive, dove struttura, estetica ed esperienza utente lavorano insieme.",
      },
      {
        title: "CI/CD & Automazione",
        tags: ["GitLab CI/CD", "Deployment", "Workflow automatizzati"],
        description:
          "Configuro pipeline di deploy e processi di automazione per garantire una consegna stabile e prevedibile delle applicazioni.",
      },
    ],
    experienceSection: {
      title: "Esperienza professionale",
    },
    experience: [
      {
        company: "Preon Mode",
        role: "Full Stack Developer",
        period: "Marzo 2024 - Presente",
        location: "Remoto",
        type: "Freelance",
        skills: [
          "Laravel",
          "Vue.js",
          "React",
          "MySQL",
          "JavaScript",
          "REST API",
          "UI/UX",
        ],
        details: `Lavoro allo sviluppo di applicazioni web complete, coprendo sia backend che frontend, con focus su struttura e scalabilità.
    • Sviluppo applicazioni con Laravel, Vue.js e React  
    • Progettazione dell’architettura backend e organizzazione del codice  
    • Integrazione di API e servizi esterni  
    • Creazione di interfacce UI/UX responsive  
    • Ottimizzazione delle performance e dei database  
    • Deployment su piattaforme moderne  
    `,
      },
      {
        company: "Make IT",
        role: "Full Stack Developer",
        period: "Giugno 2025 - Presente",
        location: "Remoto",
        type: "Freelance",
        skills: ["Laravel", "Vue.js", "UI/UX", "Web Development"],
        details: `Collaboro come freelance su progetti web, sviluppando soluzioni adattate alle esigenze di business.
    • Sviluppo e manutenzione di applicazioni Laravel  
    • Integrazione di API e funzionalità personalizzate  
    • Implementazione di soluzioni in base ai requisiti del cliente  
    `,
      },
      {
        company: "Est Computer",
        role: "DevOps Developer",
        period: "Ottobre 2021 - Gennaio 2025",
        location: "Chișinău, Moldavia",
        type: "Full-Time",
        skills: [
          "Linux",
          "Docker",
          "CI/CD",
          "YAML",
          "Git",
          "Bash",
          "VMware",
          "SAST",
          "DAST",
        ],
        details: `Ho lavorato su infrastruttura e automazione, garantendo processi di delivery e deployment stabili.
    • Amministrazione sistemi Linux (Rocky, Ubuntu)  
    • Configurazione e manutenzione di pipeline CI/CD  
    • Creazione e gestione di container Docker  
    • Automazione dei processi con YAML e Bash scripting  
    • Configurazione macchine virtuali (VMware vRA8)  
    • Utilizzo di Git e SVN per il versionamento  
    • Implementazione di strumenti di sicurezza (SAST, DAST)  
    `,
      },
      {
        company: "Enter",
        role: "Web Content Manager",
        period: "Agosto 2020 - Ottobre 2021",
        location: "Chișinău, Moldavia",
        type: "Full-Time",
        skills: [
          "Content Management",
          "QA Testing",
          "Photoshop",
          "1C",
          "Bitrix24",
        ],
        details: `Ho gestito contenuti digitali e contribuito al mantenimento della qualità della piattaforma.
    • Test e validazione degli aggiornamenti del sito  
    • Segnalazione bug in Bitrix24  
    • Modifica immagini in Adobe Photoshop  
    • Pubblicazione prodotti e contenuti  
    • Utilizzo del sistema 1C  
    `,
      },
    ],
    faqSection: {
      title: "Domande frequenti",
    },
    faqs: [
      {
        question: "Di quali informazioni hai bisogno per iniziare?",
        answer:
          "Un breve brief del progetto, obiettivi, tempistiche, funzionalità richieste, accesso ai materiali esistenti ed eventuali vincoli tecnici.",
      },
      {
        question: "Quali sono i costi dei tuoi servizi?",
        answer:
          "Il prezzo dipende da ambito, complessità, tempistiche e livello di supporto richiesto. Dopo una breve consulenza posso fornire una stima chiara e un piano di consegna.",
      },
      {
        question: "Puoi lavorare con linee guida tecniche esistenti?",
        answer:
          "Sì. Posso adattarmi ad architetture esistenti, standard di codice, design system, workflow di deployment e convenzioni del team.",
      },
      {
        question: "Offri supporto dopo la consegna del progetto?",
        answer:
          "Sì. Posso aiutare con miglioramenti, manutenzione, bug fixing, verifiche delle performance, nuove funzionalità e supporto post-lancio.",
      },
      {
        question: "Come iniziamo a lavorare insieme?",
        answer:
          "Invia una breve descrizione del progetto, obiettivi, scadenze ed eventuali materiali o link esistenti. Li analizzerò e proporrò i prossimi passi pratici.",
      },
    ],
    contactSection: {
      title: "Hai un’idea di progetto?",
      description:
        "Condividi i dettagli del tuo progetto e ti aiuterò a iniziare con un piano tecnico pratico.",
      ctaLabel: "Prenota una call gratuita",
      socialTitle: "Seguimi",
      highlights: [
        {
          icon: "clock",
          label: "Risposta entro 24 ore",
        },
        {
          icon: "pricing",
          label: "Prezzi accessibili",
        },
        {
          icon: "schedule",
          label: "Prenotazione semplice",
        },
      ],
    },
    footer: {
      rights: "Tutti i diritti riservati",
    },
    socials: socialLinks,
  },
};

export const defaultLocale = "ro";
export { availableLocales, siteContentByLocale };
export const siteContent = siteContentByLocale[defaultLocale];
