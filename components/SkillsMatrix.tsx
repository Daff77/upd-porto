import React from 'react';
import { SKILL_GROUPS } from '../constants';

interface SkillsMatrixProps {
  compact?: boolean;
}

export const SkillsMatrix: React.FC<SkillsMatrixProps> = ({ compact = false }) => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8">
        {SKILL_GROUPS.map((group) => (
          <div
            key={group.title}
            className="border-t border-border-subtle dark:border-dark-border-subtle pt-4 space-y-3"
          >
            <h3 className="text-xs font-medium text-text-secondary dark:text-dark-text-secondary">
              {group.title}
            </h3>
            <ul className="space-y-1.5 text-sm">
              {group.used.map((item) => (
                <li
                  key={item}
                  className="text-text-primary dark:text-dark-text-primary font-medium"
                >
                  {item}
                </li>
              ))}
              {!compact &&
                group.explored.map((item) => (
                  <li
                    key={item}
                    className="text-text-secondary dark:text-dark-text-secondary"
                  >
                    {item}
                  </li>
                ))}
            </ul>
          </div>
        ))}
      </div>

      <p className="text-xs text-text-secondary dark:text-dark-text-secondary">
        An inventory of what I&apos;ve used or explored, not a proficiency rating.
      </p>
    </div>
  );
};
