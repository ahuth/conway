"use strict";

import Button from "./button";
import Grid from "./grid";
import React from "react";
import store from "../store";
import {processWorld, startWorld, stopWorld, toggleCell} from "../actions";

var Simulation = React.createClass({
  getInitialState: function () {
    return store.getState();
  },

  componentWillMount: function () {
    this.unsubscribe = store.subscribe(this.onChange);
    this.props.timer(this.onTick);
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

  onPlayClick: function () {
    if (this.state.running) {
      store.dispatch(stopWorld());
    } else {
      store.dispatch(startWorld());
    }
  },

  onTick: function () {
    if (this.state.running) {
      store.dispatch(processWorld());
    }
    this.props.timer(this.onTick);
  },

  onStepClick: function () {
    store.dispatch(processWorld());
  },

  render: function () {
    return (
      <div>
        <Button onClick={this.onStepClick} text={"Step"} />
        <Button onClick={this.onPlayClick} text={"Play"} />
        <Grid cells={this.state.cells} onCellClick={this.onCellClick} />
      </div>
    );
  }
});

export default Simulation;
