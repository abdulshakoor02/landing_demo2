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
      animation: isMounted ? `fadeIn ${duration}ms ease-in-out` : '',
    },
  };
}
