const printBoard = (board) => {
  console.log('\n');
  console.log('column     1 2 3' + `\n`);
  let x = 1;
  for (row of board) {
    console.log(`  row ${x}   `, row[0], row[1], row[2]);
    x++;
  }
  console.log('\n');
};

module.export = { printBoard };
