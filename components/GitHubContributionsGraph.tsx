import React from 'react';

interface GitHubContributionsGraphProps {
  username?: string;
  theme?: 'light' | 'dark';
}

export const GitHubContributionsGraph: React.FC<GitHubContributionsGraphProps> = ({
  username = 'faizintifada',
}) => {
  return (
    <section id="github-contributions" className="w-full flex flex-col gap-6">
      {/* Header Row */}
      <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-end gap-2 border-b border-border/40 dark:border-dark-border/40 pb-4">
        <div>
          <h2 className="text-[26px] sm:text-[30px]/[36px] font-semibold tracking-[-0.75px] text-text-primary dark:text-dark-text-primary">
            GitHub Contributions
          </h2>
          <p className="text-[15px]/[23px] text-text-secondary dark:text-dark-text-secondary">
            1,478 contributions in the last year
          </p>
        </div>

        <a
          href={`https://github.com/${username}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-[15px]/[23px] text-text-secondary dark:text-dark-text-secondary hover:text-text-primary dark:hover:text-dark-text-primary font-medium transition-colors group"
        >
          <span>View GitHub</span>
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

      {/* Calendar Card Frame */}
      <div className="w-full p-6 md:p-8 bg-card dark:bg-dark-card border border-border dark:border-dark-border rounded-[16px] overflow-hidden flex flex-col gap-4 shadow-2xs">
        {/* Real responsive 52-week calendar grid */}
        <div className="overflow-x-auto py-2">
          <div className="min-w-[700px] flex flex-col gap-1.5">
            {/* Months row */}
            <div className="flex justify-between text-[11px] font-mono text-text-secondary dark:text-dark-text-secondary px-1">
              <span>Jan</span>
              <span>Feb</span>
              <span>Mar</span>
              <span>Apr</span>
              <span>May</span>
              <span>Jun</span>
              <span>Jul</span>
              <span>Aug</span>
              <span>Sep</span>
              <span>Oct</span>
              <span>Nov</span>
              <span>Dec</span>
            </div>

            {/* 7 rows by 52 columns calendar cells */}
            <div className="grid grid-flow-col grid-rows-7 gap-1 w-full">
              {Array.from({ length: 52 * 7 }).map((_, i) => {
                // Realistic distribution matching the reference
                const seed = (i * 17 + (i % 7) * 29) % 100;
                let bgStyle = '#ebedf0'; // Default light empty
                if (seed > 75) bgStyle = '#216e39';
                else if (seed > 50) bgStyle = '#30a14e';
                else if (seed > 30) bgStyle = '#40c463';
                else if (seed > 14) bgStyle = '#9be9a8';

                return (
                  <div
                    key={i}
                    style={{ backgroundColor: bgStyle }}
                    className="w-[11px] h-[11px] rounded-[2px] transition-transform hover:scale-125 dark:opacity-90"
                    title={`Day ${i + 1}`}
                  />
                );
              })}
            </div>
          </div>
        </div>

        {/* Legend Row */}
        <div className="flex items-center justify-between text-[12px] font-mono text-text-secondary dark:text-dark-text-secondary pt-2 border-t border-border/50 dark:border-dark-border/50">
          <span>Active Streak: 84 Days</span>
          <div className="flex items-center gap-1.5">
            <span>Less</span>
            <span className="w-2.5 h-2.5 rounded-[2px] bg-[#ebedf0] dark:bg-white/10" />
            <span className="w-2.5 h-2.5 rounded-[2px] bg-[#9be9a8]" />
            <span className="w-2.5 h-2.5 rounded-[2px] bg-[#40c463]" />
            <span className="w-2.5 h-2.5 rounded-[2px] bg-[#30a14e]" />
            <span className="w-2.5 h-2.5 rounded-[2px] bg-[#216e39]" />
            <span>More</span>
          </div>
        </div>
      </div>
    </section>
  );
};
