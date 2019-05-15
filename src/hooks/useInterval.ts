import { useEffect, useRef } from 'react';

export default function useInterval(callback: () => void, delay: number, running = true) {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    if (running) {
      const id = setInterval(callbackRef.current, delay);

      return () => clearInterval(id);
    }
  }, [delay, callbackRef, running]);
}
