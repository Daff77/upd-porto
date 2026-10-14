import React from 'react';
import { EnvelopeIcon, ArrowRightIcon } from './icons';
import { CallToActionProps } from '../types';

export const CallToAction: React.FC<CallToActionProps> = ({ email, setCurrentPage }) => {
  return (
    <section className="animated-item anim-fadeInUp rounded-[2rem] py-12 md:py-16 px-6 sm:px-10 bg-card dark:bg-dark-card border border-border dark:border-dark-border shadow-sm text-center space-y-5">
      <div className="inline-flex items-center text-xs font-mono font-semibold uppercase tracking-widest px-3 py-1 rounded-full bg-accent-green/10 text-accent-green dark:text-dark-accent-green border border-accent-green/20">
        Initiative & Inquiries
      </div>

      <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-text-primary dark:text-dark-text-primary tracking-tight text-balance max-w-2xl mx-auto">
        Interested in collaborating or discussing system architecture?
      </h2>

      <p className="text-sm sm:text-base text-text-secondary dark:text-dark-text-secondary max-w-xl mx-auto leading-relaxed">
        Whether you are planning a high-craft product redesign, establishing design tokens, or engineering a real-time event pipeline, let's connect.
      </p>

      <div className="pt-3 flex flex-col sm:flex-row justify-center items-center gap-3">
        <button
          onClick={() => setCurrentPage('contact')}
          className="inline-flex items-center justify-between pl-5 pr-2 py-2 min-h-[44px] text-sm font-semibold text-button-primary-text dark:text-dark-button-primary-text bg-button-primary-bg dark:bg-dark-button-primary-bg hover:bg-button-primary-hover dark:hover:bg-dark-button-primary-hover rounded-full transition-all duration-200 active:scale-[0.98] shadow-sm group"
        >
          <span className="mr-3">Start a Conversation</span>
          <span className="w-7 h-7 rounded-full bg-white/20 dark:bg-black/15 text-white dark:text-zinc-950 flex items-center justify-center transition-transform duration-200 group-hover:translate-x-0.5">
            <ArrowRightIcon className="w-3.5 h-3.5" />
          </span>
        </button>

        <a
          href={email ? `mailto:${email}` : 'mailto:alex.morgan@example.dev'}
          className="inline-flex items-center justify-center px-6 py-2.5 min-h-[44px] text-sm font-semibold text-text-primary dark:text-dark-text-primary bg-button-secondary-bg dark:bg-dark-button-secondary-bg hover:bg-button-secondary-hover dark:hover:bg-dark-button-secondary-hover rounded-full transition-all duration-200 active:scale-[0.98] border border-border dark:border-dark-border"
        >
          <EnvelopeIcon className="w-4 h-4 mr-2" />
          <span>Email Directly</span>
        </a>
      </div>
    </section>
  );
};