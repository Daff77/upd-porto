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
        className={`inline-flex items-center font-mono text-[11px] font-medium px-2 py-0.5 rounded-md bg-card-hover dark:bg-dark-card border border-border-subtle dark:border-dark-border-subtle text-text-primary dark:text-dark-text-primary ${className}`}
      >
        {children}
      </span>
    );
  }

  return (
    <span
      className={`inline-flex items-center text-xs px-2 py-0.5 rounded-md border border-border-subtle dark:border-dark-border-subtle text-text-secondary dark:text-dark-text-secondary ${className}`}
    >
      {children}
    </span>
  );
};
