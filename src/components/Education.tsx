import { BookOpenCheck, Braces, CalendarDays, CheckCircle2, Code2, Database, GraduationCap, Layers3 } from 'lucide-react';
import { education } from '../data/education';
import { SectionHeading } from './SectionHeading';

export function Education() {
  return (
    <section id="education" className="section-shell">
      <SectionHeading
        eyebrow="Education"
        title="College background"
        description="A focused snapshot of my Computer Science foundation, academic path, and current development direction."
      />

      <div className="mt-10 grid gap-8">
        {education.map((item) => {
          const summaryItems = [
            { label: 'Level', value: item.level, Icon: GraduationCap },
            { label: 'Expected Graduation', value: item.expectedGraduation, Icon: CalendarDays },
            { label: 'Focus', value: 'Full-stack systems and algorithms', Icon: Code2 },
          ];

          const highlightItems = [
            {
              title: 'Software development',
              description: 'Building practical application logic through coursework and portfolio systems.',
              Icon: Braces,
            },
            {
              title: 'Systems analysis',
              description: 'Practicing structured thinking for requirements, workflows, and user needs.',
              Icon: Layers3,
            },
            {
              title: 'Databases and algorithms',
              description: 'Strengthening data handling, query design, and core problem-solving foundations.',
              Icon: Database,
            },
            {
              title: 'Full-stack project preparation',
              description: 'Applying academic, personal, and thesis work toward complete web systems.',
              Icon: BookOpenCheck,
            },
          ];

          const focusTags = [
            'Software development',
            'Algorithms',
            'Systems analysis',
            'Databases',
            'Full-stack projects',
          ];

          return (
            <div key={item.school} className="grid gap-5 lg:grid-cols-[minmax(0,1.05fr)_minmax(18rem,0.95fr)] lg:items-start" data-reveal>
              <article className="glass-card relative overflow-hidden p-6 transition duration-200 hover:-translate-y-1 hover:border-lagoon/50 hover:shadow-glow sm:p-8">
                <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-lagoon via-teal-300 to-amber-400" />

                <div className="relative grid gap-6 sm:grid-cols-[auto_minmax(0,1fr)]">
                  <div className="flex sm:flex-col sm:items-center">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-lg border border-lagoon/20 bg-lagoon/10 text-lagoon shadow-glow">
                      <GraduationCap size={24} aria-hidden="true" />
                    </span>
                    <span className="hidden h-full w-px bg-gradient-to-b from-lagoon/45 via-slate-200/80 to-transparent sm:mt-4 sm:block" aria-hidden="true" />
                  </div>

                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase text-slate-500">Academic credential</p>
                    <h3 className="mt-3 text-2xl font-bold leading-tight text-slate-950 sm:text-3xl">{item.school}</h3>
                    <p className="mt-3 text-lg font-semibold text-lagoon sm:text-xl">{item.degree}</p>

                    <p className="mt-6 text-base leading-8 text-slate-700">
                      Currently building a strong foundation in software development, algorithms, systems analysis, databases, and
                      practical computing projects while preparing full-stack academic and thesis work.
                    </p>

                    <ul className="mt-6 grid gap-4 border-t border-white/60 pt-5 sm:grid-cols-2">
                      {item.details.map((detail) => (
                        <li key={detail} className="flex gap-3">
                          <span className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-lagoon/10 text-lagoon">
                            <CheckCircle2 size={16} aria-hidden="true" />
                          </span>
                          <p className="text-sm leading-7 text-slate-700">{detail}</p>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {focusTags.map((focus) => (
                        <span
                          key={focus}
                          className="rounded-lg border border-lagoon/15 bg-white/60 px-3 py-2 text-sm font-semibold text-slate-700 backdrop-blur"
                        >
                          {focus}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>

              <div className="grid gap-5">
                <dl className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
                  {summaryItems.map(({ label, value, Icon }) => (
                    <div
                      key={label}
                      className="glass-card group min-w-0 p-5 transition duration-200 hover:-translate-y-1 hover:border-lagoon/50"
                    >
                      <dt className="flex items-center gap-3 text-xs font-semibold uppercase text-slate-500">
                        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-lagoon/10 text-lagoon transition duration-200 group-hover:bg-lagoon group-hover:text-white">
                          <Icon size={19} aria-hidden="true" />
                        </span>
                        {label}
                      </dt>
                      <dd className="mt-4 text-lg font-bold leading-7 text-slate-950">{value}</dd>
                    </div>
                  ))}
                </dl>

                <div className="grid gap-4 sm:grid-cols-2">
                  {highlightItems.map(({ title, description, Icon }) => (
                    <article
                      key={title}
                      className="glass-card flex min-h-[10rem] flex-col p-5 transition duration-200 hover:-translate-y-1 hover:border-lagoon/50"
                    >
                      <span className="grid h-10 w-10 place-items-center rounded-lg bg-amber-100/80 text-amber-700">
                        <Icon size={19} aria-hidden="true" />
                      </span>
                      <h4 className="mt-4 text-base font-bold leading-6 text-slate-950">{title}</h4>
                      <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
