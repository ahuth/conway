"use strict";

import React from "react";
import Simulation from "components/simulation";
import store from "store";
import {shallow} from "enzyme";
import {processWorld, toggleCell} from "actions";

describe("components", function () {
  describe("<Simulation />", function () {
    var component;

    beforeEach(function () {
      component = shallow(<Simulation />);
    });

    describe("the grid", function () {
      it("exists", function () {
        expect(component.find("Grid").length).toBe(1);
      });

      describe("clicking", function () {
        beforeEach(function () {
          spyOn(store, "dispatch").and.callThrough();
          component.find("Grid").simulate("cellClick", 6, 7);
        });

        it("dispatches the correct action", function () {
          var action = toggleCell(6, 7);
          expect(store.dispatch).toHaveBeenCalledWith(action);
        });
      });
    });

    describe("the step button", function () {
      it("exists", function () {
        expect(component.find("Button").length).toBe(1);
      });

      describe("clicking", function () {
        beforeEach(function () {
          spyOn(store, "dispatch").and.callThrough();
          component.find("Button").simulate("click");
        });

        it("dispatches the correct action", function () {
          var action = processWorld();
          expect(store.dispatch).toHaveBeenCalledWith(action);
        });
      });
    });
  });
});
