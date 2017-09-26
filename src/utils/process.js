export default function process(world) {
  var nextWorld = world.map(function (row, rowIndex) {
    return row.map(function (isAlive, colIndex) {
      return shouldLive(isAlive, rowIndex, colIndex, world);
    });
  });

  return nextWorld;
}

function shouldLive(currentState, row, col, world) {
  var neighborhood = getNeighborhood(row, col, world);
  if (neighborhood === 3) {
    return true;
  } else if (neighborhood === 4) {
    return currentState;
  } else {
    return false;
  }
}

function getNeighborhood(row, col, world) {
  var offsets = [-1, 0, 1];
  return offsets.reduce(function (total, rowOffset) {
    return total + offsets.reduce(function (total, colOffset) {
      var newRow = getKey(row + rowOffset, world.length);
      var newCol = getKey(col + colOffset, world.length);
      return total + world[newRow][newCol];
    }, 0);
  }, 0);
}

function getKey(index, size) {
  if (index < 0) {
    return size - 1;
  } else if (index >= size) {
    return 0;
  } else {
    return index;
  }
}
