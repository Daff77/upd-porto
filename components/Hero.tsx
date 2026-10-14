import React, { useState } from 'react';
import { HeroProps } from '../types';
import avatarImg from '../assets/custom/avatar.jpg';
import kinetixImg from '../assets/custom/kinetix.jpg';
import hyperionImg from '../assets/custom/hyperion.jpg';
import auraImg from '../assets/custom/aura.jpg';

export const Hero: React.FC<HeroProps> = ({
  name = "Daffa Pratama",
  headline = "Design Engineer & Creative Developer crafting resilient web software, fluid interactions, and living design systems.",
  setCurrentPage,
}) => {
  const [activeTab, setActiveTab] = useState<'kinetix' | 'hyperion' | 'aura'>('kinetix');

  const showcaseData = {
    kinetix: {
      image: kinetixImg,
      badge: "Motion Physics Engine",
      title: "Kinetix Studio — Canvas Spring Physics & Kinetic Typography",
      metric: "60 FPS GPU Acceleration",
      description: "Interactive timeline editor with offscreen Web Worker physics simulation.",
    },
    hyperion: {
      image: hyperionImg,
      badge: "Real-Time Telemetry",
      title: "Hyperion Cloud — Sub-Second Observability Console",
      metric: "<12ms Render Cycle",
      description: "Information-dense dark telemetry dashboard with live WebSocket streaming.",
    },
    aura: {
      image: auraImg,
      badge: "Spatial Experience",
      title: "Aura Soundworks — Parametric Acoustic Equalizer",
      metric: "Web Audio API Live EQ",
      description: "Editorial spatial audio e-commerce with real-time acoustic frequency profiling.",
    },
  };

  const currentShowcase = showcaseData[activeTab];

  return (
    <section id="hero" className="w-full flex flex-col gap-10 md:gap-12 pt-2 pb-6">
      {/* Top Header Block: Avatar & Status & Name */}
      <div className="flex flex-col gap-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4 sm:gap-5">
            {/* Portrait Avatar with signature elevated border */}
            <div className="w-[68px] h-[86px] sm:w-[76px] sm:h-[96px] shrink-0 p-1 bg-white/70 dark:bg-white/10 border-[3px] border-white dark:border-white/10 rounded-[20px] overflow-hidden shadow-md">
              <img
                src={avatarImg}
                alt={name}
                className="w-full h-full object-cover rounded-[14px]"
              />
            </div>

            {/* Name & Role Tag */}
            <div className="flex flex-col">
              <h1 className="text-[34px] sm:text-[46px] leading-tight font-bold tracking-tight text-text-primary dark:text-dark-text-primary">
                {name}
              </h1>
              <div className="flex items-center gap-2 pt-1 text-[13px] sm:text-[14px] text-text-secondary dark:text-dark-text-secondary font-medium">
                <span>Design Engineer & Creative Technologist</span>
              </div>
            </div>
          </div>

          {/* Availability Pill */}
          <div className="self-start sm:self-auto inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 dark:text-emerald-300 text-[12px] font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Available for Q2/Q3 Projects</span>
          </div>
        </div>

        {/* Big Editorial Headline */}
        <div className="max-w-3xl space-y-3">
          <h2 className="text-[24px] sm:text-[34px] leading-[1.3] font-medium tracking-tight text-text-primary dark:text-dark-text-primary">
            {headline}
          </h2>
          <p className="text-[15px] sm:text-[17px] leading-relaxed text-text-secondary dark:text-dark-text-secondary">
            Bridging high-craft design thinking with modern frontend architecture. Bringing products from initial token concept to tactile, accessible production code.
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
            <span>Discuss a Project</span>
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
            <span>Explore Works</span>
          </button>

          {/* About Me Link */}
          <button
            onClick={() => setCurrentPage('about')}
            className="h-[50px] sm:h-[54px] px-5 rounded-full text-text-secondary dark:text-dark-text-secondary hover:text-text-primary dark:hover:text-dark-text-primary text-[14px] font-medium transition-colors"
          >
            Learn about me →
          </button>
        </div>
      </div>

      {/* Interactive Showcase Preview Deck */}
      <div className="w-full flex flex-col gap-3">
        {/* Showcase Switcher Pills */}
        <div className="flex flex-wrap items-center justify-between gap-2 px-1">
          <div className="flex items-center gap-1.5 p-1 bg-black/5 dark:bg-white/5 rounded-full border border-border/60 dark:border-dark-border/60 text-xs font-medium">
            <button
              onClick={() => setActiveTab('kinetix')}
              className={`px-3.5 py-1.5 rounded-full transition-all ${
                activeTab === 'kinetix'
                  ? 'bg-white dark:bg-[#202125] text-text-primary dark:text-dark-text-primary font-semibold shadow-xs'
                  : 'text-text-secondary dark:text-dark-text-secondary hover:text-text-primary'
              }`}
            >
              01. Motion Engine
            </button>
            <button
              onClick={() => setActiveTab('hyperion')}
              className={`px-3.5 py-1.5 rounded-full transition-all ${
                activeTab === 'hyperion'
                  ? 'bg-white dark:bg-[#202125] text-text-primary dark:text-dark-text-primary font-semibold shadow-xs'
                  : 'text-text-secondary dark:text-dark-text-secondary hover:text-text-primary'
              }`}
            >
              02. Cloud Telemetry
            </button>
            <button
              onClick={() => setActiveTab('aura')}
              className={`px-3.5 py-1.5 rounded-full transition-all ${
                activeTab === 'aura'
                  ? 'bg-white dark:bg-[#202125] text-text-primary dark:text-dark-text-primary font-semibold shadow-xs'
                  : 'text-text-secondary dark:text-dark-text-secondary hover:text-text-primary'
              }`}
            >
              03. Spatial Audio
            </button>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-[12px] font-medium text-text-secondary dark:text-dark-text-secondary">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>{currentShowcase.metric}</span>
          </div>
        </div>

        {/* Large Frame */}
        <div className="w-full rounded-[24px] bg-[#222327] overflow-hidden relative shadow-lg aspect-[16/10] sm:aspect-[16/9] md:aspect-[21/10] group border border-border/50 dark:border-white/10">
          <img
            src={currentShowcase.image}
            alt={currentShowcase.title}
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-[1.01]"
          />

          {/* Bottom subtle title bar */}
          <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-white">
            <div className="space-y-0.5">
              <span className="text-[11px] uppercase tracking-wider font-semibold text-white/70">
                {currentShowcase.badge}
              </span>
              <h3 className="text-[15px] sm:text-[17px] font-semibold tracking-tight">
                {currentShowcase.title}
              </h3>
            </div>
            <button
              onClick={() => setCurrentPage('project-detail', activeTab)}
              className="self-start sm:self-auto px-4 py-1.5 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md text-[13px] font-medium transition-colors"
            >
              View Case Study →
            </button>
          </div>
        </div>

        {/* Collaborators & Endorsement Strip */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-3 px-1 text-text-secondary dark:text-dark-text-secondary text-[13px]">
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-amber-500/20 border-2 border-white dark:border-[#141517] flex items-center justify-center text-[11px] font-bold text-amber-700 dark:text-amber-300">
                EV
              </div>
              <div className="w-8 h-8 rounded-full bg-blue-500/20 border-2 border-white dark:border-[#141517] flex items-center justify-center text-[11px] font-bold text-blue-700 dark:text-blue-300">
                MR
              </div>
              <div className="w-8 h-8 rounded-full bg-emerald-500/20 border-2 border-white dark:border-[#141517] flex items-center justify-center text-[11px] font-bold text-emerald-700 dark:text-emerald-300">
                SL
              </div>
            </div>
            <span className="italic">
              &ldquo;Obsessive eye for tactile physics and production-ready code.&rdquo;
            </span>
          </div>

          <div className="text-[12px] text-text-secondary/80">
            Trusted by tech startups, studios & open-source teams
          </div>
        </div>
      </div>
    </section>
  );
};