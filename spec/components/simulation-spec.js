"use strict";

import React from "react";
import Simulation from "components/simulation";
import store from "store";
import {shallow} from "enzyme";
import {clearWorld, processWorld, randomizeWorld, startWorld, stopWorld, toggleCell} from "actions";

describe("components", function () {
  describe("<Simulation />", function () {
    var component;

    beforeEach(function () {
      component = shallow(<Simulation timer={jasmine.createSpy} />);
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
        button = component.find("Button").at(0);
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
        button = component.find("Button").at(1);
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

        it("sets changes the text of the button", function () {
          expect(button.prop("text")).toEqual("Stop");
        });

        describe("and clicking again", function () {
          beforeEach(function () {
            button.simulate("click");
          });

          it("dispatches the correct action", function () {
            var action = stopWorld();
            expect(store.dispatch).toHaveBeenCalledWith(action);
          });

          it("sets changes the text of the button", function () {
            expect(button.prop("text")).toEqual("Play");
          });
        });
      });
    });

    describe("the clear button", function () {
      var button;

      beforeEach(function () {
        button = component.find("Button").at(2);
      });

      it("exists", function () {
        expect(button.prop("text")).toEqual("Clear");
      });

      describe("clicking", function () {
        beforeEach(function () {
          spyOn(store, "dispatch").and.callThrough();
          button.simulate("click");
        });

        it("dispatches the clear action", function () {
          var action = clearWorld();
          expect(store.dispatch).toHaveBeenCalledWith(action);
        });

        it("dispatches the stop action", function () {
          var action = stopWorld();
          expect(store.dispatch).toHaveBeenCalledWith(action);
        });
      });
    });

    describe("the random button", function () {
      var button;

      beforeEach(function () {
        button = component.find("Button").at(3);
      });

      it("exists", function () {
        expect(button.prop("text")).toEqual("Random");
      });

      describe("clicking", function () {
        beforeEach(function () {
          spyOn(store, "dispatch").and.callThrough();
          button.simulate("click");
        });

        it("dispatches the randomize action", function () {
          var action = randomizeWorld();
          expect(store.dispatch).toHaveBeenCalledWith(action);
        });

        it("dispatches the stop action", function () {
          var action = stopWorld();
          expect(store.dispatch).toHaveBeenCalledWith(action);
        });
      });
    });
  });
});
