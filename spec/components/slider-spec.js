import React from "react";
import Slider from "components/slider";
import {shallow} from "enzyme";

describe("components", function () {
  describe("<Slider />", function () {
    var component;

    beforeEach(function () {
      component = shallow(<Slider />);
    });

    it("has an input", function () {
      expect(component.find("input").length).toBe(1);
    });

    it("has a label", function () {
      expect(component.find("label").length).toBe(1);
    });
  });
});
