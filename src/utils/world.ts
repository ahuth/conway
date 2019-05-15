import { map, random } from 'lodash';
import * as Cell from './cell';

interface World {
  cells: Array<Cell.Type>,
  size: number,
}

export type Type = World;

/**
 * Create a new, empty World.
 */
export function create(size: number): World {
  return {
    cells: map(new Array(size * size), () => Cell.create()),
    size,
  };
}

/**
 * Randomize the cells of a World. Returns a new World.
 */
export function randomize(world: World): World {
  const { size } = world;
  return {
    ...world,
    cells: map(new Array(size * size), () => Cell.create(!!random(1))),
  };
}

/**
 * Execute a callback for every cell in a world, and return an array with the result of each.
 */
export function mapCells<T>(world: World, callback: (alive: boolean, index: number) => T) {
  return world.cells.map((cell, index) => {
    return callback(!!cell.alive, index);
  });
}

/**
 * Return a new world with each cell in their "next" state.
 */
export function step(world: World): World {
  return {
    ...world,
    cells: mapCells(world, (alive, index) => nextCell(world, alive, index)),
  };
}

/**
 * Return a new world with a specific cell toggled.
 */
export function toggleCell(world: World, index: number): World {
  const cells = world.cells.slice();
  cells[index] = Cell.toggle(cells[index]);

  return {
    ...world,
    cells,
  };
}

function nextCell(world: World, alive: boolean, index: number): Cell.Type {
  return Cell.create(shouldLive(world, alive, index));
}

function shouldLive(world: World, alive: boolean, index: number): boolean {
  const liveNeibhbors = getNeighborhood(world, index);

  switch (liveNeibhbors) {
    case 0:
    case 1:
      return false;
    case 2:
      return alive;
    case 3:
      return true;
    default:
      return false;
  }
}

function getNeighborhood(world: World, index: number): number {
  return getNeighborsForIndex(world, index).reduce((acc, cell) => acc + cell.alive, 0);
}

function getNeighborsForIndex(world: World, index: number): Array<Cell.Type> {
  const { x, y } = getCoordinatesForIndex(world, index);

  return [
    world.cells[getIndexForCooridinates(world, x - 1, y + 1)],
    world.cells[getIndexForCooridinates(world, x, y + 1)],
    world.cells[getIndexForCooridinates(world, x + 1, y + 1)],
    world.cells[getIndexForCooridinates(world, x - 1, y)],
    world.cells[getIndexForCooridinates(world, x + 1, y)],
    world.cells[getIndexForCooridinates(world, x - 1, y - 1)],
    world.cells[getIndexForCooridinates(world, x, y - 1)],
    world.cells[getIndexForCooridinates(world, x + 1, y - 1)],
  ];
}

function getCoordinatesForIndex(world: World, index: number): { x: number, y: number } {
  return {
    x: index % world.size,
    y: Math.floor(index / world.size),
  };
}

function getIndexForCooridinates(world: World, x: number, y: number): number {
  return wrapAround(x, world.size) + wrapAround(y, world.size) * world.size;
}

function wrapAround(number: number, size: number): number {
  let output = number;

  if (output < 0) {
    output = size - 1;
  } else if (output >= size) {
    output = 0;
  }

  return output;
}
