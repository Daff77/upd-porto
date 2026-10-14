import React from 'react';
import { EXPERIENCES, SPEAKING_EVENTS } from '../constants';

export const SpeakingEventsSection: React.FC = () => {
  const featuredEvent = SPEAKING_EVENTS[0];

  return (
    <section id="experience-milestones" className="w-full flex flex-col gap-8">
      {/* Header & Subtitle */}
      <div className="flex flex-col gap-2 border-b border-border/40 dark:border-dark-border/40 pb-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <h2 className="text-[26px] sm:text-[30px]/[36px] font-semibold tracking-tight text-text-primary dark:text-dark-text-primary">
              Experience &amp; Milestones
            </h2>
            <p className="text-[15px]/[24px] text-text-secondary dark:text-dark-text-secondary max-w-xl pt-1">
              A trajectory of design engineering, living design systems, and tactile web applications built for scale.
            </p>
          </div>

          <div className="text-[13px] font-mono text-text-secondary dark:text-dark-text-secondary">
            [ 2022 — 2026 ]
          </div>
        </div>

        {/* 3 Metric Stats */}
        <div className="flex flex-wrap items-center gap-8 sm:gap-12 pt-4">
          {/* Stat 1 */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-orange-500/10 text-orange-600 dark:text-orange-400 flex items-center justify-center font-bold text-sm">
              4+
            </div>
            <div>
              <div className="text-[18px] font-semibold text-text-primary dark:text-dark-text-primary leading-tight">
                Years
              </div>
              <div className="text-[13px] text-text-secondary dark:text-dark-text-secondary">
                Crafting Software
              </div>
            </div>
          </div>

          {/* Stat 2 */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold text-sm">
              18+
            </div>
            <div>
              <div className="text-[18px] font-semibold text-text-primary dark:text-dark-text-primary leading-tight">
                Shipped
              </div>
              <div className="text-[13px] text-text-secondary dark:text-dark-text-secondary">
                Web Systems &amp; Tools
              </div>
            </div>
          </div>

          {/* Stat 3 */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold text-sm">
              100%
            </div>
            <div>
              <div className="text-[18px] font-semibold text-text-primary dark:text-dark-text-primary leading-tight">
                WCAG AAA
              </div>
              <div className="text-[13px] text-text-secondary dark:text-dark-text-secondary">
                Accessibility Standard
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Experience & Talks Dual Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left: Featured Milestone Spotlight Card (5 cols) */}
        <div className="lg:col-span-5 rounded-[24px] overflow-hidden relative group bg-[#16171b] border border-border/60 dark:border-white/10 p-6 flex flex-col justify-between text-white shadow-md">
          {/* Subtle background image overlay */}
          <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity">
            <img
              src={featuredEvent.imageUrl}
              alt=""
              className="w-full h-full object-cover filter blur-[2px]"
            />
          </div>

          <div className="relative z-10 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-[11px] font-semibold tracking-wide uppercase text-white/90">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>Current Direction</span>
            </div>

            <h3 className="text-[22px] sm:text-[24px] font-bold leading-snug">
              Bridging Interface Craft &amp; Spring Physics
            </h3>

            <p className="text-[14px] leading-relaxed text-white/80">
              Dedicated to replacing arbitrary CSS easing with calibrated physical equations — creating interfaces that feel organic, interruptible, and responsive to human touch.
            </p>
          </div>

          <div className="relative z-10 pt-8 border-t border-white/10 flex flex-wrap gap-2 text-xs">
            <span className="px-2.5 py-1 rounded-md bg-white/10">Spring Equations</span>
            <span className="px-2.5 py-1 rounded-md bg-white/10">OKLCH Tokens</span>
            <span className="px-2.5 py-1 rounded-md bg-white/10">React 19 Hooks</span>
          </div>
        </div>

        {/* Right: Career Roles & Milestones Timeline (7 cols) */}
        <div className="lg:col-span-7 flex flex-col justify-between gap-4">
          {EXPERIENCES.map((exp, index) => (
            <div
              key={exp.id}
              className="p-5 sm:p-6 rounded-[20px] bg-[#f9f9f7] dark:bg-white/[0.03] border border-border/50 dark:border-white/10 flex flex-col gap-3 transition-colors hover:border-text-primary/20"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <div>
                  <h4 className="text-[16px] sm:text-[17px] font-bold text-text-primary dark:text-dark-text-primary">
                    {exp.role}
                  </h4>
                  <p className="text-[14px] font-medium text-text-secondary dark:text-dark-text-secondary">
                    {exp.company} • {exp.location}
                  </p>
                </div>
                <span className="text-[12px] font-mono px-2.5 py-1 rounded-full bg-black/5 dark:bg-white/10 text-text-secondary dark:text-dark-text-secondary self-start sm:self-auto">
                  {exp.period}
                </span>
              </div>

              <p className="text-[14px] leading-relaxed text-text-secondary dark:text-dark-text-secondary">
                {exp.description}
              </p>

              {exp.technologies && (
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-black/5 dark:bg-white/5 text-text-secondary dark:text-dark-text-secondary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
