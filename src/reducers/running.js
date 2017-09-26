import initialState from "./initial-state";
import {actionTypes} from "../constants";

function running(state = initialState.running, action) {
  switch (action.type) {
    case actionTypes.WORLD_START:
      return true;
    case actionTypes.WORLD_STOP:
      return false;
    default:
      return state;
  }
}

export default running;
