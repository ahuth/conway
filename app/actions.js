"use strict";

import {actionTypes} from "./constants";

export function toggleCell(row, column) {
  return {
    type: actionTypes.CELL_TOGGLE,
    row: row,
    column: column
  };
}

export function setSize(size) {
  return {
    type: actionTypes.SIZE_SET,
    size: parseInt(size, 10)
  };
}
