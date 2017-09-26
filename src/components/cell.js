import React from "react";

function Cell({alive, onClick}) {
  var aliveStyle = alive ? {backgroundColor: "black"} : {};
  return (
    <div
      onClick={onClick}
      style={Object.assign({}, styles.cell, aliveStyle)}
    />
  );
}

Cell.propTypes = {
  alive: React.PropTypes.bool,
  onClick: React.PropTypes.func
};

var styles = {
  cell: {
    display: "inline-block",
    height: 10,
    width: 10,
    border: "1px solid black",
    marginRight: -1,
    marginBottom: -1
  }
};

export default Cell;
