import React, { useState } from 'react';
import Grid from './Grid';
import useSimulation from '../hooks/useSimulation';

export default function App() {
  const [showGridLines, setShowGridLines] = useState(true);
  const [delay, setDelay] = useState(50);
  const { world, playing, doClear, doRandomize, doStep, doToggleCell, doToggleStart } = useSimulation(delay);

  return (
    <div>
      <button onClick={doStep}>Step</button>
      <button onClick={doToggleStart}>{playing ? 'Stop' : 'Play'}</button>
      <button onClick={doClear}>Clear</button>
      <button onClick={doRandomize}>Random</button>
      <label>
        Show grid lines:
        <input type="checkbox" onChange={() => setShowGridLines(state => !state)} checked={showGridLines} />
      </label>
      <label>
        Delay:
        <input type="range" min="50" max="500" step="50" onChange={(e) => setDelay(Number(e.target.value))} value={delay} />
      </label>
      <Grid onClick={doToggleCell} showGridLines={showGridLines} world={world} />
    </div>
  );
}
