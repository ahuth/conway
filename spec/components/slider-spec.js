import React from "react";
import Slider from "components/slider";
import {shallow} from "enzyme";

describe("components", function () {
  describe("<Slider />", function () {
    var component;

    beforeEach(function () {
      component = shallow(<Slider value={3} />);
    });

    it("has a label", function () {
      expect(component.find("label").length).toBe(1);
    });

    describe("the input", function () {
      it("exists", function () {
        expect(component.find("input").length).toBe(1);
      });

      it("has the specified value", function () {
        expect(component.find("input").prop("value")).toBe(3);
      });
    })
  });
});
