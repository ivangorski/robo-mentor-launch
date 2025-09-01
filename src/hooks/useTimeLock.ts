import { useState, useEffect } from 'react';

export const useTimeLock = (lockTimeMinutes: number = 10) => {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(lockTimeMinutes * 60); // Convert to seconds
  const [isActive, setIsActive] = useState(false);

  const startTimer = () => {
    if (!isActive) {
      setIsActive(true);
    }
  };

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isActive && timeRemaining > 0) {
      interval = setInterval(() => {
        setTimeRemaining((time) => {
          if (time <= 1) {
            setIsUnlocked(true);
            setIsActive(false);
            return 0;
          }
          return time - 1;
        });
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, timeRemaining]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return {
    isUnlocked,
    timeRemaining,
    formatTime: formatTime(timeRemaining),
    startTimer,
    isActive
  };
};