import React, { useState } from 'react';
import { ProjectsSectionProps } from '../types';

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  projects,
  setCurrentPage,
  title = "Featured Projects",
}) => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  return (
    <section id="featured-projects" className="w-full flex flex-col gap-8">
      {/* Header Row: Title on Left, Controls & View All on Right */}
      <div className="w-full flex flex-row justify-between items-end gap-4 border-b border-border/40 dark:border-dark-border/40 pb-4">
        <h2 className="text-[26px] sm:text-[30px]/[36px] font-semibold tracking-[-0.75px] text-text-primary dark:text-dark-text-primary">
          {title}
        </h2>

        <div className="flex items-center gap-4">
          {/* View Mode Toggle Pill */}
          <div className="hidden sm:flex items-center gap-1 p-1 border border-border dark:border-dark-border rounded-full">
            {/* Grid button */}
            <button
              onClick={() => setViewMode('grid')}
              aria-label="Grid view"
              className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                viewMode === 'grid'
                  ? 'bg-[#e6e5e0] dark:bg-white/20 text-[#262510] dark:text-white'
                  : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              <svg className="w-4 h-4" viewBox="0 0 16 16" fill="currentColor">
                <rect x="2" y="2" width="5" height="5" rx="1" />
                <rect x="9" y="2" width="5" height="5" rx="1" />
                <rect x="2" y="9" width="5" height="5" rx="1" />
                <rect x="9" y="9" width="5" height="5" rx="1" />
              </svg>
            </button>

            {/* List button */}
            <button
              onClick={() => setViewMode('list')}
              aria-label="List view"
              className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                viewMode === 'list'
                  ? 'bg-[#e6e5e0] dark:bg-white/20 text-[#262510] dark:text-white'
                  : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              <svg className="w-4 h-4" viewBox="0 0 16 16" fill="currentColor">
                <rect x="2" y="3" width="12" height="2" rx="0.5" />
                <rect x="2" y="7" width="12" height="2" rx="0.5" />
                <rect x="2" y="11" width="12" height="2" rx="0.5" />
              </svg>
            </button>
          </div>

          {/* View All Link */}
          <button
            onClick={() => setCurrentPage('projects')}
            className="flex items-center gap-1.5 text-[15px]/[23px] text-text-secondary dark:text-dark-text-secondary hover:text-text-primary dark:hover:text-dark-text-primary font-medium transition-colors group"
          >
            <span>View all</span>
            <svg
              className="w-4 h-4 transition-transform group-hover:translate-x-0.5"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 12l4-4-4-4" />
            </svg>
          </button>
        </div>
      </div>

      {/* Projects Display */}
      {viewMode === 'grid' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <button
              key={project.id}
              onClick={() => setCurrentPage('project-detail', project.id)}
              className="group text-left flex flex-col gap-3 focus:outline-none"
            >
              {/* Card Image Container (4:3 aspect ratio, 16px radius) */}
              <div className="w-full aspect-[4/3] rounded-[16px] overflow-hidden bg-[#f7f7f4] dark:bg-white/5 border border-border/40 dark:border-dark-border/40 relative">
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

              {/* Text Info */}
              <div className="flex flex-col gap-0.5 px-1">
                <h3 className="text-[16px]/[24px] font-semibold text-text-primary dark:text-dark-text-primary group-hover:underline">
                  {project.name}
                </h3>
                <p className="text-[14px]/[21px] font-medium text-text-secondary dark:text-dark-text-secondary">
                  {project.category || project.technologies.join(', ')}
                </p>
              </div>
            </button>
          ))}
        </div>
      ) : (
        /* List View */
        <div className="flex flex-col divide-y divide-border/60 dark:divide-dark-border/60">
          {projects.map((project) => (
            <button
              key={project.id}
              onClick={() => setCurrentPage('project-detail', project.id)}
              className="group py-5 flex items-center justify-between text-left focus:outline-none hover:bg-black/[0.02] dark:hover:bg-white/[0.02] px-3 rounded-xl transition-colors"
            >
              <div className="flex items-center gap-4">
                {project.cardImageUrl && (
                  <img
                    src={project.cardImageUrl}
                    alt=""
                    className="w-14 h-14 rounded-lg object-cover"
                  />
                )}
                <div>
                  <h3 className="text-[16px] font-semibold text-text-primary dark:text-dark-text-primary group-hover:underline">
                    {project.name}
                  </h3>
                  <p className="text-[14px] text-text-secondary dark:text-dark-text-secondary">
                    {project.category}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-text-secondary">{project.year || '2025'}</span>
                <span className="text-text-secondary group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </button>
          ))}
        </div>
      )}
    </section>
  );
};