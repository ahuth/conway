"use strict";

import size from "reducers/size";
import {setSize} from "actions";

describe("reducers", function () {
  describe("size", function () {
    it("returns the current state for unknown actions", function () {
      var currentState = {height: 1, width: 1};
      expect(size(currentState, {type: "WAT"})).toEqual(currentState);
    });

    describe("for setSize", function () {
      var state;

      beforeEach(function () {
        var action = setSize(666);
        state = size(state, action);
      });

      it("sets the height", function () {
        expect(state.height).toBe(666);
      });

      it("sets the width", function () {
        expect(state.width).toBe(666);
      });
    });
  });
});
