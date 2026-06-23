import type { Profile } from '../types/portfolio';

export const profile: Profile = {
  name: 'Christian Abiertas Iligan',
  initials: 'CAI',
  title: 'Full-Stack Developer',
  subtitle: 'BS Computer Science Student',
  location: 'Cavite State University - Carmona',
  email: 'christianiligan0@gmail.com',
  avatarPath: '/assets/profile-placeholder.png',
  resume: {
    label: 'Download Resume',
    path: '/resume.pdf',
    available: false,
  },
  intro:
    'I am a Computer Science student and aspiring full-stack developer focused on building practical, user-centered web systems. I work with frontend technologies such as HTML, CSS, JavaScript, TypeScript, and Tailwind CSS, and I also have experience with backend development using PHP, Laravel, Python, Java, and MySQL. I am especially interested in creating systems that solve real administrative and academic problems through clean design, organized data, and scalable development practices.',
  about: [
    'I am a 4th year Bachelor of Science in Computer Science student at Cavite State University - Carmona, building a foundation in software development, system design, and database-backed applications.',
    'My interests are centered on full-stack development, practical web systems, and academic or administrative tools that make information easier to manage and decisions easier to support.',
    'I am open to learning new languages, frameworks, and technologies, and I value steady improvement, clean implementation, and honest documentation of what a project can do.',
  ],
  highlights: ['4th Year BSCS Student', 'Expected Graduation: 2027', 'Full-stack web systems'],
};
