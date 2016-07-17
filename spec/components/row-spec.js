"use strict";

import Cell from "components/cell";
import React from "react";
import Row from "components/row";
import {shallow} from "enzyme";

describe("components", function () {
  describe("<Row />", function () {
    var component;

    beforeEach(function () {
      component = shallow(<Row cells={[false, false, true]} />);
    });

    it("has the specified cells", function () {
      var cells = [<Cell alive={false} />, <Cell alive={false} />, <Cell alive={true} />];
      expect(component.contains(cells)).toBe(true);
    });
  });
});
