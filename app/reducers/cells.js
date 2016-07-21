"use strict";

import clone from "clone";
import initialState from "./initial-state";
import process from "../utils/process";
import {actionTypes} from "../constants";

function cells(state = initialState.cells, action) {
  switch (action.type) {
    case actionTypes.CELL_TOGGLE:
      return toggleCell(clone(state), action);
    case actionTypes.WORLD_CLEAR:
      return clearCells(state);
    case actionTypes.WORLD_PROCESS:
      return process(state);
    default:
      return state;
  }
}

function clearCells(state) {
  return state.map(function (row) {
    return Array(row.length).fill(false);
  });
}

function toggleCell(nextState, {row, column}) {
  nextState[row][column] = !nextState[row][column];
  return nextState;
}

export default cells;
