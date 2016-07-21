"use strict";

import * as actions from "../app/actions";
import {actionTypes} from "constants";

describe("actions", function () {
  describe("#processWorld", function () {
    it("returns the correct action", function () {
      expect(actions.processWorld()).toEqual({
        type: actionTypes.WORLD_PROCESS
      });
    });
  });

  describe("#startWorld", function () {
    it("returns the correct action", function () {
      expect(actions.startWorld()).toEqual({
        type: actionTypes.WORLD_START
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
