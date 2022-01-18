const receiveUserMove = (whichPlayer) => {
  const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  return new Promise((resolve) => {
    readline.question(
      `Enter column number and row number of your move: `,
      (move) => {
        const success = processMove(move, whichPlayer);
        readline.close();
        resolve(success);
      }
    );
  });
};

module.export = { receiveUserMove };
