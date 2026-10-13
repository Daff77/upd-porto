import React from 'react';
import { SectionTitle } from './SectionTitle';
import { TechnicalFocusSection } from './TechnicalFocusSection';
import { CallToAction } from './CallToAction';
import { PERSONAL_INFO } from '../constants';
import { CodeBracketSquareIcon, CpuChipIcon, FiLayers, FiBookOpen } from './icons';

interface TechnicalFocusPageProps {
  setCurrentPage: (pageId: string) => void;
  email: string;
}

export const TechnicalFocusPage: React.FC<TechnicalFocusPageProps> = ({
  setCurrentPage,
  email,
}) => {
  return (
    <div className="space-y-16 md:space-y-20">
      <section id="focus-overview-section" className="space-y-8">
        <SectionTitle
          title="Technical Focus"
          subtitle="An exploration of the core domains shaping my studies in Information Systems and practical development projects."
        />

        <div className="p-6 sm:p-8 rounded-xl bg-card dark:bg-dark-card border border-border dark:border-dark-border space-y-4">
          <div className="flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-accent-green">
            <FiBookOpen className="w-4 h-4" />
            <span>Academic & Technical Approach</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-text-primary dark:text-dark-text-primary">
            Bridging Systems Analysis with Technical Execution
          </h2>
          <p className="text-sm sm:text-base text-text-secondary dark:text-dark-text-secondary leading-relaxed">
            As an Information Systems student at UIN Sunan Ampel Surabaya, I view software through both an engineering lens and a systemic perspective. My technical focus connects user-facing web applications with structured backend logic and data-driven intelligence to create purposeful digital solutions.
          </p>
        </div>

        <TechnicalFocusSection showTitle={false} />
      </section>

      {/* Detailed Pillars Breakdown */}
      <section id="deep-dive" className="space-y-8">
        <h2 className="text-2xl font-bold text-text-primary dark:text-dark-text-primary flex items-center">
          <span className="w-2 h-2 rounded-full bg-accent-green mr-3"></span>
          Areas of Focus & Learning Trajectory
        </h2>

        <div className="grid grid-cols-1 gap-6">
          <div className="p-6 rounded-xl bg-card dark:bg-dark-card border border-border dark:border-dark-border space-y-3">
            <div className="flex items-center space-x-3">
              <div className="p-2 rounded-lg bg-emerald-500/10 text-accent-green">
                <CodeBracketSquareIcon className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-text-primary dark:text-dark-text-primary">
                1. Web Development
              </h3>
            </div>
            <p className="text-sm text-text-secondary dark:text-dark-text-secondary leading-relaxed">
              Modern web platforms require thoughtful interface architecture and performant client-side state handling. My work in web development prioritizes clear visual hierarchy, accessible navigation, and component-based structures using modern JavaScript/TypeScript and responsive CSS layouts.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-card dark:bg-dark-card border border-border dark:border-dark-border space-y-3">
            <div className="flex items-center space-x-3">
              <div className="p-2 rounded-lg bg-blue-500/10 text-blue-500">
                <FiLayers className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-text-primary dark:text-dark-text-primary">
                2. Software Development
              </h3>
            </div>
            <p className="text-sm text-text-secondary dark:text-dark-text-secondary leading-relaxed">
              Software engineering is about disciplined systems thinking. I focus on modular design, clean separation of concerns, relational database modeling, and structured workflows that transform abstract operational requirements into maintainable applications.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-card dark:bg-dark-card border border-border dark:border-dark-border space-y-3">
            <div className="flex items-center space-x-3">
              <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-500">
                <CpuChipIcon className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-text-primary dark:text-dark-text-primary">
                3. Machine Learning
              </h3>
            </div>
            <p className="text-sm text-text-secondary dark:text-dark-text-secondary leading-relaxed">
              Exploring computational intelligence to extract insights from structured data and support complex decision-making. I am dedicated to studying the mathematical and practical foundations of machine learning models, ethical deployment, and their integration into broader software systems.
            </p>
          </div>
        </div>
      </section>

      <CallToAction email={email} setCurrentPage={setCurrentPage} />
    </div>
  );
};
