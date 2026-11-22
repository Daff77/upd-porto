import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import snapshot from '../assets/github-contributions.json';
import { PROFILE } from '../constants';

interface ContributionDay {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

interface ContributionsApiResponse {
  total?: {
    lastYear?: number;
  };
  contributions?: Array<{
    date: string;
    count: number;
    level: number;
  }>;
}

interface TooltipState {
  day: ContributionDay;
  x: number;
  y: number;
}

const colorByLevel = [
  'bg-[#F2F1EF] dark:bg-white/10',
  'bg-[#E4D5CB] dark:bg-[#4A3728]',
  'bg-[#ECA178] dark:bg-[#8B4D2B]',
  'bg-[#F57E3F] dark:bg-[#D15916]',
  'bg-[#FF6308] dark:bg-[#FF7A2E]',
] as const;

const dateFormat = new Intl.DateTimeFormat('en-US', {
  dateStyle: 'medium',
  timeZone: 'UTC',
});

const clampLevel = (level: number): 0 | 1 | 2 | 3 | 4 => {
  if (level <= 0) return 0;
  if (level >= 4) return 4;
  return level as 1 | 2 | 3;
};

const snapshotStart = new Date(snapshot.from);
const fallbackDays: ContributionDay[] = snapshot.days.map(([level, count], index) => {
  const date = new Date(snapshotStart);
  date.setUTCDate(date.getUTCDate() + index);
  return {
    date: date.toISOString().slice(0, 10),
    count,
    level: clampLevel(level),
  };
});

export const GitHubContributionsGraph: React.FC = () => {
  const username = PROFILE.githubUsername || snapshot.username;
  const figureRef = useRef<HTMLElement>(null);
  const [status, setStatus] = useState<'loading' | 'live' | 'fallback'>('loading');
  const [days, setDays] = useState<ContributionDay[]>(fallbackDays);
  const [totalCount, setTotalCount] = useState<number>(() =>
    fallbackDays.reduce((sum, day) => sum + day.count, 0)
  );
  const [tooltip, setTooltip] = useState<TooltipState | null>(null);
  const [reloadKey, setReloadKey] = useState(0);

  const loadContributions = useCallback(
    async (signal: AbortSignal) => {
      setStatus('loading');
      try {
        const response = await fetch(
          `https://github-contributions-api.jogruber.de/v4/${encodeURIComponent(username)}?y=last`,
          { signal }
        );

        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`);
        }

        const data = (await response.json()) as ContributionsApiResponse;
        if (!Array.isArray(data.contributions) || data.contributions.length === 0) {
          throw new Error('Empty contributions payload');
        }

        const normalizedDays: ContributionDay[] = data.contributions.map((entry) => ({
          date: entry.date,
          count: entry.count,
          level: clampLevel(entry.level),
        }));

        const computedTotal = normalizedDays.reduce((sum, day) => sum + day.count, 0);
        setDays(normalizedDays);
        setTotalCount(data.total?.lastYear ?? computedTotal);
        setStatus('live');
      } catch (err) {
        if ((err as Error).name === 'AbortError') return;
        setDays(fallbackDays);
        setTotalCount(fallbackDays.reduce((sum, day) => sum + day.count, 0));
        setStatus('fallback');
      }
    },
    [username]
  );

  useEffect(() => {
    const controller = new AbortController();
    void loadContributions(controller.signal);
    return () => controller.abort();
  }, [loadContributions, reloadKey]);

  const { firstWeekday, columns, fromLabel, throughLabel } = useMemo(() => {
    const first = days[0] ? new Date(`${days[0].date}T00:00:00Z`) : snapshotStart;
    const last = days[days.length - 1]
      ? new Date(`${days[days.length - 1].date}T00:00:00Z`)
      : new Date(snapshot.through);
    const weekday = first.getUTCDay();
    const cols = Math.ceil((weekday + days.length) / 7);
    return {
      firstWeekday: weekday,
      columns: cols,
      fromLabel: dateFormat.format(first),
      throughLabel: dateFormat.format(last),
    };
  }, [days]);

  const showTooltipForCell = useCallback((el: HTMLElement, day: ContributionDay) => {
    const figEl = figureRef.current;
    if (!figEl) return;
    const rect = el.getBoundingClientRect();
    const figRect = figEl.getBoundingClientRect();
    const rawX = rect.left - figRect.left + rect.width / 2;
    const x = Math.min(Math.max(rawX, 96), Math.max(96, figRect.width - 96));
    const y = rect.top - figRect.top - 8;
    setTooltip({ day, x, y });
  }, []);

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        {status === 'loading' ? (
          <p className="text-sm text-text-secondary dark:text-dark-text-secondary">
            Loading live GitHub activity...
          </p>
        ) : (
          <p className="text-sm text-text-secondary dark:text-dark-text-secondary">
            <strong className="font-semibold text-text-primary dark:text-dark-text-primary tabular-nums">
              {totalCount.toLocaleString('en-US')}
            </strong>{' '}
            contributions in the last year &middot; {fromLabel} to {throughLabel}
          </p>
        )}

        <div className="flex items-center gap-3">
          {status === 'live' && (
            <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-text-secondary dark:text-dark-text-secondary">
              <span
                aria-hidden="true"
                className="w-1.5 h-1.5 rounded-full bg-status-live dark:bg-dark-status-live"
              />
              Live
            </span>
          )}
          {status === 'fallback' && (
            <span className="inline-flex items-center gap-2 font-mono text-[11px] text-text-secondary dark:text-dark-text-secondary">
              <span>Cached snapshot</span>
              <button
                type="button"
                onClick={() => setReloadKey((k) => k + 1)}
                className="underline underline-offset-2 hover:text-text-primary dark:hover:text-dark-text-primary"
              >
                Retry
              </button>
            </span>
          )}
          <a
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs font-medium text-accent dark:text-dark-accent hover:underline"
          >
            @{username} &rarr;
          </a>
        </div>
      </div>

      <figure ref={figureRef} className="relative space-y-3">
        {tooltip && (
          <div
            role="tooltip"
            style={{ left: tooltip.x, top: tooltip.y }}
            className="pointer-events-none absolute z-20 -translate-x-1/2 -translate-y-full rounded-lg bg-text-primary dark:bg-dark-text-primary px-3 py-1.5 text-xs shadow-lg whitespace-nowrap"
          >
            <span className="font-semibold text-background dark:text-dark-background">
              {tooltip.day.count}{' '}
              {tooltip.day.count === 1 ? 'contribution' : 'contributions'}
            </span>{' '}
            <span className="text-background/70 dark:text-dark-background/70">
              on {dateFormat.format(new Date(`${tooltip.day.date}T00:00:00Z`))}
            </span>
          </div>
        )}

        <div className="overflow-x-auto pb-1">
          {status === 'loading' ? (
            <div
              aria-hidden="true"
              className="grid grid-flow-col grid-rows-7 gap-[3px] sm:gap-[4px] w-full min-w-[680px]"
              style={{ gridTemplateColumns: 'repeat(53, minmax(0, 1fr))' }}
            >
              {Array.from({ length: 53 * 7 }, (_, index) => (
                <span
                  key={`skeleton-${index}`}
                  className="aspect-square rounded-[3px] sm:rounded-[4px] bg-card-hover dark:bg-dark-card animate-pulse"
                />
              ))}
            </div>
          ) : (
            <div
              aria-label={`GitHub contribution graph for ${username}`}
              onMouseLeave={() => setTooltip(null)}
              className="grid grid-flow-col grid-rows-7 gap-[3px] sm:gap-[4px] w-full min-w-[680px]"
              style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}
            >
              {Array.from({ length: firstWeekday }, (_, index) => (
                <span key={`offset-${index}`} aria-hidden="true" />
              ))}
              {days.map((day) => {
                const isActive = tooltip?.day.date === day.date;
                return (
                  <span
                    key={day.date}
                    tabIndex={0}
                    aria-label={`${day.count} ${
                      day.count === 1 ? 'contribution' : 'contributions'
                    } on ${dateFormat.format(new Date(`${day.date}T00:00:00Z`))}`}
                    onMouseEnter={(e) => showTooltipForCell(e.currentTarget, day)}
                    onFocus={(e) => showTooltipForCell(e.currentTarget, day)}
                    onBlur={() => setTooltip(null)}
                    className={`aspect-square rounded-[3px] sm:rounded-[4px] transition-transform duration-100 hover:scale-110 focus-visible:outline-none ${
                      colorByLevel[day.level]
                    } ${
                      isActive
                        ? 'ring-1 ring-text-primary/45 ring-offset-1 ring-offset-background dark:ring-dark-text-primary/50 dark:ring-offset-dark-background'
                        : ''
                    }`}
                  />
                );
              })}
            </div>
          )}
        </div>

        <div className="flex items-center gap-1.5 text-[11px] font-mono text-text-secondary dark:text-dark-text-secondary">
          <span>Less</span>
          {colorByLevel.map((cls, i) => (
            <span key={i} className={`w-3 h-3 rounded-[3px] ${cls}`} />
          ))}
          <span>More</span>
        </div>
      </figure>
    </div>
  );
};
