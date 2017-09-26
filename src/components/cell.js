import PropTypes from "prop-types";
import React from "react";

export default function Cell({alive, onClick}) {
  var aliveStyle = alive ? {backgroundColor: "black"} : {};
  return (
    <div
      onClick={onClick}
      style={Object.assign({}, styles.cell, aliveStyle)}
    />
  );
}

Cell.propTypes = {
  alive: PropTypes.bool,
  onClick: PropTypes.func
};

const styles = {
  cell: {
    display: "inline-block",
    height: 10,
    width: 10,
    border: "1px solid black",
    marginRight: -1,
    marginBottom: -1
  }
};
