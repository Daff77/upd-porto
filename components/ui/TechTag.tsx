import type { IconType } from 'react-icons';
import { FaJava, FaWindows } from 'react-icons/fa';
import {
  SiAmd, SiApachehadoop, SiApachenetbeanside, SiApachespark, SiDotnet, SiDrizzle,
  SiExpo, SiExpress, SiFfmpeg, SiGit, SiGithub, SiHtml5, SiInertia, SiJavascript,
  SiLaravel, SiLinux, SiLooker, SiMicrosoftazure, SiMysql, SiNodedotjs, SiNumpy,
  SiNvidia, SiPhp, SiPostgresql, SiPython, SiReact, SiRstudio, SiScikitlearn,
  SiSqlite, SiTailwindcss, SiTensorflow, SiTypescript, SiVercel, SiVirtualbox,
  SiVisualstudiocode, SiVuedotjs, SiWordpress,
} from 'react-icons/si';
import { FiCamera, FiCode, FiCpu, FiDatabase, FiMic, FiPackage } from '../icons';
import { Tag } from './Tag';

const icons: Partial<Record<string, IconType>> = {
  Python: SiPython,
  'Python process management': SiPython,
  JavaScript: SiJavascript,
  PHP: SiPhp,
  React: SiReact,
  'React Native': SiReact,
  'HTML & CSS': SiHtml5,
  WordPress: SiWordpress,
  Expo: SiExpo,
  Express: SiExpress,
  'Node.js': SiNodedotjs,
  TypeScript: SiTypescript,
  PostgreSQL: SiPostgresql,
  SQL: FiDatabase,
  SQLite: SiSqlite,
  MySQL: SiMysql,
  'PostgreSQL + PostGIS': SiPostgresql,
  Laravel: SiLaravel,
  Vue: SiVuedotjs,
  'Inertia.js': SiInertia,
  'Tailwind CSS': SiTailwindcss,
  'Dexie.js': FiDatabase,
  'Whisper (Transformers.js)': FiMic,
  'Drizzle ORM': SiDrizzle,
  Java: FaJava,
  'REST API': FiCode,
  'REST APIs': FiCode,
  'Windows process management': FaWindows,
  'V380Decoder-Fork': FiCamera,
  '.NET (dotnet run)': SiDotnet,
  'NVIDIA NVENC': SiNvidia,
  'AMD encoders': SiAmd,
  CNN: FiCpu,
  SVM: FiCpu,
  YOLO: FiCpu,
  'Scikit-learn': SiScikitlearn,
  NumPy: SiNumpy,
  TensorFlow: SiTensorflow,
  RStudio: SiRstudio,
  'Looker Studio': SiLooker,
  Git: SiGit,
  GitHub: SiGithub,
  'VS Code': SiVisualstudiocode,
  NetBeans: SiApachenetbeanside,
  Vercel: SiVercel,
  'Microsoft Azure': SiMicrosoftazure,
  'WSL / Linux': SiLinux,
  VirtualBox: SiVirtualbox,
  'Hadoop & HDFS': SiApachehadoop,
  Spark: SiApachespark,
  FFmpeg: SiFfmpeg,
};

export function TechIcon({ name, className }: { name: string; className?: string }) {
  const Icon = icons[name] ?? FiPackage;
  return <Icon aria-hidden="true" className={className} />;
}

export function TechTag({ name }: { name: string }) {
  return (
    <Tag className="gap-1.5">
      <TechIcon name={name} className="h-3 w-3 shrink-0" />
      {name}
    </Tag>
  );
}
