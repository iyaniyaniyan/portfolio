import type { ReactNode } from 'react';

interface EmptyStateProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export function EmptyState({ icon, title, description }: EmptyStateProps) {
  return (
    <div className="glass-card p-8 text-center" data-reveal>
      <div className="mx-auto grid h-14 w-14 place-items-center rounded-lg bg-lagoon/10 text-lagoon">{icon}</div>
      <h3 className="mt-5 text-xl font-bold text-slate-950">{title}</h3>
      <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-slate-600">{description}</p>
    </div>
  );
}
