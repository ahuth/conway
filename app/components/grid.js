"use strict";

import React from "react";
import Row from "./row";

function Grid({height, width}) {
  return (
    <div style={styles.grid}>
      {Array(height).fill().map(function (element, index) {
        return <Row width={width} key={index} />;
      })}
    </div>
  );
}

Grid.propTypes = {
  height: React.PropTypes.number.isRequired,
  width: React.PropTypes.number.isRequired
};

var styles = {
  grid: {
    display: "flex",
    flexDirection: "column"
  }
};

export default Grid;
