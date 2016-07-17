"use strict";

import Grid from "components/grid";
import React from "react";
import Row from "components/row";
import {shallow} from "enzyme";

describe("components", function () {
  describe("<Grid />", function () {
    var component;

    beforeEach(function () {
      component = shallow(
        <Grid
          cells={[
            [false, true],
            [true, false]
          ]}
        />
      );
    });

    it("has the correct number of rows", function () {
      expect(component.find("Row").length).toBe(2);
    });

    it("sets the right cells on each row", function () {
      var row = <Row cells={[true, false]} />;
      expect(component.contains(row)).toBe(true);
    });
  });
});
