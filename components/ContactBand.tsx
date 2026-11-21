import React from 'react';
import { PROFILE } from '../constants';
import { ButtonLink } from './ui/Button';
import { GithubIcon } from './icons';

export const ContactBand: React.FC = () => {
  return (
    <section
      aria-labelledby="contact-band-title"
      className="rounded-2xl bg-card-hover dark:bg-dark-card border border-border-subtle dark:border-dark-border-subtle p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6"
    >
      <div className="space-y-1.5 max-w-xl">
        <h2
          id="contact-band-title"
          className="font-display text-xl sm:text-2xl font-medium tracking-tight text-text-primary dark:text-dark-text-primary"
        >
          Have an internship, project, or idea to talk through?
        </h2>
        <p className="text-sm text-text-secondary dark:text-dark-text-secondary">
          Open to software engineering roles, full-stack collaboration, and applied AI/ML discussions.
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-3 shrink-0">
        <ButtonLink to="/contact" variant="primary">
          Get in touch
        </ButtonLink>
        <ButtonLink
          href={PROFILE.githubUrl}
          variant="ghost"
          icon={<GithubIcon aria-hidden="true" className="w-4 h-4" />}
        >
          GitHub
        </ButtonLink>
      </div>
    </section>
  );
};
