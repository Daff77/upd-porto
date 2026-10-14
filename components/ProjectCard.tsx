import React from 'react';
import { Project } from '../types';
import { ArrowRightIcon } from './icons';
import { ProjectCoverVisual } from './ProjectCoverVisual';

interface ProjectCardProps {
  project: Project;
  className?: string;
  style?: React.CSSProperties;
  onProjectSelect: (projectId: string) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  className = '',
  style,
  onProjectSelect,
}) => {
  const handleCardClick = () => {
    onProjectSelect(project.id);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onProjectSelect(project.id);
    }
  };

  return (
    <button
      onClick={handleCardClick}
      onKeyDown={handleKeyPress}
      className={`block group text-left w-full transition-transform active:scale-[0.99] focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-green rounded-2xl ${className}`}
      aria-label={`View case study for ${project.name}`}
      style={style}
    >
      <div className="p-1.5 rounded-2xl bg-black/5 dark:bg-white/5 border border-border dark:border-white/10 transition-colors group-hover:border-accent-green/40 dark:group-hover:border-accent-green/40">
        <div className="rounded-[calc(1rem-0.125rem)] bg-card dark:bg-dark-card border border-border/80 dark:border-dark-border p-5 sm:p-6 flex flex-col justify-between h-full space-y-5">
          {/* Top Section: Category & Year & Arrow Button */}
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-accent-green/10 text-accent-green dark:text-dark-accent-green border border-accent-green/20">
                {project.category || project.projectType || 'Architecture'}
              </span>
              {project.year && (
                <span className="text-xs font-mono text-text-secondary dark:text-dark-text-secondary">
                  {project.year}
                </span>
              )}
            </div>

            <div className="w-8 h-8 rounded-full bg-button-secondary-bg dark:bg-dark-button-secondary-bg flex items-center justify-center transition-all duration-300 group-hover:bg-accent-green group-hover:text-white border border-border/60 dark:border-dark-border/60">
              <ArrowRightIcon className="w-3.5 h-3.5 text-text-secondary dark:text-dark-text-secondary group-hover:text-white transition-transform group-hover:translate-x-0.5" />
            </div>
          </div>

          {/* Visual Showcase Thumbnail */}
          <div className="overflow-hidden rounded-xl border border-border/60 dark:border-dark-border/60">
            {project.cardImageUrl ? (
              <img
                src={project.cardImageUrl}
                alt={`${project.name} preview`}
                className="w-full aspect-[16/9] object-cover group-hover:scale-[1.02] transition-transform duration-500"
              />
            ) : (
              <ProjectCoverVisual projectId={project.id} aspect="video" />
            )}
          </div>

          {/* Content: Title & Description */}
          <div className="space-y-2">
            <h3 className="font-display text-xl sm:text-2xl font-bold text-text-primary dark:text-dark-text-primary group-hover:text-accent-green dark:group-hover:text-dark-accent-green transition-colors">
              {project.name}
            </h3>
            {project.tagline && (
              <p className="text-xs font-semibold text-accent-green dark:text-dark-accent-green font-mono">
                {project.tagline}
              </p>
            )}
            <p className="text-sm text-text-secondary dark:text-dark-text-secondary leading-relaxed line-clamp-2">
              {project.description}
            </p>
          </div>

          {/* Bottom Tech Pills */}
          {project.technologies && project.technologies.length > 0 && (
            <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border/60 dark:border-dark-border/60">
              {project.technologies.slice(0, 4).map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 text-[11px] font-mono bg-button-secondary-bg/80 dark:bg-dark-button-secondary-bg/80 border border-border/70 dark:border-dark-border/70 text-text-secondary dark:text-dark-text-secondary rounded"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 4 && (
                <span className="px-2 py-0.5 text-[11px] font-mono text-text-secondary/60 dark:text-dark-text-secondary/60">
                  +{project.technologies.length - 4}
                </span>
              )}
            </div>
          )}
        </div>
      </div>
    </button>
  );
};
