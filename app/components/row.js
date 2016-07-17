"use strict";

import Cell from "./cell";
import React from "react";

function Row({cells, onCellClick}) {
  return (
    <div style={styles.row}>
      {cells.map(function (alive, index) {
        return <Cell alive={alive} key={index} onClick={onCellClick} />;
      })}
    </div>
  );
}

Row.propTypes = {
  cells: React.PropTypes.arrayOf(React.PropTypes.bool),
  onCellClick: React.PropTypes.func
};

var styles = {
  row: {
    display: "flex"
  }
};

export default Row;
