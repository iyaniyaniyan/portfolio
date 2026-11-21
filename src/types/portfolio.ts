export interface ProjectImage {
  src: string;
  alt: string;
  caption: string;
}

export type ProjectVideo =
  | { kind: 'youtube'; url: string; title: string }
  | {
      kind: 'file';
      src: string;
      title: string;
      poster?: string;
      captions?: { src: string; language: string; label: string };
    };

export interface Project {
  id: string;
  title: string;
  category: string;
  summary: string;
  stack: string[];
  images?: ProjectImage[];
  notes?: { heading: string; text: string }[];
  links?: { label: string; href: string }[];
  video?: ProjectVideo;
}

export interface Profile {
  firstName: string;
  lastName: string;
  fullName: string;
  photo: string;
  portraitCaption: string;
  role: string;
  location: string;
  intro: string;
  about: string;
  email: string;
  resumeUrl?: string;
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
}
