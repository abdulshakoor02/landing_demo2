import { useState, useEffect } from 'react';

export function useAnimation() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  return {
    isMounted,
  };
}

export function useFadeIn(duration: number = 500) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  return {
    style: {
      animationName: isMounted ? 'fadeIn' : 'none',
      animationDuration: isMounted ? `${duration}ms` : '0ms',
      animationTimingFunction: 'ease-in-out',
      animationFillMode: 'both',
    },
  };
}
