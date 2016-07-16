"use strict";

import React from "react";
import Simulation from "components/simulation";
import store from "store";
import {setSize} from "actions";
import {shallow} from "enzyme";

describe("components", function () {
  describe("<Simulation />", function () {
    var component;

    beforeEach(function () {
      component = shallow(<Simulation />);
    });

    it("has a grid", function () {
      expect(component.find("Grid").length).toBe(1);
    });

    describe("the slider", function () {
      it("exists", function () {
        expect(component.find("Slider").length).toBe(1);
      });

      describe("on change", function () {
        beforeEach(function () {
          spyOn(store, "dispatch").and.callThrough()
          component.find("Slider").simulate("change", {target: {value: "10"}});
        });

        it("dispatches the correct action", function () {
          expect(store.dispatch).toHaveBeenCalledWith(setSize(10));
        });
      });
    });
  });
});
