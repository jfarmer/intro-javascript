let process = require('process');

let commandLineArgs = process.argv;

let firstUserArg = commandLineArgs[2];
let secondUserArg = commandLineArgs[3];

let leftSummand = Number.parseFloat(firstUserArg);
let rightSummand = Number.parseFloat(secondUserArg);

if (firstUserArg === undefined || secondUserArg === undefined) {
  console.error('Error: Missing at least one summand');
  console.error('Usage: node add.js <leftSummand> <rightSummand>');

  process.exit(1);
}

if (Number.isNaN(leftSummand) || Number.isNaN(rightSummand)) {
  console.error('Error: Summands must be numbers.');
  console.error('Usage: node add.js <leftSummand> <rightSummand>');

  process.exit(1);
}

let sum = leftSummand + rightSummand;

console.log(`${leftSummand} + ${rightSummand} = ${sum}`);
