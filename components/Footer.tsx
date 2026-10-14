import React from 'react';
import { SocialLink } from '../types';

interface FooterProps {
  socialLinks: SocialLink[];
  developerName?: string;
  developerUrl?: string;
}

export const Footer: React.FC<FooterProps> = ({
  socialLinks,
  developerName = "Portfolio Architecture",
  developerUrl = "https://github.com",
}) => {
  return (
    <footer className="w-full bg-card dark:bg-dark-card border-t border-border dark:border-dark-border mt-auto">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 mb-6">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="font-display text-base font-bold text-text-primary dark:text-dark-text-primary">
              Connect & Inquiries
            </h3>
            <p className="text-xs text-text-secondary dark:text-dark-text-secondary">
              Available for software engineering initiatives, architecture reviews, and consulting.
            </p>
          </div>

          <div className="flex items-center space-x-2">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-button-secondary-bg text-text-secondary dark:bg-dark-button-secondary-bg dark:text-dark-text-secondary hover:text-text-primary dark:hover:text-dark-text-primary hover:border-accent-green/50 transition-all duration-200 active:scale-[0.95] border border-border dark:border-dark-border"
                aria-label={`Follow on ${link.name}`}
              >
                <link.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="text-center sm:text-left pt-6 border-t border-border/60 dark:border-dark-border/60 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs font-mono text-text-secondary/80 dark:text-dark-text-secondary/80">
          <p>
            &copy; {new Date().getFullYear()} Portfolio Template. Open architecture for independent engineers.
          </p>
          <p>
            Designed with <span className="text-accent-green">React 19 & Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
