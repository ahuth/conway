import React from "react";
import Simulation from "components/simulation";
import {shallow} from "enzyme";

describe("components", function () {
  describe("<Simulation />", function () {
    var component;

    beforeEach(function () {
      component = shallow(<Simulation />);
    });

    it("has a slider", function () {
      expect(component.find("Slider").length).toBe(1);
    });
  });
});
