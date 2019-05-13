import React, { useState } from 'react';
import useInterval from '../hooks/useInterval';

export default function App() {
  const [delay, setDelay] = useState(500);
  const [count, setCount] = useState(0);

  useInterval(() => {
    setCount(c => c + 1);
  }, delay);

  return (
    <div>
      <label htmlFor="set-delay">Delay</label>
      <input
        id="set-delay"
        max="5000"
        min="100"
        onChange={e => setDelay(Number(e.target.value))}
        step="100"
        type="range"
        value={delay}
      />
      <br />
      <span>Current delay is {delay}ms</span>
      <br />
      <span>{count}</span>
    </div>
  );
}
