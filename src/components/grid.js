import React from "react";
import Row from "./row";

export default function Grid({cells, onCellClick}) {
  return (
    <div style={styles.grid}>
      {cells.map(function (moreCells, index) {
        return <Row cells={moreCells} key={index} onCellClick={(column) => onCellClick(index, column)} />;
      })}
    </div>
  );
}

Grid.propTypes = {
  cells: React.PropTypes.arrayOf(React.PropTypes.array),
  onCellClick: React.PropTypes.func
};

const styles = {
  grid: {
    display: "flex",
    flexDirection: "column"
  }
};
