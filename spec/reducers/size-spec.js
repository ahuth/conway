"use strict";

import size from "reducers/size";

describe("reducers", function () {
  describe("size", function () {
    it("returns the current state for unknown actions", function () {
      var currentState = {height: 1, width: 1};
      expect(size(currentState, {type: "WAT"})).toEqual(currentState);
    });
  });
});
