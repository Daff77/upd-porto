import React from 'react';

interface SectionHeadingProps {
  title: string;
  description?: string;
  action?: React.ReactNode;
  id?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  description,
  action,
  id,
}) => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-border-subtle dark:border-dark-border-subtle pb-4">
      <div className="space-y-1.5">
        <h2
          id={id}
          className="font-display text-2xl sm:text-[1.75rem] font-medium tracking-[-0.02em] text-text-primary dark:text-dark-text-primary"
        >
          {title}
        </h2>
        {description && (
          <p className="max-w-[60ch] text-sm sm:text-base text-text-secondary dark:text-dark-text-secondary leading-relaxed">
            {description}
          </p>
        )}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
};
