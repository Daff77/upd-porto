import React from 'react';
import { AboutPageProps } from '../types';
import { EXPERIENCES, EDUCATION, SOCIAL_LINKS } from '../constants';
import {
  CodeBracketSquareIcon,
  CpuChipIcon,
  EnvelopeIcon,
  CheckBadgeIcon,
  ArrowRightIcon,
  FiLayers,
  FiFeather,
  FiBookOpen,
} from './icons';

export const AboutPage: React.FC<AboutPageProps> = ({
  personalInfo,
  setCurrentPage,
  skills,
}) => {
  return (
    <div className="space-y-16 md:space-y-24">
      {/* Profile Introduction & Headline */}
      <section id="about-intro" className="animated-item anim-fadeInUp space-y-6">
        <div className="flex flex-col-reverse md:flex-row items-start justify-between gap-8 md:gap-12">
          {/* Text introduction */}
          <div className="md:w-2/3 space-y-4">
            <div className="inline-flex items-center text-xs font-mono font-semibold uppercase tracking-widest px-3 py-1 rounded-full bg-accent-green/10 text-accent-green dark:text-dark-accent-green border border-accent-green/20">
              About & Background
            </div>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-text-primary dark:text-dark-text-primary tracking-tight">
              {personalInfo.name}
            </h1>
            <p className="text-lg sm:text-xl font-medium text-accent-green dark:text-dark-accent-green">
              {personalInfo.title}
            </p>
            <p className="text-base sm:text-lg text-text-secondary dark:text-dark-text-secondary leading-relaxed">
              {personalInfo.aboutMeIntro}
            </p>
            
            {/* Quick Contact & Resume CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={() => setCurrentPage('contact')}
                className="inline-flex items-center px-5 py-2.5 bg-button-primary-bg dark:bg-dark-button-primary-bg text-button-primary-text dark:text-dark-button-primary-text rounded-full text-xs font-semibold hover:bg-button-primary-hover dark:hover:bg-dark-button-primary-hover transition-colors shadow-xs"
              >
                <EnvelopeIcon className="w-3.5 h-3.5 mr-1.5" />
                <span>Get in Touch</span>
              </button>
              <button
                onClick={() => setCurrentPage('projects')}
                className="inline-flex items-center px-5 py-2.5 bg-button-secondary-bg dark:bg-dark-button-secondary-bg text-text-primary dark:text-dark-text-primary border border-border dark:border-dark-border rounded-full text-xs font-semibold hover:border-accent-green/50 transition-colors"
              >
                <span>View Projects Archive</span>
              </button>
            </div>
          </div>

          {/* Profile Monogram / Portrait Frame */}
          <div className="md:w-1/3 w-full flex justify-center md:justify-end">
            <div className="p-2 rounded-[2rem] bg-black/5 dark:bg-white/5 border border-border dark:border-white/10 shadow-lg w-48 sm:w-56 aspect-square flex items-center justify-center">
              <div className="w-full h-full rounded-[calc(2rem-0.5rem)] bg-card dark:bg-dark-card border border-border/80 dark:border-dark-border flex flex-col items-center justify-center p-4 text-center space-y-2">
                <div className="w-16 h-16 rounded-2xl bg-accent-green/10 text-accent-green dark:text-dark-accent-green border border-accent-green/20 flex items-center justify-center font-display text-2xl font-extrabold">
                  {personalInfo.name
                    .split(' ')
                    .map((n) => n[0])
                    .join('')
                    .slice(0, 2)}
                </div>
                <div className="font-mono text-xs font-semibold text-text-primary dark:text-dark-text-primary">
                  {personalInfo.name}
                </div>
                <div className="font-mono text-[10px] text-text-secondary/70">
                  Profile Placeholder
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Background & Philosophy */}
      <section className="animated-item anim-fadeInUp space-y-6">
        <div className="space-y-1">
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-accent-green dark:text-dark-accent-green">
            01 • Philosophy & Focus
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-text-primary dark:text-dark-text-primary">
            Engineering Perspective
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {personalInfo.aboutMeDetailed.map((paragraph, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-card dark:bg-dark-card border border-border dark:border-dark-border space-y-3"
            >
              <div className="text-xs font-mono font-bold text-accent-green dark:text-dark-accent-green">
                Principle 0{idx + 1}
              </div>
              <p className="text-sm text-text-secondary dark:text-dark-text-secondary leading-relaxed">
                {paragraph}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Professional Interests & Technical Focus */}
      <section className="animated-item anim-fadeInUp space-y-6">
        <div className="space-y-1">
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-accent-green dark:text-dark-accent-green">
            02 • Specialization
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-text-primary dark:text-dark-text-primary">
            Core Technical Interests
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-5 rounded-xl bg-card dark:bg-dark-card border border-border dark:border-dark-border space-y-2">
            <CodeBracketSquareIcon className="w-5 h-5 text-accent-green dark:text-dark-accent-green" />
            <h3 className="font-display text-base font-bold text-text-primary dark:text-dark-text-primary">
              Interface Craft & Token Systems
            </h3>
            <p className="text-xs text-text-secondary dark:text-dark-text-secondary leading-relaxed">
              Design systems, WCAG 2.1 AA accessibility, fluid physics, and robust component architecture.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-card dark:bg-dark-card border border-border dark:border-dark-border space-y-2">
            <FiLayers className="w-5 h-5 text-accent-green dark:text-dark-accent-green" />
            <h3 className="font-display text-base font-bold text-text-primary dark:text-dark-text-primary">
              Distributed WebSockets & Ingest
            </h3>
            <p className="text-xs text-text-secondary dark:text-dark-text-secondary leading-relaxed">
              Sub-second message streaming, offline-first IndexedDB queues, and zero-latency data pipelines.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-card dark:bg-dark-card border border-border dark:border-dark-border space-y-2">
            <CpuChipIcon className="w-5 h-5 text-accent-green dark:text-dark-accent-green" />
            <h3 className="font-display text-base font-bold text-text-primary dark:text-dark-text-primary">
              Client Machine Learning & WebGPU
            </h3>
            <p className="text-xs text-text-secondary dark:text-dark-text-secondary leading-relaxed">
              On-device neural inference with zero cloud data transmission and real-time shader pipelines.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="animated-item anim-fadeInUp space-y-6">
        <div className="space-y-1">
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-accent-green dark:text-dark-accent-green">
            03 • Trajectory
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-text-primary dark:text-dark-text-primary">
            Experience & Roles
          </h2>
        </div>

        <div className="space-y-4">
          {EXPERIENCES.map((exp) => (
            <div
              key={exp.id}
              className="p-6 rounded-2xl bg-card dark:bg-dark-card border border-border dark:border-dark-border space-y-3"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <div>
                  <h3 className="font-display text-lg font-bold text-text-primary dark:text-dark-text-primary">
                    {exp.role}
                  </h3>
                  <div className="text-sm font-semibold text-accent-green dark:text-dark-accent-green">
                    {exp.company} {exp.location && <span className="text-text-secondary/60 font-normal">• {exp.location}</span>}
                  </div>
                </div>
                <span className="text-xs font-mono text-text-secondary dark:text-dark-text-secondary self-start sm:self-center">
                  {exp.period}
                </span>
              </div>

              <p className="text-sm text-text-secondary dark:text-dark-text-secondary leading-relaxed">
                {exp.description}
              </p>

              {exp.achievements && exp.achievements.length > 0 && (
                <ul className="space-y-1 pt-1 text-xs text-text-secondary dark:text-dark-text-secondary">
                  {exp.achievements.map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <span className="w-1 h-1 rounded-full bg-accent-green shrink-0 mt-1.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}

              {exp.technologies && (
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-border/50 dark:border-dark-border/50">
                  {exp.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 text-[11px] font-mono bg-button-secondary-bg/60 dark:bg-dark-button-secondary-bg/60 rounded text-text-secondary"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="animated-item anim-fadeInUp space-y-4">
        <div className="space-y-1">
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-accent-green dark:text-dark-accent-green">
            04 • Foundations
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-text-primary dark:text-dark-text-primary">
            Education & Academic Credentials
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {EDUCATION.map((edu) => (
            <div
              key={edu.id}
              className="p-6 rounded-2xl bg-card dark:bg-dark-card border border-border dark:border-dark-border flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
            >
              <div className="space-y-1">
                <div className="flex items-center space-x-2">
                  <FiBookOpen className="w-4 h-4 text-accent-green" />
                  <h3 className="font-display text-base font-bold text-text-primary dark:text-dark-text-primary">
                    {edu.degree}
                  </h3>
                </div>
                <div className="text-sm text-text-secondary dark:text-dark-text-secondary">
                  {edu.institution}
                </div>
                {edu.details && (
                  <p className="text-xs text-text-secondary/80 dark:text-dark-text-secondary/80 pt-0.5">
                    {edu.details}
                  </p>
                )}
              </div>
              <span className="text-xs font-mono text-text-secondary dark:text-dark-text-secondary shrink-0">
                {edu.period}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Matrix */}
      <section className="animated-item anim-fadeInUp space-y-4">
        <div className="space-y-1">
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-accent-green dark:text-dark-accent-green">
            05 • Tooling & Technologies
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-text-primary dark:text-dark-text-primary">
            Skills & Competencies
          </h2>
        </div>

        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className={`inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-mono transition-colors ${skill.backgroundColor} ${skill.textColor}`}
            >
              {skill.icon && <skill.icon className="w-3.5 h-3.5 mr-1.5 shrink-0" />}
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Social Links & Footer CTA */}
      <section className="animated-item anim-fadeInUp p-8 rounded-2xl bg-card dark:bg-dark-card border border-border dark:border-dark-border space-y-4 text-center">
        <h3 className="font-display text-2xl font-bold text-text-primary dark:text-dark-text-primary">
          Let's Build Something Meaningful
        </h3>
        <p className="text-sm text-text-secondary dark:text-dark-text-secondary max-w-lg mx-auto leading-relaxed">
          Available for design system architecture, technical consulting, and high-impact software engineering roles.
        </p>
        <div className="pt-2 flex flex-wrap justify-center items-center gap-3">
          <button
            onClick={() => setCurrentPage('contact')}
            className="inline-flex items-center px-6 py-3 rounded-full bg-button-primary-bg dark:bg-dark-button-primary-bg text-button-primary-text dark:text-dark-button-primary-text text-xs font-semibold hover:bg-button-primary-hover dark:hover:bg-dark-button-primary-hover transition-colors"
          >
            <EnvelopeIcon className="w-4 h-4 mr-2" />
            <span>Send Direct Message</span>
          </button>
        </div>
      </section>
    </div>
  );
};
