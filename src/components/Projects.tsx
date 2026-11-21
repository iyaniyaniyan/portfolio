import { projects } from '../data/projects';
import { ProjectCard } from './ProjectCard';

export function Projects() {
  return (
    <section id="projects" className="work" aria-labelledby="work-title">
      <div className="wrap">
        <h2 id="work-title" className="section-title work-title">
          Selected work
        </h2>
        <div id="featured-project">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
