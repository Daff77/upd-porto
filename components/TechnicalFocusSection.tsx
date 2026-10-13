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

      <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
        {TECHNICAL_FOCUS.map((focus, index) => {
          const IconComp = focus.iconComponent;
          // Asymmetric layout span: Card 0 spans 7 cols, Card 1 spans 5 cols, Card 2 spans 12 cols
          const spanClass =
            index === 0
              ? "md:col-span-7"
              : index === 1
              ? "md:col-span-5"
              : "md:col-span-12";

          return (
            <div
              key={focus.id}
              className={`animated-item anim-fadeInUp ${spanClass} p-1.5 rounded-2xl bg-black/[0.02] dark:bg-white/[0.03] ring-1 ring-border/80 dark:ring-dark-border/80 shadow-sm transition-all duration-300 hover:ring-accent-green/40`}
              style={{ animationDelay: `${index * 100 + 150}ms` }}
            >
              <div className="h-full rounded-[calc(1rem-0.125rem)] p-6 bg-card dark:bg-dark-card border border-border/60 dark:border-dark-border/60 flex flex-col justify-between space-y-5">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-button-secondary-bg dark:bg-dark-button-secondary-bg flex items-center justify-center text-text-primary dark:text-dark-text-primary">
                      <IconComp className="w-5 h-5 text-accent-green" />
                    </div>
                    <span className="text-xs font-mono text-text-secondary/70 dark:text-dark-text-secondary/70">
                      [0{index + 1}]
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-text-primary dark:text-dark-text-primary tracking-tight">
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

                <div className="pt-4 border-t border-border/60 dark:border-dark-border/60">
                  <p className="text-[11px] font-mono uppercase tracking-wider text-text-secondary/80 dark:text-dark-text-secondary/80 mb-2">
                    Key Topics
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {focus.topics.map((topic) => (
                      <span
                        key={topic}
                        className="text-xs font-mono px-2.5 py-1 rounded-md bg-button-secondary-bg/60 dark:bg-dark-button-secondary-bg/60 text-text-secondary dark:text-dark-text-secondary border border-border/50 dark:border-dark-border/50"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
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
            className="text-sm font-semibold text-accent-green hover:text-accent-green/80 transition-colors inline-flex items-center group"
          >
            <span>Explore Technical Background</span>
            <span className="ml-1.5 transition-transform group-hover:translate-x-1">&rarr;</span>
          </button>
        </div>
      )}
    </section>
  );
};
