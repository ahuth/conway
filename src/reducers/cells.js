import clone from "clone";
import initialState from "./initial-state";
import process from "../utils/process";
import {actionTypes} from "../constants";

export default function cells(state = initialState.cells, action) {
  switch (action.type) {
    case actionTypes.CELL_TOGGLE:
      return toggleCell(clone(state), action);
    case actionTypes.WORLD_CLEAR:
      return clearCells(state);
    case actionTypes.WORLD_PROCESS:
      return process(state);
    case actionTypes.WORLD_RANDOMIZE:
      return randomizeCells(state);
    default:
      return state;
  }
}

function clearCells(state) {
  return state.map(function (row) {
    return Array(row.length).fill(false);
  });
}

function randomizeCells(state) {
  return state.map(function (row) {
    return row.map(function () {
      return randomBoolean();
    });
  });
}

function toggleCell(nextState, {row, column}) {
  nextState[row][column] = !nextState[row][column];
  return nextState;
}

function randomBoolean() {
  return Math.random() >= 0.5;
}
