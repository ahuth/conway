"use strict";

import {actionTypes} from "./constants";

export function toggleCell(row, column) {
  return {
    type: actionTypes.CELL_TOGGLE,
    row: row,
    column: column
  };
}
