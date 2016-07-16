"use strict";

import cells from "reducers/cells";

describe("reducers", function () {
  describe("cells", function () {
    it("returns the current state for unknown actions", function () {
      var currentState = [1, 2, 3, 4];
      expect(cells(currentState, {type: "WAT"})).toEqual(currentState);
    });
  });
});
