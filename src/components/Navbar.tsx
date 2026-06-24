import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { navigation } from '../data/navigation';
import { profile } from '../data/profile';
import { assetPath } from '../utils/assets';

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeHref, setActiveHref] = useState(navigation[0]?.href ?? '#profile');
  const [brandImageFailed, setBrandImageFailed] = useState(false);

  const navLinkClass = (isActive: boolean, mobile = false) =>
    [
      'rounded-lg font-semibold transition',
      mobile ? 'px-4 py-3 text-sm' : 'px-3 py-2 text-sm',
      isActive
        ? 'bg-lagoon/10 text-lagoon ring-1 ring-lagoon/20 shadow-sm'
        : 'text-slate-700 hover:bg-white/70 hover:text-lagoon',
    ].join(' ');

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
      }
    };

    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, []);

  useEffect(() => {
    const sections = navigation
      .map((item) => document.getElementById(item.href.slice(1)))
      .filter((section): section is HTMLElement => Boolean(section));

    if (!sections.length) {
      return;
    }

    let frameId = 0;

    const updateActiveSection = () => {
      window.cancelAnimationFrame(frameId);
      frameId = window.requestAnimationFrame(() => {
        const activationLine = window.innerHeight * 0.36;
        let currentSection = sections[0];

        sections.forEach((section) => {
          const { top } = section.getBoundingClientRect();

          if (top <= activationLine) {
            currentSection = section;
          }
        });

        setActiveHref(`#${currentSection.id}`);
      });
    };

    updateActiveSection();
    window.addEventListener('scroll', updateActiveSection, { passive: true });
    window.addEventListener('resize', updateActiveSection);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener('scroll', updateActiveSection);
      window.removeEventListener('resize', updateActiveSection);
    };
  }, []);

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4">
      <nav className="glass-nav mx-auto flex w-full max-w-7xl items-center justify-between rounded-lg px-4 py-3" aria-label="Primary">
        <a href="#profile" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="grid h-10 w-10 shrink-0 place-items-center overflow-hidden rounded-lg bg-slate-950 text-sm font-bold text-white">
            {profile.navAvatarPath && !brandImageFailed ? (
              <img
                src={assetPath(profile.navAvatarPath)}
                alt={`${profile.name} profile`}
                className="h-full w-full object-cover"
                onError={() => setBrandImageFailed(true)}
              />
            ) : (
              profile.initials
            )}
          </span>
          <span className="hidden min-w-0 sm:block">
            <span className="block text-sm font-bold leading-5 text-slate-950">{profile.name}</span>
            <span className="block text-xs font-medium text-slate-600">{profile.title}</span>
          </span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={navLinkClass(activeHref === item.href)}
              aria-current={activeHref === item.href ? 'page' : undefined}
            >
              {item.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-slate-200 bg-white/70 text-slate-900 lg:hidden"
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={open}
          onClick={() => setOpen((current) => !current)}
        >
          {open ? <X aria-hidden="true" size={22} /> : <Menu aria-hidden="true" size={22} />}
        </button>
      </nav>

      {open ? (
        <div className="glass-nav mx-auto mt-2 grid max-w-7xl gap-1 rounded-lg p-3 lg:hidden">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={navLinkClass(activeHref === item.href, true)}
              aria-current={activeHref === item.href ? 'page' : undefined}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      ) : null}
    </header>
  );
}
