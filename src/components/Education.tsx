import { GraduationCap } from 'lucide-react';
import { education } from '../data/education';
import { SectionHeading } from './SectionHeading';

export function Education() {
  return (
    <section id="education" className="section-shell">
      <SectionHeading
        eyebrow="Education"
        title="College background"
        description="Current college information is kept concise and easy to update."
      />

      <div className="mt-10 grid gap-10">
        {education.map((item) => (
          <article key={item.school} className="max-w-5xl" data-reveal>
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-lagoon/10 text-lagoon">
                <GraduationCap size={26} aria-hidden="true" />
              </span>
              <div className="min-w-0 flex-1">
                <h3 className="text-2xl font-bold text-slate-950">{item.school}</h3>
                <p className="mt-2 text-lg font-semibold text-lagoon">{item.degree}</p>

                <dl className="mt-6 grid gap-4 border-y border-slate-200/80 py-5 sm:grid-cols-3">
                  <div>
                    <dt className="text-xs font-semibold uppercase text-slate-500">Level</dt>
                    <dd className="mt-1 text-sm font-bold text-slate-900">{item.level}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase text-slate-500">Expected Graduation</dt>
                    <dd className="mt-1 text-sm font-bold text-slate-900">{item.expectedGraduation}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase text-slate-500">Focus</dt>
                    <dd className="mt-1 text-sm font-bold text-slate-900">Full-stack systems and algorithms</dd>
                  </div>
                </dl>

                <ul className="mt-5 grid gap-3 text-sm leading-7 text-slate-700 sm:grid-cols-2">
                  {item.details.map((detail) => (
                    <li key={detail} className="grid grid-cols-[0.5rem_1fr] gap-3">
                      <span className="mt-3 h-1.5 w-1.5 rounded-lg bg-lagoon" aria-hidden="true" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
