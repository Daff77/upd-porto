import React from 'react';
import { FiUsers, FiMapPin } from 'react-icons/fi';

interface VisitorStatsProps {
  count: number | null;
  loading: boolean;
  error: string | null;
  isLive?: boolean;
}

export const VisitorStats: React.FC<VisitorStatsProps> = ({ count, loading, error, isLive }) => {
  if (error) {
    return null;
  }

  if (loading) {
    return (
      <div className="flex items-center gap-1.5 text-xs text-text-secondary dark:text-dark-text-secondary">
        <span className="w-1.5 h-1.5 rounded-full bg-accent-green"></span>
        <span>Connecting...</span>
      </div>
    );
  }

  if (isLive && count) {
    const formatCount = (num: number): string => {
      return num.toLocaleString('en-US');
    };

    return (
      <div className="flex items-center gap-1.5 text-xs text-text-secondary dark:text-dark-text-secondary">
        <FiUsers className="w-3.5 h-3.5 text-accent-green" />
        <span>
          <span className="font-semibold font-mono tabular-nums text-text-primary dark:text-dark-text-primary">
            {formatCount(count)}
          </span>{' '}
          verified visitors
        </span>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-1.5 text-xs text-text-secondary dark:text-dark-text-secondary">
      <FiMapPin className="w-3.5 h-3.5 text-accent-green shrink-0" />
      <span>Surabaya, Indonesia (UTC+7)</span>
    </div>
  );
};
