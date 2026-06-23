import { profile } from '../data/profile';
import { SectionHeading } from './SectionHeading';

export function About() {
  return (
    <section id="about" className="section-shell">
      <SectionHeading
        eyebrow="About"
        title="A practical builder with an academic systems mindset."
        description="Christian is developing full-stack skills through coursework, thesis work, and portfolio projects, with a focus on credible systems that are useful to real users."
      />

      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {profile.about.map((paragraph) => (
          <article key={paragraph} className="glass-card p-6" data-reveal>
            <p className="text-base leading-8 text-slate-700">{paragraph}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
