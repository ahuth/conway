import React, { useMemo } from 'react';
import Block from './Block';
import * as World from '../utils/world';

type Props = {
  onClick: (index: number) => void,
  showGridLines: boolean,
  world: World.Type,
}

export default function Grid({ onClick, showGridLines, world }: Props) {
  const styles = useMemo(() => getStyles(world.size), [world.size])

  return (
    <div style={styles}>
      {World.mapCells(world, (alive, index) => {
        return (
          <Block
            key={`${index}-${alive}`}
            on={alive}
            onClick={onClick.bind(null, index)}
            showGridLines={showGridLines}
          />
        );
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
