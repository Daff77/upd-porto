import React from 'react';
import { ArrowRightIcon, EnvelopeIcon, CodeBracketSquareIcon, CpuChipIcon, FiLayers } from './icons';
import { HeroProps } from '../types';
import { CircularText } from './CircularText';
import { AnimatedKrishnaText } from './AnimatedKrishnaText';
import { VisitorStats } from './VisitorStats';
import { useVisitorCount } from '../hooks/useVisitorCount';
import { LiveTime } from './LiveTime';
import { OnlineStatus } from './OnlineStatus';

export const Hero: React.FC<HeroProps> = ({
  name,
  title,
  headline = "Building Software. Exploring Intelligence.",
  university = "UIN Sunan Ampel Surabaya",
  major = "Information Systems",
  primaryFocus = ["Web Development", "Software Development", "Machine Learning"],
  bio,
  imageUrl,
  circularText,
  circularTextLetterSpacing,
  animatedNameEnglish,
  animatedNameJapanese,
  setCurrentPage,
}) => {
  const { visitorCount, loading, error, isLive } = useVisitorCount();

  const circularTextContent =
    circularText?.trim() || `${name.toUpperCase()} • ${major.toUpperCase()} • `;

  return (
    <section id="hero" className="min-h-[85dvh] md:min-h-0 flex flex-col justify-center pt-12 md:pt-20 pb-12 md:pb-16">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-14">
        <div className="md:w-3/5 space-y-6">
          {/* Status & Academic Origin */}
          <div className="animated-item anim-fadeInUp flex flex-wrap items-center gap-2 sm:gap-3">
            <span className="text-xs sm:text-sm font-medium text-text-secondary dark:text-dark-text-secondary flex items-center bg-card dark:bg-dark-card border border-border dark:border-dark-border px-3.5 py-1.5 rounded-full shadow-sm">
              <OnlineStatus />
              <span>{major}</span>
              <span className="mx-1.5 text-text-secondary/40 dark:text-dark-text-secondary/40">•</span>
              <span>{university}</span>
            </span>
          </div>

          {/* Core Headline */}
          <div className="animated-item anim-fadeInUp anim-delay-100 space-y-2">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-text-primary dark:text-dark-text-primary tracking-tight leading-[1.12]">
              {headline}
            </h1>
          </div>

          {/* Identity & Concise Subtext (Strictly <= 20 words) */}
          <div className="animated-item anim-fadeInUp anim-delay-200 space-y-2.5">
            <h2 className="text-lg sm:text-xl font-semibold text-text-primary dark:text-dark-text-primary flex items-center flex-wrap gap-1.5">
              <span>Hi, I'm</span>
              <AnimatedKrishnaText
                text={name}
                className="text-text-primary dark:text-dark-text-primary font-bold"
                krishnaEnglish={animatedNameEnglish || "Daffa"}
                krishnaJapanese={animatedNameJapanese || "ダッファ"}
              />
            </h2>
            <p className="text-base sm:text-lg text-text-secondary dark:text-dark-text-secondary leading-relaxed max-w-xl">
              Information Systems student at UIN Sunan Ampel Surabaya, engineering practical web software and exploring intelligent decision systems.
            </p>
          </div>

          {/* Primary Focus Badges */}
          <div className="animated-item anim-fadeInUp anim-delay-300 flex flex-wrap gap-2 pt-1">
            <span className="inline-flex items-center text-xs font-medium px-3 py-1.5 rounded-lg bg-card dark:bg-dark-card border border-border dark:border-dark-border text-text-primary dark:text-dark-text-primary hover:border-accent-green/40 transition-colors">
              <CodeBracketSquareIcon className="w-3.5 h-3.5 mr-1.5 text-accent-green" />
              Web Development
            </span>
            <span className="inline-flex items-center text-xs font-medium px-3 py-1.5 rounded-lg bg-card dark:bg-dark-card border border-border dark:border-dark-border text-text-primary dark:text-dark-text-primary hover:border-accent-green/40 transition-colors">
              <FiLayers className="w-3.5 h-3.5 mr-1.5 text-accent-green" />
              Software Development
            </span>
            <span className="inline-flex items-center text-xs font-medium px-3 py-1.5 rounded-lg bg-card dark:bg-dark-card border border-border dark:border-dark-border text-text-primary dark:text-dark-text-primary hover:border-accent-green/40 transition-colors">
              <CpuChipIcon className="w-3.5 h-3.5 mr-1.5 text-accent-green" />
              Machine Learning
            </span>
          </div>

          {/* Location & Time Indicator */}
          <div className="animated-item anim-fadeInUp anim-delay-400 flex flex-wrap items-center gap-3 text-xs text-text-secondary dark:text-dark-text-secondary pt-0.5">
            <LiveTime />
            <span className="text-border dark:text-dark-border">•</span>
            <VisitorStats count={visitorCount} loading={loading} error={error} isLive={isLive} />
          </div>

          {/* Island CTA Buttons (Tactile Micro-interactions) */}
          <div className="animated-item anim-fadeInUp anim-delay-500 flex flex-wrap items-center gap-3.5 pt-2">
            <button
              onClick={() => setCurrentPage('projects')}
              className="inline-flex items-center justify-between pl-5 pr-2 py-2 text-sm font-semibold text-button-primary-text dark:text-dark-button-primary-text bg-button-primary-bg dark:bg-dark-button-primary-bg hover:bg-button-primary-hover dark:hover:bg-dark-button-primary-hover rounded-full transition-all duration-200 active:scale-[0.98] shadow-sm group min-h-[44px]"
            >
              <span className="mr-3">Featured Project</span>
              <span className="w-7 h-7 rounded-full bg-white/20 dark:bg-white/10 flex items-center justify-center transition-transform duration-200 group-hover:translate-x-0.5">
                <ArrowRightIcon className="w-3.5 h-3.5" />
              </span>
            </button>
            <button
              onClick={() => setCurrentPage('contact')}
              className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-button-secondary-text dark:text-dark-button-secondary-text bg-button-secondary-bg dark:bg-dark-button-secondary-bg hover:bg-button-secondary-hover dark:hover:bg-dark-button-secondary-hover rounded-full transition-all duration-200 active:scale-[0.98] border border-border/80 dark:border-dark-border/80 min-h-[44px]"
              aria-label="Contact Daffa"
            >
              <EnvelopeIcon className="w-4 h-4 mr-2" />
              <span>Get in Touch</span>
            </button>
          </div>
        </div>

        {/* Avatar & Concentric Monogram Architecture */}
        <div className="animated-item anim-fadeInUp anim-delay-200 md:w-2/5 flex justify-center md:justify-end">
          <div className="relative w-[220px] h-[220px] md:w-[260px] md:h-[260px]">
            <CircularText
              text={circularTextContent}
              letterSpacing={circularTextLetterSpacing || "0.85em"}
              className="absolute inset-0 w-full h-full animate-spin-slow"
            />
            {/* Outer Concentric Rim */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-44 h-44 md:w-52 md:h-52 rounded-full p-1 bg-card dark:bg-dark-card border border-border dark:border-dark-border shadow-md flex items-center justify-center">
              {/* Inner Avatar Core */}
              <div className="w-full h-full rounded-full overflow-hidden bg-card dark:bg-dark-card border border-border/60 dark:border-dark-border/60">
                <img 
                  src={imageUrl} 
                  alt={name} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};