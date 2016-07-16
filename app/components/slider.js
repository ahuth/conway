"use strict";

import React from "react";

function Slider() {
  return (
    <div>
      <label htmlFor="slider">Size</label>
      <input id="slider" type="range" min="0" max="100" step="1" />
    </div>
  );
}

export default Slider;
