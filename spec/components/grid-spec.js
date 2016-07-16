import Grid from "components/grid";
import React from "react";
import Row from "components/row";
import {shallow} from "enzyme";

describe("components", function () {
  describe("<Grid />", function () {
    var component;

    beforeEach(function () {
      component = shallow(<Grid height={6} width={8} />);
    });

    it("has the specified number of rows", function () {
      expect(component.find("Row").length).toBe(6);
    });

    it("sets the width on the rows", function () {
      var row = <Row width={8} />;
      expect(component.contains(row)).toBe(true);
    });
  });
});
