import React from "react";

export interface IconProps {
  className?: string;
}

export interface NavItem {
  id: string;
  name: string;
  href: string;
  icon: React.ComponentType<IconProps>;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: React.ComponentType<IconProps>;
}

export type ProjectStage = 'Concept' | 'Exploration' | 'Prototype' | 'Learning project';
export type ProjectFilter = 'web' | 'mobile' | 'systems' | 'desktop' | 'ml';

export interface ProjectLink {
  label: string;
  url: string;
  kind: 'repo' | 'demo' | 'docs';
}

export interface ArchitectureNode {
  label: string;
  detail?: string;
}

export interface FeatureGroup {
  title: string;
  items: string[];
  note?: string;
}

export interface ProjectMedia {
  src: string;
  alt: string;
  caption?: string;
}

export interface Project {
  id: string;
  name: string;
  featured: boolean;
  category: string;
  filter: ProjectFilter;
  context: string;
  stage?: ProjectStage;
  summary: string;
  overview: string[];
  problem?: string;
  goal?: string;
  architecture: ArchitectureNode[];
  stack: string[];
  features: FeatureGroup[];
  contribution?: string[];
  workAreas?: { title: string; intro?: string; items: string[] };
  takeaways?: string[];
  scopeNote?: string;
  links: ProjectLink[];
  media?: ProjectMedia[];
  accent: string;
}

export interface SkillGroup {
  title: string;
  used: string[];
  explored: string[];
}

export interface ExperienceItem {
  id: string;
  organization: string;
  role: string;
  type: string;
  period?: string;
  description: string;
}

export interface EducationItem {
  id: string;
  institution: string;
  credential: string;
  detail?: string;
  areas?: { title: string; detail: string }[];
}
