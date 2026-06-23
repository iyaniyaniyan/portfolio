import type { LucideIcon } from 'lucide-react';

export type SocialKind = 'email' | 'github' | 'linkedin' | 'facebook';

export type LinkTarget = '_blank' | '_self';

export interface SocialLink {
  kind: SocialKind;
  label: string;
  handle: string;
  href: string;
  target?: LinkTarget;
}

export interface ResumeConfig {
  label: string;
  path: string;
  available: boolean;
}

export interface Profile {
  name: string;
  initials: string;
  title: string;
  subtitle: string;
  location: string;
  email: string;
  avatarPath: string;
  resume: ResumeConfig;
  intro: string;
  about: string[];
  highlights: string[];
}

export interface SkillGroup {
  title: string;
  description: string;
  items: string[];
  icon?: LucideIcon;
}

export interface ProjectCaseStudy {
  fullTitle: string;
  problem: string;
  solution: string;
  role: string[];
  keyFeatures: string[];
  screenshotNote: string;
}

export interface Project {
  title: string;
  shortDescription: string;
  longDescription: string;
  techStack: string[];
  features: string[];
  status: string;
  githubLink?: string;
  liveDemoLink?: string;
  imagePath?: string;
  imageAlt?: string;
  featured: boolean;
  editableNote?: string;
  caseStudy?: ProjectCaseStudy;
}

export interface EducationItem {
  school: string;
  degree: string;
  level: string;
  expectedGraduation: string;
  details: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  description?: string;
}

export interface NavItem {
  label: string;
  href: string;
}
