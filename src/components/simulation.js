import Button from "./button";
import Grid from "./grid";
import React from "react";
import store from "../store";
import {clearWorld, processWorld, randomizeWorld, startWorld, stopWorld, toggleCell} from "../actions";

const Simulation = React.createClass({
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

  onClearClick: function () {
    store.dispatch(clearWorld());
    store.dispatch(stopWorld());
  },

  onPlayClick: function () {
    if (this.state.running) {
      store.dispatch(stopWorld());
    } else {
      store.dispatch(startWorld());
    }
  },

  onRandomClick: function () {
    store.dispatch(randomizeWorld());
    store.dispatch(stopWorld());
  },

  onStepClick: function () {
    store.dispatch(processWorld());
  },

  onTick: function () {
    if (this.state.running) {
      store.dispatch(processWorld());
    }
    this.props.timer(this.onTick);
  },

  render: function () {
    return (
      <div>
        <Button onClick={this.onStepClick} text={"Step"} />
        <Button onClick={this.onPlayClick} text={this.state.running ? "Stop" : "Play"} />
        <Button onClick={this.onClearClick} text={"Clear"} />
        <Button onClick={this.onRandomClick} text={"Random"} />
        <Grid cells={this.state.cells} onCellClick={this.onCellClick} />
      </div>
    );
  }
});

export default Simulation;
