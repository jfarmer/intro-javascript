function printErrorMsg(errorMsg) {
  console.error(`Error: ${errorMsg}`);
  console.error('Usage: node add.js <leftSummand> <rightSummand>');
}

let process = require('process');

let args = process.argv.slice(2);

let leftSummand = Number.parseFloat(args[0]);
let rightSummand = Number.parseFloat(args[1]);

if (args.length < 2) {
  printErrorMsg('Missing at least one summand');
  process.exit(1);
}

if (Number.isNaN(leftSummand) || Number.isNaN(rightSummand)) {
  printErrorMsg('Summands must be numbers.');
  process.exit(1);
}

let sum = leftSummand + rightSummand;

console.log(`${leftSummand} + ${rightSummand} = ${sum}`);
