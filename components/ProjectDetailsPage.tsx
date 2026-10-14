import React from 'react';
import { useParams } from 'react-router-dom';
import { PROJECTS } from '../constants';
import { ProjectCoverVisual } from './ProjectCoverVisual';
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowTopRightOnSquareIcon,
  GithubIcon,
  CheckBadgeIcon,
  EnvelopeIcon,
} from './icons';

export const ProjectDetailsPage: React.FC<{
  setCurrentPage: (pageId: string, projectId?: string) => void;
  email: string;
}> = ({ setCurrentPage, email }) => {
  const { projectId } = useParams<{ projectId: string }>();

  // Find project or fallback to first project
  const projectIndex = PROJECTS.findIndex((p) => p.id === projectId);
  const activeIndex = projectIndex !== -1 ? projectIndex : 0;
  const project = PROJECTS[activeIndex];

  // Calculate circular prev and next projects for pagination
  const prevProject = PROJECTS[(activeIndex - 1 + PROJECTS.length) % PROJECTS.length];
  const nextProject = PROJECTS[(activeIndex + 1) % PROJECTS.length];

  if (!project) {
    return (
      <div className="text-center py-20 space-y-4">
        <h1 className="text-3xl font-bold">Project Not Found</h1>
        <p className="text-text-secondary dark:text-dark-text-secondary max-w-md mx-auto">
          The requested case study could not be found.
        </p>
        <button
          onClick={() => setCurrentPage('projects')}
          className="px-5 py-2.5 bg-button-primary-bg text-button-primary-text dark:bg-dark-button-primary-bg dark:text-dark-button-primary-text rounded-full text-xs font-semibold"
        >
          Back to Projects Archive
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-14 md:space-y-20">
      {/* Top Breadcrumb Nav */}
      <div className="animated-item anim-fadeInUp flex items-center justify-between">
        <button
          onClick={() => setCurrentPage('projects')}
          className="inline-flex items-center text-xs font-mono font-medium text-text-secondary dark:text-dark-text-secondary hover:text-text-primary dark:hover:text-dark-text-primary transition-colors group"
        >
          <ArrowLeftIcon className="w-3.5 h-3.5 mr-1.5 transition-transform group-hover:-translate-x-1" />
          <span>Back to Projects Archive</span>
        </button>

        <span className="text-xs font-mono text-text-secondary/60 dark:text-dark-text-secondary/60">
          Template Case Study {activeIndex + 1} of {PROJECTS.length}
        </span>
      </div>

      {/* Project Header */}
      <div className="animated-item anim-fadeInUp anim-delay-100 space-y-6 max-w-3xl">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-accent-green/10 text-accent-green dark:text-dark-accent-green border border-accent-green/20">
            {project.category || 'Architecture'}
          </span>
          {project.year && (
            <span className="text-xs font-mono text-text-secondary dark:text-dark-text-secondary px-2.5 py-1 rounded-md bg-button-secondary-bg dark:bg-dark-button-secondary-bg border border-border/60 dark:border-dark-border/60">
              {project.year}
            </span>
          )}
          {project.projectType && (
            <span className="text-xs font-mono text-text-secondary dark:text-dark-text-secondary px-2.5 py-1 rounded-md bg-button-secondary-bg/60 dark:bg-dark-button-secondary-bg/60 border border-border/50 dark:border-dark-border/50">
              {project.projectType}
            </span>
          )}
        </div>

        <div className="space-y-3">
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-text-primary dark:text-dark-text-primary tracking-tight leading-[1.1]">
            {project.name}
          </h1>
          {project.tagline && (
            <p className="text-lg sm:text-xl font-medium text-accent-green dark:text-dark-accent-green">
              {project.tagline}
            </p>
          )}
        </div>

        {/* Project Metadata Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-4 border-y border-border dark:border-dark-border font-mono text-xs">
          <div>
            <div className="text-text-secondary/70 dark:text-dark-text-secondary/70">Role</div>
            <div className="font-semibold text-text-primary dark:text-dark-text-primary pt-0.5">
              {project.role || 'Lead Engineer'}
            </div>
          </div>
          <div>
            <div className="text-text-secondary/70 dark:text-dark-text-secondary/70">Context</div>
            <div className="font-semibold text-text-primary dark:text-dark-text-primary pt-0.5">
              {project.company || project.client || 'Open Source'}
            </div>
          </div>
          <div>
            <div className="text-text-secondary/70 dark:text-dark-text-secondary/70">Timeline</div>
            <div className="font-semibold text-text-primary dark:text-dark-text-primary pt-0.5">
              {project.timeline || 'Q1 — Q2'}
            </div>
          </div>
          <div>
            <div className="text-text-secondary/70 dark:text-dark-text-secondary/70">Links</div>
            <div className="flex items-center space-x-2 pt-0.5">
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-green dark:text-dark-accent-green hover:underline flex items-center font-semibold"
                >
                  <span>Live</span>
                  <ArrowTopRightOnSquareIcon className="w-3 h-3 ml-0.5" />
                </a>
              )}
              {project.repoLink && (
                <a
                  href={project.repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-text-primary dark:text-dark-text-secondary dark:hover:text-dark-text-primary flex items-center"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Prominent Visual Showcase Cover */}
      <div className="animated-item anim-fadeInUp anim-delay-200">
        <div className="p-2 sm:p-2.5 rounded-[2rem] bg-black/5 dark:bg-white/5 border border-border dark:border-white/10 shadow-lg">
          <div className="rounded-[calc(2rem-0.625rem)] overflow-hidden bg-card dark:bg-dark-card border border-border/80 dark:border-dark-border">
            {project.cardImageUrl ? (
              <img
                src={project.cardImageUrl}
                alt={`${project.name} cover`}
                className="w-full aspect-[21/9] object-cover"
              />
            ) : (
              <ProjectCoverVisual projectId={project.id} aspect="wide" />
            )}
          </div>
        </div>
      </div>

      {/* Narrative Section 01: Overview & Metrics */}
      <section className="animated-item anim-fadeInUp anim-delay-300 space-y-6">
        <div className="space-y-1">
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-accent-green dark:text-dark-accent-green">
            01 • Executive Overview
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-text-primary dark:text-dark-text-primary">
            Architecture Summary
          </h2>
        </div>

        <p className="text-base sm:text-lg text-text-secondary dark:text-dark-text-secondary leading-relaxed max-w-3xl">
          {project.overview || project.description}
        </p>

        {/* Highlight Metrics */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-2xl bg-card dark:bg-dark-card border border-border dark:border-dark-border font-mono">
            {project.metrics.map((metric, i) => (
              <div key={i} className="space-y-1">
                <div className="text-2xl font-bold text-text-primary dark:text-dark-text-primary">
                  {metric.value}
                </div>
                <div className="text-xs text-text-secondary dark:text-dark-text-secondary">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Narrative Section 02: The Problem & Solution Statement */}
      {(project.problemStatement || project.solutionStatement) && (
        <section className="animated-item anim-fadeInUp space-y-6">
          <div className="space-y-1">
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-accent-green dark:text-dark-accent-green">
              02 • Challenge & Approach
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-text-primary dark:text-dark-text-primary">
              The Problem & Structural Solution
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.problemStatement && (
              <div className="p-6 rounded-2xl bg-card dark:bg-dark-card border border-border dark:border-dark-border space-y-3">
                <div className="text-xs font-mono uppercase tracking-wider text-rose-500 font-semibold flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mr-2" />
                  Problem Statement
                </div>
                <h3 className="font-display text-lg font-bold text-text-primary dark:text-dark-text-primary">
                  {project.problemStatement.title || 'The Core Bottleneck'}
                </h3>
                <p className="text-sm text-text-secondary dark:text-dark-text-secondary leading-relaxed">
                  {project.problemStatement.description}
                </p>
              </div>
            )}

            {project.solutionStatement && (
              <div className="p-6 rounded-2xl bg-card dark:bg-dark-card border border-border dark:border-dark-border space-y-3">
                <div className="text-xs font-mono uppercase tracking-wider text-emerald-500 font-semibold flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-2" />
                  Engineering Solution
                </div>
                <h3 className="font-display text-lg font-bold text-text-primary dark:text-dark-text-primary">
                  {project.solutionStatement.title || 'Architectural Strategy'}
                </h3>
                <p className="text-sm text-text-secondary dark:text-dark-text-secondary leading-relaxed">
                  {project.solutionStatement.description}
                </p>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Narrative Section 03: Core Goals */}
      {project.goals && project.goals.length > 0 && (
        <section className="animated-item anim-fadeInUp space-y-4">
          <div className="space-y-1">
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-accent-green dark:text-dark-accent-green">
              03 • System Objectives
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-text-primary dark:text-dark-text-primary">
              Core Technical Goals
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {project.goals.map((goal, idx) => (
              <div
                key={idx}
                className="flex items-start space-x-3 p-4 rounded-xl bg-card dark:bg-dark-card border border-border dark:border-dark-border text-sm"
              >
                <CheckBadgeIcon className="w-5 h-5 text-accent-green shrink-0 mt-0.5" />
                <span className="text-text-secondary dark:text-dark-text-secondary leading-relaxed">
                  {goal}
                </span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Narrative Section 04: Technical Decisions */}
      {project.decisions && project.decisions.length > 0 && (
        <section className="animated-item anim-fadeInUp space-y-6">
          <div className="space-y-1">
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-accent-green dark:text-dark-accent-green">
              04 • Architectural Pillars
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-text-primary dark:text-dark-text-primary">
              Key Engineering Decisions
            </h2>
          </div>

          <div className="space-y-4">
            {project.decisions.map((decision, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-card dark:bg-dark-card border border-border dark:border-dark-border space-y-3"
              >
                <div className="flex items-center space-x-2">
                  <span className="text-xs font-mono text-accent-green dark:text-dark-accent-green font-bold">
                    Pillar 0{idx + 1}
                  </span>
                  <span className="text-text-secondary/40">•</span>
                  <h3 className="font-display text-lg font-bold text-text-primary dark:text-dark-text-primary">
                    {decision.title}
                  </h3>
                </div>
                <p className="text-sm text-text-secondary dark:text-dark-text-secondary leading-relaxed">
                  {decision.explanation}
                </p>
                <div className="p-3 rounded-lg bg-button-secondary-bg/60 dark:bg-dark-button-secondary-bg/60 border border-border/50 dark:border-dark-border/50 text-xs font-mono text-accent-green dark:text-dark-accent-green">
                  <strong>Impact:</strong> {decision.impact}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Narrative Section 05: Visual Showcase & Gallery */}
      {project.gallery && project.gallery.length > 0 && (
        <section className="animated-item anim-fadeInUp space-y-6">
          <div className="space-y-1">
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-accent-green dark:text-dark-accent-green">
              05 • Visual Gallery
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-text-primary dark:text-dark-text-primary">
              Interface & Systems Frames
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.gallery.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-card dark:bg-dark-card border border-border dark:border-dark-border space-y-3"
              >
                <div className="overflow-hidden rounded-xl border border-border/70 dark:border-dark-border/70">
                  <ProjectCoverVisual projectId={project.id} aspect="video" />
                </div>
                <div className="space-y-1 pt-1">
                  <div className="font-display text-sm font-bold text-text-primary dark:text-dark-text-primary">
                    {item.title}
                  </div>
                  <p className="text-xs text-text-secondary dark:text-dark-text-secondary">
                    {item.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Narrative Section 06: Results & Impact */}
      {project.results && project.results.length > 0 && (
        <section className="animated-item anim-fadeInUp space-y-4">
          <div className="space-y-1">
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-accent-green dark:text-dark-accent-green">
              06 • Outcomes & Impact
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-text-primary dark:text-dark-text-primary">
              Measurable Results
            </h2>
          </div>

          <div className="p-6 rounded-2xl bg-card dark:bg-dark-card border border-border dark:border-dark-border space-y-3">
            <ul className="space-y-2.5 text-sm text-text-secondary dark:text-dark-text-secondary">
              {project.results.map((result, idx) => (
                <li key={idx} className="flex items-start space-x-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-green shrink-0 mt-2" />
                  <span>{result}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Technology Stack Matrix */}
      <section className="animated-item anim-fadeInUp space-y-4">
        <div className="space-y-1">
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-accent-green dark:text-dark-accent-green">
            07 • Technology Stack
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-text-primary dark:text-dark-text-primary">
            Technologies & Tools
          </h2>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1.5 text-xs font-mono bg-card dark:bg-dark-card border border-border dark:border-dark-border text-text-primary dark:text-dark-text-primary rounded-lg shadow-2xs"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* Pagination Navigation to Prev / Next Projects */}
      <div className="animated-item anim-fadeInUp pt-8 border-t border-border dark:border-dark-border">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <button
            onClick={() => setCurrentPage('project-detail', prevProject.id)}
            className="flex items-center space-x-3 p-4 rounded-xl bg-card dark:bg-dark-card border border-border dark:border-dark-border hover:border-accent-green/50 transition-colors text-left group"
          >
            <ArrowLeftIcon className="w-4 h-4 text-text-secondary group-hover:text-accent-green transition-colors" />
            <div>
              <div className="text-[10px] font-mono uppercase tracking-wider text-text-secondary">
                Previous Case Study
              </div>
              <div className="text-sm font-bold text-text-primary dark:text-dark-text-primary group-hover:text-accent-green transition-colors">
                {prevProject.name}
              </div>
            </div>
          </button>

          <button
            onClick={() => setCurrentPage('project-detail', nextProject.id)}
            className="flex items-center justify-between p-4 rounded-xl bg-card dark:bg-dark-card border border-border dark:border-dark-border hover:border-accent-green/50 transition-colors text-right group sm:flex-row-reverse"
          >
            <ArrowRightIcon className="w-4 h-4 text-text-secondary group-hover:text-accent-green transition-colors" />
            <div>
              <div className="text-[10px] font-mono uppercase tracking-wider text-text-secondary">
                Next Case Study
              </div>
              <div className="text-sm font-bold text-text-primary dark:text-dark-text-primary group-hover:text-accent-green transition-colors">
                {nextProject.name}
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};
