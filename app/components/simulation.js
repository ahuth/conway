"use strict";

import Grid from "./grid";
import React from "react";
import Slider from "./slider";
import store from "../store";
import {setSize} from "../actions";

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

  handleSizeChange: function (event) {
    var value = parseInt(event.target.value, 10);
    store.dispatch(setSize(value));
  },

  render: function () {
    return (
      <div>
        <Slider onChange={this.handleSizeChange} value={this.state.size.height} />
        <Grid height={this.state.size.height} width={this.state.size.width} />
      </div>
    );
  }
});

export default Simulation;
