import { map, random } from 'lodash';
import * as Cell from './cell';

interface World {
  cells: Array<Cell.Type>,
  size: number,
}

export type Type = World;

export function create(size: number): World {
  return {
    cells: map(new Array(size * size), () => Cell.create()),
    size,
  };
}

export function randomize(world: World): World {
  const { size } = world;
  return {
    ...world,
    cells: map(new Array(size * size), () => Cell.create(!!random(1))),
  };
}

export function mapCells(world: World, callback: (alive: boolean, index?: number) => unknown) {
  return world.cells.map((cell, index) => {
    return callback(!!cell.alive, index);
  });
}
