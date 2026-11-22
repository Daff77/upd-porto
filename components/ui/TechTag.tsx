import type { IconType } from 'react-icons';
import { FaJava, FaWindows } from 'react-icons/fa';
import {
  SiAmd, SiDotnet, SiDrizzle, SiExpo, SiExpress, SiNvidia,
  SiPostgresql, SiPython, SiReact, SiScikitlearn, SiTypescript,
} from 'react-icons/si';
import { SiInertia, SiLaravel, SiTailwindcss, SiVuedotjs } from 'react-icons/si';
import { FiCamera, FiCode, FiCpu, FiDatabase, FiMic, FiPackage } from '../icons';
import { Tag } from './Tag';

const icons: Partial<Record<string, IconType>> = {
  Python: SiPython,
  'React Native': SiReact,
  Expo: SiExpo,
  Express: SiExpress,
  TypeScript: SiTypescript,
  PostgreSQL: SiPostgresql,
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
  'Windows process management': FaWindows,
  'V380Decoder-Fork': FiCamera,
  '.NET (dotnet run)': SiDotnet,
  'NVIDIA NVENC': SiNvidia,
  'AMD encoders': SiAmd,
  CNN: FiCpu,
  SVM: FiCpu,
  YOLO: FiCpu,
  'Scikit-learn': SiScikitlearn,
};

export function TechTag({ name }: { name: string }) {
  const Icon = icons[name] ?? FiPackage;
  return (
    <Tag className="gap-1.5">
      <Icon aria-hidden="true" className="h-3 w-3 shrink-0" />
      {name}
    </Tag>
  );
}
