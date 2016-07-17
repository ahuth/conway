"use strict";

import React from "react";
import Row from "./row";

function Grid({cells}) {
  return (
    <div style={styles.grid}>
      {cells.map(function (moreCells, index) {
        return <Row cells={moreCells} key={index} />;
      })}
    </div>
  );
}

Grid.propTypes = {
  cells: React.PropTypes.arrayOf(React.PropTypes.array)
};

var styles = {
  grid: {
    display: "flex",
    flexDirection: "column"
  }
};

export default Grid;
