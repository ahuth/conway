"use strict";

export default function times(number, callback) {
  return Array(number).fill().map(function (element, index) {
    return callback(index);
  });
}
