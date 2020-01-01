// Load the 'process' module, part of Node's standard library
// See https://nodejs.org/api/process.html#process_process
let process = require('process');

// 'argv' stands for 'argument vector' and it is an array containing
// the command we ran to invoke this code.
//
// If we ran 'node waffles.js one two three' then argv would be:
//     ['node', 'waffles.js', 'one', 'two', 'three]
//
// See https://nodejs.org/api/process.html#process_process_argv
let commandLineArgs = process.argv;

// Get the first user-supplied arguments
let firstUserArg = commandLineArgs[2];
let secondUserArg = commandLineArgs[3];

// The user-supplied arguments arrive as strings. Convert
// them to floating-point numbers so we can add them together.
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/parseFloat
let leftSummand = Number.parseFloat(firstUserArg);
let rightSummand = Number.parseFloat(secondUserArg);

// If the user didn't supply two arguments then print an error
// message and exit immediately.
//
// See https://nodejs.org/api/process.html#process_process_exit_code
if (firstUserArg === undefined || secondUserArg === undefined) {
  console.error('Error: Missing at least one summand');
  console.error('Usage: node add.js <leftSummand> <rightSummand>');

  process.exit(1);
}

// If the user supplied two arguments but they aren't numbers
// then print an error message and exit immediately.
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN
if (Number.isNaN(leftSummand) || Number.isNaN(rightSummand)) {
  console.error('Error: Summands must be numbers.');
  console.error('Usage: node add.js <leftSummand> <rightSummand>');

  process.exit(1);
}

// Whew, ok! We have two arguments and they're both numbers.
// Calculate their sum and print it out.
let sum = leftSummand + rightSummand;

// Strings enclosed with backticks (`...`) are called template strings
// or template literals. They allow us to embed values into the string
// directly.
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
console.log(`${leftSummand} + ${rightSummand} = ${sum}`);
