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
  const { visitorCount, loading, error } = useVisitorCount();

  const circularTextContent =
    circularText?.trim() || `${name.toUpperCase()} • ${major.toUpperCase()} • `;

  return (
    <section id="hero" className="py-10 md:py-16">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-12">
        <div className="md:w-3/5 space-y-5">
          {/* Status & Institution */}
          <div className="animated-item anim-fadeInUp flex flex-wrap items-center gap-2 sm:gap-3">
            <span className="text-xs sm:text-sm font-medium text-text-secondary dark:text-dark-text-secondary flex items-center bg-card dark:bg-dark-card border border-border dark:border-dark-border px-3 py-1 rounded-full">
              <OnlineStatus />
              {major} • {university}
            </span>
          </div>

          {/* Headline */}
          <div className="animated-item anim-fadeInUp anim-delay-100 space-y-2">
            <p className="text-xs uppercase tracking-widest font-semibold text-accent-green">
              Portfolio
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-text-primary dark:text-dark-text-primary tracking-tight leading-tight">
              {headline}
            </h1>
          </div>

          {/* Identity & Intro */}
          <div className="animated-item anim-fadeInUp anim-delay-200 space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-text-primary dark:text-dark-text-primary">
              Hi, I'm{" "}
              <AnimatedKrishnaText
                text={name}
                className="text-text-primary dark:text-dark-text-primary"
                krishnaEnglish={animatedNameEnglish || "Daffa"}
                krishnaJapanese={animatedNameJapanese || "ダッファ"}
              />
            </h2>
            <p className="text-base sm:text-lg text-text-secondary dark:text-dark-text-secondary leading-relaxed max-w-xl">
              {bio}
            </p>
          </div>

          {/* Primary Focus Badges */}
          <div className="animated-item anim-fadeInUp anim-delay-300 flex flex-wrap gap-2 pt-1">
            <span className="inline-flex items-center text-xs font-medium px-3 py-1.5 rounded-lg bg-card dark:bg-dark-card border border-border dark:border-dark-border text-text-primary dark:text-dark-text-primary">
              <CodeBracketSquareIcon className="w-3.5 h-3.5 mr-1.5 text-accent-green" />
              Web Development
            </span>
            <span className="inline-flex items-center text-xs font-medium px-3 py-1.5 rounded-lg bg-card dark:bg-dark-card border border-border dark:border-dark-border text-text-primary dark:text-dark-text-primary">
              <FiLayers className="w-3.5 h-3.5 mr-1.5 text-blue-500" />
              Software Development
            </span>
            <span className="inline-flex items-center text-xs font-medium px-3 py-1.5 rounded-lg bg-card dark:bg-dark-card border border-border dark:border-dark-border text-text-primary dark:text-dark-text-primary">
              <CpuChipIcon className="w-3.5 h-3.5 mr-1.5 text-purple-500" />
              Machine Learning
            </span>
          </div>

          {/* Time & Visitor Stats */}
          <div className="animated-item anim-fadeInUp anim-delay-400 flex flex-wrap items-center gap-4 text-xs text-text-secondary dark:text-dark-text-secondary pt-1">
            <LiveTime />
            <span className="text-border dark:text-dark-border">•</span>
            <VisitorStats count={visitorCount} loading={loading} error={error} />
          </div>

          {/* Action Buttons */}
          <div className="animated-item anim-fadeInUp anim-delay-500 flex flex-wrap gap-3 pt-3">
            <button
              onClick={() => setCurrentPage('projects')}
              className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-button-primary-text dark:text-dark-button-primary-text bg-button-primary-bg dark:bg-dark-button-primary-bg hover:bg-button-primary-hover dark:hover:bg-dark-button-primary-hover rounded-lg transition-colors focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-700 shadow-sm group"
            >
              Featured Project
              <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform" />
            </button>
            <button
              onClick={() => setCurrentPage('contact')}
              className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-button-secondary-text dark:text-dark-button-secondary-text bg-button-secondary-bg dark:bg-dark-button-secondary-bg hover:bg-button-secondary-hover dark:hover:bg-dark-button-secondary-hover rounded-lg transition-colors focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
              aria-label="Contact Daffa"
            >
              <EnvelopeIcon className="w-4 h-4 mr-2" />
              Get in Touch
            </button>
          </div>
        </div>

        {/* Avatar & Circular Text */}
        <div className="animated-item anim-fadeInUp anim-delay-200 md:w-2/5 flex justify-center md:justify-end">
          <div className="relative w-[210px] h-[210px] md:w-[250px] md:h-[250px]">
            <CircularText
              text={circularTextContent}
              letterSpacing={circularTextLetterSpacing || "0.85em"}
              className="absolute inset-0 w-full h-full animate-spin-slow"
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-card dark:border-dark-card shadow-xl bg-card dark:bg-dark-card">
              <img 
                src={imageUrl} 
                alt={name} 
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};