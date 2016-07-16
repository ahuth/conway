import React from "react";
import Cell from "components/cell";
import {shallow} from "enzyme";

describe("components", function () {
  describe("<Cell />", function () {
    var component;

    beforeEach(function () {
      component = shallow(<Cell />);
    });

    it("is a div", function () {
      expect(component.is("div")).toBe(true)
    });
  });
});
