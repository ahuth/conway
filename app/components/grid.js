"use strict";

import React from "react";
import Row from "./row";

function Grid({height, width}) {
  return (
    <div>
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

export default Grid;
