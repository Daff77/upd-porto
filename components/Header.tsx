import React from 'react';
import { NAV_ITEMS, PROFILE } from '../constants';
import { AppLink } from './navigation';
import { SunIcon, MoonIcon } from './icons';
import brandLogo from '../favicon.svg';

interface HeaderProps {
  currentPath: string;
  theme: 'light' | 'dark';
  toggleTheme: (event?: React.MouseEvent) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPath, theme, toggleTheme }) => {
  const navLinks = NAV_ITEMS.filter((item) => item.id !== 'home');

  const isNavActive = (href: string) => {
    if (href === '/projects') {
      return currentPath === '/projects' || currentPath.startsWith('/project/');
    }
    return currentPath === href;
  };

  return (
    <header className="w-full shrink-0 flex flex-row gap-2 justify-between items-center py-3 border-b border-border/50 dark:border-dark-border/50 pb-5 sm:pb-6">
      {/* Brand Monogram & Name */}
      <AppLink
        to="/"
        className="group min-w-0 flex items-center gap-2.5 sm:gap-3 text-left"
        aria-label={`${PROFILE.name} · Home`}
      >
        <img src={brandLogo} alt="" width={36} height={36} className="h-9 w-9 shrink-0 motion-safe:transition-transform motion-safe:group-hover:scale-105" />
        <div className="flex flex-col min-w-0">
          <span className="text-[14px] sm:text-[15px] leading-tight font-semibold text-text-primary dark:text-dark-text-primary tracking-tight truncate">
            <span className="hidden sm:inline">{PROFILE.name}</span>
            <span className="sm:hidden">{PROFILE.shortName}</span>
          </span>
          <span className="hidden md:block text-[12px] leading-snug text-text-secondary dark:text-dark-text-secondary font-normal">
            {PROFILE.roles[1]}
          </span>
        </div>
      </AppLink>

      {/* Navigation Links + Theme Switcher */}
      <nav aria-label="Primary" className="shrink-0 flex items-center gap-3 sm:gap-7">
        {navLinks.map((item) => {
          const active = isNavActive(item.href);
          return (
            <AppLink
              key={item.id}
              to={item.href}
              aria-current={active ? 'page' : undefined}
              className={`relative py-1 text-[13px] sm:text-sm transition-colors ${
                active
                  ? 'text-text-primary dark:text-dark-text-primary font-medium'
                  : 'text-text-secondary dark:text-dark-text-secondary hover:text-text-primary dark:hover:text-dark-text-primary font-normal'
              }`}
            >
              {item.name}
              <span
                aria-hidden="true"
                className={`absolute inset-x-0 -bottom-0.5 h-[2px] rounded-full bg-accent dark:bg-dark-accent transition-transform duration-[300ms] origin-left ${
                  active ? 'scale-x-100' : 'scale-x-0'
                }`}
              />
            </AppLink>
          );
        })}

        {/* Theme Toggle */}
        <button
          type="button"
          onClick={(e) => toggleTheme(e)}
          aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
          className="w-9 h-9 shrink-0 rounded-xl bg-button-secondary-bg dark:bg-dark-button-secondary-bg border border-border dark:border-dark-border flex items-center justify-center text-text-secondary dark:text-dark-text-secondary hover:text-text-primary dark:hover:text-dark-text-primary active:scale-95 hover:border-text-primary/25 dark:hover:border-white/25"
          title={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
        >
          {theme === 'light' ? (
            <MoonIcon aria-hidden="true" className="w-4 h-4" />
          ) : (
            <SunIcon aria-hidden="true" className="w-4 h-4 text-dark-text-secondary" />
          )}
        </button>
      </nav>
    </header>
  );
};
