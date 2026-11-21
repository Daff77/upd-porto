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
  GithubIcon,
  CodeBracketSquareIcon,
  CommandLineIcon,
  FiDatabase,
} from "./components/icons";

import avatarImg from "./assets/daffa_avatar.svg";

export const WEB3FORMS_ACCESS_KEY = "";

export const DEVELOPER_CREDIT = {
  name: "Daffa Danendra Fairuzza",
  animatedNameEnglish: "Daffa",
  animatedNameJapanese: "ダッファ",
  url: "https://github.com/Daff77",
};

export const VISITOR_STATS = {
  staticCount: 0,
  enableLiveCount: false,
};

export const PERSONAL_INFO: PersonalInfo = {
  name: "Daffa Danendra Fairuzza",
  title: "Mahasiswa Sistem Informasi",
  headline: "Pengembangan aplikasi web dan mobile",
  university: "UIN Sunan Ampel Surabaya",
  major: "Sistem Informasi",
  primaryFocus: ["Full-Stack Development", "Mobile Development", "Basis Data"],
  bio: "Saya mahasiswa Sistem Informasi di UIN Sunan Ampel Surabaya. Saya mengembangkan aplikasi dari antarmuka hingga API dan basis data.",
  imageUrl: avatarImg,
  email: "",
  githubUsername: "Daff77",
  animatedNameEnglish: "Daffa",
  animatedNameJapanese: "ダッファ",
  introLetter1: "D",
  introLetter2: "F",
  introTagline: "Full-Stack Development",
  aboutMeIntro:
    "Saya mahasiswa Sistem Informasi di UIN Sunan Ampel Surabaya yang berfokus pada pengembangan aplikasi web dan mobile.",
  aboutMeDetailed: [
    "Saya belajar membangun aplikasi melalui proyek kuliah dan eksperimen mandiri, mulai dari memahami kebutuhan pengguna hingga menguji alur penggunaan.",
    "Saya tertarik menghubungkan antarmuka dengan API dan basis data. Better Life adalah salah satu proyek tempat saya mempelajari hubungan ketiganya.",
    "Saya ingin berkembang sebagai software engineer dan sedang mengeksplorasi machine learning melalui eksperimen klasifikasi data dan gambar.",
  ],
  aboutPageImageUrl: avatarImg,
  projectsPageIntro:
    "Proyek aplikasi mobile, web, dan desktop yang saya kerjakan untuk kebutuhan kesehatan, relawan, dan operasional kafe.",
  hireMePageTitle: "Kontak",
  hireMePageSubtitle: "Temukan kode dan proyek saya di GitHub.",
};

export const NAV_ITEMS_MAIN: NavItem[] = [
  { id: "home", name: "Home", href: "/", icon: HomeIcon },
  { id: "about", name: "About", href: "/about", icon: UserIcon },
  { id: "projects", name: "Projects", href: "/projects", icon: Squares2X2Icon },
  { id: "contact", name: "Contact", href: "/contact", icon: EnvelopeIcon },
];

export const TECHNICAL_FOCUS: TechnicalFocusItem[] = [
  {
    id: "web-mobile",
    title: "Aplikasi web dan mobile",
    subtitle: "Antarmuka dan alur penggunaan",
    description: "Membangun antarmuka responsif dan mempelajari alur pengguna dalam proyek web serta mobile.",
    topics: ["JavaScript", "React", "React Native", "Expo"],
    iconComponent: CodeBracketSquareIcon,
  },
  {
    id: "backend-database",
    title: "Backend dan basis data",
    subtitle: "API dan penyimpanan data",
    description: "Menghubungkan antarmuka, API, dan basis data dalam proyek seperti Better Life.",
    topics: ["Express", "TypeScript", "PostgreSQL", "Drizzle ORM"],
    iconComponent: FiDatabase,
  },
  {
    id: "machine-learning",
    title: "Eksplorasi machine learning",
    subtitle: "Klasifikasi data dan citra",
    description: "Mempelajari preprocessing data dan evaluasi model melalui eksperimen dengan Iris dan CIFAR-10.",
    topics: ["Python", "Scikit-learn", "Decision Tree", "Computer Vision"],
    iconComponent: CommandLineIcon,
  },
];

export const PROJECTS: Project[] = [
  {
    id: "better-life",
    name: "Better Life",
    category: "Aplikasi mobile",
    iconChar: "BL",
    iconBgColor: "bg-emerald-950",
    tagline: "Aplikasi nutrisi dan estimasi kebutuhan kalori.",
    description: "Aplikasi mobile full-stack untuk membantu pengguna memahami kebutuhan kalori.",
    technologies: ["React Native", "Expo", "Express", "TypeScript", "PostgreSQL", "Drizzle ORM"],
    repoLink: "https://github.com/Daff77/better-life",
    overview: "Better Life menggabungkan aplikasi mobile berbasis Expo, API Express dengan TypeScript, serta PostgreSQL yang diakses melalui Drizzle ORM.",
    problemStatement: {
      title: "Memahami kebutuhan kalori harian",
      description: "Pengguna membutuhkan cara untuk memperkirakan kebutuhan kalori berdasarkan data yang dimasukkan ke aplikasi.",
    },
    solutionStatement: {
      title: "Estimasi dengan formula Mifflin–St Jeor",
      description: "Better Life menggunakan formula Mifflin–St Jeor sebagai dasar estimasi metabolisme. Pengembangan proyek mencakup UI mobile, API, dan basis data.",
    },
  },
  {
    id: "rapidmind",
    name: "RapidMind",
    category: "Aplikasi web",
    iconChar: "RM",
    iconBgColor: "bg-indigo-950",
    tagline: "Konsep web untuk pencatatan awal oleh relawan bencana.",
    description: "Proyek kompetisi untuk membantu relawan mencatat informasi triase psikologis secara terstruktur.",
    projectType: "Konsep proyek kompetisi",
    client: "WYIIA/IYSA",
    role: "Antarmuka, terjemahan, dan alur relawan",
    technologies: ["Web responsif", "Lokalisasi Indonesia dan Inggris"],
    overview: "RapidMind dirancang untuk mendukung pencatatan dan penilaian awal oleh relawan. Konsepnya mencakup antarmuka mobile, dashboard admin, dan dukungan dua bahasa. Input suara dan AI/ML termasuk dalam eksplorasi proyek.",
    problemStatement: {
      title: "Pencatatan di kondisi darurat",
      description: "Relawan membutuhkan alur pencatatan yang terstruktur dan bisa diakses dari perangkat mobile.",
    },
    solutionStatement: {
      title: "Antarmuka responsif untuk relawan",
      description: "Kontribusi saya mencakup pengembangan dan evaluasi antarmuka, audit terjemahan, serta perbaikan alur penggunaan relawan.",
    },
  },
  {
    id: "pos-cafe",
    name: "POS Cafe",
    category: "Aplikasi desktop",
    iconChar: "POS",
    iconBgColor: "bg-stone-800",
    tagline: "Aplikasi kasir dan inventaris berbasis Java.",
    description: "Aplikasi desktop untuk mengelola transaksi, produk, dan stok kafe.",
    technologies: ["Java", "PostgreSQL"],
    repoLink: "https://github.com/Daff77/ProjekCafePBO",
    overview: "POS Cafe menggabungkan pengelolaan transaksi penjualan dan inventaris dalam satu aplikasi desktop. Proyek ini menerapkan konsep pemrograman berorientasi objek dengan Java.",
    problemStatement: {
      title: "Mengelola transaksi dan stok",
      description: "Operasional kafe membutuhkan pencatatan penjualan, data produk, dan stok yang mudah diakses.",
    },
    solutionStatement: {
      title: "Aplikasi desktop dengan PostgreSQL",
      description: "Aplikasi menyediakan alur pengelolaan transaksi, produk, dan inventaris dengan penyimpanan data di PostgreSQL.",
    },
  },
];

export const SPEAKING_EVENTS: SpeakingEvent[] = [];
export const LATEST_VIDEOS: VideoItem[] = [];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "hima-kominfo",
    role: "Divisi Website Development",
    company: "Hima Kominfo",
    period: "",
    description: "Terlibat dalam pengembangan dan pengelolaan website serta kebutuhan digital organisasi.",
  },
  {
    id: "commit",
    role: "Publication, Documentation, and Design",
    company: "UINSA × UiTM COMMIT",
    period: "",
    description: "Mendukung publikasi, dokumentasi, dan desain dalam program kolaborasi.",
  },
  {
    id: "proksi",
    role: "Humas dan Liaison Officer Pemateri",
    company: "PROKSI UINSA",
    period: "2025",
    description: "Mendukung komunikasi dan koordinasi dengan pemateri.",
  },
];

export const EDUCATION: EducationItem[] = [
  {
    id: "uinsa",
    degree: "Sistem Informasi",
    institution: "UIN Sunan Ampel Surabaya",
    period: "",
    details: "Fakultas Sains dan Teknologi. Fokus belajar meliputi pengembangan perangkat lunak, basis data, dan perancangan sistem.",
  },
];

export const SIDE_PROJECTS: SideProject[] = [];

export const SOCIAL_LINKS: SocialLink[] = [
  { name: "GitHub", url: DEVELOPER_CREDIT.url, icon: GithubIcon },
];

export const SKILLS: Skill[] = [
  "JavaScript", "TypeScript", "React", "React Native", "Expo", "Express",
  "PostgreSQL", "Drizzle ORM", "Java", "Python", "Git",
].map((name) => ({
  name,
  backgroundColor: "bg-[#26251008] dark:bg-white/5 border border-border dark:border-dark-border",
  textColor: "text-text-primary dark:text-dark-text-primary font-medium",
}));
