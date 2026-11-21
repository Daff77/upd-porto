import React from 'react';
import { ExperienceItem } from '../types';
import { Tag } from './ui/Tag';

interface TimelineProps {
  items: ExperienceItem[];
}

export const Timeline: React.FC<TimelineProps> = ({ items }) => {
  return (
    <ol className="relative border-l border-border dark:border-dark-border ml-1.5 pl-6 space-y-8">
      {items.map((item) => (
        <li key={item.id} className="relative space-y-2">
          <span
            aria-hidden="true"
            className="absolute -left-[29px] top-1.5 w-2.5 h-2.5 rounded-full bg-background dark:bg-dark-background border-2 border-accent-green dark:border-dark-accent-green"
          />

          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
            <div className="flex flex-wrap items-center gap-2.5">
              <h3 className="text-base font-medium text-text-primary dark:text-dark-text-primary">
                {item.organization}
              </h3>
              <Tag>{item.type}</Tag>
            </div>
            {item.period && (
              <span className="font-mono text-xs text-text-secondary dark:text-dark-text-secondary tabular-nums">
                {item.period}
              </span>
            )}
          </div>

          <p className="text-sm font-medium text-text-primary/85 dark:text-dark-text-primary/85">
            {item.role}
          </p>

          <p className="max-w-[60ch] text-sm leading-relaxed text-text-secondary dark:text-dark-text-secondary">
            {item.description}
          </p>
        </li>
      ))}
    </ol>
  );
};
