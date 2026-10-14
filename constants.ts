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
} from "./types";

import {
  HomeIcon,
  UserIcon,
  Squares2X2Icon,
  CpuChipIcon,
  EnvelopeIcon,
  CheckBadgeIcon,
  LinkedinIcon,
  GithubIcon,
  CodeBracketSquareIcon,
  CommandLineIcon,
  FiActivity,
  FiLayers,
  FiDatabase,
  FiBookOpen,
  FiType,
  FiShield,
  FiWind,
  FiRefreshCw,
  FiFeather,
} from "./components/icons";

import daffaAvatar from "./assets/daffa_avatar.svg";

// Optional: Web3Forms Access Key for contact form (configurable)
export const WEB3FORMS_ACCESS_KEY = "";

/** Template author & credit */
export const DEVELOPER_CREDIT = {
  name: "Portfolio Architecture",
  animatedNameEnglish: "Template",
  animatedNameJapanese: "テンプレート",
  url: "https://github.com",
};

/**
 * Visitor count telemetry shown on the hero.
 */
export const VISITOR_STATS = {
  staticCount: 1420,
  enableLiveCount: false,
};

export const PERSONAL_INFO: PersonalInfo = {
  name: "Alex Morgan",
  title: "Systems Designer & Software Engineer",
  headline: "Engineering tactile interfaces & distributed systems.",
  university: "Institute of Design & Technology",
  major: "Systems Architecture",
  primaryFocus: [
    "Interface Engineering",
    "Distributed Systems",
    "Intelligent Tooling",
  ],
  bio: "Senior systems designer and software engineer crafting enduring digital tools, tactile interfaces, and resilient distributed architectures. Focused on craftsmanship, performance, and human interaction.",
  imageUrl: daffaAvatar,
  email: "alex.morgan@example.dev",
  githubUsername: "alexmorgan-dev",
  circularText: "ALEX MORGAN • SYSTEMS & INTERFACES • ",
  circularTextLetterSpacing: "0.85em",
  animatedNameEnglish: "Morgan",
  animatedNameJapanese: "モルガン",
  introLetter1: "A",
  introLetter2: "M",
  introTagline: "Designing Systems • Engineering Interfaces",
  aboutMeIntro:
    "I am an independent software engineer and interface designer dedicated to building high-craft digital products that combine spatial restraint, robust architecture, and delightful micro-interactions.",
  aboutMeDetailed: [
    "Over the past six years, I have worked across the stack from low-latency data pipelines to fluid web applications, focusing on developer tooling, system reliability, and interface engineering.",
    "My engineering approach balances functional clarity with tactile aesthetics: every border, transition curve, and system contract is designed with clear intent and zero superfluous ornamentation.",
    "I believe the best software is honest, fast, and accessible—built with clean mental models, resilient type definitions, and empathetic attention to user experience.",
  ],
  aboutPageImageUrl: daffaAvatar,
  projectsPageIntro:
    "An archive of selected systems, open-source architectures, and exploratory interfaces developed with meticulous focus on polish, performance, and utility.",
  sideProjectsPageIntro: "",
  productsPageIntro: "",
  hireMePageTitle: "Start a Conversation",
  hireMePageSubtitle:
    "Interested in consulting, full-time engineering initiatives, or design system partnerships? Send a message below.",
};

export const NAV_ITEMS_MAIN: NavItem[] = [
  { id: "home", name: "Home", href: "/", icon: HomeIcon },
  { id: "about", name: "About", href: "/about", icon: UserIcon },
  { id: "projects", name: "Projects", href: "/projects", icon: Squares2X2Icon },
  { id: "contact", name: "Contact", href: "/contact", icon: EnvelopeIcon },
];

export const TECHNICAL_FOCUS: TechnicalFocusItem[] = [
  {
    id: "interface-engineering",
    title: "Interface Engineering",
    subtitle: "Tactile, accessible, and high-performance digital surfaces",
    description:
      "Crafting intuitive web interfaces and structured frontend architectures. Focusing on component reusability, responsive design, and fluid micro-interactions.",
    topics: [
      "Design Systems",
      "Fluid Physics & Motion",
      "TypeScript Architecture",
      "WCAG AA Accessibility",
    ],
    iconComponent: CodeBracketSquareIcon,
    badgeColor: "bg-accent-green/10 text-accent-green dark:text-dark-accent-green border border-accent-green/20",
  },
  {
    id: "distributed-systems",
    title: "Distributed Systems",
    subtitle: "Structured engineering and resilient event pipelines",
    description:
      "Applying systems thinking and modular design principles to build maintainable applications, relational data structures, and sub-second streaming pipelines.",
    topics: [
      "Stream Ingestion",
      "WebSocket Architectures",
      "Relational & Vector Data",
      "Offline-First Storage",
    ],
    iconComponent: FiLayers,
    badgeColor: "bg-accent-green/10 text-accent-green dark:text-dark-accent-green border border-accent-green/20",
  },
  {
    id: "intelligent-tooling",
    title: "Intelligent Tooling",
    subtitle: "Client-side inference and deterministic developer tools",
    description:
      "Studying algorithmic foundations, data analysis, and intelligent models to discover patterns and build zero-latency developer utilities.",
    topics: [
      "Client-Side WebGPU",
      "Local Vector Indexes",
      "Deterministic Compilers",
      "Decision Support",
    ],
    iconComponent: CpuChipIcon,
    badgeColor: "bg-accent-green/10 text-accent-green dark:text-dark-accent-green border border-accent-green/20",
  },
];

export const PROJECTS: Project[] = [
  {
    id: "aura-studio",
    category: "Interface Systems",
    iconComponent: FiFeather,
    iconBgColor: "bg-emerald-600 dark:bg-emerald-700",
    name: "Aura Design System",
    tagline: "Token-Driven Multi-Platform Component Architecture",
    description:
      "A high-density component architecture and token engine designed for resilient web applications, featuring physical spring physics, fluid micro-interactions, and strict contrast enforcement.",
    technologies: [
      "TypeScript",
      "React 19",
      "Tailwind CSS",
      "Framer Motion",
      "Radix Primitives",
      "Storybook",
    ],
    client: "Open Source Infrastructure",
    company: "Aura Lab",
    projectType: "Flagship Case Study",
    year: "2026",
    role: "Lead Systems Architect & Core Author",
    timeline: "6 Months",
    repoLink: "https://github.com/example/aura-studio",
    liveLink: "https://aura-studio.example.dev",
    overview:
      "Aura is an open-source design system and component engineering studio built from the ground up to solve design token drift and accessibility degradation in complex web applications. Featuring a mathematical double-bezel containment model, fluid spring transitions, and sub-millisecond theme resolution, Aura serves as a robust baseline for high-craft digital products.",
    metrics: [
      { label: "Token Sync Speed", value: "< 2ms" },
      { label: "Component Count", value: "48+" },
      { label: "A11y Test Pass Rate", value: "100%" },
      { label: "Production Bundle", value: "14.2 kB" },
    ],
    problemStatement: {
      title: "Design System Drift & Fragmented Token Hierarchies",
      description:
        "Modern multi-platform engineering teams struggle with inconsistent styling tokens, bloated CSS runtimes, and neglected accessibility compliance across desktop and mobile form factors.",
    },
    solutionStatement: {
      title: "Strict Semantic Token Pipelines & Concentric Bezels",
      description:
        "A declarative token registry compiled ahead-of-time into zero-runtime CSS variables, coupled with accessible Radix primitives and hardware-accelerated transforms.",
    },
    goals: [
      "Zero-runtime style injection to prevent layout recalculation overhead.",
      "Strict WCAG 2.1 AA contrast compliance across light and dark modes.",
      "Predictable, concentric border-radius calculations for nested containers.",
      "Comprehensive TypeScript generics for compile-time variant validation.",
    ],
    decisions: [
      {
        title: "Mathematical Concentric Radii (Double-Bezel Architecture)",
        explanation:
          "Rather than applying arbitrary border-radius values to nested cards, Aura enforces nested concentric curves calculated via R_inner = R_outer - Padding. This creates physical machining realism.",
        impact: "Eliminates visually jarring uneven gaps between outer cards and inner contents.",
      },
      {
        title: "Ahead-of-Time Token Compilation",
        explanation:
          "All design tokens are authored in a single strict TypeScript schema and precompiled into static CSS custom properties and JSON ASTs.",
        impact: "Zero runtime token computation overhead and instant sub-frame theme switching.",
      },
      {
        title: "Headless Primitive Separation",
        explanation:
          "Built on top of unstyled Radix accessible primitives to guarantee full keyboard focus traps, ARIA attributes, and screen-reader announcements.",
        impact: "100% accessible baseline without fighting opinionated vendor styles.",
      },
    ],
    gallery: [
      {
        title: "Token Studio Inspector",
        caption: "Live preview of semantic color palettes and typographic hierarchy scales.",
      },
      {
        title: "Responsive Component Matrix",
        caption: "Fluid cards and nested buttons testing responsive breakpoint collapse.",
      },
      {
        title: "Accessibility Contrast Inspector",
        caption: "Automated APCA and WCAG contrast certification visualizer.",
      },
    ],
    results: [
      "Adopted by multiple independent developer tools and portfolio projects.",
      "Achieved 100% Lighthouse Accessibility and Performance scores across sample deployments.",
      "Reduced component styling bundle footprint by 42% compared to standard UI libraries.",
    ],
  },
  {
    id: "pulse-protocol",
    category: "Distributed Systems",
    iconComponent: FiActivity,
    iconBgColor: "bg-cyan-600 dark:bg-cyan-700",
    name: "Pulse Telemetry Engine",
    tagline: "High-Throughput Real-Time Telemetry & Event Ingestion",
    description:
      "A distributed telemetry engine and monitoring dashboard capable of processing 200,000+ events per second with sub-15ms client delivery via WebSockets.",
    technologies: [
      "Go",
      "TypeScript",
      "WebSockets",
      "ClickHouse",
      "Redis",
      "Apache ECharts",
      "Docker",
    ],
    client: "Cloud Infrastructure Concept",
    company: "Telemetry Core",
    projectType: "Systems Architecture",
    year: "2025",
    role: "Backend & Frontend Engineer",
    timeline: "4 Months",
    repoLink: "https://github.com/example/pulse-protocol",
    liveLink: "https://pulse.example.dev",
    overview:
      "Pulse Telemetry Engine is a high-throughput event pipeline designed to collect, aggregate, and visualize real-time infrastructure telemetry. It replaces heavy polling architectures with a reactive WebSocket backbone and vectorized columnar storage, allowing operational teams to detect anomalies in real time without browser lag.",
    metrics: [
      { label: "Event Throughput", value: "220k/s" },
      { label: "P99 Delivery Latency", value: "14.2ms" },
      { label: "Compression Ratio", value: "8.4x" },
      { label: "Client Memory Usage", value: "< 45 MB" },
    ],
    problemStatement: {
      title: "Real-Time Telemetry Lag & High Browser Resource Exhaustion",
      description:
        "High-frequency operational metrics typically overwhelm client browsers with continuous DOM mutations, causing visual stutters, memory leaks, and delayed critical alerts.",
    },
    solutionStatement: {
      title: "Binary Stream Virtualization & Client Web Worker Parsing",
      description:
        "Offloaded stream ingestion and JSON parsing into dedicated Web Workers, rendering time-series data onto an off-screen HTML5 Canvas with frame-rate locking.",
    },
    goals: [
      "Support continuous 100Hz real-time charting without dropping below 60fps.",
      "Implement binary message serialization to cut network payload sizes by 65%.",
      "Provide deterministic event deduplication across multiple ingest nodes.",
    ],
    decisions: [
      {
        title: "Dedicated Web Worker Data Buffer",
        explanation:
          "All incoming WebSocket packets are received and parsed inside a dedicated Web Worker thread. Telemetry aggregates are sent to the main UI thread via Transferable ArrayBuffers.",
        impact: "Zero UI main-thread blocking, maintaining smooth scrolling and interaction.",
      },
      {
        title: "Columnar Storage with ClickHouse",
        explanation:
          "Engineered the ingestion sink directly into partitioned ClickHouse tables with compression codec ZSTD.",
        impact: "Sub-second analytical queries across 500M+ event rows.",
      },
    ],
    gallery: [
      {
        title: "Real-Time Waveform Monitor",
        caption: "Smooth 60 FPS Canvas rendering of live distributed cluster metrics.",
      },
      {
        title: "Cluster Topology Visualizer",
        caption: "Node health status and partition balance indicators.",
      },
    ],
    results: [
      "Maintained rock-solid 60 FPS interface performance even under 150,000 continuous event streams.",
      "Cut memory utilization on client browser tabs from 380MB to 42MB.",
    ],
  },
  {
    id: "kroma-engine",
    category: "Machine Learning",
    iconComponent: CpuChipIcon,
    iconBgColor: "bg-purple-600 dark:bg-purple-700",
    name: "Kroma Neural Renderer",
    tagline: "Client-Side Neural Style Transfer & Shader Pipeline",
    description:
      "A client-side neural image processing engine that executes real-time style synthesis directly in the browser using WebGPU shaders and ONNX Runtime.",
    technologies: [
      "TypeScript",
      "WebGPU",
      "ONNX Runtime Web",
      "WGSL Shaders",
      "React",
      "Vite",
    ],
    client: "Exploratory Research Lab",
    company: "Neural Graphics Group",
    projectType: "Interactive ML Prototype",
    year: "2025",
    role: "ML & Graphics Engineer",
    timeline: "3 Months",
    repoLink: "https://github.com/example/kroma-engine",
    liveLink: "https://kroma.example.dev",
    overview:
      "Kroma Neural Renderer brings state-of-the-art style synthesis directly into client browser tabs without sending a single byte of user imagery to cloud servers. By executing quantized ONNX models over WebGPU compute shaders, Kroma achieves sub-10ms inference and zero cloud operational cost.",
    metrics: [
      { label: "Inference Time", value: "4.8ms" },
      { label: "Model Size", value: "3.2 MB" },
      { label: "Cloud Bandwidth", value: "0 kB" },
      { label: "Target FPS", value: "60 FPS" },
    ],
    problemStatement: {
      title: "Cloud Latency & Privacy Risks in Neural Image Synthesis",
      description:
        "Traditional AI graphics pipelines require uploading high-resolution user photos to cloud GPU clusters, incurring severe latency, high server costs, and privacy vulnerabilities.",
    },
    solutionStatement: {
      title: "Quantized Local Inference over WebGPU Compute Pipelines",
      description:
        "Trained INT8 quantized neural models and mapped post-processing matrix convolution directly to WGSL compute shaders on the user's local hardware.",
    },
    goals: [
      "Deliver interactive real-time visual feedback directly in the web viewport.",
      "Guarantee 100% data privacy with zero external network transmission.",
      "Gracefully fall back to WebGL 2.0 on older hardware devices.",
    ],
    decisions: [
      {
        title: "INT8 Quantization Pipeline",
        explanation:
          "Quantized convolutional layers from float32 down to int8 with calibrated error margins.",
        impact: "Reduced model asset weight from 48MB to 3.2MB for instant client hydration.",
      },
      {
        title: "Direct WGSL Shader Post-Processing",
        explanation:
          "Rather than transferring image pixel arrays back into standard DOM canvas, the neural tensor output is consumed directly by WebGPU texture samplers.",
        impact: "Zero GPU-to-CPU memory copy overhead, unlocking buttery smooth 60fps.",
      },
    ],
    gallery: [
      {
        title: "Live Shader Viewport",
        caption: "Direct WebGPU preview canvas demonstrating real-time parameter tuning.",
      },
      {
        title: "Neural Weight Inspector",
        caption: "Visualizing activation map layers and shader pipeline execution.",
      },
    ],
    results: [
      "Achieved instant 4.8ms style synthesis on standard modern laptop GPUs.",
      "Zero server hosting bills for AI image processing workloads.",
    ],
  },
  {
    id: "vanguard-cli",
    category: "Developer Tooling",
    iconComponent: CommandLineIcon,
    iconBgColor: "bg-amber-600 dark:bg-amber-700",
    name: "Vanguard CLI & Framework",
    tagline: "Deterministic Build Tooling & Schema Migration Engine",
    description:
      "A fast, deterministic developer framework and CLI utility for validating multi-service TypeScript contracts and automated database schema evolutions.",
    technologies: [
      "Rust",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "GitHub Actions",
    ],
    client: "Developer Experience Tooling",
    company: "Systems Group",
    projectType: "Developer Utility",
    year: "2024",
    role: "Core Author",
    timeline: "5 Months",
    repoLink: "https://github.com/example/vanguard-cli",
    liveLink: "https://vanguard.example.dev",
    overview:
      "Vanguard is a developer utility designed to eliminate runtime contract mismatches in distributed TypeScript environments. It statically parses data models, validates API schema compatibility, and produces deterministic SQL migration scripts with zero human error.",
    metrics: [
      { label: "Build Speedup", value: "12x" },
      { label: "Schema Validation", value: "18ms" },
      { label: "Type Accuracy", value: "100%" },
    ],
    problemStatement: {
      title: "Silent Schema Drift in Microservices",
      description:
        "Mismatches between backend API contracts and frontend TypeScript interfaces frequently slip through automated tests into production environments.",
    },
    solutionStatement: {
      title: "Rust-Powered AST Parsing & Type Synthesis",
      description:
        "A lightweight CLI engine that analyzes OpenAPI schemas and PostgreSQL DDL, generating type-safe TypeScript interfaces with strict zero-cost validation.",
    },
    goals: [
      "Complete cross-project schema validation in under 50ms.",
      "Generate clean, human-readable TypeScript definitions with zero runtime dependencies.",
    ],
    decisions: [
      {
        title: "Rust Core with Native Node-API Bindings",
        explanation:
          "Implemented AST traversal and type generation in Rust, exposing native binaries via N-API.",
        impact: "12x speedup compared to pure JavaScript AST transformers.",
      },
    ],
    gallery: [
      {
        title: "Terminal Execution Flow",
        caption: "Instant schema verification output with actionable diagnostic diffs.",
      },
    ],
    results: [
      "Streamlined CI/CD pipeline verification across 14 enterprise microservices.",
      "Zero schema drift incidents reported over 12 months of active deployment.",
    ],
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "exp-1",
    role: "Senior Systems Designer & Architect",
    company: "Nova Platform Labs",
    location: "San Francisco, CA (Remote)",
    period: "2024 — Present",
    description:
      "Leading interface architecture, token infrastructure, and component reliability for next-generation developer tooling platforms.",
    achievements: [
      "Architected token engine adopted across 5 core company product surfaces.",
      "Engineered high-density dashboard layouts reducing client memory utilization by 35%.",
      "Mentored junior engineers on WCAG accessibility standards and micro-interaction design.",
    ],
    technologies: ["TypeScript", "React", "Design Tokens", "WebSockets", "Tailwind CSS"],
  },
  {
    id: "exp-2",
    role: "Frontend Engineer & UI Specialist",
    company: "Horizon Studio",
    location: "New York, NY",
    period: "2022 — 2024",
    description:
      "Built fluid, tactile web applications and digital design systems for technology and media clients.",
    achievements: [
      "Developed 4 major production client web apps with 99+ Lighthouse performance scores.",
      "Created custom interactive physics and spring motion library for brand showcases.",
    ],
    technologies: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
  },
  {
    id: "exp-3",
    role: "Software Engineering Fellow",
    company: "Open Protocol Collective",
    location: "Remote",
    period: "2021 — 2022",
    description:
      "Contributed to open-source developer tooling, documentation design, and community libraries.",
    achievements: [
      "Authored accessible component primitives used by 1,000+ open-source developers.",
      "Published technical case studies on modern web performance and font optimization.",
    ],
    technologies: ["JavaScript", "HTML5/CSS3", "Git", "Node.js", "Documentation"],
  },
];

export const EDUCATION: EducationItem[] = [
  {
    id: "edu-1",
    degree: "B.S. in Computer Science & Systems Engineering",
    institution: "Institute of Design & Technology",
    period: "2018 — 2022",
    details: "Focus in Software Architecture, Human-Computer Interaction, and Distributed Systems.",
  },
];

export const SIDE_PROJECTS: SideProject[] = [];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com",
    icon: GithubIcon,
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com",
    icon: LinkedinIcon,
  },
  {
    name: "Email",
    url: "mailto:alex.morgan@example.dev",
    icon: EnvelopeIcon,
  },
];

export const SKILLS: Skill[] = [
  {
    name: "Design Systems & Architecture",
    backgroundColor: "bg-accent-green/10 dark:bg-dark-accent-green-bg border border-accent-green/25",
    textColor: "text-accent-green dark:text-dark-accent-green font-semibold",
    icon: CodeBracketSquareIcon,
  },
  {
    name: "Interface Engineering",
    backgroundColor: "bg-accent-green/10 dark:bg-dark-accent-green-bg border border-accent-green/25",
    textColor: "text-accent-green dark:text-dark-accent-green font-semibold",
    icon: FiFeather,
  },
  {
    name: "TypeScript & JavaScript",
    backgroundColor: "bg-button-secondary-bg dark:bg-dark-button-secondary-bg border border-border dark:border-dark-border",
    textColor: "text-text-primary dark:text-dark-text-primary",
    icon: FiType,
  },
  {
    name: "React 19 & Next.js",
    backgroundColor: "bg-button-secondary-bg dark:bg-dark-button-secondary-bg border border-border dark:border-dark-border",
    textColor: "text-text-primary dark:text-dark-text-primary",
    icon: FiRefreshCw,
  },
  {
    name: "Tailwind CSS & Styling",
    backgroundColor: "bg-button-secondary-bg dark:bg-dark-button-secondary-bg border border-border dark:border-dark-border",
    textColor: "text-text-primary dark:text-dark-text-primary",
    icon: FiWind,
  },
  {
    name: "Distributed & WebSockets",
    backgroundColor: "bg-button-secondary-bg dark:bg-dark-button-secondary-bg border border-border dark:border-dark-border",
    textColor: "text-text-primary dark:text-dark-text-primary",
    icon: FiLayers,
  },
  {
    name: "Relational Data & SQL",
    backgroundColor: "bg-button-secondary-bg dark:bg-dark-button-secondary-bg border border-border dark:border-dark-border",
    textColor: "text-text-primary dark:text-dark-text-primary",
    icon: FiDatabase,
  },
  {
    name: "Machine Learning & WebGPU",
    backgroundColor: "bg-button-secondary-bg dark:bg-dark-button-secondary-bg border border-border dark:border-dark-border",
    textColor: "text-text-primary dark:text-dark-text-primary",
    icon: CpuChipIcon,
  },
  {
    name: "Developer Tooling & CLI",
    backgroundColor: "bg-button-secondary-bg dark:bg-dark-button-secondary-bg border border-border dark:border-dark-border",
    textColor: "text-text-primary dark:text-dark-text-primary",
    icon: CommandLineIcon,
  },
  {
    name: "WCAG Accessibility",
    backgroundColor: "bg-button-secondary-bg dark:bg-dark-button-secondary-bg border border-border dark:border-dark-border",
    textColor: "text-text-primary dark:text-dark-text-primary",
    icon: CheckBadgeIcon,
  },
];
