"use strict";

import React from "react";
import ReactDOM from "react-dom";
import Simulation from "./components/simulation";

function Index() {
  return <Simulation />;
}

ReactDOM.render(<Index />, document.getElementById("content"));
