"use strict";

const initialState = {
  cells: [
    Array(10).fill(false), Array(10).fill(false),
    Array(10).fill(false), Array(10).fill(false),
    Array(10).fill(false), Array(10).fill(false),
    Array(10).fill(false), Array(10).fill(false),
    Array(10).fill(false), Array(10).fill(false),
  ],
  size: {
    height: 10,
    width: 10
  }
};

export default initialState;
