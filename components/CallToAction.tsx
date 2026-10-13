import React from 'react';
import { EnvelopeIcon } from './icons';
import { CallToActionProps } from '../types';

export const CallToAction: React.FC<CallToActionProps> = ({ email, setCurrentPage }) => {
  return (
    <section className="animated-item anim-fadeInUp anim-delay-400 py-12 md:py-16 text-center bg-card dark:bg-dark-card rounded-xl shadow-md border border-border dark:border-dark-border">
      <div className="max-w-2xl mx-auto px-4 space-y-4">
        <span className="text-xs font-semibold tracking-wider uppercase text-accent-green">
          Collaboration & Contact
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary dark:text-dark-text-primary">
          Interested in collaborating or discussing ideas?
        </h2>
        <p className="text-base text-text-secondary dark:text-dark-text-secondary max-w-xl mx-auto">
          Whether you want to discuss software development, explore machine learning concepts, or exchange insights on information systems, feel free to reach out.
        </p>
        <div className="pt-2 flex flex-col sm:flex-row justify-center items-center gap-3">
          <button
            onClick={() => setCurrentPage('contact')}
            className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-button-primary-text dark:text-dark-button-primary-text bg-button-primary-bg dark:bg-dark-button-primary-bg hover:bg-button-primary-hover dark:hover:bg-dark-button-primary-hover rounded-lg transition-colors focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-700 shadow-sm"
          >
            <EnvelopeIcon className="w-4 h-4 mr-2" />
            Get in Touch
          </button>
          <a
            href={email ? `mailto:${email}` : 'mailto:daffadanendraf@gmail.com'}
            className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-button-secondary-text dark:text-dark-button-secondary-text bg-button-secondary-bg dark:bg-dark-button-secondary-bg hover:bg-button-secondary-hover dark:hover:bg-dark-button-secondary-hover rounded-lg transition-colors"
          >
            Email Directly
          </a>
        </div>
      </div>
    </section>
  );
};