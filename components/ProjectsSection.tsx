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
        <div className="flex items-center space-x-2">
          <span className="w-2.5 h-2.5 rounded-full bg-accent-green animate-pulse"></span>
          <h2 className="text-2xl sm:text-3xl font-bold text-text-primary dark:text-dark-text-primary tracking-tight">
            {title}
          </h2>
        </div>
        <p className="text-sm text-text-secondary dark:text-dark-text-secondary">
          Featured engineering case study showcasing full-stack system architecture, offline-first reliability, and client-side AI.
        </p>
      </div>

      {rapidMind && (
        <div className="animated-item anim-fadeInUp anim-delay-100 p-6 sm:p-10 rounded-2xl bg-gradient-to-br from-card via-card to-card-hover dark:from-dark-card dark:via-dark-card dark:to-dark-card-hover border-2 border-accent-green/30 dark:border-accent-green/30 shadow-xl space-y-6 relative overflow-hidden">
          {/* Background Ambient Glow */}
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-accent-green/10 rounded-full blur-3xl pointer-events-none" />

          {/* Header Badges */}
          <div className="flex flex-wrap items-center justify-between gap-3 relative z-10">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-accent-green/15 text-accent-green border border-accent-green/30">
                <FiActivity className="w-3.5 h-3.5 mr-1.5" />
                Featured Case Study
              </span>
              <span className="text-xs px-2.5 py-1 rounded-full bg-button-secondary-bg dark:bg-dark-button-secondary-bg text-text-secondary dark:text-dark-text-secondary">
                Competition Prototype
              </span>
            </div>
            <span className="text-xs font-mono text-text-secondary dark:text-dark-text-secondary flex items-center">
              <CheckBadgeIcon className="w-4 h-4 mr-1 text-accent-green" />
              116 Automated Tests PASS
            </span>
          </div>

          {/* Title & Tagline */}
          <div className="space-y-2 relative z-10">
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

          {/* Architectural Pillars Pill Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 relative z-10 text-xs">
            <div className="p-3.5 rounded-xl bg-button-secondary-bg/50 dark:bg-dark-button-secondary-bg/50 border border-border/80 dark:border-dark-border/80 space-y-1">
              <div className="flex items-center space-x-1.5 text-accent-green font-bold">
                <FiLayers className="w-3.5 h-3.5" />
                <span>Offline-First Field PWA</span>
              </div>
              <p className="text-text-secondary dark:text-dark-text-secondary text-[11px]">
                IndexedDB (Dexie) local persistence with transactional outbox queue.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-button-secondary-bg/50 dark:bg-dark-button-secondary-bg/50 border border-border/80 dark:border-dark-border/80 space-y-1">
              <div className="flex items-center space-x-1.5 text-blue-500 font-bold">
                <FiCpu className="w-3.5 h-3.5" />
                <span>On-Device Whisper STT</span>
              </div>
              <p className="text-text-secondary dark:text-dark-text-secondary text-[11px]">
                Indonesian Whisper ONNX running in Web Worker (0 bytes audio sent to cloud).
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-button-secondary-bg/50 dark:bg-dark-button-secondary-bg/50 border border-border/80 dark:border-dark-border/80 space-y-1">
              <div className="flex items-center space-x-1.5 text-purple-500 font-bold">
                <FiRadio className="w-3.5 h-3.5" />
                <span>Real-Time WebSocket Core</span>
              </div>
              <p className="text-text-secondary dark:text-dark-text-secondary text-[11px]">
                Sub-second T0 Red Flag emergency broadcast via Laravel Reverb.
              </p>
            </div>
          </div>

          {/* Technologies Badges */}
          <div className="flex flex-wrap gap-2 relative z-10 pt-2 border-t border-border/70 dark:border-dark-border/70">
            {rapidMind.technologies.slice(0, 7).map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 text-xs bg-card dark:bg-dark-card border border-border dark:border-dark-border text-text-secondary dark:text-dark-text-secondary rounded-md"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap gap-3 pt-2 relative z-10">
            <button
              onClick={handleOpenCaseStudy}
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-accent-green hover:bg-accent-green/90 text-white text-sm font-semibold transition-all shadow-md group"
            >
              <span>Read Full Technical Case Study</span>
              <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            {rapidMind.repoLink && (
              <a
                href={rapidMind.repoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-button-secondary-bg dark:bg-dark-button-secondary-bg text-text-primary dark:text-dark-text-primary hover:bg-card-hover dark:hover:bg-dark-card-hover text-sm font-semibold transition-colors"
              >
                <span>GitHub Repository</span>
                <ArrowTopRightOnSquareIcon className="w-4 h-4 ml-1.5" />
              </a>
            )}
          </div>
        </div>
      )}
    </section>
  );
};