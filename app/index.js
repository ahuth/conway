"use strict";

import React from "react";
import ReactDOM from "react-dom";
import Simulation from "./components/simulation";

function Index() {
  return <Simulation timer={(callback) => { window.requestAnimationFrame(callback) }} />;
}

ReactDOM.render(<Index />, document.getElementById("content"));
