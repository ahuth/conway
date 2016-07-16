"use strict";

import Grid from "./grid";
import React from "react";
import Slider from "./slider";

var Simulation = React.createClass({
  render: function () {
    return (
      <div>
        <Slider />
        <Grid />
      </div>
    );
  }
});

export default Simulation;
