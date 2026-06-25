import { CheckCircle2 } from 'lucide-react';
import { education } from '../data/education';
import { SectionHeading } from './SectionHeading';

export function Education() {
  return (
    <section id="education" className="section-shell">
      <SectionHeading
        eyebrow="Education"
        title="College background"
        description="A focused snapshot of my Computer Science foundation and current academic direction."
      />

      <div className="mt-10 grid gap-10">
        {education.map((item) => {
          const summaryItems = [
            { label: 'Level', value: item.level },
            { label: 'Expected Graduation', value: item.expectedGraduation },
            { label: 'Focus', value: 'Full-stack systems and algorithms' },
          ];

          return (
            <article key={item.school} className="glass-card max-w-6xl p-6 sm:p-8" data-reveal>
              <div className="grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(18rem,0.85fr)] lg:items-start">
                <div className="min-w-0">
                  <h3 className="text-2xl font-bold leading-tight text-slate-950 sm:text-3xl">{item.school}</h3>
                  <p className="mt-3 text-lg font-semibold text-lagoon sm:text-xl">{item.degree}</p>
                </div>

                <dl className="grid gap-5 sm:grid-cols-3 lg:grid-cols-1 lg:border-l lg:border-slate-200/80 lg:pl-7">
                  {summaryItems.map((summary) => (
                    <div key={summary.label} className="min-w-0">
                      <dt className="text-xs font-semibold uppercase text-slate-500">{summary.label}</dt>
                      <dd className="mt-1 text-base font-bold leading-6 text-slate-950">{summary.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="mt-7 grid gap-5 border-t border-slate-200/70 pt-6 md:grid-cols-2">
                {item.details.map((detail) => (
                  <div key={detail} className="flex gap-3">
                    <span className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-lagoon/10 text-lagoon">
                      <CheckCircle2 size={16} aria-hidden="true" />
                    </span>
                    <p className="text-base leading-7 text-slate-700">{detail}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {['Software development', 'Algorithms', 'Systems analysis', 'Databases', 'Full-stack projects'].map((focus) => (
                  <span key={focus} className="rounded-lg border border-slate-200 bg-white/65 px-3 py-2 text-sm font-semibold text-slate-700">
                    {focus}
                  </span>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
