import React from 'react';
import { SKILL_GROUPS } from '../constants';

interface SkillsMatrixProps {
  compact?: boolean;
}

export const SkillsMatrix: React.FC<SkillsMatrixProps> = ({ compact = false }) => {
  return (
    <div className="space-y-6">
      {/* Legend */}
      <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-text-secondary dark:text-dark-text-secondary">
        <span className="inline-flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-accent-green dark:bg-dark-accent-green" />
          Used in projects
        </span>
        {!compact && (
          <span className="inline-flex items-center gap-2">
            <span className="w-2 h-2 rounded-full border border-text-secondary dark:border-dark-text-secondary" />
            Explored &amp; coursework
          </span>
        )}
      </div>

      {/* Multi-column typographic matrix */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8">
        {SKILL_GROUPS.map((group) => (
          <div
            key={group.title}
            className="border-t border-border-subtle dark:border-dark-border-subtle pt-4 space-y-3"
          >
            <h3 className="font-mono text-xs uppercase tracking-[0.12em] text-text-secondary dark:text-dark-text-secondary">
              {group.title}
            </h3>
            <ul className="space-y-2 text-sm">
              {group.used.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2.5 text-text-primary dark:text-dark-text-primary font-medium"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-green dark:bg-dark-accent-green shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
              {!compact &&
                group.explored.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2.5 text-text-secondary dark:text-dark-text-secondary"
                  >
                    <span className="w-1.5 h-1.5 rounded-full border border-text-secondary dark:border-dark-text-secondary shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
            </ul>
          </div>
        ))}
      </div>

      <p className="text-xs text-text-secondary dark:text-dark-text-secondary">
        An inventory of what I&apos;ve used or explored &mdash; not a proficiency rating.
      </p>
    </div>
  );
};
