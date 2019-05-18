import React, { useMemo } from 'react';
import Block from './Block';
import * as World from '../utils/world';

type Props = {
  onClick: (index: number) => void,
  world: World.Type,
}

export default function Grid({ onClick, world }: Props) {
  const styles = useMemo(() => getStyles(world.size), [world.size]);

  return (
    <div style={styles}>
      {World.mapCells(world, (alive, index) => {
        return <Block on={alive} onClick={onClick.bind(null, index)} key={`${index}-${alive}`} />;
      })}
    </div>
  );
}

function getStyles(columns: number) {
  return {
    display: 'grid',
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
    height: 600,
    width: 600,
  };
}
