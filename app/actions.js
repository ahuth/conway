"use strict";

import {actionTypes} from "./constants";

export function setSize(size) {
  return {
    type: actionTypes.SIZE_SET,
    size: size
  };
}
