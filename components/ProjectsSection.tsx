import React from 'react';
import { ProjectsSectionProps } from '../types';
import { ArrowRightIcon, CheckBadgeIcon } from './icons';
import { ProjectCard } from './ProjectCard';
import { ProjectCoverVisual } from './ProjectCoverVisual';

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  projects,
  setCurrentPage,
  title = "Selected Works & Systems",
}) => {
  const featuredProject = projects[0];
  const secondaryProjects = projects.slice(1, 4);

  return (
    <section id="home-projects-section" className="space-y-10 md:space-y-12">
      {/* Section Header */}
      <div className="animated-item anim-fadeInUp flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-border dark:border-dark-border pb-6">
        <div className="space-y-1.5">
          <div className="flex items-center space-x-2">
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-accent-green dark:text-dark-accent-green">
              01 • Portfolio Archive
            </span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-text-primary dark:text-dark-text-primary tracking-tight">
            {title}
          </h2>
          <p className="text-sm sm:text-base text-text-secondary dark:text-dark-text-secondary max-w-2xl leading-relaxed">
            Case studies in token architectures, real-time streaming engines, and client-side graphics.
          </p>
        </div>

        <button
          onClick={() => setCurrentPage('projects')}
          className="inline-flex items-center text-sm font-semibold text-accent-green dark:text-dark-accent-green hover:underline group self-start sm:self-end"
        >
          <span>Browse All ({projects.length})</span>
          <ArrowRightIcon className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
        </button>
      </div>

      {/* Flagship Featured Showcase */}
      {featuredProject && (
        <div className="animated-item anim-fadeInUp anim-delay-100">
          <div className="p-2 sm:p-2.5 rounded-[2rem] bg-black/5 dark:bg-white/5 border border-border dark:border-white/10 shadow-lg">
            <div className="rounded-[calc(2rem-0.625rem)] bg-card dark:bg-dark-card border border-border/80 dark:border-dark-border p-6 sm:p-8 md:p-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
                {/* Left: Project Details & Metrics */}
                <div className="lg:col-span-6 space-y-6">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-mono font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-accent-green/10 text-accent-green dark:text-dark-accent-green border border-accent-green/20">
                      Flagship Architecture
                    </span>
                    <span className="text-xs font-mono text-text-secondary dark:text-dark-text-secondary px-2.5 py-1 rounded-md bg-button-secondary-bg dark:bg-dark-button-secondary-bg border border-border/60 dark:border-dark-border/60">
                      {featuredProject.year || '2026'}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-text-primary dark:text-dark-text-primary tracking-tight">
                      {featuredProject.name}
                    </h3>
                    {featuredProject.tagline && (
                      <p className="text-base font-semibold text-accent-green dark:text-dark-accent-green">
                        {featuredProject.tagline}
                      </p>
                    )}
                    <p className="text-sm sm:text-base text-text-secondary dark:text-dark-text-secondary leading-relaxed pt-1">
                      {featuredProject.description}
                    </p>
                  </div>

                  {/* High-Impact Metrics Grid */}
                  {featuredProject.metrics && (
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-2 border-y border-border/60 dark:border-dark-border/60 font-mono">
                      {featuredProject.metrics.map((metric, i) => (
                        <div key={i} className="space-y-0.5">
                          <div className="text-lg font-bold text-text-primary dark:text-dark-text-primary">
                            {metric.value}
                          </div>
                          <div className="text-[11px] text-text-secondary dark:text-dark-text-secondary">
                            {metric.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {featuredProject.technologies.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs font-mono bg-button-secondary-bg dark:bg-dark-button-secondary-bg border border-border/70 dark:border-dark-border/70 text-text-secondary dark:text-dark-text-secondary rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action CTA */}
                  <div className="pt-2">
                    <button
                      onClick={() => setCurrentPage('project-detail', featuredProject.id)}
                      className="inline-flex items-center justify-between pl-5 pr-2 py-2 text-sm font-semibold text-button-primary-text dark:text-dark-button-primary-text bg-button-primary-bg dark:bg-dark-button-primary-bg hover:bg-button-primary-hover dark:hover:bg-dark-button-primary-hover rounded-full transition-all duration-200 active:scale-[0.98] shadow-sm group min-h-[44px]"
                    >
                      <span className="mr-3">Read Full Case Study</span>
                      <span className="w-7 h-7 rounded-full bg-white/20 dark:bg-black/15 text-white dark:text-zinc-950 flex items-center justify-center transition-transform duration-200 group-hover:translate-x-0.5">
                        <ArrowRightIcon className="w-3.5 h-3.5" />
                      </span>
                    </button>
                  </div>
                </div>

                {/* Right: Rich Visual Showcase */}
                <div className="lg:col-span-6">
                  <div className="p-1 rounded-2xl bg-black/5 dark:bg-white/5 border border-border dark:border-white/10 shadow-inner">
                    <ProjectCoverVisual projectId={featuredProject.id} aspect="wide" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Projects Overview Grid */}
      <div className="space-y-4 pt-4">
        <h3 className="font-display text-xl font-bold text-text-primary dark:text-dark-text-primary flex items-center gap-2">
          <span>Additional Architectures</span>
          <span className="text-xs font-mono font-normal text-text-secondary dark:text-dark-text-secondary">
            ({secondaryProjects.length} Selected)
          </span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {secondaryProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onProjectSelect={(id) => setCurrentPage('project-detail', id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};