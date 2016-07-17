"use strict";

import * as actions from "../app/actions";
import {actionTypes} from "constants";

describe("actions", function () {
  describe("#setSize", function () {
    it("returns the correct action", function () {
      expect(actions.setSize(11)).toEqual({
        type: actionTypes.SIZE_SET,
        size: 11
      });
    });

    it("handles string size values", function () {
      expect(actions.setSize("2")).toEqual({
        type: actionTypes.SIZE_SET,
        size: 2
      });
    });
  });

  describe("#toggleCell", function () {
    it("returns the correct action", function () {
      expect(actions.toggleCell(1, 2)).toEqual({
        type: actionTypes.CELL_TOGGLE,
        row: 1,
        column: 2
      });
    });
  });
});
