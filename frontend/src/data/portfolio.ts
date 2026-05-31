export const personalInfo = {
  name: "Fenoanjara SENGA",
  title: "Développeur Full Stack",
  tagline:
    "Je construis des APIs robustes, des apps mobiles et des interfaces modernes.",
  email: "sengafenoanjara@gmail.com",
  phone: "+261 34 85 96 777",
  location: "Fianarantsoa, Madagascar",
  github: "https://github.com/LouisSenga",
  linkedin: "",
  playstore: "https://play.google.com/store/apps/details?id=com.koekip.app",
  about: `Développeur Full Stack passionné, diplômé d'un Master II en Science des Données et
Intelligence Artificielle. Spécialisé en développement backend avec NestJS et Laravel,
je conçois des APIs performantes, des applications mobiles React Native et des interfaces
modernes avec React et Next.js. Rigoureux, curieux et toujours en veille technologique,
j'aime résoudre des problèmes complexes et livrer des produits qui ont un impact réel.`,
};

export const experiences = [
  {
    title: "Développeur Full Stack",
    company: "AKATA GOAVANA",
    location: "Fianarantsoa",
    period: "Juin 2025 – Présent",
    current: true,
    tasks: [
      "Développement backend avec NestJS, Express.js et Laravel sur plusieurs projets simultanés.",
      "Développement frontend avec React et Next.js.",
      "Développement mobile React Native : Rankocracy App (publiée sur Play Store) et Koékip App (publiée sur Play Store).",
      "Développement de Kasamai Talents : plateforme SaaS d'optimisation de profil professionnel par IA (NLP, analyse de CV, recommandations personnalisées).",
      "Intégration d'APIs IA : OpenAI et Gemini. Intégration Stripe pour les paiements.",
      "Services Google : OAuth2, Calendar API, Gmail API via Google Cloud Console.",
      "Conteneurisation Docker, Redis pour le traitement IA, gestion de versions GitLab/Git.",
    ],
  },
  {
    title: "Développeur Backend",
    company: "MOSYC – Unité de recherche de l'EMIT",
    location: "Fianarantsoa",
    period: "Septembre 2024 – Novembre 2024",
    current: false,
    tasks: [
      "Développement des API pour la gestion des thèses, projets de recherche, membres et publications.",
      "Modélisation des données et relations avec Eloquent ORM (Laravel).",
      "Contrôles d'accès par rôles et permissions.",
      "Optimisation des performances de 30% par refactorisation du code existant.",
    ],
  },
  {
    title: "Développeur Backend – Hackathon Aquisio",
    company: "Accès Banque / EMIT",
    location: "2e Place",
    period: "24 – 27 Mars 2024",
    current: false,
    tasks: [
      "APIs backend NestJS pour Aquisio, plateforme de gestion des achats en entreprise.",
      "Emails transactionnels et notifications temps réel via WebSockets.",
      "Authentification JWT et gestion des rôles.",
    ],
  },
  {
    title: "Développeur Web",
    company: "Le Port Hôtel",
    location: "",
    period: "Février 2024 – Avril 2024",
    current: false,
    tasks: [
      "Site vitrine et espace administratif complet (Laravel, Vite.js, MySQL).",
      "Module de réservations en ligne et gestion des chambres.",
      "Tests unitaires couvrant 85% du codebase.",
    ],
  },
  {
    title: "Développeur Web",
    company: "IRA Hôtel",
    location: "",
    period: "Octobre 2023 – Décembre 2023",
    current: false,
    tasks: [
      "Site public et tableau de bord admin (Laravel, Vite.js).",
      "Migration et normalisation de la base de données.",
      "Sécurisation CSRF, sanitization et refactoring API REST.",
    ],
  },
];

export const projects = [
  {
    title: "Kasamai Talents",
    description:
      "Plateforme SaaS d'optimisation de profil professionnel par IA. Analyse automatique de CV (NLP), extraction de compétences, recommandations personnalisées et préparation aux entretiens. Module gratuit d'analyse + modules payants (achat unique via Stripe).",
    tags: [
      "NestJS",
      "Next.js",
      "PostgreSQL",
      "Redis",
      "OpenAI",
      "Stripe",
      "SaaS",
    ],
    link: "",
    github: "",
    highlight: true,
    badge: "🤖 IA & SaaS",
    color: "violet-cyan",
    playstore: "",
  },
  {
    title: "Rankocracy App",
    description:
      "Plateforme citoyenne mobile : votez pour ou contre des personnalités politiques mondiales, suivez les classements en temps réel, débattez dans les commentaires. Actualités mondiales intégrées. Publiée sur le Google Play Store.",
    tags: ["React Native", "NestJS", "WebSockets", "API REST", "Google Play"],
    link: "https://play.google.com/store/apps/details?id=com.rankocracy.app",
    github: "",
    highlight: true,
    badge: "🗳️ Live sur Play Store",
    color: "blue-violet",
    playstore:
      "https://play.google.com/store/apps/details?id=com.rankocracy.app",
  },
  {
    title: "Koékip App",
    description:
      "Application mobile qui connecte les sportifs entre eux. Trouve un binôme, rejoins une équipe, participe à des sessions spontanées. Espace handisport dédié. Publiée sur le Google Play Store.",
    tags: ["React Native", "NestJS", "Google Play", "WebSockets", "Mobile"],
    link: "https://play.google.com/store/apps/details?id=com.koekip.app",
    github: "",
    highlight: true,
    badge: "🏆 Live sur Play Store",
    color: "violet-cyan",
    playstore: "https://play.google.com/store/apps/details?id=com.koekip.app",
  },
  {
    title: "Aquisio – Hackathon",
    description:
      "Plateforme de gestion des achats en entreprise développée en 72h lors d'un hackathon Accès Banque. 2e place. APIs NestJS, emails transactionnels, notifications temps réel WebSockets.",
    tags: ["NestJS", "WebSockets", "JWT", "Email", "Hackathon"],
    link: "",
    github: "",
    highlight: false,
    badge: "🥈 2e Place Hackathon",
    color: "cyan-blue",
    playstore: "",
  },
  {
    title: "Le Port Hôtel",
    description:
      "Site vitrine et espace administratif complet pour un hôtel. Gestion des chambres, réservations en ligne, tableau de bord admin. 85% de couverture tests unitaires.",
    tags: ["Laravel", "Vite.js", "MySQL", "Blade", "Tests"],
    link: "",
    github: "",
    highlight: false,
    badge: "🏨 Site Web",
    color: "emerald-cyan",
    playstore: "",
  },
  {
    title: "IRA Hôtel",
    description:
      "Refonte complète du site web public et du tableau de bord administrateur. Migration de base de données, sécurisation CSRF, refactoring API REST avec Eloquent ORM.",
    tags: ["Laravel", "Vite.js", "API REST", "MySQL", "Sécurité"],
    link: "",
    github: "",
    highlight: false,
    badge: "🏨 Site Web",
    color: "orange-pink",
    playstore: "",
  },
];

export const skills = [
  {
    category: "Backend (Favori)",
    icon: "⚡",
    items: ["NestJS", "Laravel", "Express.js", "API REST", "WebSockets", "JWT"],
  },
  {
    category: "Frontend & Mobile",
    icon: "🎨",
    items: [
      "React",
      "Next.js",
      "Vue.js",
      "React Native",
      "Vite.js",
      "Tailwind CSS",
    ],
  },
  {
    category: "Base de données",
    icon: "🗄️",
    items: [
      "MySQL",
      "PostgreSQL",
      "Redis",
      "Eloquent ORM",
      "Modélisation MERISE",
      "UML",
    ],
  },
  {
    category: "Cloud & IA",
    icon: "🤖",
    items: [
      "OpenAI API",
      "Gemini API",
      "Google OAuth2",
      "Gmail API",
      "Google Calendar API",
      "NLP",
    ],
  },
  {
    category: "DevOps & Outils",
    icon: "🛠️",
    items: ["Docker", "Git", "GitLab", "GitHub", "Stripe", "Google Play Store"],
  },
  {
    category: "Langages",
    icon: "💻",
    items: ["TypeScript", "JavaScript", "PHP", "Java"],
  },
];

export const education = [
  {
    degree: "Master II – Science des Données et Intelligence Artificielle",
    school: "EMIT Fianarantsoa",
    year: "2025",
  },
  {
    degree: "Licence – Développement d'Application Internet et Intranet",
    school: "EMIT Fianarantsoa",
    year: "2023",
  },
  {
    degree: "Baccalauréat Série D",
    school: "Institution Marthe Hervé (IMH)",
    year: "2019",
  },
];
