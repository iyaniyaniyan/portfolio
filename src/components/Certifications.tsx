import { Award, ExternalLink } from 'lucide-react';
import { certifications } from '../data/certifications';
import { SectionHeading } from './SectionHeading';
import { EmptyState } from './EmptyState';

export function Certifications() {
  return (
    <section id="certifications" className="section-shell">
      <SectionHeading
        eyebrow="Certifications"
        title="Certifications and achievements"
        description="This section is ready for verified certificates, workshops, awards, and academic recognitions."
      />

      <div className="mt-10">
        {certifications.length === 0 ? (
          <EmptyState
            icon={<Award size={26} aria-hidden="true" />}
            title="Certifications and achievements will be added soon."
            description="Add future entries in src/data/certifications.ts when verified certificate or achievement details are available."
          />
        ) : (
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {certifications.map((certification) => (
              <article key={`${certification.title}-${certification.issuer}`} className="glass-card p-6" data-reveal>
                <h3 className="text-xl font-bold text-slate-950">{certification.title}</h3>
                <p className="mt-2 text-sm font-semibold text-lagoon">{certification.issuer}</p>
                <p className="mt-1 text-sm text-slate-600">{certification.date}</p>
                {certification.description ? <p className="mt-4 text-sm leading-7 text-slate-700">{certification.description}</p> : null}
                {certification.credentialUrl ? (
                  <a href={certification.credentialUrl} target="_blank" rel="noreferrer" className="button-secondary mt-5">
                    <ExternalLink size={17} aria-hidden="true" />
                    View Credential
                  </a>
                ) : null}
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
