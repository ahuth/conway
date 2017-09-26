import Cell from "./cell";
import React from "react";

export default function Row({cells, onCellClick}) {
  return (
    <div style={styles.row}>
      {cells.map(function (alive, index) {
        return <Cell alive={alive} key={index} onClick={onCellClick.bind(null, index)} />;
      })}
    </div>
  );
}

Row.propTypes = {
  cells: React.PropTypes.arrayOf(React.PropTypes.bool),
  onCellClick: React.PropTypes.func
};

const styles = {
  row: {
    display: "flex"
  }
};
