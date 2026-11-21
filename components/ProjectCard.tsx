import React from 'react';
import { Project } from '../types';
import { AppLink } from './navigation';
import { ProjectCover } from './ProjectCover';
import { Tag } from './ui/Tag';

interface ProjectCardProps {
  project: Project;
  layout?: 'default' | 'wide';
  className?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  layout = 'default',
  className = '',
}) => {
  const isWide = layout === 'wide';
  const visibleStack = project.stack.slice(0, 4);
  const extraCount = project.stack.length - visibleStack.length;

  return (
    <AppLink
      to={`/project/${project.id}`}
      aria-label={`Read case study for ${project.name}`}
      className={`group block text-left ${
        isWide
          ? 'md:grid md:grid-cols-[1.2fr_1fr] md:gap-8 md:items-center space-y-4 md:space-y-0'
          : 'flex flex-col gap-4'
      } ${className}`}
    >
      {/* 16:10 Cover */}
      <div className="w-full aspect-[16/10] rounded-2xl overflow-hidden border border-border-subtle dark:border-dark-border-subtle bg-button-secondary-bg dark:bg-dark-card">
        <ProjectCover project={project} variant="card" />
      </div>

      {/* Details */}
      <div className="flex flex-col gap-2.5 min-w-0">
        <div className="flex flex-wrap items-center gap-2.5">
          <h3 className="text-lg sm:text-xl font-medium tracking-tight text-text-primary dark:text-dark-text-primary group-hover:underline underline-offset-4">
            {project.name}
          </h3>
          {project.stage && <Tag variant="stage">{project.stage}</Tag>}
        </div>

        <p className="font-mono text-xs text-text-secondary dark:text-dark-text-secondary">
          {[project.category, project.context].filter(Boolean).join(' · ')}
        </p>

        <p className="text-sm sm:text-[15px] leading-relaxed text-text-secondary dark:text-dark-text-secondary line-clamp-3">
          {project.summary}
        </p>

        {visibleStack.length > 0 && (
          <div className="flex flex-wrap gap-1.5 pt-1">
            {visibleStack.map((tech) => (
              <Tag key={tech}>{tech}</Tag>
            ))}
            {extraCount > 0 && <Tag>+{extraCount}</Tag>}
          </div>
        )}

        <div className="pt-1 inline-flex items-center gap-1.5 text-sm font-medium text-text-primary dark:text-dark-text-primary">
          <span>Read case study</span>
          <span
            aria-hidden="true"
            className="inline-block text-accent-green dark:text-dark-accent-green transition-transform duration-200 group-hover:translate-x-1"
          >
            &rarr;
          </span>
        </div>
      </div>
    </AppLink>
  );
};
