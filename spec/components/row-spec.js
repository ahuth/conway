"use strict";

import React from "react";
import Row from "components/row";
import {shallow} from "enzyme";

describe("components", function () {
  describe("<Row />", function () {
    var clickSpy, component;

    beforeEach(function () {
      clickSpy = jasmine.createSpy("click");
      component = shallow(<Row cells={[false, false, true]} onCellClick={clickSpy} />);
    });

    it("has the specified cells", function () {
      expect(component.find("Cell").length).toBe(3);
    });

    it("sets whether a cell is alive or not correctly", function () {
      var cells = component.find("Cell");
      expect(cells.at(0).prop("alive")).toBe(false);
      expect(cells.at(1).prop("alive")).toBe(false);
      expect(cells.at(2).prop("alive")).toBe(true);
    });

    describe("clicking a cell", function () {
      beforeEach(function () {
        component.find("Cell").first().simulate("click");
      });

      it("executes the provided callback with the index of the cell", function () {
        expect(clickSpy).toHaveBeenCalledWith(0);
      });
    });
  });
});
