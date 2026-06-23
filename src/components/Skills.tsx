import { skillGroups } from '../data/skills';
import { SectionHeading } from './SectionHeading';

export function Skills() {
  return (
    <section id="skills" className="section-shell">
      <SectionHeading
        eyebrow="Skills"
        title="Tools and technologies for full-stack web development."
        description="Skills are grouped in editable data files so the portfolio can grow as Christian learns new languages, frameworks, and workflows."
      />

      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
        {skillGroups.map((group) => {
          const Icon = group.icon;

          return (
            <article key={group.title} className="glass-card flex flex-col p-5" data-reveal>
              <div className="flex items-start gap-3">
                {Icon ? (
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-lagoon/10 text-lagoon">
                    <Icon size={22} aria-hidden="true" />
                  </span>
                ) : null}
                <div>
                  <h3 className="text-lg font-bold text-slate-950">{group.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{group.description}</p>
                </div>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="rounded-lg border border-slate-200 bg-white/70 px-3 py-2 text-sm font-semibold text-slate-700">
                    {item}
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
