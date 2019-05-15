import { useCallback, useEffect, useRef } from 'react';
import useInterval from './useInterval';
import * as World from '../utils/world';

export default function useSimulation(
  world: World.Type,
  setWorld: (world: World.Type) => void,
  playing: boolean
) {
  const worldRef = useRef(world);

  useEffect(() => {
    worldRef.current = world;
  }, [world]);

  useInterval(
    useCallback(
      () => setWorld(World.step(worldRef.current)),
      [worldRef, setWorld],
    ),
    50,
    playing,
  );
}
