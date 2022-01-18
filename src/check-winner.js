const checkForWinner = (board) => {
  const filledRow = (board) => {
    for (let i = 0; i < 3; i++) {
      if (
        board[i][0] !== '-' &&
        board[i][0] === board[i][1] &&
        board[i][0] === board[i][2]
      ) {
        return board[i][0];
      }
    }
    return false;
  };

  const filledColumn = (board) => {
    for (let i = 0; i < 3; i++) {
      if (
        board[0][i] !== '-' &&
        board[0][i] === board[1][i] &&
        board[0][i] === board[2][i]
      ) {
        return board[0][i];
      }
    }
    return false;
  };

  const filledDiagonal = (board) => {
    const leftToRight =
      board[1][1] !== '-' &&
      board[0][0] === board[1][1] &&
      board[0][0] === board[2][2];
    const rightToLeft =
      board[1][1] !== '-' &&
      board[2][0] === board[1][1] &&
      board[2][0] === board[0][2];
    if (leftToRight || rightToLeft) {
      return board[1][1];
    } else {
      return false;
    }
  };

  const stillSpacesLeft = (board) => {
    return (
      board[0].includes('-') || board[1].includes('-') || board[2].includes('-')
    );
  };

  const winningRow = filledRow(board);
  const winningColumn = filledColumn(board);
  const winningDiagonal = filledDiagonal(board);
  const validMovesLeft = stillSpacesLeft(board);

  if (winningRow) {
    return winningRow;
  } else if (winningColumn) {
    return winningColumn;
  } else if (winningDiagonal) {
    return winningDiagonal;
  } else if (!validMovesLeft) {
    return 'No one';
  } else {
    false;
  }
};

module.export = { checkForWinner };
