"use strict";

import React from "react";

function Slider({value}) {
  return (
    <div>
      <label htmlFor="slider">Size</label>
      <input id="slider" type="range" min="0" max="100" step="1" value={value} />
    </div>
  );
}

Slider.propTypes = {
  value: React.PropTypes.number.isRequired
};

export default Slider;
