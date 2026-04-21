const profileLinks = {
  avatar:
    "https://maximciubari.netlify.app/static/media/avatar.7dfa7488bf2b41fc7f6a.jpeg",
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
    title: "Adp-dia",
    year: "2025",
    categories: ["web-development"],
    href: "https://adp-dia.com/ru",
    image:
      "src/assets/projects/adp-dia/548608222_18264181363304856_7097300522165478111_n.jpg",
    // status: "În dezvoltare",
    partner: "Make IT",
    partnerLink: "https://makeit.md/",
  },
  {
    title: "Vreau",
    year: "2025",
    categories: ["web-development", "marketing"],
    href: "https://vreau.md",
    image:
      "src/assets/projects/vreau/562952958_18268475050304856_5528007544543473249_n.jpg",
    partner: "Make IT",
    partnerLink: "https://makeit.md/",
  },
  {
    title: "Eurocons",
    year: "2023",
    categories: ["branding", "web-development", "marketing"],
    href: "http://eurocons.md",
    image:
      "src/assets/projects/eurocons/f169966d-55b8-4e0c-ba18-24bbf8e9423f.jpeg",
    partner: "Make IT",
    partnerLink: "https://makeit.md/",
  },
  {
    title: "Caparol Moldova – Termoizolatii",
    year: "2023",
    categories: ["web-development", "marketing"],
    href: "https://termoizolatii.md/",
    image:
      "src/assets/projects/caparol/4378f3b5-daf3-4816-99a1-dd3a0031da56.jpeg",
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
    disabled: true,
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
        value: "06+",
        label: "Proiecte finalizate",
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
      eyebrow: "Hey there, I'm",
      name: "Ciubari Maxim",
      role: "Full Stack Developer.",
      location: "Based in Moldova",
      rating: "4.9/5",
      trust: "Trusted by founders and teams across shipped web products",
      contactLabel: "Contact with me",
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
      title: "Where code meets clean product design",
      description:
        "I build scalable Laravel applications, polished interfaces, and reliable delivery workflows for digital products that need clarity and long-term growth.",
      ctaLabel: "Book a free call",
    },
    metrics: [
      {
        value: "06+",
        label: "Project completed",
      },
      {
        value: "15+",
        label: "Core technologies",
      },
      {
        value: "03+",
        label: "Career chapters",
      },
      {
        value: "12+",
        label: "Years volunteering",
      },
    ],
    projectsSection: {
      title: "Take a look at my works",
      description:
        "A summary of my experience across websites, product interfaces, dashboards, and production-ready web applications.",
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
        label: "Product design",
      },
      {
        id: "web-app",
        label: "Web app",
      },
      {
        id: "marketing",
        label: "Marketing",
      },
      {
        id: "dashboard",
        label: "Dashboard",
      },
    ],
    projects,
    servicesSection: {
      title: "How can I help you",
      ctaLabel: "Book a free call",
    },
    services: [
      {
        title: "Laravel Development",
        tags: ["REST APIs", "Admin Panels", "Integrations"],
        description:
          "Clean Laravel architecture, secure integrations, and backend flows that can scale without becoming fragile.",
      },
      {
        title: "Website Design",
        tags: ["Landing Page", "Responsive UI", "Development"],
        description:
          "Minimal, responsive websites where structure, copy, and frontend delivery work as one focused system.",
      },
      {
        title: "Product Design",
        tags: ["Wireframing", "Prototyping", "UX/UI Design"],
        description:
          "Practical product interfaces that support real user flows instead of adding decorative complexity.",
      },
      {
        title: "DevOps Automation",
        tags: ["Docker", "CI/CD", "Linux Automation"],
        description:
          "Container workflows, deployment pipelines, and automation that make product delivery more dependable.",
      },
    ],
    experienceSection: {
      title: "Experience in my career",
    },
    experience: [
      {
        company: "Freelancer",
        role: "Full Stack Developer",
        period: "2024 - Present",
        location: "Moldova",
        type: "Freelance",
        focus: "Laravel, Vue.js, React, MySQL, JavaScript",
        skills: ["Laravel", "Vue.js", "React", "MySQL", "JavaScript"],
        details:
          "Building client web products from backend architecture to polished user interfaces.",
      },
      {
        company: "Edifecs",
        role: "DevOps Developer",
        period: "2021 - 2025",
        location: "Remote",
        type: "Full-Time",
        focus: "Linux, Docker, YAML, CI/CD",
        skills: ["Linux", "Docker", "YAML", "CI/CD"],
        details:
          "Maintained delivery workflows, automation, containers, and Unix-based systems.",
      },
      {
        company: "Enter",
        role: "Content Manager",
        period: "2020 - 2021",
        location: "Chisinau",
        type: "Full-Time",
        focus: "Content operations, QA, Photoshop, 1C",
        skills: ["Content QA", "Photoshop", "1C", "Publishing"],
        details:
          "Managed website content, tested updates, and supported digital publishing workflows.",
      },
    ],
    faqSection: {
      title: "Frequently asked questions",
    },
    faqs: [
      {
        question: "What information do you need to get started?",
        answer:
          "A short project brief, goals, timeline, required features, access to existing assets, and any technical constraints.",
      },
      {
        question: "What do you charge for your services?",
        answer:
          "Pricing depends on scope, complexity, timeline, and the level of support needed. After a short consultation I can provide a clear estimate and delivery plan.",
      },
      {
        question: "Can you work within existing technical guidelines?",
        answer:
          "Yes. I can adapt to existing architecture, coding standards, design systems, deployment workflows, and team conventions.",
      },
      {
        question: "Do you offer ongoing support after project completion?",
        answer:
          "Yes. I can help with improvements, maintenance, bug fixes, performance checks, new features, and deployment support after launch.",
      },
      {
        question: "How do we get started?",
        answer:
          "Send a short description of the project, goals, deadlines, and any existing links or assets. I will review everything and suggest the next practical steps.",
      },
    ],
    contactSection: {
      title: "Have any project idea in your mind",
      description:
        "Share your project details and I will help you get started with a practical technical plan.",
      ctaLabel: "Book a free call",
      socialTitle: "Follow Me",
      highlights: [
        {
          icon: "clock",
          label: "Quick 24-hour response",
        },
        {
          icon: "pricing",
          label: "Transparent pricing",
        },
        {
          icon: "schedule",
          label: "Easy Scheduling",
        },
      ],
    },
    footer: {
      rights: "All rights reserved",
    },
    socials: socialLinks,
  },
};

export const defaultLocale = "ro";
export { availableLocales, siteContentByLocale };
export const siteContent = siteContentByLocale[defaultLocale];
