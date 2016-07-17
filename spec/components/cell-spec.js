"use strict";

import React from "react";
import Cell from "components/cell";
import {shallow} from "enzyme";

describe("components", function () {
  describe("<Cell />", function () {
    var clickSpy;

    beforeEach(function () {
      clickSpy = jasmine.createSpy("click");
    });

    describe("behaviors", function () {
      var component;

      beforeEach(function () {
        component = shallow(<Cell onClick={clickSpy} />);
      });

      it("is a div", function () {
        expect(component.is("div")).toBe(true)
      });

      describe("when clicked", function () {
        beforeEach(function () {
          component.simulate("click");
        });

        it("executs the provided callback", function () {
          expect(clickSpy).toHaveBeenCalled();
        });
      });
    });

    describe("when 'alive' is false", function () {
      var component;

      beforeEach(function () {
        component = shallow(<Cell alive={false} />);
      });

      it("is styled appropriately", function () {
        expect(component.prop("style")).not.toEqual(jasmine.objectContaining({
          backgroundColor: "black"
        }));
      });
    });

    describe("when 'alive' is true", function () {
      var component;

      beforeEach(function () {
        component = shallow(<Cell alive={true} />);
      });

      it("is styled appropriately", function () {
        expect(component.prop("style")).toEqual(jasmine.objectContaining({
          backgroundColor: "black"
        }));
      });
    });
  });
});
