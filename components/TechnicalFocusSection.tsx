import React from 'react';
import { TECHNICAL_FOCUS } from '../constants';
import { SectionTitle } from './SectionTitle';
import { ArrowRightIcon } from './icons';

interface TechnicalFocusSectionProps {
  onLearnMoreClick?: () => void;
  showTitle?: boolean;
}

export const TechnicalFocusSection: React.FC<TechnicalFocusSectionProps> = ({
  onLearnMoreClick,
  showTitle = true,
}) => {
  return (
    <section id="technical-focus-section" className="space-y-6">
      {showTitle && (
        <SectionTitle
          title="Technical Focus"
          subtitle="Core academic and practical focus areas spanning web engineering, structured software design, and applied intelligence."
        />
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {TECHNICAL_FOCUS.map((focus, index) => {
          const IconComp = focus.iconComponent;
          return (
            <div
              key={focus.id}
              className="animated-item anim-fadeInUp p-6 rounded-xl bg-card dark:bg-dark-card border border-border dark:border-dark-border hover:border-accent-green/40 dark:hover:border-accent-green/40 transition-all duration-300 hover:-translate-y-1 shadow-sm flex flex-col justify-between"
              style={{ animationDelay: `${index * 120 + 150}ms` }}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-lg bg-button-secondary-bg dark:bg-dark-button-secondary-bg flex items-center justify-center text-text-primary dark:text-dark-text-primary">
                    <IconComp className="w-6 h-6 text-accent-green" />
                  </div>
                  <span className="text-xs font-mono text-text-secondary dark:text-dark-text-secondary">
                    0{index + 1}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-text-primary dark:text-dark-text-primary">
                    {focus.title}
                  </h3>
                  <p className="text-xs text-accent-green font-medium mt-0.5">
                    {focus.subtitle}
                  </p>
                </div>

                <p className="text-sm text-text-secondary dark:text-dark-text-secondary leading-relaxed">
                  {focus.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-border dark:border-dark-border/60">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-text-secondary dark:text-dark-text-secondary mb-2">
                  Key Topics
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {focus.topics.map((topic) => (
                    <span
                      key={topic}
                      className="text-xs px-2.5 py-1 rounded-md bg-button-secondary-bg dark:bg-dark-button-secondary-bg text-text-secondary dark:text-dark-text-secondary"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {onLearnMoreClick && (
        <div className="text-center pt-2">
          <button
            onClick={onLearnMoreClick}
            className="text-sm font-medium text-accent-green hover:text-accent-green/80 transition-colors inline-flex items-center group"
          >
            Explore Technical Background
            <ArrowRightIcon className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      )}
    </section>
  );
};
