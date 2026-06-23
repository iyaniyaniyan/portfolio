import type { Project } from '../types/portfolio';

export const projects: Project[] = [
  {
    title: 'KABScholar: Online-Based Scholarship Management System',
    shortDescription:
      'A scholarship management system concept for organizing records, applications, disbursements, notifications, and analytics.',
    longDescription:
      'KABScholar is a web-based scholarship management system designed to help the Office of Student Affairs and Services of Cavite State University - Carmona manage scholarship records, monitor applications, track allowance disbursements, notify students, and generate reports through data analytics. The system uses K-Means clustering to group scholar data and support data-driven decision-making.',
    techStack: ['HTML5', 'Tailwind CSS', 'JavaScript', 'PHP', 'Laravel', 'MySQL', 'K-Means clustering'],
    features: [
      'Student registration and login',
      'Scholarship application tracking',
      'Scholarship program management',
      'K-Means clustering for scholar grouping',
      'Reports and analytics',
      'Allowance disbursement tracking',
    ],
    status: 'Undergraduate thesis project / implementation preparation',
    imagePath: '/assets/kabscholar-dashboard.png',
    imageAlt: 'KABScholar scholarship management dashboard mockup',
    featured: true,
    caseStudy: {
      fullTitle:
        'KABScholar: An Online-Based Scholarship Management System Using K-Means Clustering Algorithm for the Office of Student Affairs and Services of Cavite State University - Carmona',
      problem:
        'Scholarship management can become slow, fragmented, and error-prone when handled manually. Administrators need a centralized system to manage records, track application progress, monitor disbursements, and generate reliable reports.',
      solution:
        'KABScholar provides a digital platform for managing student scholarship data, application progress, eligibility screening, notifications, monitoring, and analytics. It supports administrative workflows while improving transparency, organization, and reporting.',
      keyFeatures: [
        'Student registration and login',
        'Student profile management',
        'Scholarship application tracking',
        'Scholarship program management',
        'Eligibility condition management',
        'Student profiling',
        'K-Means clustering for scholar grouping',
        'Reports and analytics',
        'Allowance disbursement tracking',
        'Notifications and announcements',
        'Role-based admin/student access',
        'Admin user management',
      ],
      role: [
        'Undergraduate thesis proponent / developer.',
        'Contributed to system planning, design, development, documentation, and implementation preparation.',
        'Role is described carefully to avoid overstating individual ownership where exact responsibilities may evolve.',
      ],
      screenshotNote: 'Screenshots can be added later by editing the KABScholar entry in src/data/projects.ts.',
    },
  },
  {
    title: 'Online Portfolio Website',
    shortDescription:
      'A responsive portfolio website built to present education, skills, projects, and contact links in a recruiter-friendly format.',
    longDescription:
      'This portfolio is a static React and Vite website with editable data files, GitHub Pages deployment, responsive navigation, and honest placeholders for future updates such as project screenshots, certifications, and a resume PDF.',
    techStack: ['React', 'Vite', 'TypeScript', 'Tailwind CSS', 'GitHub Actions', 'GitHub Pages'],
    features: ['One-page responsive layout', 'Editable content files', 'GitHub Pages deployment workflow'],
    status: 'Active portfolio project',
    githubLink: 'https://github.com/iyaniyaniyan/portfolio',
    featured: false,
  },
  {
    title: 'Future Project Placeholder',
    shortDescription: 'Editable placeholder for a future project that Christian can add when ready.',
    longDescription:
      'This card is intentionally marked as a placeholder. Replace the title, description, tech stack, links, screenshot path, and features in src/data/projects.ts when a new project is ready to showcase.',
    techStack: ['To be updated'],
    features: ['Add project features here', 'Add repository or demo links when available'],
    status: 'Placeholder - details to be added',
    featured: false,
    editableNote: 'Replace this placeholder in src/data/projects.ts.',
  },
  {
    title: 'Academic / Personal Project Placeholder',
    shortDescription: 'Editable space for an academic, thesis-related, or personal software project.',
    longDescription:
      'Use this placeholder for a class project, prototype, research output, or personal build. Keep the content specific and honest once project details are available.',
    techStack: ['To be updated'],
    features: ['Summarize the problem solved', 'List real features only after implementation'],
    status: 'Placeholder - details to be added',
    featured: false,
    editableNote: 'Replace this placeholder in src/data/projects.ts.',
  },
];
