import { ArrowUp, ArrowUpRight } from 'lucide-react';
import { profile } from '../data/profile';
import { socials } from '../data/socials';

export function Contact() {
  return (
    <footer id="contact" className="contact">
      <div className="wrap">
        <div className="contact-main">
          <div className="contact-copy">
            <h2 className="section-title">Contact</h2>
            <p>For internships, collaborations, or questions about my work.</p>
            <a className="contact-email" href={`mailto:${profile.email}`}>
              {profile.email} <ArrowUpRight aria-hidden="true" />
            </a>
          </div>
          <ul className="socials" aria-label="Social profiles">
            {socials.map((item) => (
              <li key={item.href}>
                <a href={item.href}>
                  {item.label} <ArrowUpRight size={15} aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-line">
          <span>{profile.fullName}</span>
          <a href="#profile">
            Back to top <ArrowUp size={14} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
