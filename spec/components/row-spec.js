import React from "react";
import Row from "components/row";
import {shallow} from "enzyme";

describe("components", function () {
  describe("<Row />", function () {
    var component;

    beforeEach(function () {
      component = shallow(<Row width={7} />);
    });

    it("has the specified number of cells", function () {
      expect(component.find("Cell").length).toBe(7);
    });
  });
});
