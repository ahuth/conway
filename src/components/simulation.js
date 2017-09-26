import Button from "./button";
import Grid from "./grid";
import React from "react";
import store from "../store";
import {clearWorld, processWorld, randomizeWorld, startWorld, stopWorld, toggleCell} from "../actions";

export default class Simulation extends React.Component {
  state = store.getState();

  componentDidMount() {
    this.unsubscribe = store.subscribe(this.onChange);
    this.props.timer(this.onTick);
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  onCellClick(row, column) {
    store.dispatch(toggleCell(row, column));
  }

  onClearClick() {
    store.dispatch(clearWorld());
    store.dispatch(stopWorld());
  }

  onRandomClick() {
    store.dispatch(randomizeWorld());
    store.dispatch(stopWorld());
  }

  onStepClick() {
    store.dispatch(processWorld());
  }

  onChange = () => {
    this.setState(store.getState());
  }

  onTick = () => {
    if (this.state.running) {
      store.dispatch(processWorld());
    }
    this.props.timer(this.onTick);
  }

  onPlayClick = () => {
    if (this.state.running) {
      store.dispatch(stopWorld());
    } else {
      store.dispatch(startWorld());
    }
  }

  render() {
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
}
