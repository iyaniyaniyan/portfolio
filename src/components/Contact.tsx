import { socials } from '../data/socials';
import { getSocialIcon } from '../utils/socialIcons';
import { SectionHeading } from './SectionHeading';

export function Contact() {
  return (
    <section id="contact" className="section-shell">
      <SectionHeading
        eyebrow="Contact"
        title="Open to internship, collaboration, and academic project conversations."
        description="Use the links below to reach Christian directly. This portfolio uses mailto and public profile links only, with no backend contact form."
      />

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {socials.map((social) => {
          const Icon = getSocialIcon(social.kind);
          const isExternal = social.target === '_blank';

          return (
            <a
              key={social.href}
              href={social.href}
              target={social.target}
              rel={isExternal ? 'noreferrer' : undefined}
              className="glass-card group p-5 transition duration-200 hover:-translate-y-1 hover:border-lagoon"
              data-reveal
            >
              <span className="grid h-12 w-12 place-items-center rounded-lg bg-lagoon/10 text-lagoon transition group-hover:bg-lagoon group-hover:text-white">
                <Icon size={24} aria-hidden="true" />
              </span>
              <span className="mt-5 block text-lg font-bold text-slate-950">{social.label}</span>
              <span className="mt-2 block break-words text-sm leading-6 text-slate-600">{social.handle}</span>
            </a>
          );
        })}
      </div>
    </section>
  );
}
