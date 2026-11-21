import React from 'react';

interface TagProps {
  children: React.ReactNode;
  variant?: 'default' | 'stage';
  className?: string;
}

export const Tag: React.FC<TagProps> = ({
  children,
  variant = 'default',
  className = '',
}) => {
  if (variant === 'stage') {
    return (
      <span
        className={`inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider px-2 py-0.5 rounded-md border border-border-subtle dark:border-dark-border-subtle bg-button-secondary-bg dark:bg-dark-button-secondary-bg text-text-secondary dark:text-dark-text-secondary ${className}`}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-accent-green dark:bg-dark-accent-green shrink-0" />
        {children}
      </span>
    );
  }

  return (
    <span
      className={`inline-flex items-center text-xs px-2 py-1 rounded-md border border-border-subtle dark:border-dark-border-subtle text-text-secondary dark:text-dark-text-secondary ${className}`}
    >
      {children}
    </span>
  );
};
