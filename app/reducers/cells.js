"use strict";

import clone from "clone";
import initialState from "./initial-state";
import {actionTypes} from "../constants";

function cells(state = initialState.cells, action) {
  switch (action.type) {
    case actionTypes.CELL_TOGGLE:
      return toggleCell(clone(state), action);
    default:
      return state;
  }
}

function toggleCell(nextState, {row, column}) {
  nextState[row][column] = !nextState[row][column];
  return nextState;
}

export default cells;
