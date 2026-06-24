import { ExternalLink, Github, Image as ImageIcon } from 'lucide-react';
import type { Project } from '../types/portfolio';
import { assetPath } from '../utils/assets';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const imageSrc = project.imagePath ? assetPath(project.imagePath) : '';

  return (
    <article className="glass-card flex h-full flex-col overflow-hidden" data-reveal>
      <div className="relative aspect-[16/10] overflow-hidden border-b border-white/70 bg-gradient-to-br from-slate-100 via-white to-teal-50">
        {project.imagePath ? (
          <a
            href={imageSrc}
            target="_blank"
            rel="noreferrer"
            className="group absolute inset-0 grid place-items-center p-3 focus-visible:outline-offset-[-4px]"
            aria-label={`Open ${project.title} image`}
          >
            <img
              src={imageSrc}
              alt={project.imageAlt ?? `${project.title} screenshot`}
              className="h-full w-full object-contain transition duration-200 group-hover:scale-[1.015]"
            />
          </a>
        ) : (
          <div className="absolute inset-0 grid place-items-center bg-gradient-to-br from-slate-100 via-white to-teal-50 px-6 text-center">
            <div>
              <ImageIcon className="mx-auto text-lagoon" size={36} aria-hidden="true" />
              <p className="mt-3 text-sm font-semibold text-slate-700">Coming soon</p>
              <p className="mt-1 text-xs leading-5 text-slate-500">Preview will be added once available</p>
            </div>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex flex-wrap content-start items-start gap-2 md:min-h-[4.25rem]">
          <span className="rounded-lg bg-lagoon/10 px-3 py-1 text-xs font-bold text-lagoon">{project.status}</span>
          {project.featured ? <span className="rounded-lg bg-amber-100 px-3 py-1 text-xs font-bold text-amber-800">Featured</span> : null}
        </div>

        <h3 className="mt-4 text-xl font-bold leading-7 text-slate-950 md:min-h-[3.5rem]">{project.title}</h3>
        <p className="mt-3 text-sm leading-7 text-slate-700 md:min-h-[5.25rem]">{project.shortDescription}</p>

        <div className="mt-4 flex flex-wrap content-start gap-2 md:min-h-[4.5rem]">
          {project.techStack.map((tech) => (
            <span key={tech} className="rounded-lg border border-slate-200 bg-white/70 px-2.5 py-1.5 text-xs font-semibold text-slate-700">
              {tech}
            </span>
          ))}
        </div>

        <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-600 md:min-h-[5rem]">
          {project.features.slice(0, 3).map((feature) => (
            <li key={feature} className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-lg bg-lagoon" aria-hidden="true" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {project.editableNote ? <p className="mt-4 text-xs font-semibold text-amber-800">{project.editableNote}</p> : null}

        <div className="mt-auto flex flex-wrap gap-3 pt-6">
          {project.githubLink ? (
            <a href={project.githubLink} target="_blank" rel="noreferrer" className="button-secondary">
              <Github size={17} aria-hidden="true" />
              GitHub
            </a>
          ) : (
            <span className="button-muted" aria-disabled="true">
              <Github size={17} aria-hidden="true" />
              GitHub soon
            </span>
          )}
          {project.liveDemoLink ? (
            <a href={project.liveDemoLink} target="_blank" rel="noreferrer" className="button-secondary">
              <ExternalLink size={17} aria-hidden="true" />
              Live Demo
            </a>
          ) : (
            <span className="button-muted" aria-disabled="true">
              <ExternalLink size={17} aria-hidden="true" />
              Demo soon
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
