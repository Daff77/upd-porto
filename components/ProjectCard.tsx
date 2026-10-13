import React from 'react';
import { Project } from '../types';
import { ArrowRightIcon, CodeBracketSquareIcon } from './icons';

interface ProjectCardProps {
  project: Project;
  className?: string;
  style?: React.CSSProperties;
  onProjectSelect: (projectId: string) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  className,
  style,
  onProjectSelect,
}) => {
  const IconComponent = project.iconComponent || CodeBracketSquareIcon;

  const handleCardClick = () => {
    onProjectSelect(project.id);
  };
  
  const handleKeyPress = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      onProjectSelect(project.id);
    }
  };

  return (
    <button
      onClick={handleCardClick}
      onKeyDown={handleKeyPress}
      className={`block group text-left w-full ${className || ''}`}
      aria-label={`View details for ${project.name}`}
      style={style}
    >
      <div className="p-6 bg-card dark:bg-dark-card hover:bg-card-hover dark:hover:bg-dark-card-hover rounded-xl shadow-md transition-all duration-300 ease-in-out transform hover:-translate-y-1 border border-border dark:border-dark-border h-full flex flex-col justify-between">
        <div className="space-y-4">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-start space-x-4">
              {project.cardImageUrl ? (
                <img 
                  src={project.cardImageUrl} 
                  alt={`${project.name} preview`} 
                  className="w-14 h-14 rounded-xl object-cover border border-border dark:border-dark-border flex-shrink-0"
                />
              ) : (
                <div className={`w-14 h-14 flex items-center justify-center rounded-xl flex-shrink-0 shadow-sm ${project.iconBgColor || 'bg-emerald-600'}`}>
                  <IconComponent className="w-7 h-7 text-white" />
                </div>
              )}
              <div className="space-y-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-xl font-bold text-text-primary dark:text-dark-text-primary group-hover:text-accent-green transition-colors">
                    {project.name}
                  </h3>
                  {project.projectType && (
                    <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-accent-green/15 text-accent-green border border-accent-green/30">
                      {project.projectType}
                    </span>
                  )}
                </div>
                {project.tagline && (
                  <p className="text-xs font-medium text-text-secondary dark:text-dark-text-secondary">
                    {project.tagline}
                  </p>
                )}
                <p className="text-sm text-text-secondary dark:text-dark-text-secondary leading-relaxed pt-1">
                  {project.description}
                </p>
              </div>
            </div>
            <div className="w-9 h-9 rounded-full bg-button-secondary-bg dark:bg-dark-button-secondary-bg flex items-center justify-center flex-shrink-0 group-hover:bg-accent-green group-hover:text-white transition-all duration-200">
              <ArrowRightIcon className="w-4 h-4 text-text-secondary dark:text-dark-text-secondary group-hover:text-white transition-colors" />
            </div>
          </div>

          {project.technologies && project.technologies.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-2 border-t border-border/60 dark:border-dark-border/60">
              {project.technologies.map(tech => (
                <span 
                  key={tech} 
                  className="px-2.5 py-1 text-xs bg-button-secondary-bg dark:bg-dark-button-secondary-bg text-text-secondary dark:text-dark-text-secondary rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </button>
  );
};
