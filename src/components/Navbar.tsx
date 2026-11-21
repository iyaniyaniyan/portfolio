import { ArrowUpRight } from 'lucide-react';
import { profile } from '../data/profile';

export function Navbar() {
  const initials = (profile.firstName[0] + profile.lastName[0]).toUpperCase();
  const displayName = `${profile.firstName} ${profile.lastName}`;
  return (
    <header className="site-header">
      <div className="wrap header-inner">
        <a
          className="brand"
          href="#profile"
          aria-label={`${initials} ${displayName}, back to introduction`}
        >
          <span className="monogram" aria-hidden="true">
            {initials}
          </span>{' '}
          <span className="wordmark">{displayName}</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#projects">Work</a>
          <a href="#about">About</a>
          <a href="#contact" className="nav-contact">
            Contact <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        </nav>
      </div>
    </header>
  );
}
