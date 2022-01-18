const processMove = (move, whichPlayer) => {
  const validIndices = [0, 1, 2];
  const entry = move.split(/[ ,]+/);
  const row = parseInt(entry[0]) - 1;
  const column = parseInt(entry[1]) - 1;
  if (validIndices.includes(column) && board[column][row] === '-') {
    board[column][row] = whichPlayer;
    printBoard(board);
    return true;
  } else {
    console.log('Not a valid move.  Example entries:  1 2 or 1,2');
    return false;
  }
};

module.export = { processMove };
