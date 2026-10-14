import React, { useState, useMemo } from 'react';
import { ProjectsPageProps } from '../types';
import { ProjectCard } from './ProjectCard';
import { ArrowLeftIcon } from './icons';

export const ProjectsPage: React.FC<ProjectsPageProps> = ({
  projects,
  setCurrentPage,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  // Extract unique categories
  const categories = useMemo(() => {
    const cats = ['All'];
    projects.forEach((p) => {
      if (p.category && !cats.includes(p.category)) {
        cats.push(p.category);
      }
    });
    return cats;
  }, [projects]);

  // Filter projects by category
  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'All') return projects;
    return projects.filter((p) => p.category === selectedCategory);
  }, [projects, selectedCategory]);

  return (
    <div className="space-y-12 md:space-y-16">
      {/* Top Breadcrumb Nav */}
      <div className="animated-item anim-fadeInUp">
        <button
          onClick={() => setCurrentPage('home')}
          className="inline-flex items-center text-xs font-mono font-medium text-text-secondary dark:text-dark-text-secondary hover:text-text-primary dark:hover:text-dark-text-primary transition-colors group"
        >
          <ArrowLeftIcon className="w-3.5 h-3.5 mr-1.5 transition-transform group-hover:-translate-x-1" />
          <span>Back to Home</span>
        </button>
      </div>

      {/* Page Header */}
      <div className="animated-item anim-fadeInUp anim-delay-100 space-y-4 max-w-3xl">
        <div className="inline-flex items-center text-xs font-mono font-semibold uppercase tracking-widest px-3 py-1 rounded-full bg-accent-green/10 text-accent-green dark:text-dark-accent-green border border-accent-green/20">
          Projects Archive
        </div>
        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-text-primary dark:text-dark-text-primary tracking-tight">
          Selected Systems & Case Studies
        </h1>
        <p className="text-base sm:text-lg text-text-secondary dark:text-dark-text-secondary leading-relaxed">
          A collection of reusable project entries demonstrating full-stack architecture, token systems, real-time streaming, and graphics engineering.
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="animated-item anim-fadeInUp anim-delay-200 flex flex-wrap items-center gap-2 pb-2 border-b border-border dark:border-dark-border">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all duration-200 active:scale-[0.98] ${
              selectedCategory === cat
                ? 'bg-button-primary-bg text-button-primary-text dark:bg-dark-button-primary-bg dark:text-dark-button-primary-text font-semibold shadow-xs'
                : 'bg-button-secondary-bg/80 dark:bg-dark-button-secondary-bg/80 text-text-secondary dark:text-dark-text-secondary hover:text-text-primary dark:hover:text-dark-text-primary border border-border/60 dark:border-dark-border/60'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="animated-item anim-fadeInUp anim-delay-300 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onProjectSelect={(id) => setCurrentPage('project-detail', id)}
          />
        ))}
      </div>

      {/* Empty State Fallback */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-12 space-y-3">
          <p className="text-sm font-mono text-text-secondary dark:text-dark-text-secondary">
            No projects found in category "{selectedCategory}".
          </p>
          <button
            onClick={() => setSelectedCategory('All')}
            className="text-xs font-semibold text-accent-green hover:underline"
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* Template Guide Callout */}
      <div className="animated-item anim-fadeInUp anim-delay-400 p-6 rounded-2xl bg-card dark:bg-dark-card border border-border dark:border-dark-border space-y-2">
        <h3 className="font-display text-sm font-bold text-text-primary dark:text-dark-text-primary flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-accent-green" />
          <span>Template Architecture Note</span>
        </h3>
        <p className="text-xs text-text-secondary dark:text-dark-text-secondary leading-relaxed">
          These projects are modular placeholders illustrating the portfolio structure. To connect your personal projects, simply modify the <code className="font-mono text-accent-green bg-accent-green/10 px-1 py-0.5 rounded">PROJECTS</code> array in <code className="font-mono text-accent-green bg-accent-green/10 px-1 py-0.5 rounded">constants.ts</code>.
        </p>
      </div>
    </div>
  );
};
