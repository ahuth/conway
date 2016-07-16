"use strict";

import times from "utils/times";

describe("utils", function () {
  describe("times", function () {
    it("captures the result of the callback", function () {
      var result = times(5, (number) => { return number });
      expect(result).toEqual([0, 1, 2, 3, 4]);
    });
  });
});
