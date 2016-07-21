"use strict";

import {actionTypes} from "./constants";

export function processWorld() {
  return {
    type: actionTypes.WORLD_PROCESS
  };
}

export function toggleCell(row, column) {
  return {
    type: actionTypes.CELL_TOGGLE,
    row: row,
    column: column
  };
}
