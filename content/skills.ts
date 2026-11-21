import { SkillGroup } from '../types';

export const SKILL_GROUPS: SkillGroup[] = [
  {
    title: 'Languages',
    used: ['TypeScript', 'JavaScript', 'Java', 'Python'],
    explored: ['PHP'],
  },
  {
    title: 'Frontend & Mobile',
    used: ['React Native', 'Expo', 'HTML & CSS'],
    explored: ['React', 'WordPress'],
  },
  {
    title: 'Backend',
    used: ['Express', 'REST APIs', 'Python process management'],
    explored: ['Node.js', 'Laravel'],
  },
  {
    title: 'Databases',
    used: ['PostgreSQL', 'SQL', 'Drizzle ORM'],
    explored: ['MySQL'],
  },
  {
    title: 'Data & Machine Learning',
    used: ['Scikit-learn', 'NumPy'],
    explored: ['TensorFlow', 'YOLO', 'RStudio', 'Looker Studio'],
  },
  {
    title: 'Tools & Platforms',
    used: ['Git', 'GitHub', 'VS Code', 'NetBeans'],
    explored: ['Vercel', 'Microsoft Azure', 'WSL / Linux', 'VirtualBox', 'Hadoop & HDFS', 'Spark', 'FFmpeg'],
  },
];
