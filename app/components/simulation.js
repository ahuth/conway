"use strict";

import Grid from "./grid";
import React from "react";
import Slider from "./slider";

var Simulation = React.createClass({
  render: function () {
    return (
      <div>
        <Slider />
        <Grid height={10} width={10} />
      </div>
    );
  }
});

export default Simulation;
