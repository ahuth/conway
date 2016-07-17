"use strict";

import React from "react";
import Simulation from "components/simulation";
import store from "store";
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
  });
});
