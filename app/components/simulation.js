"use strict";

import Grid from "./grid";
import React from "react";
import Slider from "./slider";
import store from "../store";

var Simulation = React.createClass({
  getInitialState: function () {
    return store.getState();
  },

  componentWillMount: function () {
    this.unsubscribe = store.subscribe(this.onChange);
  },

  componentWillUnmount: function () {
    this.unsubscribe();
  },

  onChange: function () {
    this.setState(store.getState());
  },

  render: function () {
    return (
      <div>
        <Slider />
        <Grid height={this.state.size.height} width={this.state.size.width} />
      </div>
    );
  }
});

export default Simulation;
