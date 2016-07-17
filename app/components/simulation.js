"use strict";

import Grid from "./grid";
import React from "react";
import store from "../store";
import {toggleCell} from "../actions";

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

  render: function () {
    return (
      <div>
        <Grid cells={this.state.cells} onCellClick={this.onCellClick} />
      </div>
    );
  }
});

export default Simulation;
