import { BarChart3, CheckCircle2, ExternalLink } from 'lucide-react';
import { projects } from '../data/projects';
import { assetPath } from '../utils/assets';
import { SectionHeading } from './SectionHeading';

export function FeaturedProject() {
  const project = projects.find((item) => item.featured);

  if (!project || !project.caseStudy) {
    return null;
  }

  const featuredImagePath = project.caseStudy.imagePath ?? project.imagePath;
  const featuredImageAlt = project.caseStudy.imageAlt ?? project.imageAlt ?? project.title;

  return (
    <section id="featured-project" className="section-shell">
      <SectionHeading
        eyebrow="Featured Project"
        title={project.title}
        description="A case-study view of the portfolio's main academic system project."
      />

      <div className="mt-10 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="glass-card overflow-hidden" data-reveal>
          {featuredImagePath ? (
            <img src={assetPath(featuredImagePath)} alt={featuredImageAlt} className="h-full min-h-80 w-full bg-white/60 object-contain p-8" />
          ) : (
            <div className="grid min-h-80 place-items-center bg-slate-100 text-slate-600">Screenshot can be added later</div>
          )}
        </div>

        <div className="space-y-6" data-reveal>
          <div>
            <p className="eyebrow">Full Title</p>
            <h3 className="mt-3 text-2xl font-bold leading-9 text-slate-950">{project.caseStudy.fullTitle}</h3>
          </div>

          <p className="text-base leading-8 text-slate-700">{project.longDescription}</p>

          <div className="grid gap-5 md:grid-cols-2">
            <div className="glass-card p-5">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-amber-100 text-amber-700">
                  <BarChart3 size={20} aria-hidden="true" />
                </span>
                <h4 className="text-lg font-bold text-slate-950">Problem</h4>
              </div>
              <p className="mt-4 text-sm leading-7 text-slate-700">{project.caseStudy.problem}</p>
            </div>

            <div className="glass-card p-5">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-teal-100 text-lagoon">
                  <CheckCircle2 size={20} aria-hidden="true" />
                </span>
                <h4 className="text-lg font-bold text-slate-950">Solution</h4>
              </div>
              <p className="mt-4 text-sm leading-7 text-slate-700">{project.caseStudy.solution}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_0.75fr]" data-reveal>
        <div>
          <h4 className="text-xl font-bold text-slate-950">Key Features</h4>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {project.caseStudy.keyFeatures.map((feature) => (
              <div key={feature} className="rounded-lg border border-white/70 bg-white/55 px-4 py-3 text-sm font-semibold text-slate-700 backdrop-blur">
                {feature}
              </div>
            ))}
          </div>
        </div>

        <div className="glass-card p-6">
          <h4 className="text-xl font-bold text-slate-950">Role and Stack</h4>
          <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-700">
            {project.caseStudy.role.map((role) => (
              <li key={role} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-lg bg-lagoon" aria-hidden="true" />
                <span>{role}</span>
              </li>
            ))}
          </ul>
          <div className="mt-5 flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span key={tech} className="rounded-lg border border-slate-200 bg-white/70 px-3 py-2 text-xs font-semibold text-slate-700">
                {tech}
              </span>
            ))}
          </div>
          <p className="mt-5 flex gap-2 text-sm leading-7 text-slate-600">
            <ExternalLink className="mt-1 shrink-0 text-lagoon" size={16} aria-hidden="true" />
            <span>{project.caseStudy.screenshotNote}</span>
          </p>
        </div>
      </div>
    </section>
  );
}
