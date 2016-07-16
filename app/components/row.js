"use strict";

import Cell from "./cell";
import React from "react";

function Row({width}) {
  return (
    <div>
      {Array(width).fill().map(function (element, index) {
        return <Cell key={index} />;
      })}
    </div>
  );
}

Row.propTypes = {
  width: React.PropTypes.number.isRequired
};

export default Row;
