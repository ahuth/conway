"use strict";

import Cell from "./cell";
import React from "react";

function Row({width}) {
  return (
    <div style={styles.row}>
      {Array(width).fill().map(function (element, index) {
        return <Cell key={index} />;
      })}
    </div>
  );
}

Row.propTypes = {
  width: React.PropTypes.number.isRequired
};

var styles = {
  row: {
    display: "flex"
  }
};

export default Row;
