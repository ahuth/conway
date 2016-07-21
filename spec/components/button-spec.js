"use strict";

import React from "react";
import Button from "components/button";
import {shallow} from "enzyme";

describe("components", function () {
  describe("<Button />", function () {
    var clickSpy, component;

    beforeEach(function () {
      clickSpy = jasmine.createSpy("click");
      component = shallow(<Button onClick={clickSpy} text="Hi!" />);
    });

    it("is a button", function () {
      expect(component.find("button").length).toBe(1);
    });

    it("has the specified text", function () {
      expect(component.text()).toBe("Hi!");
    });

    describe("when clicking", function () {
      beforeEach(function () {
        component.simulate("click");
      });

      it("executes the provided callback", function () {
        expect(clickSpy).toHaveBeenCalled();
      });
    });
  });
});
