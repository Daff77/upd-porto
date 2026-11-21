import React from 'react';
import {
  PROFILE,
  ABOUT_STORY,
  DIRECTION,
  APPROACH,
  LANGUAGES,
  EXPERIENCES,
  EDUCATION,
} from '../constants';
import { usePageMeta } from '../hooks/usePageMeta';
import { SectionHeading } from './ui/SectionHeading';
import { Reveal } from './ui/Reveal';
import { ProfilePhoto } from './ui/ProfilePhoto';
import { SkillsMatrix } from './SkillsMatrix';
import { Timeline } from './Timeline';
import { GitHubContributionsGraph } from './GitHubContributionsGraph';
import { ContactBand } from './ContactBand';

export const AboutPage: React.FC = () => {
  usePageMeta(
    'About · Daffa Danendra Fairuzza',
    'Background, full-stack focus, organizational activities, education, and technical toolkit of Daffa Danendra Fairuzza.'
  );

  const [uinsa, sman3] = EDUCATION;

  return (
    <div className="space-y-16 md:space-y-20">
      {/* Header */}
      <header className="rise-in space-y-3 max-w-3xl" style={{ '--n': 0 } as React.CSSProperties}>
        <h1 className="font-display text-[clamp(2rem,5vw,3.25rem)] font-medium tracking-tight leading-[1.08] text-text-primary dark:text-dark-text-primary">
          Learning software engineering by building it.
        </h1>
        <p className="text-sm text-text-secondary dark:text-dark-text-secondary">
          {PROFILE.roles.join(' · ')}
        </p>
      </header>

      {/* Story + Sticky Facts */}
      <section aria-label="Biography" className="rise-in grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-12 items-start" style={{ '--n': 1 } as React.CSSProperties}>
        <div className="space-y-5 max-w-[64ch]">
          {ABOUT_STORY.map((paragraph, idx) => (
            <p
              key={idx}
              className={
                idx === 0
                  ? 'text-lg leading-relaxed text-text-primary dark:text-dark-text-primary'
                  : 'text-base leading-relaxed text-text-secondary dark:text-dark-text-secondary'
              }
            >
              {paragraph}
            </p>
          ))}
        </div>

        <aside className="lg:sticky lg:top-8 border-t lg:border-t-0 lg:border-l border-border-subtle dark:border-dark-border-subtle pt-6 lg:pt-0 lg:pl-6">
          <ProfilePhoto variant="portrait" className="mb-6" />
          <dl className="space-y-4 text-sm">
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-wider text-text-secondary dark:text-dark-text-secondary">
                Program
              </dt>
              <dd className="mt-0.5 font-medium text-text-primary dark:text-dark-text-primary">
                {PROFILE.program} ({PROFILE.degree})
              </dd>
            </div>
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-wider text-text-secondary dark:text-dark-text-secondary">
                Faculty
              </dt>
              <dd className="mt-0.5 text-text-primary dark:text-dark-text-primary">
                {PROFILE.faculty}
              </dd>
            </div>
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-wider text-text-secondary dark:text-dark-text-secondary">
                University
              </dt>
              <dd className="mt-0.5 text-text-primary dark:text-dark-text-primary">
                {PROFILE.university}
              </dd>
            </div>
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-wider text-text-secondary dark:text-dark-text-secondary">
                Based in
              </dt>
              <dd className="mt-0.5 text-text-primary dark:text-dark-text-primary">
                {PROFILE.location}
              </dd>
            </div>
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-wider text-text-secondary dark:text-dark-text-secondary">
                Focus
              </dt>
              <dd className="mt-0.5 font-medium text-text-primary dark:text-dark-text-primary">
                Full-stack development
              </dd>
            </div>
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-wider text-text-secondary dark:text-dark-text-secondary">
                Also exploring
              </dt>
              <dd className="mt-0.5 text-text-primary dark:text-dark-text-primary">
                AI / ML, video processing
              </dd>
            </div>
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-wider text-text-secondary dark:text-dark-text-secondary">
                GitHub
              </dt>
              <dd className="mt-0.5">
                <a
                  href={PROFILE.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs font-medium text-accent-green dark:text-dark-accent-green hover:underline"
                >
                  @{PROFILE.githubUsername} &rarr;
                </a>
              </dd>
            </div>
          </dl>
        </aside>
      </section>

      {/* Direction */}
      <Reveal as="section" aria-labelledby="direction-heading" className="space-y-8">
        <SectionHeading
          id="direction-heading"
          title="Where I'm heading"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {DIRECTION.map((item) => (
            <div
              key={item.label}
              className="border-t border-border-subtle dark:border-dark-border-subtle pt-4 space-y-2"
            >
              <p className="font-mono text-xs text-accent dark:text-dark-accent">
                {item.label}
              </p>
              <h3 className="text-base font-medium text-text-primary dark:text-dark-text-primary">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-text-secondary dark:text-dark-text-secondary">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </Reveal>

      {/* How I work */}
      <Reveal as="section" aria-labelledby="approach-heading" className="space-y-8">
        <SectionHeading
          id="approach-heading"
          title="How I approach projects"
        />

        <div className="space-y-4">
          <ol className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-0">
            {APPROACH.map((step, idx) => (
              <li
                key={step.title}
                className="border-t border-border-subtle dark:border-dark-border-subtle py-5 flex items-baseline gap-4"
              >
                <span className="font-mono text-sm font-medium text-text-placeholder dark:text-dark-text-placeholder tabular-nums shrink-0">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <div className="space-y-1">
                  <h3 className="text-base font-medium text-text-primary dark:text-dark-text-primary">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-text-secondary dark:text-dark-text-secondary">
                    {step.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          <p className="text-xs text-text-secondary dark:text-dark-text-secondary">
            A general pattern drawn from my projects, not a formal methodology.
          </p>
        </div>
      </Reveal>

      {/* Skills */}
      <Reveal as="section" aria-labelledby="skills-heading" className="space-y-8">
        <SectionHeading
          id="skills-heading"
          title="Technologies & tools"
        />

        <SkillsMatrix />
      </Reveal>

      {/* Experience & activities */}
      <Reveal as="section" aria-labelledby="experience-heading" className="space-y-8">
        <SectionHeading
          id="experience-heading"
          title="Experience & activities"
        />

        <Timeline items={EXPERIENCES} />
      </Reveal>

      {/* Education */}
      <Reveal as="section" aria-labelledby="education-heading" className="space-y-8">
        <SectionHeading
          id="education-heading"
          title="Education"
        />

        <div className="space-y-8">
          {uinsa && (
            <div className="space-y-5">
              <div>
                <h3 className="text-lg font-medium text-text-primary dark:text-dark-text-primary">
                  {uinsa.credential}
                </h3>
                <p className="text-sm text-text-secondary dark:text-dark-text-secondary mt-0.5">
                  {uinsa.institution}
                  {uinsa.detail && ` · ${uinsa.detail}`}
                </p>
              </div>

              {uinsa.areas && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5 pt-2">
                  {uinsa.areas.map((area) => (
                    <div
                      key={area.title}
                      className="border-t border-border-subtle dark:border-dark-border-subtle pt-3 space-y-1"
                    >
                      <h4 className="text-sm font-medium text-text-primary dark:text-dark-text-primary">
                        {area.title}
                      </h4>
                      <p className="text-sm leading-relaxed text-text-secondary dark:text-dark-text-secondary">
                        {area.detail}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {sman3 && (
            <div className="border-t border-border-subtle dark:border-dark-border-subtle pt-4 flex flex-wrap items-baseline justify-between gap-2 text-sm">
              <span className="font-medium text-text-primary dark:text-dark-text-primary">
                {sman3.institution}
              </span>
              <span className="text-text-secondary dark:text-dark-text-secondary">
                {sman3.credential}
              </span>
            </div>
          )}
        </div>
      </Reveal>

      {/* Languages */}
      <Reveal as="section" aria-labelledby="languages-heading" className="space-y-8">
        <SectionHeading
          id="languages-heading"
          title="Languages"
        />

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {LANGUAGES.map((lang) => (
            <div
              key={lang.name}
              className="border-t border-border-subtle dark:border-dark-border-subtle pt-3 space-y-1"
            >
              <h3 className="text-base font-medium text-text-primary dark:text-dark-text-primary">
                {lang.name}
              </h3>
              <p className="text-sm text-text-secondary dark:text-dark-text-secondary">
                {lang.note}
              </p>
            </div>
          ))}
        </div>
      </Reveal>

      {/* Activity */}
      <Reveal as="section" aria-labelledby="about-github-heading" className="space-y-6">
        <SectionHeading
          id="about-github-heading"
          title="GitHub contributions"
        />

        <GitHubContributionsGraph />
      </Reveal>

      <Reveal>
        <ContactBand />
      </Reveal>
    </div>
  );
};
