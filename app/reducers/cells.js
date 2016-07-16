"use strict";

import initialState from "./initial-state";
import {actionTypes} from "../constants";

function cells(state = initialState.cells, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default cells;
