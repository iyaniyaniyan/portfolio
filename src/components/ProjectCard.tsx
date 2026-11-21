import { useState } from 'react';
import { ArrowUpRight, Maximize2, Minus, Plus } from 'lucide-react';
import type { Project, ProjectImage } from '../types/portfolio';
import { ProjectVideoPlayer } from './ProjectVideoPlayer';

function Screenshot({ image }: { image: ProjectImage }) {
  return (
    <figure className="screenshot">
      <div className="screenshot-mount">
        <img src={image.src} alt={image.alt} loading="lazy" decoding="async" />
      </div>
      <figcaption>
        <a
          href={image.src}
          target="_blank"
          rel="noreferrer"
          aria-label={`Enlarge screenshot: ${image.caption} (opens in a new tab)`}
        >
          <span>{image.caption}</span>
          <Maximize2 size={14} aria-hidden="true" />
        </a>
      </figcaption>
    </figure>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  const [showNotes, setShowNotes] = useState(false);
  const [cover, ...gallery] = project.images ?? [];
  const hasNotes = Boolean(project.notes?.length || gallery.length);
  const notesId = `${project.id}-notes`;

  return (
    <article
      id={project.id}
      className={cover ? 'project project-illustrated' : 'project project-text'}
    >
      <header className="project-heading">
        <p className="small-label">{project.category}</p>
        <h3>{project.title}</h3>
      </header>
      {cover && <Screenshot image={cover} />}
      <div className="project-description">
        <p>{project.summary}</p>
        <ul className="stack" aria-label="Technologies">
          {project.stack.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <div className="project-links">
          {hasNotes && (
            <button
              className="secondary-link"
              type="button"
              aria-expanded={showNotes}
              aria-controls={notesId}
              onClick={() => setShowNotes(!showNotes)}
            >
              {showNotes ? 'Close project notes' : 'Read project notes'}
              <span className="sr-only"> for {project.title}</span>
              {showNotes ? (
                <Minus size={16} aria-hidden="true" />
              ) : (
                <Plus size={16} aria-hidden="true" />
              )}
            </button>
          )}
          {project.links?.map((link) => (
            <a className="inline-link" href={link.href} key={link.href}>
              {link.label} <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
      {hasNotes && (
        <div className="project-notes" id={notesId} hidden={!showNotes}>
          {project.notes?.map((note) => (
            <div key={note.heading}>
              <h4>{note.heading}</h4>
              <p>{note.text}</p>
            </div>
          ))}
          {gallery.map((image) => (
            <Screenshot key={image.src} image={image} />
          ))}
        </div>
      )}
      {project.video && <ProjectVideoPlayer video={project.video} />}
    </article>
  );
}
