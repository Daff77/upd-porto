import React from 'react';
import { SunIcon, MoonIcon } from './icons';

export const Header: React.FC<{
  currentPage: string;
  setCurrentPage: (pageId: string) => void;
  theme: string;
  toggleTheme: (event?: React.MouseEvent) => void;
}> = ({ currentPage, setCurrentPage, theme, toggleTheme }) => {
  return (
    <header className="w-full shrink-0 flex flex-row justify-between items-center py-3 border-b border-border/40 dark:border-dark-border/40 pb-6">
      {/* Brand Monogram & Name */}
      <button
        onClick={() => setCurrentPage('home')}
        className="group flex items-center gap-3 text-left focus:outline-none"
        aria-label="Daffa Pratama — Home"
      >
        <div className="w-9 h-9 rounded-xl bg-text-primary dark:bg-dark-text-primary text-background dark:text-dark-background flex items-center justify-center font-bold text-[13px] tracking-tight transition-transform group-hover:scale-105 shadow-sm">
          DP
        </div>
        <div className="flex flex-col">
          <span className="text-[15px]/[20px] font-semibold text-text-primary dark:text-dark-text-primary tracking-tight">
            Daffa Pratama
          </span>
          <span className="text-[12px]/[16px] text-text-secondary dark:text-dark-text-secondary flex items-center gap-1.5 font-normal">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Design Engineer
          </span>
        </div>
      </button>

      {/* Navigation Links + Theme Switcher */}
      <nav className="flex items-center gap-5 sm:gap-7">
        <button
          onClick={() => setCurrentPage('about')}
          className={`text-[14px]/[22px] transition-colors focus:outline-none ${
            currentPage === 'about'
              ? 'text-text-primary dark:text-dark-text-primary font-semibold'
              : 'text-text-secondary dark:text-dark-text-secondary hover:text-text-primary dark:hover:text-dark-text-primary font-normal'
          }`}
        >
          About
        </button>

        <button
          onClick={() => setCurrentPage('projects')}
          className={`text-[14px]/[22px] transition-colors focus:outline-none ${
            currentPage === 'projects' || currentPage === 'project-detail'
              ? 'text-text-primary dark:text-dark-text-primary font-semibold'
              : 'text-text-secondary dark:text-dark-text-secondary hover:text-text-primary dark:hover:text-dark-text-primary font-normal'
          }`}
        >
          Selected Works
        </button>

        <button
          onClick={() => setCurrentPage('contact')}
          className={`text-[14px]/[22px] transition-colors focus:outline-none ${
            currentPage === 'contact'
              ? 'text-text-primary dark:text-dark-text-primary font-semibold'
              : 'text-text-secondary dark:text-dark-text-secondary hover:text-text-primary dark:hover:text-dark-text-primary font-normal'
          }`}
        >
          Contact
        </button>

        {/* Theme Toggle Pill */}
        <button
          type="button"
          onClick={(e) => toggleTheme(e)}
          aria-label={theme === 'light' ? "Switch to dark mode" : "Switch to light mode"}
          className="w-9 h-9 rounded-full bg-button-secondary-bg dark:bg-dark-button-secondary-bg border border-border dark:border-dark-border flex items-center justify-center text-text-secondary dark:text-dark-text-secondary hover:text-text-primary dark:hover:text-dark-text-primary transition-all active:scale-95 hover:border-text-primary/20"
          title={theme === 'light' ? "Switch to dark mode" : "Switch to light mode"}
        >
          {theme === 'light' ? (
            <MoonIcon className="w-4 h-4" />
          ) : (
            <SunIcon className="w-4 h-4 text-amber-400" />
          )}
        </button>
      </nav>
    </header>
  );
};
