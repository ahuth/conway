import React from "react";
import Grid from "components/grid";
import {shallow} from "enzyme";

describe("components", function () {
  describe("<Grid />", function () {
    var component;

    beforeEach(function () {
      component = shallow(<Grid />);
    });

    it("has 10 rows", function () {
      expect(component.find("Row").length).toBe(10);
    });
  });
});
