"use strict";

import running from "reducers/running";
import {startWorld, stopWorld} from "actions";

describe("reducers", function () {
  describe("running", function () {
    it("returns the current state for unknown actions", function () {
      var currentState = true;
      expect(running(currentState, {type: "WAT"})).toEqual(currentState);
    });

    describe("for startWorld", function () {
      var state;

      beforeEach(function () {
        state = running(null, startWorld());
      });

      it("sets the state to true", function () {
        expect(state).toBe(true);
      });
    });

    describe("for stopWorld", function () {
      var state;

      beforeEach(function () {
        state = running(null, stopWorld());
      });

      it("sets the state to false", function () {
        expect(state).toBe(false);
      });
    });
  });
});
