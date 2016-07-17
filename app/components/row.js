"use strict";

import Cell from "./cell";
import React from "react";

function Row({cells}) {
  return (
    <div style={styles.row}>
      {cells.map(function (alive, index) {
        return <Cell alive={alive} key={index} />;
      })}
    </div>
  );
}

Row.propTypes = {
  cells: React.PropTypes.arrayOf(React.PropTypes.bool)
};

var styles = {
  row: {
    display: "flex"
  }
};

export default Row;
