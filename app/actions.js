"use strict";

import {actionTypes} from "./constants";

export function clearWorld() {
  return {
    type: actionTypes.WORLD_CLEAR
  };
}

export function processWorld() {
  return {
    type: actionTypes.WORLD_PROCESS
  };
}

export function randomizeWorld() {
  return {
    type: actionTypes.WORLD_RANDOMIZE
  };
}

export function startWorld() {
  return {
    type: actionTypes.WORLD_START
  };
}

export function stopWorld() {
  return {
    type: actionTypes.WORLD_STOP
  };
}

export function toggleCell(row, column) {
  return {
    type: actionTypes.CELL_TOGGLE,
    row: row,
    column: column
  };
}
