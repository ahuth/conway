"use strict";

import React from "react";
import Simulation from "components/simulation";
import store from "store";
import {shallow} from "enzyme";
import {processWorld, startWorld, stopWorld, toggleCell} from "actions";

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
      var button;

      beforeEach(function () {
        button = component.find("Button").first();
      });

      it("exists", function () {
        expect(button.prop("text")).toEqual("Step");
      });

      describe("clicking", function () {
        beforeEach(function () {
          spyOn(store, "dispatch").and.callThrough();
          button.simulate("click");
        });

        it("dispatches the correct action", function () {
          var action = processWorld();
          expect(store.dispatch).toHaveBeenCalledWith(action);
        });
      });
    });

    describe("the play button", function () {
      var button;

      beforeEach(function () {
        button = component.find("Button").last();
      });

      it("exists", function () {
        expect(button.prop("text")).toEqual("Play");
      });

      describe("clicking", function () {
        beforeEach(function () {
          spyOn(store, "dispatch").and.callThrough();
          button.simulate("click");
        });

        it("dispatches the correct action", function () {
          var action = startWorld();
          expect(store.dispatch).toHaveBeenCalledWith(action);
        });

        describe("and clicking again", function () {
          beforeEach(function () {
            button.simulate("click");
          });

          it("dispatches the correct action", function () {
            var action = stopWorld();
            expect(store.dispatch).toHaveBeenCalledWith(action);
          });
        });
      });
    });
  });
});
