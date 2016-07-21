"use strict";

import Button from "./button";
import Grid from "./grid";
import React from "react";
import store from "../store";
import {processWorld, toggleCell} from "../actions";

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

  onCellClick: function (row, column) {
    store.dispatch(toggleCell(row, column));
  },

  onStepClick: function () {
    store.dispatch(processWorld());
  },

  render: function () {
    return (
      <div>
        <Button onClick={this.onPlayClick} text={"Step"} />
        <Grid cells={this.state.cells} onCellClick={this.onCellClick} />
      </div>
    );
  }
});

export default Simulation;
