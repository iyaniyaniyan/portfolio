import dashboard from '../assets/kabscholar-dashboard.webp';
import type { Project } from '../types/portfolio';

export const projects: Project[] = [
  {
    id: 'kabscholar',
    title: 'KABScholar',
    category: 'Undergraduate thesis',
    summary:
      'A scholarship workspace for the Office of Student Affairs and Services at CvSU–Carmona. Students follow their applications. Staff review documents, record allowance releases, and prepare reports.',
    stack: ['Laravel', 'PHP', 'MySQL', 'K-means clustering'],
    images: [
      {
        src: dashboard,
        alt: 'KABScholar dashboard showing applicant and grantee counts above a breakdown of grant funds and releases.',
        caption: 'Scholarship office dashboard',
      },
    ],
    notes: [
      {
        heading: 'My role',
        text: 'I’m a developer and co-proponent on the thesis team. I contributed to planning the application workflow, implementing the web system, and documenting it for our defense.',
      },
      {
        heading: 'One rule that shaped the design',
        text: 'Applying for the Tertiary Education Subsidy (TES) and receiving it are separate events. We gave applicants their own export and kept the official Annex 5 workbook for grantee reporting. Staff can prepare both from the system.',
      },
      {
        heading: 'Following the money',
        text: 'The office imports each approved scholar’s amount. Those amounts establish the batch budget, and recorded releases show how much has been disbursed. Two students in the same batch can receive different amounts.',
      },
      {
        heading: 'Reporting on scholars',
        text: 'K-means groups scholars by similarities in their profiles. Staff can review those groupings and export an accomplishment report to discuss the patterns they see.',
      },
    ],
  },
  {
    id: 'portfolio-site',
    title: 'This portfolio',
    category: 'Personal website',
    summary:
      'I built this React site to publish my work from one repository. Project notes and screenshots live beside the components, and GitHub Actions publishes each update.',
    stack: ['React', 'TypeScript', 'Vite', 'GitHub Actions'],
    links: [{ label: 'View source', href: 'https://github.com/iyaniyaniyan/portfolio' }],
  },
];
