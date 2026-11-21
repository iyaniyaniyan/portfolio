import { useId, useState } from 'react';
import { ArrowUpRight, Play, X } from 'lucide-react';
import type { ProjectVideo } from '../types/portfolio';
import { youtubeIdFromUrl } from '../utils/youtube';

export function ProjectVideoPlayer({ video }: { video: ProjectVideo }) {
  const [open, setOpen] = useState(false);
  const playerId = useId();
  const youtubeId = video.kind === 'youtube' ? youtubeIdFromUrl(video.url) : undefined;
  if (video.kind === 'youtube' && !youtubeId) return null;

  return (
    <div className="project-video">
      <button
        type="button"
        className="inline-link"
        aria-expanded={open}
        aria-controls={playerId}
        onClick={() => setOpen(!open)}
      >
        {open ? <X size={16} aria-hidden="true" /> : <Play size={16} aria-hidden="true" />}
        {open ? 'Close video' : 'Watch walkthrough'}
        <span className="sr-only"> — {video.title}</span>
      </button>
      <div id={playerId} hidden={!open}>
        {open &&
          (video.kind === 'youtube' ? (
            <>
              <iframe
                title={video.title}
                className="video-frame"
                src={`https://www.youtube-nocookie.com/embed/${youtubeId}`}
                allow="encrypted-media; picture-in-picture; fullscreen"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
              <a className="inline-link" href={`https://www.youtube.com/watch?v=${youtubeId}`}>
                Watch on YouTube <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            </>
          ) : (
            <video
              className="video-frame"
              controls
              playsInline
              preload="metadata"
              poster={video.poster}
              aria-label={video.title}
            >
              <source src={video.src} type="video/mp4" />
              {video.captions && (
                <track
                  kind="captions"
                  src={video.captions.src}
                  srcLang={video.captions.language}
                  label={video.captions.label}
                  default
                />
              )}
              <a href={video.src}>Download the video</a>
            </video>
          ))}
      </div>
    </div>
  );
}
