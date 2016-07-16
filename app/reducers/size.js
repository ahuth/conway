"use strict";

import initialState from "./initial-state";
import {actionTypes} from "../constants";

function size(state = initialState.size, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default size;
