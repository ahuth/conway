"use strict";

import React from "react";

function Slider({onChange, value}) {
  return (
    <div>
      <label htmlFor="slider">Size</label>
      <input id="slider" type="range" min="0" max="100" step="1" value={value} onChange={onChange} />
    </div>
  );
}

Slider.propTypes = {
  onChange: React.PropTypes.func.isRequired,
  value: React.PropTypes.number.isRequired
};

export default Slider;
