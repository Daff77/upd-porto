import React from 'react';
import { Project } from '../types';
import { AppLink } from './navigation';
import { Tag } from './ui/Tag';

interface ExperimentRowProps {
  project: Project;
}

export const ExperimentRow: React.FC<ExperimentRowProps> = ({ project }) => {
  return (
    <AppLink
      to={`/project/${project.id}`}
      className="group py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-card-hover/60 dark:hover:bg-white/[0.02] px-2 sm:px-3 -mx-2 sm:-mx-3 rounded-xl transition-colors"
    >
      <div className="space-y-1.5 min-w-0 max-w-2xl">
        <div className="flex flex-wrap items-center gap-2.5">
          <h3 className="text-base font-medium text-text-primary dark:text-dark-text-primary group-hover:underline underline-offset-4">
            {project.name}
          </h3>
          <span className="text-xs text-text-secondary dark:text-dark-text-secondary">
            {project.category}
          </span>
          {project.stage && <Tag variant="stage">{project.stage}</Tag>}
        </div>

        <p className="text-sm text-text-secondary dark:text-dark-text-secondary leading-relaxed">
          {project.summary}
        </p>

        {project.stack.length > 0 && (
          <p className="font-mono text-xs text-text-secondary/80 dark:text-dark-text-secondary/80 pt-0.5">
            {project.stack.join(' · ')}
          </p>
        )}
      </div>

      <span
        aria-hidden="true"
        className="shrink-0 self-start sm:self-center text-sm text-accent-green dark:text-dark-accent-green transition-transform duration-200 group-hover:translate-x-1"
      >
        &rarr;
      </span>
    </AppLink>
  );
};
