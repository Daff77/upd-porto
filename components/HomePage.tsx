import React from 'react';
import { PROFILE, CURRENT_FOCUS, FEATURED } from '../constants';
import { usePageMeta } from '../hooks/usePageMeta';
import { AppLink } from './navigation';
import { ButtonLink } from './ui/Button';
import { SectionHeading } from './ui/SectionHeading';
import { Reveal } from './ui/Reveal';
import { ProjectCard } from './ProjectCard';
import { ProfilePhoto } from './ui/ProfilePhoto';
import { SkillsMatrix } from './SkillsMatrix';
import { GitHubContributionsGraph } from './GitHubContributionsGraph';
import { ContactBand } from './ContactBand';
import { GithubIcon } from './icons';
import homePortrait from '../assets/home-portrait.jpeg';

export const HomePage: React.FC = () => {
  usePageMeta(
    'Daffa Danendra Fairuzza · Aspiring Software Engineer',
    'Portfolio of Daffa Danendra Fairuzza, an Information Systems student at UIN Sunan Ampel Surabaya focused on full-stack development, with an interest in software engineering and AI/ML.'
  );

  return (
    <div className="flex flex-col gap-16 md:gap-24">
      {/* Hero */}
      <section aria-labelledby="hero-name" className="pt-2 space-y-10">
        <div className="xl:grid xl:grid-cols-[minmax(0,1fr)_minmax(0,300px)] xl:items-center xl:gap-12">
          <div className="min-w-0 space-y-10">
            {/* Greeting + status */}
            <div
              className="rise-in flex items-center gap-4"
              style={{ '--n': 0 } as React.CSSProperties}
            >
              <div className="xl:hidden">
                <ProfilePhoto variant="avatar" src={homePortrait} frameReveal />
              </div>
              <div className="min-w-0 space-y-0.5">
                <p className="font-hand text-2xl sm:text-[1.75rem] leading-none text-accent dark:text-dark-accent -rotate-2 origin-left">
                  Hi, I&apos;m Daffa.
                </p>
                <p className="inline-flex items-center gap-2 text-xs sm:text-sm text-text-secondary dark:text-dark-text-secondary">
                  <span
                    aria-hidden="true"
                    className="inline-block h-1.5 w-1.5 rounded-full bg-status-live dark:bg-dark-status-live shrink-0"
                  />
                  {PROFILE.availability}
                </p>
              </div>
            </div>

            {/* Name + roles */}
            <div
              className="rise-in home-hero-copy space-y-3"
              style={{ '--n': 1 } as React.CSSProperties}
            >
              <h1
                id="hero-name"
                className="font-display text-[clamp(2.25rem,5.5vw,3.75rem)] font-medium tracking-[-0.03em] leading-[1.04] text-balance text-text-primary dark:text-dark-text-primary"
              >
                {PROFILE.name}
              </h1>
              <p className="text-base text-text-secondary dark:text-dark-text-secondary">
                {PROFILE.roles.join(' · ')}
              </p>
            </div>

            {/* Lead + intro */}
            <div
              className="rise-in home-hero-copy space-y-4 max-w-[62ch]"
              style={{ '--n': 2 } as React.CSSProperties}
            >
              <p className="text-xl sm:text-2xl font-medium leading-snug tracking-[-0.01em] text-balance text-text-primary dark:text-dark-text-primary max-w-[34ch]">
                {PROFILE.headline}
              </p>
              <p className="text-base leading-relaxed text-text-secondary dark:text-dark-text-secondary">
                {PROFILE.intro}
              </p>
            </div>

            {/* CTAs */}
            <div
              className="rise-in flex flex-wrap items-center gap-3"
              style={{ '--n': 3 } as React.CSSProperties}
            >
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
          <div className="hidden xl:block">
            <ProfilePhoto variant="hero" src={homePortrait} frameReveal />
          </div>
        </div>

        {/* Currently strengthening */}
        <div
          className="rise-in grid gap-4 sm:grid-cols-[180px_1fr] sm:gap-8 border-t border-border-subtle dark:border-dark-border-subtle pt-6"
          style={{ '--n': 4 } as React.CSSProperties}
        >
          <div className="space-y-1">
            <h2 className="text-sm font-medium text-text-primary dark:text-dark-text-primary">
              Currently strengthening
            </h2>
            <p className="font-mono text-xs text-text-secondary dark:text-dark-text-secondary">
              {PROFILE.location} &middot; {PROFILE.timezone}
            </p>
          </div>
          <ol className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
            {CURRENT_FOCUS.map((item, idx) => (
              <li
                key={item}
                className="flex items-baseline gap-3 text-sm text-text-primary dark:text-dark-text-primary"
              >
                <span className="font-mono text-xs text-text-placeholder dark:text-dark-text-placeholder tabular-nums shrink-0">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <span className="leading-snug">{item}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Selected work */}
      <section aria-labelledby="selected-work-heading" className="space-y-8">
        <SectionHeading
          id="selected-work-heading"
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
                className="inline-block opacity-65 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0.5"
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

      {/* Toolkit */}
      <section aria-labelledby="toolkit-heading" className="space-y-8">
        <SectionHeading
          id="toolkit-heading"
          title="What I work with"
          action={
            <AppLink
              to="/about"
              className="group inline-flex items-center gap-1.5 text-sm font-medium text-text-secondary dark:text-dark-text-secondary hover:text-text-primary dark:hover:text-dark-text-primary transition-colors"
            >
              <span>Full background</span>
              <span
                aria-hidden="true"
                className="inline-block opacity-65 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0.5"
              >
                &rarr;
              </span>
            </AppLink>
          }
        />

        <SkillsMatrix compact />
      </section>

      {/* Activity */}
      <section aria-labelledby="activity-heading" className="space-y-6">
        <SectionHeading
          id="activity-heading"
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
