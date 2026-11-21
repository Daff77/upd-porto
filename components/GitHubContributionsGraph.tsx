import React from 'react';
import snapshot from '../assets/github-contributions.json';

const colorByLevel = [
  'bg-[#F2F1EF] dark:bg-white/10',
  'bg-[#E4D5CB] dark:bg-[#4A3728]',
  'bg-[#ECA178] dark:bg-[#8B4D2B]',
  'bg-[#F57E3F] dark:bg-[#D15916]',
  'bg-[#FF6308] dark:bg-[#FF7A2E]',
];

const dateFormat = new Intl.DateTimeFormat('en-US', { dateStyle: 'medium', timeZone: 'UTC' });
const start = new Date(snapshot.from);
const firstWeekday = start.getUTCDay();
const columns = Math.ceil((firstWeekday + snapshot.days.length) / 7);
const total = snapshot.days.reduce((sum, [, count]) => sum + count, 0);

export const GitHubContributionsGraph: React.FC = () => {
  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <p className="text-sm text-text-secondary dark:text-dark-text-secondary">
          <strong className="font-semibold text-text-primary dark:text-dark-text-primary">
            {total.toLocaleString('en-US')}
          </strong>{' '}
          contributions on the public calendar &middot; {dateFormat.format(start)} &ndash;{' '}
          {dateFormat.format(new Date(snapshot.through))}
        </p>
        <a
          href={`https://github.com/${snapshot.username}`}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-xs font-medium text-accent-green dark:text-dark-accent-green hover:underline"
        >
          @{snapshot.username} &rarr;
        </a>
      </div>

      <figure className="space-y-3">
        <div className="overflow-x-auto pb-1">
          <div
            aria-hidden="true"
            className="grid grid-flow-col grid-rows-7 gap-0.5 sm:gap-1 min-w-[560px] max-w-[740px]"
            style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}
          >
            {Array.from({ length: firstWeekday }, (_, index) => (
              <span key={`offset-${index}`} />
            ))}
            {snapshot.days.map(([level, count], index) => {
              const date = new Date(start);
              date.setUTCDate(date.getUTCDate() + index);
              return (
                <span
                  key={index}
                  title={`${dateFormat.format(date)} · ${count} ${count === 1 ? 'contribution' : 'contributions'}`}
                  className={`aspect-square rounded-[2px] sm:rounded-[3px] ${colorByLevel[level]}`}
                />
              );
            })}
          </div>
        </div>

        <div className="flex items-center gap-1.5 text-[11px] font-mono text-text-secondary dark:text-dark-text-secondary">
          <span>Less</span>
          {colorByLevel.map((cls, i) => (
            <span key={i} className={`w-2.5 h-2.5 rounded-[2px] ${cls}`} />
          ))}
          <span>More</span>
        </div>
      </figure>
    </div>
  );
};
