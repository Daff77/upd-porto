import React from 'react';
import { LATEST_VIDEOS } from '../constants';

export const LatestVideosSection: React.FC = () => {
  return (
    <section id="lab-notes" className="w-full flex flex-col gap-6">
      {/* Header Row */}
      <div className="w-full flex justify-between items-end border-b border-border/40 dark:border-dark-border/40 pb-4">
        <div>
          <h2 className="text-[26px] sm:text-[30px]/[36px] font-semibold tracking-tight text-text-primary dark:text-dark-text-primary">
            Lab Notes &amp; Insights
          </h2>
          <p className="text-[14px] text-text-secondary dark:text-dark-text-secondary pt-0.5">
            Technical writings on interaction physics, design systems, and frontend performance.
          </p>
        </div>

        <a
          href="https://github.com/daff77"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:flex items-center gap-1.5 text-[14px] text-text-secondary dark:text-dark-text-secondary hover:text-text-primary dark:hover:text-dark-text-primary font-medium transition-colors group"
        >
          <span>Read all notes</span>
          <svg
            className="w-4 h-4 transition-transform group-hover:translate-x-0.5"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 12l4-4-4-4" />
          </svg>
        </a>
      </div>

      {/* Notes Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {LATEST_VIDEOS.map((item, idx) => (
          <a
            key={item.id}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-5 rounded-[20px] bg-[#fcfcfb] dark:bg-white/[0.02] border border-border/60 dark:border-white/10 flex flex-col justify-between gap-4 hover:border-text-primary/30 transition-all hover:-translate-y-0.5 shadow-xs"
          >
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between text-xs text-text-secondary dark:text-dark-text-secondary">
                <span className="px-2.5 py-0.5 rounded-full bg-black/5 dark:bg-white/10 font-medium">
                  {item.category}
                </span>
                <span className="font-mono">{item.duration}</span>
              </div>

              <h3 className="text-[16px] font-bold text-text-primary dark:text-dark-text-primary leading-snug group-hover:underline">
                {item.title}
              </h3>
            </div>

            <div className="pt-2 border-t border-border/30 dark:border-white/5 flex items-center justify-between text-[13px] text-text-secondary dark:text-dark-text-secondary">
              <span>Read article</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};
