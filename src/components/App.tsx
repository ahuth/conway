import React, { useState } from 'react';
import Grid from './Grid';
import useSimulation from '../hooks/useSimulation';
import * as World from '../utils/world';

const initialWorld = World.create(50);

export default function App() {
  const [world, setWorld] = useState(initialWorld);
  const [playing, setPlaying] = useState(false);

  useSimulation(world, setWorld, playing);

  return (
    <div>
      <button onClick={() => setWorld(World.step(world))}>Step</button>
      <button onClick={() => setPlaying(state => !state)}>{playing ? 'Stop' : 'Play'}</button>
      <button onClick={() => setWorld(initialWorld)}>Clear</button>
      <button onClick={() => setWorld(World.randomize(world))}>Random</button>
      <Grid world={world} />
    </div>
  );
}
