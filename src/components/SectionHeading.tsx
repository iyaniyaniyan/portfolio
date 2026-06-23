interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
}

export function SectionHeading({ eyebrow, title, description, align = 'left' }: SectionHeadingProps) {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'} data-reveal>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-bold text-slate-950 sm:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-base leading-8 text-slate-700 sm:text-lg">{description}</p> : null}
    </div>
  );
}
