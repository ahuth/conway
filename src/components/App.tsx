import React from 'react';
import Grid from './Grid';
import useSimulation from '../hooks/useSimulation';

const simulationSpeed = 50; // ms

export default function App() {
  const { world, playing, doClear, doRandomize, doStep, doToggleCell, doToggleStart } = useSimulation(simulationSpeed);

  return (
    <div>
      <button onClick={doStep}>Step</button>
      <button onClick={doToggleStart}>{playing ? 'Stop' : 'Play'}</button>
      <button onClick={doClear}>Clear</button>
      <button onClick={doRandomize}>Random</button>
      <Grid onClick={doToggleCell} world={world} />
    </div>
  );
}
