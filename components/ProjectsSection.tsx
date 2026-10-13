import React from 'react';
import { ProjectsSectionProps } from '../types';
import {
  FiActivity,
  FiLayers,
  FiCpu,
  FiDatabase,
  FiRadio,
  ArrowRightIcon,
  ArrowTopRightOnSquareIcon,
  CheckBadgeIcon,
} from './icons';

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ 
  projects, 
  setCurrentPage,
  title = "Primary Technical Project",
}) => {
  const rapidMind = projects.find(p => p.id === 'rapid-mind') || projects[0];

  const handleOpenCaseStudy = () => {
    setCurrentPage('project-detail', 'rapid-mind');
  };

  return (
    <section id="home-projects-section" className="space-y-6">
      <div className="animated-item anim-fadeInUp space-y-1">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-text-primary dark:text-dark-text-primary tracking-tight">
          {title}
        </h2>
        <p className="text-sm text-text-secondary dark:text-dark-text-secondary max-w-2xl">
          Featured engineering case study showcasing full-stack system architecture, offline-first reliability, and client-side AI.
        </p>
      </div>

      {rapidMind && (
        <div className="animated-item anim-fadeInUp anim-delay-100 rounded-[1.75rem] p-1.5 sm:p-2 bg-black/[0.03] dark:bg-white/[0.04] ring-1 ring-border/80 dark:ring-dark-border/80 shadow-sm">
          {/* Inner Machined Core Container */}
          <div className="rounded-[calc(1.75rem-0.375rem)] p-6 sm:p-8 md:p-10 bg-card dark:bg-dark-card border border-border/70 dark:border-dark-border/70 space-y-6">
            {/* Header Badges */}
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center text-xs font-semibold px-3 py-1 rounded-full bg-accent-green/10 text-accent-green border border-accent-green/20">
                  <FiActivity className="w-3.5 h-3.5 mr-1.5" />
                  Primary Case Study
                </span>
                <span className="text-xs px-2.5 py-1 rounded-full bg-button-secondary-bg dark:bg-dark-button-secondary-bg text-text-secondary dark:text-dark-text-secondary">
                  Competition Prototype
                </span>
              </div>
              <span className="text-xs font-mono text-text-secondary dark:text-dark-text-secondary flex items-center">
                <CheckBadgeIcon className="w-4 h-4 mr-1.5 text-accent-green" />
                116 Automated Tests Passing
              </span>
            </div>

            {/* Title & Tagline */}
            <div className="space-y-2">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-text-primary dark:text-dark-text-primary tracking-tight">
                {rapidMind.name}
              </h3>
              <p className="text-base sm:text-lg font-semibold text-accent-green">
                {rapidMind.tagline || "Web-Based Emergency Psychological Triage System"}
              </p>
              <p className="text-sm sm:text-base text-text-secondary dark:text-dark-text-secondary leading-relaxed max-w-3xl pt-1">
                {rapidMind.description}
              </p>
            </div>

            {/* Architectural Pillars Structured Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div className="p-4 rounded-xl bg-button-secondary-bg/40 dark:bg-dark-button-secondary-bg/40 border border-border dark:border-dark-border space-y-1.5">
                <div className="flex items-center space-x-1.5 text-text-primary dark:text-dark-text-primary font-semibold">
                  <FiLayers className="w-3.5 h-3.5 text-accent-green" />
                  <span>Offline-First Field PWA</span>
                </div>
                <p className="text-text-secondary dark:text-dark-text-secondary text-[11px] leading-relaxed">
                  IndexedDB (Dexie) local persistence with transactional outbox queue for disaster zones.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-button-secondary-bg/40 dark:bg-dark-button-secondary-bg/40 border border-border dark:border-dark-border space-y-1.5">
                <div className="flex items-center space-x-1.5 text-text-primary dark:text-dark-text-primary font-semibold">
                  <FiCpu className="w-3.5 h-3.5 text-accent-green" />
                  <span>On-Device Whisper STT</span>
                </div>
                <p className="text-text-secondary dark:text-dark-text-secondary text-[11px] leading-relaxed">
                  Indonesian Whisper ONNX running in client Web Worker with zero cloud audio transmission.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-button-secondary-bg/40 dark:bg-dark-button-secondary-bg/40 border border-border dark:border-dark-border space-y-1.5">
                <div className="flex items-center space-x-1.5 text-text-primary dark:text-dark-text-primary font-semibold">
                  <FiRadio className="w-3.5 h-3.5 text-accent-green" />
                  <span>Real-Time WebSocket Core</span>
                </div>
                <p className="text-text-secondary dark:text-dark-text-secondary text-[11px] leading-relaxed">
                  Sub-second T0 Red Flag emergency dispatch broadcast via Laravel Reverb.
                </p>
              </div>
            </div>

            {/* Technologies Badges */}
            <div className="flex flex-wrap gap-2 pt-2 border-t border-border/60 dark:border-dark-border/60">
              {rapidMind.technologies.slice(0, 7).map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-xs font-mono bg-button-secondary-bg/60 dark:bg-dark-button-secondary-bg/60 border border-border/80 dark:border-dark-border/80 text-text-secondary dark:text-dark-text-secondary rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={handleOpenCaseStudy}
                className="inline-flex items-center justify-between pl-5 pr-2 py-2 rounded-full bg-accent-green hover:bg-accent-green/90 text-white text-sm font-semibold transition-all duration-200 active:scale-[0.98] shadow-sm group min-h-[44px]"
              >
                <span className="mr-3">Read Full Technical Case Study</span>
                <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center transition-transform duration-200 group-hover:translate-x-0.5">
                  <ArrowRightIcon className="w-3.5 h-3.5" />
                </span>
              </button>
              {rapidMind.repoLink && (
                <a
                  href={rapidMind.repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-button-secondary-bg dark:bg-dark-button-secondary-bg text-text-primary dark:text-dark-text-primary hover:bg-card-hover dark:hover:bg-dark-card-hover text-sm font-semibold transition-all duration-200 active:scale-[0.98] border border-border dark:border-dark-border min-h-[44px]"
                >
                  <span>GitHub Repository</span>
                  <ArrowTopRightOnSquareIcon className="w-4 h-4 ml-1.5" />
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};