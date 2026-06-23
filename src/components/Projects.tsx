import { projects } from '../data/projects';
import { ProjectCard } from './ProjectCard';
import { SectionHeading } from './SectionHeading';

export function Projects() {
  return (
    <section id="projects" className="section-shell">
      <SectionHeading
        eyebrow="Projects"
        title="Project work with honest status labels and room to grow."
        description="KABScholar is featured as the main project, while the remaining cards are ready for future academic and personal work."
      />

      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
