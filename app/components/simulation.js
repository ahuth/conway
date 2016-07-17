"use strict";

import Grid from "./grid";
import React from "react";
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
        <Grid cells={this.state.cells} />
      </div>
    );
  }
});

export default Simulation;
