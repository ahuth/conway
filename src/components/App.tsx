import React, { useState } from 'react';
import Grid from './Grid';
import useSimulation from '../hooks/useSimulation';

export default function App() {
  const { world, playing, doClear, doRandomize, doStep, doToggleCell, doToggleStart } = useSimulation(50);
  const [showGridLines, setShowGridLines] = useState(true);

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
      <Grid onClick={doToggleCell} showGridLines={showGridLines} world={world} />
    </div>
  );
}
