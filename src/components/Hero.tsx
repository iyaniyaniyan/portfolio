import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import { useState } from 'react';
import { profile } from '../data/profile';
import { socials } from '../data/socials';
import { assetPath } from '../utils/assets';

export function Hero() {
  const [imageFailed, setImageFailed] = useState(false);
  const github = socials.find((social) => social.kind === 'github');
  const linkedin = socials.find((social) => social.kind === 'linkedin');

  return (
    <section id="profile" className="section-shell flex min-h-screen min-w-0 items-center pt-32">
      <div className="grid w-full min-w-0 items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="min-w-0" data-reveal>
          <p className="eyebrow">{profile.subtitle}</p>
          <h1 className="mt-4 max-w-[18rem] break-words text-4xl font-bold leading-tight text-slate-950 sm:max-w-4xl sm:text-5xl lg:text-7xl">
            {profile.name}
          </h1>
          <p className="mt-5 text-2xl font-semibold text-lagoon sm:text-3xl">{profile.title}</p>
          <p className="mt-6 max-w-[21rem] break-words text-base leading-8 text-slate-700 sm:max-w-3xl sm:text-lg">{profile.intro}</p>

          <div className="mt-8 flex max-w-[22rem] flex-wrap gap-3 sm:max-w-none">
            <a href="#projects" className="button-primary">
              View Projects
              <ArrowRight size={18} aria-hidden="true" />
            </a>
            <a href="#contact" className="button-secondary">
              <Mail size={18} aria-hidden="true" />
              Contact Me
            </a>
            {github ? (
              <a href={github.href} className="button-secondary" target="_blank" rel="noreferrer">
                <Github size={18} aria-hidden="true" />
                GitHub
              </a>
            ) : null}
            {linkedin ? (
              <a href={linkedin.href} className="button-secondary" target="_blank" rel="noreferrer">
                <Linkedin size={18} aria-hidden="true" />
                LinkedIn
              </a>
            ) : null}
            {profile.resume.available ? (
              <a href={assetPath(profile.resume.path)} className="button-secondary" download>
                <Download size={18} aria-hidden="true" />
                {profile.resume.label}
              </a>
            ) : (
              <button type="button" className="button-muted cursor-not-allowed" disabled title="Add public/resume.pdf to enable this button.">
                <Download size={18} aria-hidden="true" />
                {profile.resume.label}
              </button>
            )}
          </div>

          <div className="mt-10 grid max-w-[22rem] gap-3 sm:max-w-none sm:grid-cols-3">
            {profile.highlights.map((highlight) => (
              <div key={highlight} className="glass-card px-4 py-4">
                <p className="text-sm font-semibold text-slate-800">{highlight}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative min-w-0 lg:ml-auto lg:w-full lg:max-w-[32rem]" data-reveal>
          <div className="glass-card overflow-hidden p-4">
            <div className="aspect-[4/5] overflow-hidden rounded-lg bg-slate-950/5">
              {profile.avatarPath && !imageFailed ? (
                <img
                  src={assetPath(profile.avatarPath)}
                  alt="Portrait of Christian Abiertas Iligan"
                  className="h-full w-full object-contain object-bottom p-2"
                  onError={() => setImageFailed(true)}
                />
              ) : (
                <div className="grid h-full place-items-center bg-gradient-to-br from-teal-100 via-white to-amber-100">
                  <span className="grid h-32 w-32 place-items-center rounded-lg bg-slate-950 text-4xl font-bold text-white">
                    {profile.initials}
                  </span>
                </div>
              )}
            </div>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-4">
            <div className="glass-card px-4 py-4">
              <p className="text-xs font-semibold uppercase text-slate-500">University</p>
              <p className="mt-1 text-sm font-bold text-slate-900">{profile.location}</p>
            </div>
            <div className="glass-card px-4 py-4">
              <p className="text-xs font-semibold uppercase text-slate-500">Focus</p>
              <p className="mt-1 text-sm font-bold text-slate-900">Practical full-stack systems</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
