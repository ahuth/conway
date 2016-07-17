"use strict";

import Grid from "components/grid";
import React from "react";
import {shallow} from "enzyme";

describe("components", function () {
  describe("<Grid />", function () {
    var clickSpy, component;

    beforeEach(function () {
      clickSpy = jasmine.createSpy("click");
      component = shallow(
        <Grid
          cells={[
            [false, true],
            [true, false]
          ]}
          onCellClick={clickSpy}
        />
      );
    });

    it("has the correct number of rows", function () {
      expect(component.find("Row").length).toBe(2);
    });

    it("sets the right cells on each row", function () {
      var rows = component.find("Row");
      expect(rows.at(0).prop("cells")).toEqual([false, true]);
      expect(rows.at(1).prop("cells")).toEqual([true, false]);
    });

    describe("clicking a row's cell", function () {
      beforeEach(function () {
        component.find("Row").first().simulate("cellClick");
      });

      it("executes the provided callback", function () {
        expect(clickSpy).toHaveBeenCalled();
      });
    });
  });
});
