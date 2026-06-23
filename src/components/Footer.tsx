import { navigation } from '../data/navigation';
import { profile } from '../data/profile';
import { socials } from '../data/socials';
import { getSocialIcon } from '../utils/socialIcons';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-white/70 bg-white/55 backdrop-blur">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 sm:px-6 lg:grid-cols-[1fr_1.5fr_1fr] lg:px-8">
        <div>
          <p className="text-lg font-bold text-slate-950">{profile.name}</p>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Copyright {currentYear}. Static portfolio built for GitHub Pages.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-white/80 hover:text-lagoon">
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-start gap-2 lg:justify-end">
          {socials
            .filter((social) => social.kind !== 'email')
            .map((social) => {
              const Icon = getSocialIcon(social.kind);
              return (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="grid h-11 w-11 place-items-center rounded-lg border border-slate-200 bg-white/75 text-slate-700 transition hover:border-lagoon hover:text-lagoon"
                  aria-label={social.label}
                  title={social.label}
                >
                  <Icon size={20} aria-hidden="true" />
                </a>
              );
            })}
        </div>
      </div>
    </footer>
  );
}
