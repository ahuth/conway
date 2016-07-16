"use strict";

import initialState from "./initial-state";
import {actionTypes} from "../constants";

function size(state = initialState.size, action) {
  switch (action.type) {
    case actionTypes.SIZE_SET:
      return Object.assign({}, state, {height: action.size, width: action.size});
    default:
      return state;
  }
}

export default size;
