import React from 'react';
import { EnvelopeIcon } from './icons';
import { CallToActionProps } from '../types';

export const CallToAction: React.FC<CallToActionProps> = ({ email, setCurrentPage }) => {
  return (
    <section className="animated-item anim-fadeInUp anim-delay-400 rounded-2xl py-12 md:py-16 px-6 sm:px-10 bg-card dark:bg-dark-card border border-border dark:border-dark-border shadow-sm text-center space-y-4">
      <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-text-primary dark:text-dark-text-primary tracking-tight text-balance max-w-2xl mx-auto">
        Interested in collaborating or discussing ideas?
      </h2>
      <p className="text-sm sm:text-base text-text-secondary dark:text-dark-text-secondary max-w-xl mx-auto leading-relaxed">
        Whether you want to discuss software development, explore machine learning concepts, or exchange insights on information systems, feel free to reach out.
      </p>
      <div className="pt-3 flex flex-col sm:flex-row justify-center items-center gap-3">
        <button
          onClick={() => setCurrentPage('contact')}
          className="inline-flex items-center justify-center px-6 py-3 min-h-[44px] text-sm font-semibold text-button-primary-text dark:text-dark-button-primary-text bg-button-primary-bg dark:bg-dark-button-primary-bg hover:bg-button-primary-hover dark:hover:bg-dark-button-primary-hover rounded-full transition-all duration-200 active:scale-[0.98] shadow-sm"
        >
          <EnvelopeIcon className="w-4 h-4 mr-2" />
          <span>Get in Touch</span>
        </button>
        <a
          href={email ? `mailto:${email}` : 'mailto:daffadanendraf@gmail.com'}
          className="inline-flex items-center justify-center px-6 py-3 min-h-[44px] text-sm font-semibold text-button-secondary-text dark:text-dark-button-secondary-text bg-button-secondary-bg dark:bg-dark-button-secondary-bg hover:bg-button-secondary-hover dark:hover:bg-dark-button-secondary-hover rounded-full transition-all duration-200 active:scale-[0.98] border border-border dark:border-dark-border"
        >
          <span>Email Directly</span>
        </a>
      </div>
    </section>
  );
};