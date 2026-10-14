import React, { useState } from 'react';
import { ArrowRightIcon, EnvelopeIcon, CodeBracketSquareIcon, CpuChipIcon, FiLayers, FiFeather } from './icons';
import { HeroProps } from '../types';
import { OnlineStatus } from './OnlineStatus';
import { LiveTime } from './LiveTime';
import { ProjectCoverVisual } from './ProjectCoverVisual';

export const Hero: React.FC<HeroProps> = ({
  name = "Alex Morgan",
  title = "Systems Designer & Software Engineer",
  headline = "Engineering tactile interfaces & distributed systems.",
  major = "Systems Architecture",
  university = "Institute of Design & Technology",
  bio = "Senior systems designer and software engineer crafting enduring digital tools, tactile interfaces, and resilient distributed architectures. Focused on craftsmanship, performance, and human interaction.",
  setCurrentPage,
}) => {
  const [activeShowcaseTab, setActiveShowcaseTab] = useState<'aura' | 'pulse' | 'kroma'>('aura');

  return (
    <section id="hero" className="min-h-[85dvh] md:min-h-0 flex flex-col justify-center pt-8 sm:pt-14 md:pt-20 pb-12 md:pb-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        {/* Left Column: Editorial Introduction & Action Island */}
        <div className="lg:col-span-7 space-y-6">
          {/* Status Eyebrow Badge */}
          <div className="animated-item anim-fadeInUp flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center text-xs font-mono font-medium px-3.5 py-1.5 rounded-full bg-card dark:bg-dark-card border border-border dark:border-dark-border text-text-secondary dark:text-dark-text-secondary shadow-sm">
              <OnlineStatus />
              <span className="text-accent-green dark:text-dark-accent-green font-semibold mr-1.5">Available</span>
              <span>• Q4 2026 Initiatives</span>
            </span>
            <span className="hidden sm:inline-flex text-xs font-mono text-text-secondary/70 dark:text-dark-text-secondary/70 px-2.5 py-1 rounded-md bg-button-secondary-bg/60 dark:bg-dark-button-secondary-bg/60 border border-border/50 dark:border-dark-border/50">
              {major}
            </span>
          </div>

          {/* Core Display Headline */}
          <div className="animated-item anim-fadeInUp anim-delay-100 space-y-2">
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-text-primary dark:text-dark-text-primary tracking-tight leading-[1.12] text-balance">
              {headline}
            </h1>
          </div>

          {/* Identity & Short Biography Placeholder */}
          <div className="animated-item anim-fadeInUp anim-delay-200 space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-base sm:text-lg font-medium text-text-primary dark:text-dark-text-primary">
                Hi, I'm <strong className="font-semibold text-accent-green dark:text-dark-accent-green">{name}</strong>
              </span>
              <span className="text-text-secondary/50 dark:text-dark-text-secondary/50">•</span>
              <span className="text-sm sm:text-base text-text-secondary dark:text-dark-text-secondary font-medium">
                {title}
              </span>
            </div>
            <p className="text-base sm:text-lg text-text-secondary dark:text-dark-text-secondary leading-relaxed max-w-xl text-pretty">
              {bio}
            </p>
          </div>

          {/* Primary Capability Pills */}
          <div className="animated-item anim-fadeInUp anim-delay-300 flex flex-wrap gap-2 pt-1">
            <span className="inline-flex items-center text-xs font-medium px-3 py-1.5 rounded-lg bg-card dark:bg-dark-card border border-border dark:border-dark-border text-text-primary dark:text-dark-text-primary hover:border-accent-green/50 transition-colors">
              <CodeBracketSquareIcon className="w-3.5 h-3.5 mr-1.5 text-accent-green dark:text-dark-accent-green" />
              Interface Engineering
            </span>
            <span className="inline-flex items-center text-xs font-medium px-3 py-1.5 rounded-lg bg-card dark:bg-dark-card border border-border dark:border-dark-border text-text-primary dark:text-dark-text-primary hover:border-accent-green/50 transition-colors">
              <FiLayers className="w-3.5 h-3.5 mr-1.5 text-accent-green dark:text-dark-accent-green" />
              Distributed Systems
            </span>
            <span className="inline-flex items-center text-xs font-medium px-3 py-1.5 rounded-lg bg-card dark:bg-dark-card border border-border dark:border-dark-border text-text-primary dark:text-dark-text-primary hover:border-accent-green/50 transition-colors">
              <CpuChipIcon className="w-3.5 h-3.5 mr-1.5 text-accent-green dark:text-dark-accent-green" />
              Intelligent Tooling
            </span>
          </div>

          {/* Action Island: Primary CTA + Secondary CTA */}
          <div className="animated-item anim-fadeInUp anim-delay-400 flex flex-wrap items-center gap-3.5 pt-2">
            <button
              onClick={() => setCurrentPage('projects')}
              className="inline-flex items-center justify-between pl-5 pr-2 py-2 text-sm font-semibold text-button-primary-text dark:text-dark-button-primary-text bg-button-primary-bg dark:bg-dark-button-primary-bg hover:bg-button-primary-hover dark:hover:bg-dark-button-primary-hover rounded-full transition-all duration-200 active:scale-[0.98] shadow-sm group min-h-[44px]"
            >
              <span className="mr-3">Explore Projects Archive</span>
              <span className="w-7 h-7 rounded-full bg-white/20 dark:bg-black/15 text-white dark:text-zinc-950 flex items-center justify-center transition-transform duration-200 group-hover:translate-x-0.5">
                <ArrowRightIcon className="w-3.5 h-3.5" />
              </span>
            </button>

            <button
              onClick={() => setCurrentPage('about')}
              className="inline-flex items-center px-5 py-2.5 text-sm font-semibold text-text-primary dark:text-dark-text-primary bg-card dark:bg-dark-card hover:bg-card-hover dark:hover:bg-dark-card-hover border border-border dark:border-dark-border rounded-full transition-all duration-200 active:scale-[0.98] min-h-[44px]"
            >
              <span>Read Background & Bio</span>
            </button>
          </div>

          {/* Telemetry Footer */}
          <div className="animated-item anim-fadeInUp anim-delay-500 flex flex-wrap items-center gap-3 text-xs text-text-secondary dark:text-dark-text-secondary pt-1 font-mono">
            <LiveTime />
            <span className="text-border dark:text-dark-border">•</span>
            <span>Template v2.4</span>
            <span className="text-border dark:text-dark-border">•</span>
            <span className="text-accent-green dark:text-dark-accent-green font-medium">Ready for Customization</span>
          </div>
        </div>

        {/* Right Column: Prominent Visual Showcase Area (Double-Bezel Framing) */}
        <div className="lg:col-span-5 animated-item anim-fadeInUp anim-delay-300">
          <div className="p-2 sm:p-2.5 rounded-[2rem] bg-black/5 dark:bg-white/5 border border-border dark:border-white/10 shadow-xl">
            <div className="rounded-[calc(2rem-0.625rem)] bg-card dark:bg-dark-card border border-border/80 dark:border-dark-border p-4 sm:p-5 space-y-4">
              {/* Showcase Frame Header with Interactive Switcher */}
              <div className="flex items-center justify-between border-b border-border dark:border-dark-border pb-3">
                <div className="flex items-center space-x-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  <span className="text-xs font-mono text-text-secondary dark:text-dark-text-secondary pl-2 font-medium">
                    Showcase Canvas
                  </span>
                </div>

                <div className="flex items-center bg-button-secondary-bg dark:bg-dark-button-secondary-bg p-0.5 rounded-lg border border-border/60 dark:border-dark-border/60 text-[11px] font-mono">
                  <button
                    onClick={() => setActiveShowcaseTab('aura')}
                    className={`px-2 py-1 rounded transition-colors ${
                      activeShowcaseTab === 'aura'
                        ? 'bg-card dark:bg-dark-card text-text-primary dark:text-dark-text-primary font-semibold shadow-xs'
                        : 'text-text-secondary dark:text-dark-text-secondary hover:text-text-primary dark:hover:text-dark-text-primary'
                    }`}
                  >
                    Aura
                  </button>
                  <button
                    onClick={() => setActiveShowcaseTab('pulse')}
                    className={`px-2 py-1 rounded transition-colors ${
                      activeShowcaseTab === 'pulse'
                        ? 'bg-card dark:bg-dark-card text-text-primary dark:text-dark-text-primary font-semibold shadow-xs'
                        : 'text-text-secondary dark:text-dark-text-secondary hover:text-text-primary dark:hover:text-dark-text-primary'
                    }`}
                  >
                    Pulse
                  </button>
                  <button
                    onClick={() => setActiveShowcaseTab('kroma')}
                    className={`px-2 py-1 rounded transition-colors ${
                      activeShowcaseTab === 'kroma'
                        ? 'bg-card dark:bg-dark-card text-text-primary dark:text-dark-text-primary font-semibold shadow-xs'
                        : 'text-text-secondary dark:text-dark-text-secondary hover:text-text-primary dark:hover:text-dark-text-primary'
                    }`}
                  >
                    Kroma
                  </button>
                </div>
              </div>

              {/* Dynamic Visual Canvas */}
              <div className="overflow-hidden rounded-xl">
                {activeShowcaseTab === 'aura' && <ProjectCoverVisual projectId="aura-studio" aspect="video" />}
                {activeShowcaseTab === 'pulse' && <ProjectCoverVisual projectId="pulse-protocol" aspect="video" />}
                {activeShowcaseTab === 'kroma' && <ProjectCoverVisual projectId="kroma-engine" aspect="video" />}
              </div>

              {/* Quick Case Study Action */}
              <div className="pt-1 flex items-center justify-between text-xs">
                <span className="font-mono text-text-secondary dark:text-dark-text-secondary">
                  {activeShowcaseTab === 'aura' && 'Token System • React 19'}
                  {activeShowcaseTab === 'pulse' && 'WebSocket Core • 220k/s'}
                  {activeShowcaseTab === 'kroma' && 'WebGPU Compute • 4.8ms'}
                </span>
                <button
                  onClick={() =>
                    setCurrentPage(
                      'project-detail',
                      activeShowcaseTab === 'aura'
                        ? 'aura-studio'
                        : activeShowcaseTab === 'pulse'
                        ? 'pulse-protocol'
                        : 'kroma-engine'
                    )
                  }
                  className="font-semibold text-accent-green dark:text-dark-accent-green hover:underline flex items-center"
                >
                  View Case Study
                  <ArrowRightIcon className="w-3.5 h-3.5 ml-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};