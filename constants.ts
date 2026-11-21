import { NavItem, SocialLink } from './types';
import {
  HomeIcon,
  UserIcon,
  Squares2X2Icon,
  EnvelopeIcon,
  GithubIcon,
} from './components/icons';
import { PROFILE } from './content/profile';

export * from './content/profile';
export * from './content/skills';
export * from './content/experience';
export * from './content/projects';

export const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY ?? '';

export const NAV_ITEMS: NavItem[] = [
  { id: 'home', name: 'Home', href: '/', icon: HomeIcon },
  { id: 'about', name: 'About', href: '/about', icon: UserIcon },
  { id: 'projects', name: 'Projects', href: '/projects', icon: Squares2X2Icon },
  { id: 'contact', name: 'Contact', href: '/contact', icon: EnvelopeIcon },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { name: 'GitHub', url: PROFILE.githubUrl, icon: GithubIcon },
];
