"use strict";

import Cell from "./cell";
import React from "react";
import times from "../utils/times";

function Row({width}) {
  return (
    <div style={styles.row}>
      {times(width, function (number) {
        return <Cell key={number} />;
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
