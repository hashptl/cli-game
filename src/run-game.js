const runGame = async () => {
  let winner = false;
  let whichPlayer = 'X';
  console.log('Welcome to tic tac toe!');
  printBoard(board);
  while (!winner) {
    console.log(`It is ${whichPlayer}'s turn.`);
    const moveSucceeded = await receiveUserMove(whichPlayer);
    if (moveSucceeded) {
      winner = checkForWinner(board);
      whichPlayer = whichPlayer === 'X' ? 'O' : 'X';
    }
    console.log('\n');
  }
  console.log(`${winner} wins!`);
};

runGame();

module.export = { runGame };
