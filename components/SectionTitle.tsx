import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  viewAllLink?: string;
  viewAllText?: string;
  className?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle, viewAllLink, viewAllText = "View All", className = "" }) => {
  return (
    <div className={`animated-item anim-fadeInUp mb-8 md:mb-12 ${className}`}>
      <div className="flex items-center justify-between">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-text-primary dark:text-dark-text-primary tracking-tight">
          {title}
        </h2>
        {viewAllLink && (
          <a 
            href={viewAllLink} 
            className="text-sm font-semibold text-accent-green hover:text-accent-green/80 transition-colors inline-flex items-center group"
          >
            <span>{viewAllText}</span>
            <span className="ml-1 transition-transform group-hover:translate-x-0.5">&rarr;</span>
          </a>
        )}
      </div>
      {subtitle && <p className="mt-2 text-md text-text-secondary dark:text-dark-text-secondary">{subtitle}</p>}
    </div>
  );
};