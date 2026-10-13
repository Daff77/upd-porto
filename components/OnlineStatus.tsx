import React, { useEffect, useState } from 'react';

export const OnlineStatus: React.FC = () => {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    const checkOnlineStatus = () => {
      const now = new Date();
      const localTime = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Jakarta' }));
      
      const hour = localTime.getHours();
      
      // Active hours from 7 AM to 11 PM (7:00 - 22:59 WIB)
      const online = hour >= 7 && hour < 23;
      setIsOnline(online);
    };

    checkOnlineStatus();
    const interval = setInterval(checkOnlineStatus, 60000); // Check every minute

    return () => clearInterval(interval);
  }, []);

  return (
    <span 
      className={`inline-block w-2 h-2 rounded-full mr-1.5 ${
        isOnline 
          ? 'bg-accent-green animate-pulse' 
          : 'bg-text-secondary/50'
      }`}
      title={isOnline ? 'Active / Online' : 'Offline'}
    ></span>
  );
};
