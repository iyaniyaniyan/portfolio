import { ArrowDown, ArrowRight, Download } from 'lucide-react';
import { profile } from '../data/profile';

export function Hero() {
  return (
    <section id="profile" className="hero wrap" aria-labelledby="name">
      <div className="hero-copy">
        <p className="role">
          <span aria-hidden="true" />
          {profile.role}
        </p>
        <h1 id="name">
          {profile.firstName}
          <br />
          <em>{profile.lastName}</em>
          <span className="name-stop">.</span>
        </h1>
        <p className="intro">{profile.intro}</p>
        <div className="hero-links">
          <a className="primary-link" href="#projects">
            See my work <ArrowDown size={18} aria-hidden="true" />
          </a>
          <a className="inline-link" href={`mailto:${profile.email}`}>
            Email me <ArrowRight size={16} aria-hidden="true" />
          </a>
          {profile.resumeUrl && (
            <a
              className="inline-link"
              href={profile.resumeUrl}
              download={`${profile.firstName}-${profile.lastName}-resume.pdf`}
            >
              Résumé <Download size={15} aria-hidden="true" />
            </a>
          )}
        </div>
      </div>
      <figure className="portrait">
        <div className="portrait-print">
          <div className="portrait-mat">
            <img
              src={profile.photo}
              alt={`Portrait of ${profile.fullName}`}
              width="700"
              height="700"
              fetchPriority="high"
            />
          </div>
          <figcaption>
            <span>{profile.portraitCaption}</span>
            <span>{profile.location}</span>
          </figcaption>
        </div>
      </figure>
    </section>
  );
}
