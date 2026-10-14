import {
  PersonalInfo,
  Project,
  SideProject,
  SocialLink,
  NavItem,
  Skill,
  TechnicalFocusItem,
  ExperienceItem,
  EducationItem,
  SpeakingEvent,
  VideoItem,
} from "./types";

import {
  HomeIcon,
  UserIcon,
  Squares2X2Icon,
  EnvelopeIcon,
  LinkedinIcon,
  GithubIcon,
  CodeBracketSquareIcon,
  CommandLineIcon,
  FiActivity,
  FiLayers,
  FiDatabase,
  FiType,
  FiFeather,
} from "./components/icons";

// Bespoke custom assets generated for Daffa Pratama's portfolio template
import avatarImg from "./assets/custom/avatar.jpg";
import kinetixImg from "./assets/custom/kinetix.jpg";
import hyperionImg from "./assets/custom/hyperion.jpg";
import auraImg from "./assets/custom/aura.jpg";
import prismImg from "./assets/custom/prism.jpg";

export const WEB3FORMS_ACCESS_KEY = "";

export const DEVELOPER_CREDIT = {
  name: "Daffa Pratama",
  animatedNameEnglish: "Daffa",
  animatedNameJapanese: "ダッファ",
  url: "https://github.com/daff77",
};

export const VISITOR_STATS = {
  staticCount: 1842,
  enableLiveCount: false,
};

export const PERSONAL_INFO: PersonalInfo = {
  name: "Daffa Pratama",
  title: "Design Engineer & Creative Developer",
  headline: "Design Engineer & Creative Developer crafting resilient web software, fluid interactions, and expressive design systems.",
  university: "Informatics & Software Engineering",
  major: "Human-Computer Interaction & Systems",
  primaryFocus: [
    "Design Engineering",
    "Creative Development",
    "Design Systems & Tokens",
    "React 19 & Next.js",
  ],
  bio: "Design Engineer who bridges high-craft interaction design and modern frontend engineering. Focused on building intuitive digital tools, fluid interfaces, and living design systems that delight people.",
  imageUrl: avatarImg,
  email: "daffa.pratama@example.com",
  githubUsername: "daff77",
  circularText: "DAFFA PRATAMA • DESIGN ENGINEER • ",
  circularTextLetterSpacing: "0.85em",
  animatedNameEnglish: "Daffa",
  animatedNameJapanese: "ダッファ",
  introLetter1: "D",
  introLetter2: "P",
  introTagline: "Designing Systems • Shipping Software",
  aboutMeIntro:
    "I'm a Design Engineer who bridges the gap between high-fidelity visual craft and robust production code. Rather than stopping at static Figma mockups, I bring ideas to life with tactile physics, accessible architecture, and clean code.",
  aboutMeDetailed: [
    "My focus centers on the intersection of human-computer interaction, fluid micro-motion, and scalable frontend architectures. Every detail—from optical alignment to spring physics—is intentional.",
    "Specialized in React 19, TypeScript, Tailwind v4, and modern design systems, I turn complex data workflows and ambitious product concepts into effortless digital experiences.",
    "When I'm not shipping client work, I build open-source experiments, explore canvas shaders and Web Audio, and write about interaction design principles.",
  ],
  aboutPageImageUrl: avatarImg,
  projectsPageIntro:
    "A curated selection of shipped products, creative engineering experiments, and design system architectures.",
  sideProjectsPageIntro: "",
  productsPageIntro: "",
  hireMePageTitle: "Discuss a Project",
  hireMePageSubtitle:
    "Have an ambitious product in mind, need design engineering consulting, or want to build a fluid web experience? Let's connect.",
};

export const NAV_ITEMS_MAIN: NavItem[] = [
  { id: "home", name: "Home", href: "/", icon: HomeIcon },
  { id: "about", name: "About", href: "/about", icon: UserIcon },
  { id: "projects", name: "Projects", href: "/projects", icon: Squares2X2Icon },
  { id: "contact", name: "Contact", href: "/contact", icon: EnvelopeIcon },
];

export const TECHNICAL_FOCUS: TechnicalFocusItem[] = [
  {
    id: "design-engineering",
    title: "Design Engineering",
    subtitle: "Living component systems, optical polish, and tactile interactions",
    description:
      "Bridging Figma design craft with production-grade TypeScript and Tailwind. Obsessed with concentric radii, spring physics, and keyboard accessibility.",
    topics: ["Design Systems", "Component Architecture", "Spring Physics", "Micro-Interactions"],
    iconComponent: CodeBracketSquareIcon,
  },
  {
    id: "frontend-systems",
    title: "Modern Web Architecture",
    subtitle: "React 19, Next.js, and low-latency client-side state",
    description:
      "Building resilient web apps with clean data schemas, optimistic UI updates, and sub-second render cycles.",
    topics: ["Next.js App Router", "TypeScript", "State Orchestration", "Web Workers & Canvas"],
    iconComponent: FiLayers,
  },
  {
    id: "creative-tooling",
    title: "Creative Tools & Systems",
    subtitle: "Interactive canvas workbenches, audio synthesis, and developer tools",
    description:
      "Engineering specialized digital tools with intuitive timeline editors, graph visualizers, and direct spatial controls.",
    topics: ["Web Audio API", "HTML5 Canvas", "Token Transpilers", "Developer DX"],
    iconComponent: CommandLineIcon,
  },
];

export const PROJECTS: Project[] = [
  {
    id: "kinetix",
    category: "Web Tooling • Canvas • TypeScript",
    cardImageUrl: kinetixImg,
    iconComponent: FiFeather,
    iconBgColor: "bg-orange-600",
    name: "Kinetix — Kinetic Motion & Spring Studio",
    tagline: "Browser-native kinetic typography and spring-physics workbench for digital interfaces.",
    description:
      "A fast, browser-based motion design workbench that allows designers and developers to create fluid kinetic typography, tweak spring damping in real time, and export zero-dependency CSS & Motion code.",
    technologies: ["React 19", "TypeScript", "HTML5 Canvas", "Web Workers", "Tailwind CSS"],
    client: "Creative Tools Studio",
    company: "Kinetix Labs",
    projectType: "Flagship Tool",
    year: "2026",
    role: "Lead Design Engineer",
    timeline: "3 Months",
    repoLink: "https://github.com/daff77",
    liveLink: "https://kinetix.studio",
    overview:
      "Kinetix bridges the divide between After Effects animation curves and production web code. It provides an intuitive canvas viewport with real-time bezier curve editors, spring physics simulations, and instant code generation.",
    metrics: [
      { label: "Rendering Performance", value: "60 FPS" },
      { label: "Export Payload", value: "< 2.8 KB" },
      { label: "Active Creators", value: "12,400+" },
      { label: "Spring Precision", value: "Sub-pixel" },
    ],
    problemStatement: {
      title: "Handoff Gap Between Motion Design and Frontend Code",
      description:
        "Translating motion from Figma or After Effects into performant web code often results in jittery transitions, bloated Lottie files, and lost physics fidelity.",
    },
    solutionStatement: {
      title: "Real-Time Spring Physics Simulation & Instant Code Exporter",
      description:
        "Engineered a dual-threaded canvas engine with offscreen rendering that calculates exact mass, tension, and damping curves, outputting clean, production-ready React Motion components.",
    },
    goals: [
      "Sub-16ms frame render times even with 100+ simultaneous canvas nodes.",
      "Instant copy-paste snippets for CSS keyframes, Web Animations API, and Motion.",
      "Completely offline-capable PWA architecture.",
    ],
    decisions: [
      {
        title: "OffscreenCanvas for Physics Computations",
        explanation:
          "Moved spring simulation and curve sampling to dedicated Web Workers to keep main thread interactions silky smooth.",
        impact: "Guaranteed locked 60 FPS playback during live parameter scrubbing.",
      },
    ],
    results: [
      "Adopted by design engineering teams at top tier startups.",
      "Over 12,000 active animation presets generated.",
    ],
  },
  {
    id: "hyperion",
    category: "Cloud SaaS • Telemetry • React 19",
    cardImageUrl: hyperionImg,
    iconComponent: FiActivity,
    iconBgColor: "bg-blue-600",
    name: "Hyperion — Autonomous Cloud Telemetry",
    tagline: "High-density real-time metrics, event streams, and cluster latency telemetry platform.",
    description:
      "A next-generation observability console built for distributed infrastructure. Features sub-second telemetry graphs, real-time event streaming, and automated health diagnostics.",
    technologies: ["Next.js 15", "React 19", "Tailwind v4", "WebSockets", "TimescaleDB"],
    client: "Cloud Infrastructure",
    company: "Hyperion Systems",
    projectType: "Enterprise Platform",
    year: "2025",
    role: "Full-Stack Design Engineer",
    timeline: "4 Months",
    repoLink: "https://github.com/daff77",
    liveLink: "https://hyperion.cloud",
    overview:
      "Hyperion eliminates dashboard fatigue by synthesizing millions of operational time-series events into high-density, beautifully legible telemetry visualizers with instant anomaly highlighting.",
    metrics: [
      { label: "Render Cycle", value: "< 12ms" },
      { label: "Telemetry Ingestion", value: "2.4M msg/s" },
      { label: "Dashboard Density", value: "3x Standard" },
    ],
    problemStatement: {
      title: "Cluttered Legacy Observability & High Latency Renders",
      description:
        "Traditional cloud monitoring tools suffer from slow page loads, poor typographic hierarchy, and disjointed alert workflows that slow down incident response.",
    },
    solutionStatement: {
      title: "Streamlined Dark-Mode Console with Virtualized Time-Series Charts",
      description:
        "Designed an information-dense, dark-first UI with custom SVG histograms, color-coded status badges, and keyboard shortcuts for immediate triage.",
    },
    goals: [
      "Sub-12ms chart re-rendering under live 50Hz WebSocket telemetry streams.",
      "Keyboard-first command palette navigation for zero-mouse incident management.",
    ],
    decisions: [
      {
        title: "Custom Canvas Histogram Renderer",
        explanation:
          "Replaced generic charting libraries with a bespoke WebGL-backed timeline engine.",
        impact: "Eliminated memory leaks and reduced CPU usage by 68%.",
      },
    ],
    results: [
      "Reduced Mean Time to Resolution (MTTR) by 45% for early adopter DevOps teams.",
      "Praised for exemplary UI ergonomics and information architecture.",
    ],
  },
  {
    id: "aura",
    category: "E-Commerce • Web Audio API • 3D",
    cardImageUrl: auraImg,
    iconComponent: FiLayers,
    iconBgColor: "bg-amber-600",
    name: "Aura Soundworks — Spatial Audio Boutique",
    tagline: "Luxury acoustic hardware catalog with real-time acoustic frequency curve visualizer.",
    description:
      "An editorial e-commerce platform and interactive acoustic experience. Features live spatial audio simulation, interactive frequency response graphs, and frictionless checkout.",
    technologies: ["Next.js", "Web Audio API", "Tailwind CSS", "Stripe API", "Framer Motion"],
    client: "Acoustic Audio Lab",
    company: "Aura Soundworks",
    projectType: "E-Commerce Experience",
    year: "2025",
    role: "UI/UX & Creative Developer",
    timeline: "2 Months",
    repoLink: "https://github.com/daff77",
    liveLink: "https://aura-soundworks.com",
    overview:
      "Aura Soundworks required an elevated, serene digital storefront that matched the sonic precision of its studio headphones, allowing customers to preview spatial audio calibration directly in the browser.",
    metrics: [
      { label: "Conversion Lift", value: "+38%" },
      { label: "Session Duration", value: "4m 12s" },
      { label: "Audio Experience Rating", value: "4.9 / 5" },
    ],
    problemStatement: {
      title: "Inability to Audition Premium Audio Hardware Online",
      description:
        "Online audio hardware shopping is typically detached from the listening experience. Customers hesitate to purchase audiophile headphones without hearing their acoustic profile.",
    },
    solutionStatement: {
      title: "Interactive Web Audio Parametric Equalizer & Frequency Visualizer",
      description:
        "Engineered an interactive acoustic frequency visualizer using the Web Audio API, enabling visitors to toggle audio profiles (Sub-Bass, Mid, Treble) and hear the difference live.",
    },
    goals: [
      "Warm, tactile editorial aesthetics with cream and matte black palette.",
      "Real-time audio frequency visualizer with 60 FPS smooth canvas waveforms.",
    ],
    decisions: [
      {
        title: "Client-Side BiquadFilter Audio Nodes",
        explanation:
          "Routed master audio through real-time parametric filter nodes directly in the browser.",
        impact: "Instant acoustic profile preview with zero server streaming overhead.",
      },
    ],
    results: [
      "Featured on Awwwards for E-Commerce Design Excellence.",
      "Increased average order value by 32% via interactive bundle recommendations.",
    ],
  },
  {
    id: "prism",
    category: "Design Systems • OKLCH • Accessibility",
    cardImageUrl: prismImg,
    iconComponent: CommandLineIcon,
    iconBgColor: "bg-indigo-600",
    name: "Prism UI — Multi-Brand Token Architecture",
    tagline: "Living token-driven component architecture with accessible color palettes and WCAG AAA compliance.",
    description:
      "An open-source design system and documentation workbench built for multi-brand applications. Leverages OKLCH color spaces, automated contrast ratio validation, and polymorphic React primitives.",
    technologies: ["React 19", "TypeScript", "Radix UI", "OKLCH Tokens", "Tailwind v4"],
    client: "Design System Initiative",
    company: "Prism Open Source",
    projectType: "Design System & Open Source",
    year: "2024",
    role: "Core Author & System Architect",
    timeline: "4 Months",
    repoLink: "https://github.com/daff77",
    liveLink: "https://prism-ui.dev",
    overview:
      "Prism UI solves the token drift problem between designers and developers by establishing a single source of truth in typed token definitions with perceptual color math and guaranteed contrast ratios.",
    metrics: [
      { label: "Component Primitives", value: "40+" },
      { label: "Accessibility Score", value: "100% AAA" },
      { label: "GitHub Stars", value: "4,800+" },
    ],
    problemStatement: {
      title: "Color Contrast Failure & Fragile Token Architectures",
      description:
        "Traditional hex/HSL color palettes distort across light and dark modes, frequently violating accessibility contrast thresholds and creating maintenance debt.",
    },
    solutionStatement: {
      title: "Perceptually Uniform OKLCH Palette Generator & Token Exporter",
      description:
        "Built a mathematical color generation engine that preserves lightness values across all hues, guaranteeing consistent contrast ratios across light, dark, and high-contrast modes.",
    },
    goals: [
      "100% WCAG 2.2 AAA compliant contrast across all semantic token combinations.",
      "Zero-runtime CSS custom properties export with automatic fallback.",
    ],
    decisions: [
      {
        title: "Polymorphic Compound Component Architecture",
        explanation:
          "Constructed primitives around headless Radix UI logic wrapped in strict TypeScript token props.",
        impact: "Zero accessibility regressions while granting 100% styling flexibility.",
      },
    ],
    results: [
      "Adopted across 25+ production client applications.",
      "Celebrated as a gold standard for modern design system engineering.",
    ],
  },
];

export const SPEAKING_EVENTS: SpeakingEvent[] = [
  {
    id: "event-1",
    title: "Engineering Tactile Interfaces: Spring Physics & Motion in React 19",
    organizer: "Modern Frontend Summit",
    location: "Jakarta / Hybrid",
    date: "Oct 2025",
    format: "Offline",
    imageUrl: kinetixImg,
    featured: true,
  },
  {
    id: "event-2",
    title: "OKLCH & Perceptually Uniform Design Systems",
    organizer: "Design Engineering Conference",
    location: "Bandung",
    date: "Jul 2025",
    format: "Offline",
    imageUrl: prismImg,
  },
  {
    id: "event-3",
    title: "Low-Latency Telemetry Architecture with WebSockets & Canvas",
    organizer: "DevCon Tech Track",
    location: "Online",
    date: "May 2025",
    format: "Online",
    imageUrl: hyperionImg,
  },
  {
    id: "event-4",
    title: "Bridging the Gap: From Figma Tokens to Production Code",
    organizer: "Creative Technologists Meetup",
    location: "Jakarta",
    date: "Jan 2025",
    format: "Offline",
    imageUrl: auraImg,
  },
];

export const LATEST_VIDEOS: VideoItem[] = [
  {
    id: "note-1",
    title: "The Mathematics of Natural Spring Physics in Web Interfaces",
    category: "Motion & Physics",
    duration: "5 min read",
    url: "https://github.com/daff77",
  },
  {
    id: "note-2",
    title: "OKLCH Color Spaces: Why Perceptual Uniformity Changes Everything",
    category: "Design Systems",
    duration: "7 min read",
    url: "https://github.com/daff77",
  },
  {
    id: "note-3",
    title: "Optimizing React 19 Server Components for Realtime Telemetry",
    category: "Frontend Architecture",
    duration: "6 min read",
    url: "https://github.com/daff77",
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "exp-1",
    role: "Lead Design Engineer",
    company: "Independent & Studio Client Work",
    location: "Remote / Indonesia",
    period: "2024 — Present",
    description:
      "Partnering with fast-moving product teams to design and engineer flagship web applications, living design systems, and high-performance interactive interfaces.",
    achievements: [
      "Engineered design systems and web tools adopted by 15,000+ creators worldwide.",
      "Architected sub-second telemetry dashboards and kinetic animation studios in React 19.",
      "Championed accessibility, achieving 100% WCAG AAA scores across all client deliveries.",
    ],
    technologies: ["React 19", "TypeScript", "Next.js", "Tailwind v4", "Web Audio API", "Canvas"],
  },
  {
    id: "exp-2",
    role: "Senior Frontend Engineer & UI Architect",
    company: "Digital Product Labs",
    location: "Bandung / Hybrid",
    period: "2023 — 2024",
    description:
      "Spearheaded UI architecture, component libraries, and performance optimization for SaaS platforms and e-commerce applications.",
    achievements: [
      "Cut client-side bundle size by 42% through smart code-splitting and modern token architecture.",
      "Built real-time telemetry and visualization systems with sub-12ms render cycles.",
    ],
    technologies: ["TypeScript", "Next.js", "PostgreSQL", "Radix UI", "Framer Motion"],
  },
  {
    id: "exp-3",
    role: "Creative Web Developer",
    company: "Interactive Studio",
    location: "Indonesia",
    period: "2022 — 2023",
    description:
      "Crafted tactile promotional sites, interactive brand experiences, and custom web applications.",
    achievements: [
      "Delivered award-winning editorial web experiences with 60 FPS smooth canvas animations.",
    ],
    technologies: ["JavaScript", "HTML5 Canvas", "CSS Architecture", "Node.js"],
  },
];

export const EDUCATION: EducationItem[] = [
  {
    id: "edu-1",
    degree: "Informatics & Computer Science",
    institution: "Software Engineering & Human-Computer Interaction",
    period: "2021 — 2025",
    details: "Focused on Human-Computer Interaction, distributed web systems, and design engineering.",
  },
];

export const SIDE_PROJECTS: SideProject[] = [];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/daff77",
    icon: GithubIcon,
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com",
    icon: LinkedinIcon,
  },
  {
    name: "Email",
    url: "mailto:daffa.pratama@example.com",
    icon: EnvelopeIcon,
  },
];

export const SKILLS: Skill[] = [
  {
    name: "Design Engineering",
    backgroundColor: "bg-[#26251008] dark:bg-white/5 border border-border dark:border-dark-border",
    textColor: "text-text-primary dark:text-dark-text-primary font-medium",
    icon: FiFeather,
  },
  {
    name: "Design Systems & OKLCH",
    backgroundColor: "bg-[#26251008] dark:bg-white/5 border border-border dark:border-dark-border",
    textColor: "text-text-primary dark:text-dark-text-primary font-medium",
    icon: CodeBracketSquareIcon,
  },
  {
    name: "React 19 & Next.js",
    backgroundColor: "bg-[#26251008] dark:bg-white/5 border border-border dark:border-dark-border",
    textColor: "text-text-primary dark:text-dark-text-primary font-medium",
    icon: FiType,
  },
  {
    name: "TypeScript Architecture",
    backgroundColor: "bg-[#26251008] dark:bg-white/5 border border-border dark:border-dark-border",
    textColor: "text-text-primary dark:text-dark-text-primary font-medium",
    icon: FiType,
  },
  {
    name: "Tailwind CSS v4",
    backgroundColor: "bg-[#26251008] dark:bg-white/5 border border-border dark:border-dark-border",
    textColor: "text-text-primary dark:text-dark-text-primary font-medium",
    icon: FiFeather,
  },
  {
    name: "Canvas & Web Audio",
    backgroundColor: "bg-[#26251008] dark:bg-white/5 border border-border dark:border-dark-border",
    textColor: "text-text-primary dark:text-dark-text-primary font-medium",
    icon: CommandLineIcon,
  },
  {
    name: "Full-Stack Databases",
    backgroundColor: "bg-[#26251008] dark:bg-white/5 border border-border dark:border-dark-border",
    textColor: "text-text-primary dark:text-dark-text-primary font-medium",
    icon: FiDatabase,
  },
];
