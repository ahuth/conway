import React from 'react';
import Grid from './Grid';
import useSimulation from '../hooks/useSimulation';

export default function App() {
  const { world, playing, doClear, doRandomize, doStep, doToggleStart } = useSimulation();

  return (
    <div>
      <button onClick={doStep}>Step</button>
      <button onClick={doToggleStart}>{playing ? 'Stop' : 'Play'}</button>
      <button onClick={doClear}>Clear</button>
      <button onClick={doRandomize}>Random</button>
      <Grid world={world} />
    </div>
  );
}
