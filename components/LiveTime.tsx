import React, { useEffect, useState } from 'react';
import { FiClock } from 'react-icons/fi';

export const LiveTime: React.FC = () => {
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const localTime = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Jakarta' }));
      
      const hours = localTime.getHours().toString().padStart(2, '0');
      const minutes = localTime.getMinutes().toString().padStart(2, '0');
      const seconds = localTime.getSeconds().toString().padStart(2, '0');
      
      setTime(`${hours}:${minutes}:${seconds} WIB`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!time) return null;

  return (
    <div className="flex items-center gap-2 text-xs text-text-secondary dark:text-dark-text-secondary">
      <FiClock className="w-3.5 h-3.5 text-accent-green" />
      <span className="font-mono tabular-nums">{time} (Surabaya)</span>
    </div>
  );
};
