import { BookOpenCheck, CalendarDays, CheckCircle2, Code2, GraduationCap } from 'lucide-react';
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
            { label: 'Level', value: item.level, icon: BookOpenCheck },
            { label: 'Expected Graduation', value: item.expectedGraduation, icon: CalendarDays },
            { label: 'Focus', value: 'Full-stack systems and algorithms', icon: Code2 },
          ];

          return (
            <article key={item.school} className="max-w-6xl" data-reveal>
              <div className="flex flex-col gap-7 lg:flex-row lg:items-start lg:justify-between">
                <div className="min-w-0 lg:max-w-xl">
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-lg bg-lagoon/10 text-lagoon">
                    <GraduationCap size={30} aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-3xl font-bold leading-tight text-slate-950">{item.school}</h3>
                  <p className="mt-3 text-xl font-semibold text-lagoon">{item.degree}</p>
                </div>

                <dl className="grid flex-1 gap-3 sm:grid-cols-3">
                  {summaryItems.map((summary) => {
                    const Icon = summary.icon;

                    return (
                      <div key={summary.label} className="rounded-lg border border-white/70 bg-white/55 p-4 shadow-glass backdrop-blur-xl">
                        <Icon className="text-lagoon" size={22} aria-hidden="true" />
                        <dt className="mt-4 text-sm font-semibold uppercase text-slate-500">{summary.label}</dt>
                        <dd className="mt-2 text-base font-bold leading-6 text-slate-950">{summary.value}</dd>
                      </div>
                    );
                  })}
                </dl>
              </div>

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {item.details.map((detail) => (
                  <div key={detail} className="flex gap-3 rounded-lg border border-lagoon/10 bg-white/35 p-4 backdrop-blur">
                    <CheckCircle2 className="mt-0.5 shrink-0 text-lagoon" size={20} aria-hidden="true" />
                    <p className="text-base leading-7 text-slate-700">{detail}</p>
                  </div>
                ))}
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
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
