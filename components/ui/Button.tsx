import React from 'react';
import { AppLink } from '../navigation';

interface ButtonLinkProps {
  variant?: 'primary' | 'secondary' | 'ghost';
  to?: string;
  href?: string;
  arrow?: boolean;
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const ButtonLink: React.FC<ButtonLinkProps> = ({
  variant = 'primary',
  to,
  href,
  arrow = false,
  icon,
  children,
  className = '',
  onClick,
}) => {
  const base =
    'group inline-flex items-center justify-center gap-2 h-11 px-5 rounded-full text-sm font-medium transition-colors active:scale-[0.98] whitespace-nowrap';

  const variants = {
    primary:
      'bg-button-primary-bg text-button-primary-text hover:bg-button-primary-hover dark:bg-dark-button-primary-bg dark:text-dark-button-primary-text dark:hover:bg-dark-button-primary-hover',
    secondary:
      'border border-border dark:border-dark-border bg-background dark:bg-dark-background text-text-primary dark:text-dark-text-primary hover:bg-card-hover dark:hover:bg-dark-card-hover',
    ghost:
      'text-text-secondary dark:text-dark-text-secondary hover:text-text-primary dark:hover:text-dark-text-primary px-3',
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  const content = (
    <>
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {arrow && (
        <span
          aria-hidden="true"
          className="inline-block transition-transform duration-200 group-hover:translate-x-0.5 text-accent-green dark:text-dark-accent-green"
        >
          &rarr;
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        onClick={onClick}
      >
        {content}
      </a>
    );
  }

  return (
    <AppLink to={to ?? '/'} className={classes} onClick={onClick}>
      {content}
    </AppLink>
  );
};
