import React from 'react';
import { Project } from '../types';

export const FeaturedProjectCover: React.FC<{ project: Project }> = ({ project }) => (
  <div
    aria-hidden="true"
    className={`w-full h-full flex items-center justify-center ${project.iconBgColor ?? 'bg-zinc-900'} text-white`}
  >
    {project.cardImageUrl ? (
      <img src={project.cardImageUrl} alt="" className="w-full h-full object-cover" />
    ) : (
      <span className="font-display text-5xl sm:text-7xl font-bold tracking-tight">
        {project.iconChar}
      </span>
    )}
  </div>
);
