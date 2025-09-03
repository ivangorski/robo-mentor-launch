import { useState, useEffect } from 'react';

export const useVideoCompletion = () => {
  const [isCompleted, setIsCompleted] = useState(false);
  const [isWatching, setIsWatching] = useState(false);

  const startWatching = () => {
    setIsWatching(true);
  };

  useEffect(() => {
    const handleVideoEnd = () => {
      setIsCompleted(true);
    };

    const handleMessage = (event: MessageEvent) => {
      // Listen for converteai player events
      if (event.data && event.data.type === 'smartplayer' && event.data.action === 'ended') {
        handleVideoEnd();
      }
    };

    // Listen for video end events from the smartplayer
    window.addEventListener('message', handleMessage);

    // Also listen for standard video events as fallback
    const handleVideoEvents = () => {
      const videos = document.querySelectorAll('video');
      videos.forEach(video => {
        video.addEventListener('ended', handleVideoEnd);
      });
    };

    // Set up listeners after a short delay to ensure video is loaded
    const timeout = setTimeout(handleVideoEvents, 2000);

    return () => {
      window.removeEventListener('message', handleMessage);
      clearTimeout(timeout);
      const videos = document.querySelectorAll('video');
      videos.forEach(video => {
        video.removeEventListener('ended', handleVideoEnd);
      });
    };
  }, []);

  return {
    isCompleted,
    startWatching,
    isWatching
  };
};