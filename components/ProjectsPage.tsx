import React, { useMemo, useState } from 'react';
import { PROJECTS, FEATURED, EXPERIMENTS, PROJECT_FILTERS } from '../constants';
import { ProjectFilter } from '../types';
import { usePageMeta } from '../hooks/usePageMeta';
import { SectionHeading } from './ui/SectionHeading';
import { Reveal } from './ui/Reveal';
import { ProjectCard } from './ProjectCard';
import { ExperimentRow } from './ExperimentRow';
import { ProjectPendulums } from './ProjectPendulums';

export const ProjectsPage: React.FC = () => {
  usePageMeta(
    'Projects · Daffa Danendra Fairuzza',
    "Projects I've built, prototyped, or explored: from full-stack mobile apps to backend tooling and video processing."
  );

  const [selectedFilter, setSelectedFilter] = useState<'all' | ProjectFilter>('all');

  const countFor = (filterId: 'all' | ProjectFilter) =>
    filterId === 'all'
      ? PROJECTS.length
      : PROJECTS.filter((p) => p.filter === filterId).length;

  const filteredFeatured = useMemo(() => {
    if (selectedFilter === 'all') return FEATURED;
    return FEATURED.filter((p) => p.filter === selectedFilter);
  }, [selectedFilter]);

  const filteredExperiments = useMemo(() => {
    if (selectedFilter === 'all') return EXPERIMENTS;
    return EXPERIMENTS.filter((p) => p.filter === selectedFilter);
  }, [selectedFilter]);

  return (
    <div className="space-y-12 md:space-y-16">
      {/* Header */}
      <div className="relative">
        <ProjectPendulums />
        <header className="rise-in space-y-4 max-w-3xl" style={{ '--n': 0 } as React.CSSProperties}>
        <h1 className="font-display text-[clamp(2rem,5vw,3.25rem)] font-medium tracking-tight leading-[1.08] text-text-primary dark:text-dark-text-primary">
          Work, prototypes &amp; experiments
        </h1>
        <p className="text-base sm:text-lg leading-relaxed text-text-secondary dark:text-dark-text-secondary max-w-[64ch]">
          Projects I&apos;ve built, prototyped, or explored, from full-stack mobile apps to backend tooling and video processing. Each one is labelled honestly: some are working builds, others are concepts, explorations, or learning experiments.
        </p>
        </header>
      </div>

      {/* Filter Pills */}
      <div
        role="group"
        aria-label="Filter projects by category"
        className="rise-in flex flex-wrap items-center gap-2 pb-4 border-b border-border-subtle dark:border-dark-border-subtle"
        style={{ '--n': 1 } as React.CSSProperties}
      >
        {PROJECT_FILTERS.map((filter) => {
          const active = selectedFilter === filter.id;
          const count = countFor(filter.id);
          return (
            <button
              key={filter.id}
              type="button"
              onClick={() => setSelectedFilter(filter.id)}
              aria-pressed={active}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-colors active:scale-[0.98] ${
                active
                  ? 'bg-button-primary-bg text-button-primary-text dark:bg-dark-button-primary-bg dark:text-dark-button-primary-text font-medium'
                  : 'bg-button-secondary-bg dark:bg-dark-button-secondary-bg text-text-secondary dark:text-dark-text-secondary hover:text-text-primary dark:hover:text-dark-text-primary border border-border-subtle dark:border-dark-border-subtle'
              }`}
            >
              {filter.label} ({count})
            </button>
          );
        })}
      </div>

      {/* Featured Projects */}
      {filteredFeatured.length > 0 && (
        <section
          aria-label="Featured projects"
          className="rise-in grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12"
          style={{ '--n': 2 } as React.CSSProperties}
        >
          {filteredFeatured.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </section>
      )}

      {/* Experiments & Coursework */}
      {filteredExperiments.length > 0 && (
        <Reveal as="section" aria-labelledby="experiments-heading" className="space-y-6 pt-4">
          <SectionHeading
            id="experiments-heading"
            title="Experiments & coursework"
          />

          <div className="divide-y divide-border-subtle dark:divide-dark-border-subtle">
            {filteredExperiments.map((project) => (
              <ExperimentRow key={project.id} project={project} />
            ))}
          </div>
        </Reveal>
      )}

      {/* Empty State */}
      {filteredFeatured.length === 0 && filteredExperiments.length === 0 && (
        <div className="text-center py-12 space-y-3">
          <p className="text-sm font-mono text-text-secondary dark:text-dark-text-secondary">
            Nothing in this category yet.
          </p>
          <button
            type="button"
            onClick={() => setSelectedFilter('all')}
            className="text-sm font-medium text-accent-green dark:text-dark-accent-green hover:underline"
          >
            Show all
          </button>
        </div>
      )}
    </div>
  );
};
