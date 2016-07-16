"use strict";

import React from "react";

function Cell({alive}) {
  var aliveStyle = alive ? {backgroundColor: "black"} : {};
  return <div style={Object.assign({}, styles.cell, aliveStyle)}></div>;
}

var styles = {
  cell: {
    display: "inline-block",
    height: 10,
    width: 10,
    border: "1px solid black",
    marginRight: -1,
    marginBottom: -1
  }
};

export default Cell;
