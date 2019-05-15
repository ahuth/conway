interface Cell {
  alive: 0 | 1;
}

export type Type = Cell;

export function create(alive = false): Cell {
  return {
    alive: alive ? 1 : 0,
  };
}

export function toggle(cell: Cell): Cell {
  return {
    alive: cell.alive ? 0 : 1,
  };
}
