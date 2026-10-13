import {
  PersonalInfo,
  Project,
  SideProject,
  SocialLink,
  NavItem,
  Skill,
  TechnicalFocusItem,
} from "./types";

import {
  HomeIcon,
  UserIcon,
  Squares2X2Icon,
  CpuChipIcon,
  EnvelopeIcon,
  CheckBadgeIcon,
  ServerStackIcon,
  LinkedinIcon,
  InstagramIcon,
  GithubIcon,
  CodeBracketSquareIcon,
  CommandLineIcon,
  FiActivity,
  FiLayers,
  FiDatabase,
  FiBookOpen,
  FiCode,
  FiType,
  FiShield,
  FiWind,
  FiRefreshCw,
  FiFeather,
} from "./components/icons";

import daffaAvatar from "./assets/daffa_avatar.svg";

// Optional: Replace with your own Web3Forms Access Key from https://web3forms.com/
export const WEB3FORMS_ACCESS_KEY = "";

/** Template author credit in the footer (clickable) */
export const DEVELOPER_CREDIT = {
  name: "Anand Krishna",
  animatedNameEnglish: "Krishna",
  animatedNameJapanese: "クリシュナ",
  url: "https://instagram.com/krishhnahere",
};

/**
 * Visitor count shown on the home hero.
 */
export const VISITOR_STATS = {
  staticCount: 1240,
  enableLiveCount: false,
};

export const PERSONAL_INFO: PersonalInfo = {
  name: "Daffa Danendra Fairuzza",
  title: "Information Systems Student",
  headline: "Building Software. Exploring Intelligence.",
  university: "UIN Sunan Ampel Surabaya",
  major: "Information Systems",
  primaryFocus: [
    "Web Development",
    "Software Development",
    "Machine Learning",
  ],
  bio: "I'm Daffa, an Information Systems student passionate about web development, software engineering, and machine learning. I enjoy turning ideas into practical digital solutions and exploring how technology can solve real-world problems.",
  imageUrl: daffaAvatar,
  email: "daffadanendraf@gmail.com",
  githubUsername: "daffadanendra",
  circularText: "DAFFA DANENDRA FAIRUZZA • INFORMATION SYSTEMS • ",
  circularTextLetterSpacing: "0.85em",
  animatedNameEnglish: "Daffa",
  animatedNameJapanese: "ダッファ",
  introLetter1: "D",
  introLetter2: "F",
  introTagline: "Building Software • Exploring Intelligence",
  aboutMeIntro:
    "I am an Information Systems student at UIN Sunan Ampel Surabaya with a strong interest in web development, software engineering, and machine learning. I enjoy turning ideas into practical digital solutions and exploring how technology can solve real-world problems.",
  aboutMeDetailed: [
    "As an Information Systems undergraduate at UIN Sunan Ampel Surabaya, my academic path combines computational systems, software principles, and human-centered problem solving.",
    "My primary focus centers on three key areas: building responsive web applications, engineering structured and reliable software, and exploring practical machine learning applications.",
    "I enjoy analyzing how digital platforms can simplify complex workflows, reduce friction in emergency and public services, and transform raw data into intelligent decision support.",
    "Driven by continuous learning, I focus on clean code, thoughtful architecture, and building digital solutions grounded in real-world utility.",
  ],
  aboutPageImageUrl: daffaAvatar,
  projectsPageIntro:
    "A showcase of practical digital solutions and systems concepts developed with an emphasis on clarity and real-world impact.",
  sideProjectsPageIntro: "",
  productsPageIntro: "",
  hireMePageTitle: "Get in Touch",
  hireMePageSubtitle:
    "Have a question, collaboration proposal, or project in mind? Feel free to reach out anytime.",
};

export const NAV_ITEMS_MAIN: NavItem[] = [
  { id: "home", name: "Home", href: "/", icon: HomeIcon },
  { id: "about", name: "About", href: "/about", icon: UserIcon },
  { id: "projects", name: "Projects", href: "/projects", icon: Squares2X2Icon },
  { id: "focus", name: "Technical Focus", href: "/focus", icon: CpuChipIcon },
  { id: "contact", name: "Contact", href: "/contact", icon: EnvelopeIcon },
];

export const TECHNICAL_FOCUS: TechnicalFocusItem[] = [
  {
    id: "web-development",
    title: "Web Development",
    subtitle: "Modern, responsive, and accessible digital experiences",
    description:
      "Crafting intuitive web interfaces and structured frontend architectures. Focusing on component reusability, responsive design, and user-centered interaction.",
    topics: [
      "Responsive Layouts",
      "Component Architecture",
      "TypeScript & JavaScript",
      "Modern Web Standards",
    ],
    iconComponent: CodeBracketSquareIcon,
    badgeColor: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20",
  },
  {
    id: "software-development",
    title: "Software Development",
    subtitle: "Structured engineering and practical problem solving",
    description:
      "Applying systems thinking and modular design principles to build maintainable applications, relational data structures, and structured software logic.",
    topics: [
      "Systems Analysis",
      "Software Design",
      "Data Modeling & SQL",
      "Clean Code Practices",
    ],
    iconComponent: FiLayers,
    badgeColor: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20",
  },
  {
    id: "machine-learning",
    title: "Machine Learning",
    subtitle: "Exploring intelligent systems and data-driven solutions",
    description:
      "Studying algorithmic foundations, data analysis, and intelligent models to discover patterns and explore how predictive methods can support decision-making.",
    topics: [
      "Computational Foundations",
      "Data Preprocessing",
      "Intelligent Systems",
      "Decision Support",
    ],
    iconComponent: CpuChipIcon,
    badgeColor: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20",
  },
];

export const PROJECTS: Project[] = [
  {
    id: "rapid-mind",
    iconComponent: FiActivity,
    iconBgColor: "bg-emerald-600 dark:bg-emerald-700",
    name: "RAPID-MIND",
    tagline: "Web-Based Emergency Psychological Triage System",
    description:
      "A disaster mental-health decision-support system featuring offline-first PWA intake, deterministic clinical triage (SRQ-20), on-device Whisper STT voice assistance, and real-time WebSocket emergency dispatch.",
    technologies: [
      "Laravel 13",
      "Vue 3 + Inertia",
      "PostgreSQL + PostGIS",
      "Hugging Face Transformers (Whisper ONNX)",
      "IndexedDB (Dexie.js)",
      "Laravel Reverb (WebSockets)",
      "Docker Compose",
      "MapLibre GL JS",
      "Apache ECharts",
    ],
    client: "Disaster Response Competition Prototype",
    company: "Information Systems Engineering",
    projectType: "Technical Case Study",
    year: "2026",
    repoLink: "https://github.com/daffadanendra/rapid-mind",
    liveLink: "", // Configurable demo link placeholder
    overview:
      "RAPID-MIND is a full-stack disaster mental-health response decision-support system developed as a competition prototype. Built around three canonical role workspaces (Relawan, Healthcare, and Regional Admin), it streamlines field psychological screening in disaster areas through an offline-first PWA, deterministic triage stratification (WHO SRQ-20, vulnerability risk factors, and daily functioning indicators), on-device speech-to-text inference with zero cloud audio transmission, and sub-second emergency escalation via Laravel Reverb WebSockets.",
    problemStatement: {
      title: "The Disaster Mental-Health Intake Crisis",
      description:
        "In catastrophic disaster scenarios, acute psychological distress occurs amidst cellular network collapse and severe field strain. Non-clinical volunteers lack structured triage instruments; paper records cause delayed interventions; and acute psychiatric emergencies (such as severe suicidal ideation or acute trauma) become buried in unprioritized queues.",
    },
    solutionStatement: {
      title: "The Multi-Tier Decision-Support Architecture",
      description:
        "An offline-first platform featuring client-side IndexedDB persistence and transactional outbox replay, paired with a deterministic triage engine (SRQ-20 + R1–R5 + F1–F3), a dedicated T0 Red Flag WebSocket emergency pipeline, and on-device Whisper inference that maintains strict human-in-the-loop clinical boundaries.",
    },
  },
];

// Display only confirmed projects; no fabricated side projects
export const SIDE_PROJECTS: SideProject[] = [];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/daffadanendra",
    icon: GithubIcon,
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/",
    icon: LinkedinIcon,
  },
  {
    name: "Instagram",
    url: "https://instagram.com/",
    icon: InstagramIcon,
  },
  {
    name: "Email",
    url: "mailto:daffadanendraf@gmail.com",
    icon: EnvelopeIcon,
  },
];

export const SKILLS: Skill[] = [
  {
    name: "Web Development",
    backgroundColor: "bg-emerald-500/15 dark:bg-emerald-500/20",
    textColor: "text-emerald-700 dark:text-emerald-300",
    icon: CodeBracketSquareIcon,
  },
  {
    name: "Software Engineering",
    backgroundColor: "bg-blue-500/15 dark:bg-blue-500/20",
    textColor: "text-blue-700 dark:text-blue-300",
    icon: FiLayers,
  },
  {
    name: "Machine Learning",
    backgroundColor: "bg-purple-500/15 dark:bg-purple-500/20",
    textColor: "text-purple-700 dark:text-purple-300",
    icon: CpuChipIcon,
  },
  {
    name: "Information Systems",
    backgroundColor: "bg-teal-500/15 dark:bg-teal-500/20",
    textColor: "text-teal-700 dark:text-teal-300",
    icon: FiBookOpen,
  },
  {
    name: "TypeScript",
    backgroundColor: "bg-blue-600/15 dark:bg-blue-600/20",
    textColor: "text-blue-700 dark:text-blue-300",
    icon: FiType,
  },
  {
    name: "React",
    backgroundColor: "bg-cyan-500/15 dark:bg-cyan-500/20",
    textColor: "text-cyan-700 dark:text-cyan-300",
    icon: FiRefreshCw,
  },
  {
    name: "Python",
    backgroundColor: "bg-yellow-500/15 dark:bg-yellow-500/20",
    textColor: "text-yellow-700 dark:text-yellow-300",
    icon: CommandLineIcon,
  },
  {
    name: "Tailwind CSS",
    backgroundColor: "bg-sky-500/15 dark:bg-sky-500/20",
    textColor: "text-sky-700 dark:text-sky-300",
    icon: FiWind,
  },
  {
    name: "SQL & Databases",
    backgroundColor: "bg-amber-500/15 dark:bg-amber-500/20",
    textColor: "text-amber-700 dark:text-amber-300",
    icon: FiDatabase,
  },
  {
    name: "Git & Version Control",
    backgroundColor: "bg-rose-500/15 dark:bg-rose-500/20",
    textColor: "text-rose-700 dark:text-rose-300",
    icon: FiShield,
  },
  {
    name: "Systems Analysis",
    backgroundColor: "bg-indigo-500/15 dark:bg-indigo-500/20",
    textColor: "text-indigo-700 dark:text-indigo-300",
    icon: CheckBadgeIcon,
  },
  {
    name: "UI / UX Design",
    backgroundColor: "bg-pink-500/15 dark:bg-pink-500/20",
    textColor: "text-pink-700 dark:text-pink-300",
    icon: FiFeather,
  },
];
