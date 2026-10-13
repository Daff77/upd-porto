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
      className={`inline-block w-2 h-2 rounded-full mr-2 shrink-0 ${
        isOnline 
          ? 'bg-accent-green' 
          : 'bg-text-secondary/40'
      }`}
      title={isOnline ? 'Active (Working Hours: 07:00 - 23:00 WIB)' : 'Offline (Rest Hours)'}
    ></span>
  );
};
