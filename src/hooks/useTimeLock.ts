import { useState, useEffect } from 'react';

export const useTimeLock = (lockTimeMinutes: number = 10) => {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const startTimer = () => {
    if (!isActive) {
      setIsActive(true);
    }
  };

  useEffect(() => {
    let timeout: NodeJS.Timeout | null = null;

    if (isActive) {
      // Silent timer - no countdown, just unlock after specified time
      timeout = setTimeout(() => {
        setIsUnlocked(true);
      }, lockTimeMinutes * 60 * 1000); // Convert minutes to milliseconds
    }

    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [isActive, lockTimeMinutes]);

  return {
    isUnlocked,
    startTimer,
    isActive
  };
};