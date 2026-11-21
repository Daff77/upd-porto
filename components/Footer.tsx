import React from 'react';
import { NAV_ITEMS, PROFILE } from '../constants';
import { AppLink } from './navigation';
import { GithubIcon } from './icons';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full shrink-0 flex flex-col gap-4 pt-8 border-t border-border/70 dark:border-dark-border text-sm text-text-secondary dark:text-dark-text-secondary">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="font-medium text-text-primary dark:text-dark-text-primary">
          &copy; {new Date().getFullYear()} {PROFILE.name}
        </div>

        <nav aria-label="Footer" className="flex flex-wrap items-center gap-x-6 gap-y-2">
          {NAV_ITEMS.map((item) => (
            <AppLink
              key={item.id}
              to={item.href}
              className="text-text-secondary dark:text-dark-text-secondary hover:text-text-primary dark:hover:text-dark-text-primary transition-colors"
            >
              {item.name}
            </AppLink>
          ))}
          <a
            href={PROFILE.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-text-secondary dark:text-dark-text-secondary hover:text-text-primary dark:hover:text-dark-text-primary transition-colors font-medium"
            aria-label="GitHub profile"
          >
            <GithubIcon aria-hidden="true" className="w-4 h-4" />
            <span>GitHub</span>
          </a>
        </nav>
      </div>

      <p className="font-mono text-xs text-text-secondary/80 dark:text-dark-text-secondary/80">
        Built with React, Vite &amp; Tailwind CSS
      </p>
    </footer>
  );
};
