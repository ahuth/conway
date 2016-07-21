"use strict";

import cells from "reducers/cells";
import {clearWorld, processWorld, toggleCell} from "actions";

describe("reducers", function () {
  describe("cells", function () {
    it("returns the current state for unknown actions", function () {
      var currentState = [1, 2, 3, 4];
      expect(cells(currentState, {type: "WAT"})).toEqual(currentState);
    });

    describe("for clearWorld", function () {
      var state;

      beforeEach(function () {
        state = [[true, true, false], [false, false, true]];
        state = cells(state, clearWorld());
      });

      it("turns off all cells", function () {
        expect(state).toEqual([[false, false, false], [false, false, false]]);
      });
    });

    describe("for processWorld", function () {
      var state;

      beforeEach(function () {
        state = [
          [true, true, false],
          [false, false, true]
        ];
        state = cells(state, processWorld());
      });

      it("calculates the next state", function () {
        expect(state).toEqual([
          [true, true, true],
          [false, false, false]
        ]);
      });
    });

    describe("for toggleCell", function () {
      var state;

      beforeEach(function () {
        state = [[true, true, false, false], [false, false, true, true]];
        state = cells(state, toggleCell(1, 1));
      });

      it("toggles the specified cell", function () {
        expect(state).toEqual([[true, true, false, false], [false, true, true, true]])
      });
    });
  });
});
