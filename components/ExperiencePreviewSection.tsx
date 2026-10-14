import React from 'react';
import { EXPERIENCES } from '../constants';
import { GitHubContributionsGraph } from './GitHubContributionsGraph';
import { ArrowRightIcon, FiLayers } from './icons';

interface ExperiencePreviewSectionProps {
  setCurrentPage: (pageId: string) => void;
  theme: 'light' | 'dark';
}

export const ExperiencePreviewSection: React.FC<ExperiencePreviewSectionProps> = ({
  setCurrentPage,
  theme,
}) => {
  return (
    <section id="home-experience-section" className="space-y-8">
      {/* Header */}
      <div className="animated-item anim-fadeInUp flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-border dark:border-dark-border pb-6">
        <div className="space-y-1.5">
          <div className="flex items-center space-x-2">
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-accent-green dark:text-dark-accent-green">
              02 • Trajectory & Activity
            </span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-text-primary dark:text-dark-text-primary tracking-tight">
            Experience & Open Source
          </h2>
          <p className="text-sm sm:text-base text-text-secondary dark:text-dark-text-secondary max-w-2xl leading-relaxed">
            A chronological timeline of systems engineering roles, architecture initiatives, and open-source contributions.
          </p>
        </div>

        <button
          onClick={() => setCurrentPage('about')}
          className="inline-flex items-center text-sm font-semibold text-accent-green dark:text-dark-accent-green hover:underline group self-start sm:self-end"
        >
          <span>Full Biography & Skills</span>
          <ArrowRightIcon className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Recent Trajectory Milestones */}
        <div className="lg:col-span-7 space-y-4">
          {EXPERIENCES.slice(0, 3).map((exp, idx) => (
            <div
              key={exp.id}
              className="p-5 rounded-2xl bg-card dark:bg-dark-card border border-border dark:border-dark-border hover:border-accent-green/40 transition-colors space-y-2.5"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <div>
                  <h3 className="font-display text-base font-bold text-text-primary dark:text-dark-text-primary">
                    {exp.role}
                  </h3>
                  <div className="text-xs font-semibold text-accent-green dark:text-dark-accent-green">
                    {exp.company}
                  </div>
                </div>
                <span className="text-xs font-mono text-text-secondary dark:text-dark-text-secondary">
                  {exp.period}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-text-secondary dark:text-dark-text-secondary leading-relaxed">
                {exp.description}
              </p>
            </div>
          ))}
        </div>

        {/* Right Column: Open Source Activity Preview */}
        <div className="lg:col-span-5">
          <GitHubContributionsGraph theme={theme} />
        </div>
      </div>
    </section>
  );
};
