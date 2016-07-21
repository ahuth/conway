"use strict";

import process from "utils/process";

describe("utils", function () {
  describe("process", function () {
    describe("when there are no live cells", function () {
      var result = null;

      beforeEach(function () {
        result = process([
          [false, false, false, false, false],
          [false, false, false, false, false],
          [false, false, false, false, false],
          [false, false, false, false, false],
          [false, false, false, false, false],
        ]);
      });

      it("returns no live cells", function () {
        expect(result).toEqual([
          [false, false, false, false, false],
          [false, false, false, false, false],
          [false, false, false, false, false],
          [false, false, false, false, false],
          [false, false, false, false, false],
        ]);
      });
    });

    describe("when there is one live cell", function () {
      var result = null;

      beforeEach(function () {
        result = process([
          [false, false, false, false, false],
          [false, false, false, false, false],
          [false, true, false, false, false],
          [false, false, false, false, false],
          [false, false, false, false, false],
        ]);
      });

      it("returns no live cells", function () {
        expect(result).toEqual([
          [false, false, false, false, false],
          [false, false, false, false, false],
          [false, false, false, false, false],
          [false, false, false, false, false],
          [false, false, false, false, false],
        ]);
      });
    })

    describe("when there are several live cells", function () {
      var result = null;

      beforeEach(function () {
        result = process([
          [false, false, false, false, true],
          [false, true, true, false, false],
          [false, true, false, false, false],
          [false, false, false, false, false],
          [false, false, false, false, false],
        ]);
      });

      it("returns the correct result", function () {
        expect(result).toEqual([
          [false, false, false, false, false],
          [true, true, true, false, false],
          [false, true, true, false, false],
          [false, false, false, false, false],
          [false, false, false, false, false],
        ]);
      });
    });

    describe("when there are many live cells", function () {
      var result = null;

      beforeEach(function () {
        result = process([
          [false, false, false, false, true],
          [false, false, true, false, true],
          [false, false, true, true, false],
          [true, false, false, false, false],
          [true, true, false, true, false],
        ]);
      });

      it("returns the correct result", function () {
        expect(result).toEqual([
          [false, true, true, false, true],
          [false, false, true, false, true],
          [false, true, true, true, true],
          [true, false, false, true, false],
          [true, true, false, false, false],
        ]);
      });
    });

    describe("when there are only live cells", function () {
      var result = null;

      beforeEach(function () {
        result = process([
          [true, true, true, true, true],
          [true, true, true, true, true],
          [true, true, true, true, true],
          [true, true, true, true, true],
          [true, true, true, true, true],
        ]);
      });

      it("returns no live cells", function () {
        expect(result).toEqual([
          [false, false, false, false, false],
          [false, false, false, false, false],
          [false, false, false, false, false],
          [false, false, false, false, false],
          [false, false, false, false, false],
        ]);
      });
    });
  });
});
