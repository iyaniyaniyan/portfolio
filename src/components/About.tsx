import { ArrowUpRight, GraduationCap } from 'lucide-react';
import { certifications } from '../data/certifications';
import { education } from '../data/education';
import { profile } from '../data/profile';
import { skillGroups } from '../data/skills';

export function About() {
  return (
    <section id="about" className="about wrap" aria-labelledby="about-title">
      <div>
        <h2 id="about-title" className="section-title">
          About me
        </h2>
        <p className="about-text">{profile.about}</p>
        <div id="education" className="education">
          <span className="education-icon">
            <GraduationCap size={21} aria-hidden="true" />
          </span>
          <div>
            <h3 className="small-label">Education</h3>
            <p>{education.degree}</p>
            <p>{education.school}</p>
            <p>
              {education.yearLevel} · Expected graduation {education.expectedGraduation}
            </p>
          </div>
        </div>
      </div>
      <div id="skills" className="skills">
        <h3>Tools I use</h3>
        <dl>
          {skillGroups.map((group) => (
            <div key={group.label}>
              <dt>{group.label}</dt>
              <dd>{group.items.join(', ')}</dd>
            </div>
          ))}
        </dl>
        {certifications.length > 0 && (
          <div id="certifications" className="credentials">
            <h3>Certifications</h3>
            <ul>
              {certifications.map((item) => (
                <li key={`${item.issuer}-${item.title}`}>
                  <strong>{item.title}</strong>
                  <span>
                    {item.issuer} · {item.date}
                  </span>
                  {item.credentialUrl && (
                    <a className="inline-link" href={item.credentialUrl}>
                      View credential <ArrowUpRight size={15} aria-hidden="true" />
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
