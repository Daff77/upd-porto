import React from 'react';

interface SectionHeadingProps {
  index?: string;
  eyebrow: string;
  title: string;
  description?: string;
  action?: React.ReactNode;
  id?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  index,
  eyebrow,
  title,
  description,
  action,
  id,
}) => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-border-subtle dark:border-dark-border-subtle pb-5">
      <div className="space-y-2">
        <p className="font-mono text-xs uppercase tracking-[0.14em] text-text-secondary dark:text-dark-text-secondary">
          {index ? (
            <>
              <span className="text-accent-green dark:text-dark-accent-green font-medium">{index}</span>
              {' — '}
            </>
          ) : null}
          {eyebrow}
        </p>
        <h2
          id={id}
          className="font-display text-2xl sm:text-3xl font-medium tracking-tight text-text-primary dark:text-dark-text-primary"
        >
          {title}
        </h2>
        {description && (
          <p className="max-w-[60ch] text-sm sm:text-base text-text-secondary dark:text-dark-text-secondary leading-relaxed pt-0.5">
            {description}
          </p>
        )}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
};
