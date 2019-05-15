import React, { useState } from 'react';
import Grid from './Grid';
import * as World from '../utils/world';

const initialWorld = World.create(50);

export default function App() {
  const [world, setWorld] = useState(initialWorld);

  return (
    <div>
      <button onClick={() => setWorld(World.randomize(world))}>Random</button>
      <Grid world={world} />
    </div>
  );
}
