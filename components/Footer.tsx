import React from 'react';
import { SocialLink } from '../types';

interface FooterProps {
  socialLinks: SocialLink[];
  developerName: string;
  developerUrl: string;
  animatedNameEnglish?: string;
  animatedNameJapanese?: string;
}

export const Footer: React.FC<FooterProps> = ({
  socialLinks,
  developerName,
  developerUrl,
}) => {
  return (
    <footer className="w-full bg-card dark:bg-dark-card border-t border-border dark:border-dark-border mt-auto">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
          <h3 className="text-sm font-semibold text-text-primary dark:text-dark-text-primary">
            Connect & Follow
          </h3>
          <div className="flex items-center space-x-2.5">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-11 h-11 rounded-full bg-button-secondary-bg text-text-primary dark:bg-dark-button-secondary-bg dark:text-dark-text-primary hover:bg-accent-green hover:text-white dark:hover:bg-accent-green dark:hover:text-white transition-all duration-200 active:scale-[0.95]"
                aria-label={`Follow on ${link.name}`}
              >
                <link.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="text-center space-y-1">
          <p className="text-xs text-text-secondary dark:text-dark-text-secondary">
            &copy; {new Date().getFullYear()} Daffa Danendra Fairuzza. All rights reserved.
          </p>
          <p className="text-[11px] text-text-secondary/70 dark:text-dark-text-secondary/70">
            Portfolio foundation adapted from open-source template by{' '}
            <a
              href={developerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-text-primary dark:hover:text-dark-text-primary transition-colors"
            >
              {developerName}
            </a>
            , UI inspiration by{' '}
            <a
              href="https://dribbble.com/shots/22110108-Subtle-Folio-Portfolio-Framer-Template"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-text-primary dark:hover:text-dark-text-primary transition-colors"
            >
              Nur Praditya
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
};
