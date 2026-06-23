import { Code2, Database, Rocket, Server, TerminalSquare } from 'lucide-react';
import type { SkillGroup } from '../types/portfolio';

export const skillGroups: SkillGroup[] = [
  {
    title: 'Frontend',
    description: 'Interface structure, styling, and responsive user experiences.',
    icon: Code2,
    items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Tailwind CSS'],
  },
  {
    title: 'Backend / Programming',
    description: 'Server-side development, application logic, and general programming.',
    icon: Server,
    items: ['PHP', 'Laravel', 'Python', 'Java'],
  },
  {
    title: 'Database',
    description: 'Relational data modeling and database-backed features.',
    icon: Database,
    items: ['MySQL'],
  },
  {
    title: 'Tools',
    description: 'Daily development tools for coding, collaboration, and version control.',
    icon: TerminalSquare,
    items: ['Git', 'GitHub', 'VS Code'],
  },
  {
    title: 'Deployment / Workflow',
    description: 'Static deployment, automation, and project delivery workflows.',
    icon: Rocket,
    items: ['GitHub Actions', 'GitHub Pages', 'Railway'],
  },
];
