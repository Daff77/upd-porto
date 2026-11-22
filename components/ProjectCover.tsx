import React from 'react';
import { Project } from '../types';

interface ProjectCoverProps {
  project: Project;
  variant: 'card' | 'hero';
}

export const ProjectCover: React.FC<ProjectCoverProps> = ({ project, variant }) => {
  const firstMedia = project.media?.[0];

  if (firstMedia) {
    return (
      <img
        src={firstMedia.src}
        alt={firstMedia.alt}
        className="w-full h-full object-contain"
      />
    );
  }

  const isHero = variant === 'hero';
  const stackVerticallyOnMobile = project.architecture.length > 3;

  return (
    <div
      aria-hidden="true"
      style={{ backgroundColor: project.accent }}
      className={`relative w-full h-full flex flex-col justify-between overflow-hidden select-none text-white ${
        isHero ? 'p-5 sm:p-8' : 'p-4 sm:p-5'
      }`}
    >
      {/* Subtle dot-grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px)',
          backgroundSize: '18px 18px',
        }}
      />
      {/* Soft edge vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 30%, rgba(0, 0, 0, 0.45) 100%)',
        }}
      />

      {/* Top row: category & stage */}
      <div className="relative z-10 flex items-center justify-between gap-2">
        <span
          className={`font-mono uppercase tracking-wider text-white/60 truncate ${
            isHero ? 'text-[11px]' : 'text-[10px]'
          }`}
        >
          {project.category}
        </span>
        {project.stage && (
          <span
            className={`shrink-0 font-mono uppercase tracking-wider text-white/75 px-2 py-0.5 rounded border border-white/15 bg-white/[0.04] ${
              isHero ? 'text-[11px]' : 'text-[9.5px]'
            }`}
          >
            {project.stage}
          </span>
        )}
      </div>

      {/* Center: Architecture flow diagram */}
      <div
        className={`relative z-10 flex items-center justify-center my-auto py-2 ${
          stackVerticallyOnMobile && !isHero
            ? 'flex-col sm:flex-row gap-1.5 sm:gap-1'
            : 'flex-row gap-1 sm:gap-2'
        }`}
      >
        {project.architecture.map((node, index) => (
          <React.Fragment key={node.label}>
            <div
              className={`rounded-lg border border-white/15 bg-white/[0.04] transition-transform duration-300 group-hover:-translate-y-0.5 text-center ${
                isHero
                  ? 'px-3 py-2 sm:px-4 sm:py-2.5 min-w-0'
                  : 'px-2 py-1.5 sm:px-2.5 sm:py-2 min-w-0'
              }`}
              style={{ transitionDelay: `${index * 35}ms` }}
            >
              <div
                className={`font-medium text-white/90 leading-tight ${
                  isHero ? 'text-xs sm:text-[13px]' : 'text-[10.5px] sm:text-xs'
                }`}
              >
                {node.label}
              </div>
              {node.detail && (
                <div
                  className={`font-mono text-white/50 leading-tight mt-0.5 ${
                    isHero ? 'text-[10px] sm:text-[11px]' : 'text-[9px] sm:text-[10px]'
                  }`}
                >
                  {node.detail}
                </div>
              )}
            </div>

            {index < project.architecture.length - 1 && (
              <div
                className={`flex items-center justify-center shrink-0 text-white/30 ${
                  stackVerticallyOnMobile && !isHero
                    ? 'flex-col sm:flex-row h-2.5 sm:h-auto w-auto sm:w-4'
                    : 'flex-row w-3 sm:w-5'
                }`}
              >
                <span
                  className={`bg-white/25 ${
                    stackVerticallyOnMobile && !isHero
                      ? 'w-px h-full sm:w-full sm:h-px'
                      : 'w-full h-px'
                  }`}
                />
                <svg
                  className={`w-2 h-2 shrink-0 ${
                    stackVerticallyOnMobile && !isHero ? 'rotate-90 sm:rotate-0 -mt-1 sm:mt-0 sm:-ml-1' : '-ml-1'
                  }`}
                  viewBox="0 0 8 8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M2 1.5L5.5 4L2 6.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Bottom-left: Project name */}
      <div className="relative z-10 flex items-end justify-between">
        <span
          className={`font-medium tracking-tight text-white ${
            isHero ? 'text-base sm:text-xl' : 'text-sm sm:text-base'
          }`}
        >
          {project.name}
        </span>
      </div>
    </div>
  );
};
