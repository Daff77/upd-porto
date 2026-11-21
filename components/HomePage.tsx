import React from 'react';
import { PROFILE, CURRENT_FOCUS, FEATURED } from '../constants';
import { usePageMeta } from '../hooks/usePageMeta';
import { AppLink } from './navigation';
import { ButtonLink } from './ui/Button';
import { SectionHeading } from './ui/SectionHeading';
import { Reveal } from './ui/Reveal';
import { ProjectCard } from './ProjectCard';
import { SkillsMatrix } from './SkillsMatrix';
import { GitHubContributionsGraph } from './GitHubContributionsGraph';
import { ContactBand } from './ContactBand';
import { GithubIcon } from './icons';

export const HomePage: React.FC = () => {
  usePageMeta(
    'Daffa Danendra Fairuzza — Aspiring Software Engineer',
    'Portfolio of Daffa Danendra Fairuzza, an Information Systems student at UIN Sunan Ampel Surabaya focused on full-stack development, with an interest in software engineering and AI/ML.'
  );

  return (
    <div className="flex flex-col gap-16 md:gap-24">
      {/* Hero */}
      <section aria-labelledby="hero-name" className="pt-2 space-y-8">
        {/* Top meta bar */}
        <div className="animated-item anim-fadeInUp flex flex-wrap items-center justify-between gap-3 text-xs text-text-secondary dark:text-dark-text-secondary">
          <div className="inline-flex items-center gap-2 font-medium text-text-primary dark:text-dark-text-primary">
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-green dark:bg-dark-accent-green opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-green dark:bg-dark-accent-green" />
            </span>
            <span>{PROFILE.availability}</span>
          </div>
          <span className="font-mono">
            {PROFILE.location} &middot; {PROFILE.timezone}
          </span>
        </div>

        {/* Name & Roles */}
        <div className="animated-item anim-fadeInUp anim-delay-100 flex items-center gap-6">
          {PROFILE.photoUrl && (
            <img
              src={PROFILE.photoUrl}
              alt={PROFILE.name}
              width={96}
              height={96}
              className="w-24 h-24 rounded-2xl object-cover shrink-0 border border-border-subtle dark:border-dark-border-subtle"
            />
          )}
          <div className="space-y-3 min-w-0">
            <h1
              id="hero-name"
              className="font-display text-[clamp(2.4rem,6vw,4.5rem)] font-medium tracking-[-0.03em] leading-[1.02] text-text-primary dark:text-dark-text-primary"
            >
              {PROFILE.name}
            </h1>
            <p className="font-mono text-xs sm:text-sm text-text-secondary dark:text-dark-text-secondary">
              {PROFILE.roles.join(' / ')}
            </p>
          </div>
        </div>

        {/* Two-column intro + current focus */}
        <div className="animated-item anim-fadeInUp anim-delay-200 grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-start">
          <div className="space-y-6">
            <p className="text-xl sm:text-2xl font-medium leading-snug tracking-tight text-balance text-text-primary dark:text-dark-text-primary">
              {PROFILE.headline}
            </p>
            <p className="max-w-[58ch] text-base leading-relaxed text-text-secondary dark:text-dark-text-secondary">
              {PROFILE.intro}
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <ButtonLink to="/projects" variant="primary" arrow>
                View projects
              </ButtonLink>
              <ButtonLink to="/about" variant="secondary">
                About me
              </ButtonLink>
              <ButtonLink
                href={PROFILE.githubUrl}
                variant="ghost"
                icon={<GithubIcon aria-hidden="true" className="w-4 h-4" />}
              >
                GitHub
              </ButtonLink>
            </div>
          </div>

          <aside
            aria-label="Currently strengthening"
            className="border-t lg:border-t-0 lg:border-l border-border-subtle dark:border-dark-border-subtle pt-6 lg:pt-1 lg:pl-8 space-y-4"
          >
            <h2 className="font-mono text-xs uppercase tracking-[0.14em] text-text-secondary dark:text-dark-text-secondary">
              Currently strengthening
            </h2>
            <ol className="space-y-3">
              {CURRENT_FOCUS.map((item, idx) => (
                <li
                  key={item}
                  className="flex items-baseline gap-3 text-sm text-text-primary dark:text-dark-text-primary"
                >
                  <span className="font-mono text-xs text-accent-green dark:text-dark-accent-green shrink-0">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <span className="leading-snug">{item}</span>
                </li>
              ))}
            </ol>
          </aside>
        </div>
      </section>

      {/* 01 — Selected work */}
      <section aria-labelledby="selected-work-heading" className="space-y-8">
        <SectionHeading
          id="selected-work-heading"
          index="01"
          eyebrow="Selected work"
          title="Projects I've built and explored"
          description="From a full-stack mobile app to backend tooling and video processing. Each project is labelled with its real stage."
          action={
            <AppLink
              to="/projects"
              className="group inline-flex items-center gap-1.5 text-sm font-medium text-text-secondary dark:text-dark-text-secondary hover:text-text-primary dark:hover:text-dark-text-primary transition-colors"
            >
              <span>All projects</span>
              <span
                aria-hidden="true"
                className="inline-block text-accent-green dark:text-dark-accent-green transition-transform duration-200 group-hover:translate-x-0.5"
              >
                &rarr;
              </span>
            </AppLink>
          }
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
          {FEATURED.map((project, index) => (
            <Reveal
              key={project.id}
              delay={index * 60}
              className={index === 0 ? 'md:col-span-2' : undefined}
            >
              <ProjectCard
                project={project}
                layout={index === 0 ? 'wide' : 'default'}
              />
            </Reveal>
          ))}
        </div>
      </section>

      {/* 02 — Toolkit */}
      <section aria-labelledby="toolkit-heading" className="space-y-8">
        <SectionHeading
          id="toolkit-heading"
          index="02"
          eyebrow="Toolkit"
          title="What I work with"
          action={
            <AppLink
              to="/about"
              className="group inline-flex items-center gap-1.5 text-sm font-medium text-text-secondary dark:text-dark-text-secondary hover:text-text-primary dark:hover:text-dark-text-primary transition-colors"
            >
              <span>Full background</span>
              <span
                aria-hidden="true"
                className="inline-block text-accent-green dark:text-dark-accent-green transition-transform duration-200 group-hover:translate-x-0.5"
              >
                &rarr;
              </span>
            </AppLink>
          }
        />

        <Reveal>
          <SkillsMatrix compact />
        </Reveal>
      </section>

      {/* 03 — Activity */}
      <section aria-labelledby="activity-heading" className="space-y-6">
        <SectionHeading
          id="activity-heading"
          index="03"
          eyebrow="Activity"
          title="GitHub contributions"
        />

        <Reveal>
          <GitHubContributionsGraph />
        </Reveal>
      </section>

      {/* Closing CTA */}
      <Reveal>
        <ContactBand />
      </Reveal>
    </div>
  );
};
