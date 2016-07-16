"use strict";

import React from "react";
import Row from "./row";
import times from "../utils/times";

function Grid({height, width}) {
  return (
    <div style={styles.grid}>
      {times(height, function (number) {
        return <Row width={width} key={number} />;
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
