"use strict";

import React from "react";

function Cell() {
  return <div style={styles.cell}></div>;
}

var styles = {
  cell: {
    display: "inline-block",
    height: 10,
    width: 10,
    border: "1px solid black"
  }
};

export default Cell;
