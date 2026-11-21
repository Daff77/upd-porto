import React, { useState } from 'react';
import { HeroProps } from '../types';
import { PROJECTS } from '../constants';
import { FeaturedProjectCover } from './FeaturedProjectCover';

export const Hero: React.FC<HeroProps> = ({
  name,
  title,
  headline,
  bio,
  university,
  imageUrl,
  setCurrentPage,
}) => {
  const [activeTab, setActiveTab] = useState(PROJECTS[0].id);
  const currentShowcase = PROJECTS.find((project) => project.id === activeTab) ?? PROJECTS[0];

  return (
    <section id="hero" className="w-full flex flex-col gap-10 md:gap-12 pt-2 pb-6">
      {/* Top Header Block: Avatar & Status & Name */}
      <div className="flex flex-col gap-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4 sm:gap-5">
            {/* Portrait Avatar with signature elevated border */}
            <div className="w-[68px] h-[86px] sm:w-[76px] sm:h-[96px] shrink-0 p-1 bg-white/70 dark:bg-white/10 border-[3px] border-white dark:border-white/10 rounded-[20px] overflow-hidden shadow-md">
              <img
                src={imageUrl}
                alt=""
                className="w-full h-full object-cover rounded-[14px]"
              />
            </div>

            {/* Name & Role Tag */}
            <div className="flex flex-col">
              <h1 className="text-[34px] sm:text-[46px] leading-tight font-bold tracking-tight text-text-primary dark:text-dark-text-primary">
                {name}
              </h1>
              <div className="flex items-center gap-2 pt-1 text-[13px] sm:text-[14px] text-text-secondary dark:text-dark-text-secondary font-medium">
                <span>{title}</span>
              </div>
            </div>
          </div>

          {/* Availability Pill */}
          <div className="self-start sm:self-auto inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 dark:text-emerald-300 text-[12px] font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>{university}</span>
          </div>
        </div>

        {/* Big Editorial Headline */}
        <div className="max-w-3xl space-y-3">
          <h2 className="text-[24px] sm:text-[34px] leading-[1.3] font-medium tracking-tight text-text-primary dark:text-dark-text-primary">
            {headline}
          </h2>
          <p className="text-[15px] sm:text-[17px] leading-relaxed text-text-secondary dark:text-dark-text-secondary">
            {bio}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3 pt-1">
          {/* Primary Button: Discuss a Project */}
          <button
            onClick={() => setCurrentPage('contact')}
            className="h-[50px] sm:h-[54px] px-6 sm:px-8 rounded-full bg-gradient-to-b from-[#2a2a2a] to-[#111111] dark:from-white dark:to-[#e4e4e7] text-white dark:text-[#111111] shadow-[inset_0px_1px_1px_rgba(255,255,255,0.25),0px_6px_14px_rgba(0,0,0,0.2)] flex items-center gap-2.5 text-[15px] font-semibold transition-all duration-200 active:scale-[0.98] hover:opacity-95 hover:shadow-lg"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
            <span>Kontak</span>
          </button>

          {/* Secondary Button: Explore Works */}
          <button
            onClick={() => setCurrentPage('projects')}
            className="h-[50px] sm:h-[54px] px-6 sm:px-7 rounded-full border border-border dark:border-white/15 bg-card/70 dark:bg-dark-card/70 text-text-primary dark:text-dark-text-primary flex items-center gap-2.5 text-[15px] font-medium hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-200 active:scale-[0.98]"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
            <span>Lihat Proyek</span>
          </button>

          {/* About Me Link */}
          <button
            onClick={() => setCurrentPage('about')}
            className="h-[50px] sm:h-[54px] px-5 rounded-full text-text-secondary dark:text-dark-text-secondary hover:text-text-primary dark:hover:text-dark-text-primary text-[14px] font-medium transition-colors"
          >
            Tentang Saya
          </button>
        </div>
      </div>

      {/* Interactive Showcase Preview Deck */}
      <div className="w-full flex flex-col gap-3">
        {/* Showcase Switcher Pills */}
        <div className="flex flex-wrap items-center justify-between gap-2 px-1">
          <div className="flex items-center gap-1.5 p-1 bg-black/5 dark:bg-white/5 rounded-full border border-border/60 dark:border-dark-border/60 text-xs font-medium">
            {PROJECTS.map((project) => (
              <button
                key={project.id}
                type="button"
                onClick={() => setActiveTab(project.id)}
                aria-pressed={activeTab === project.id}
                className={`px-2.5 sm:px-3.5 py-1.5 rounded-full transition-all ${
                  activeTab === project.id
                    ? 'bg-white dark:bg-[#202125] text-text-primary dark:text-dark-text-primary font-semibold shadow-xs'
                    : 'text-text-secondary dark:text-dark-text-secondary hover:text-text-primary'
                }`}
              >
                {project.name}
              </button>
            ))}
          </div>

          <div className="hidden sm:flex items-center gap-2 text-[12px] font-medium text-text-secondary dark:text-dark-text-secondary">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>{currentShowcase.technologies[0]}</span>
          </div>
        </div>

        {/* Large Frame */}
        <div className="w-full rounded-[24px] bg-[#222327] overflow-hidden relative shadow-lg aspect-[16/10] sm:aspect-[16/9] md:aspect-[21/10] group border border-border/50 dark:border-white/10">
          <FeaturedProjectCover project={currentShowcase} />

          {/* Bottom subtle title bar */}
          <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-white">
            <div className="space-y-0.5">
              <span className="text-[11px] uppercase tracking-wider font-semibold text-white/70">
                {currentShowcase.category}
              </span>
              <h3 className="text-[15px] sm:text-[17px] font-semibold tracking-tight">
                {currentShowcase.name}
              </h3>
            </div>
            <button
              onClick={() => setCurrentPage('project-detail', activeTab)}
              className="self-start sm:self-auto px-4 py-1.5 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md text-[13px] font-medium transition-colors"
            >
              Lihat Detail
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};