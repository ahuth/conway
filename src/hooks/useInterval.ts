import { useEffect, useRef } from 'react';

export default function useInterval(callback: () => void, delay: number) {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    const id = setInterval(callbackRef.current, delay);

    return () => clearInterval(id);
  }, [delay, callbackRef]);
}
