import React from 'react';
import { Project } from '../types';

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
  return (
    <button
      onClick={() => onProjectSelect(project.id)}
      className={`group text-left flex flex-col gap-3 focus:outline-none transition-transform active:scale-[0.99] ${className}`}
      style={style}
      aria-label={`View case study for ${project.name}`}
    >
      {/* 4:3 Aspect Ratio Cover Frame */}
      <div className="w-full aspect-[4/3] rounded-[16px] overflow-hidden bg-[#f7f7f4] dark:bg-white/5 border border-border/60 dark:border-dark-border/60 relative">
        {project.cardImageUrl ? (
          <img
            src={project.cardImageUrl}
            alt={project.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center font-mono text-xs text-text-secondary">
            {project.name}
          </div>
        )}
      </div>

      {/* Title & Category Info */}
      <div className="flex flex-col gap-0.5 px-0.5">
        <h3 className="text-[16px]/[24px] font-semibold text-text-primary dark:text-dark-text-primary group-hover:underline">
          {project.name}
        </h3>
        <p className="text-[14px]/[21px] font-medium text-text-secondary dark:text-dark-text-secondary">
          {project.category || project.technologies.slice(0, 3).join(', ')}
        </p>
      </div>
    </button>
  );
};
