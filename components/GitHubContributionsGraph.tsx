import React, { useState, useEffect, useRef } from 'react';
import { GithubIcon } from './icons';

interface GitHubContributionsGraphProps {
  username?: string;
  theme: 'light' | 'dark';
}

export const GitHubContributionsGraph: React.FC<GitHubContributionsGraphProps> = ({
  username = 'alexmorgan-dev',
  theme,
}) => {
  const [isImageLoading, setIsImageLoading] = useState(false);
  const [useFallback, setUseFallback] = useState(true);

  // If a real custom username is provided (not template default), try loading live chart
  useEffect(() => {
    if (!username || username === 'alexmorgan-dev' || username === 'yourusername') {
      setUseFallback(true);
      return;
    }

    setIsImageLoading(true);
    const img = new Image();
    img.src = `https://ghchart.rshah.org/059669/${username}`;
    img.onload = () => {
      setIsImageLoading(false);
      setUseFallback(false);
    };
    img.onerror = () => {
      setIsImageLoading(false);
      setUseFallback(true);
    };
  }, [username]);

  return (
    <div className="p-6 rounded-2xl bg-card dark:bg-dark-card border border-border dark:border-dark-border space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-border/60 dark:border-dark-border/60 pb-3">
        <div className="flex items-center space-x-2">
          <GithubIcon className="w-4 h-4 text-accent-green dark:text-dark-accent-green" />
          <h3 className="font-display text-sm font-bold text-text-primary dark:text-dark-text-primary">
            Open Source & Git Activity
          </h3>
        </div>
        <span className="text-xs font-mono text-text-secondary dark:text-dark-text-secondary">
          {useFallback ? 'Activity Grid Template' : `@${username}`}
        </span>
      </div>

      {!useFallback ? (
        <div className="overflow-x-auto py-2">
          <img
            src={`https://ghchart.rshah.org/059669/${username}`}
            alt={`GitHub contribution graph for ${username}`}
            className="w-full h-auto min-w-[650px]"
          />
        </div>
      ) : (
        /* Clean architectural preview matrix (no fake stats, clearly marked as template preview) */
        <div className="space-y-3">
          <div className="overflow-x-auto py-2">
            <div className="min-w-[620px] grid grid-flow-col grid-rows-7 gap-1 w-full opacity-80">
              {Array.from({ length: 52 * 7 }).map((_, i) => {
                // Subtle varied opacity levels to simulate activity pattern
                const intensity = (i * 17 + (i % 7) * 23) % 5;
                const bgClass =
                  intensity === 0
                    ? 'bg-border/40 dark:bg-dark-border/40'
                    : intensity === 1
                    ? 'bg-accent-green/20'
                    : intensity === 2
                    ? 'bg-accent-green/45'
                    : intensity === 3
                    ? 'bg-accent-green/70'
                    : 'bg-accent-green';

                return (
                  <div
                    key={i}
                    className={`w-2.5 h-2.5 rounded-xs ${bgClass} transition-colors hover:scale-125`}
                    title="Template activity preview cell"
                  />
                );
              })}
            </div>
          </div>

          <div className="flex items-center justify-between text-[11px] font-mono text-text-secondary dark:text-dark-text-secondary pt-1">
            <span>Jan — Dec</span>
            <div className="flex items-center space-x-1.5">
              <span>Less</span>
              <span className="w-2 h-2 rounded-xs bg-border/40 dark:bg-dark-border/40" />
              <span className="w-2 h-2 rounded-xs bg-accent-green/30" />
              <span className="w-2 h-2 rounded-xs bg-accent-green/60" />
              <span className="w-2 h-2 rounded-xs bg-accent-green" />
              <span>More</span>
            </div>
          </div>
        </div>
      )}

      <p className="text-[11px] font-mono text-text-secondary/70 dark:text-dark-text-secondary/70 border-t border-border/50 dark:border-dark-border/50 pt-2">
        To stream your live GitHub contribution graph, set your <code className="text-accent-green">githubUsername</code> in <code className="text-accent-green">constants.ts</code>.
      </p>
    </div>
  );
};
