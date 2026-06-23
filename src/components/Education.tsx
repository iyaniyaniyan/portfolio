import { GraduationCap } from 'lucide-react';
import { education } from '../data/education';
import { SectionHeading } from './SectionHeading';

export function Education() {
  return (
    <section id="education" className="section-shell">
      <SectionHeading
        eyebrow="Education"
        title="Academic background"
        description="Current academic information is kept concise and easy to update."
      />

      <div className="mt-10 grid gap-5 lg:grid-cols-2">
        {education.map((item) => (
          <article key={item.school} className="glass-card p-6" data-reveal>
            <div className="flex items-start gap-4">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-lagoon/10 text-lagoon">
                <GraduationCap size={26} aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-xl font-bold text-slate-950">{item.school}</h3>
                <p className="mt-2 text-lg font-semibold text-lagoon">{item.degree}</p>
                <p className="mt-2 text-sm font-semibold text-slate-700">
                  {item.level} | Expected Graduation: {item.expectedGraduation}
                </p>
              </div>
            </div>
            <ul className="mt-5 space-y-2 text-sm leading-7 text-slate-700">
              {item.details.map((detail) => (
                <li key={detail} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-lg bg-lagoon" aria-hidden="true" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
