import React from 'react';
import { SocialLink } from '../types';

interface FooterProps {
  socialLinks: SocialLink[];
  developerName?: string;
  developerUrl?: string;
}

export const Footer: React.FC<FooterProps> = ({
  socialLinks,
  developerName = "Daffa Pratama",
}) => {
  return (
    <footer className="w-full shrink-0 flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 border-t border-border dark:border-dark-border text-[14px]/[21px] text-text-secondary dark:text-dark-text-secondary">
      {/* Copyright */}
      <div className="tracking-[0.35px]">
        &copy; {new Date().getFullYear()} {developerName}. Designed &amp; Engineered with precision.
      </div>

      {/* Social Links */}
      <div className="flex items-center gap-6">
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary dark:text-dark-text-secondary hover:text-text-primary dark:hover:text-dark-text-primary transition-colors font-medium flex items-center gap-1.5"
            aria-label={`Follow on ${link.name}`}
          >
            <link.icon className="w-4 h-4" />
            <span className="hidden sm:inline text-xs">{link.name}</span>
          </a>
        ))}
      </div>
    </footer>
  );
};
