# Input in JavaScript

## Command Line Arguments

Consider the following shell command:

```console
cp MobyDick.txt CopyOfMobyDick.txt
```

Assuming the file `MobyDick.txt` exists, this command will create a copy named `CopyOfMobyDick.txt`. The two strings `MobyDick.txt` and `CopyOfMobyDick.txt` are called **command-line arguments**.

`cp` is a standalone program. When the shell runs it, it places the command-line arguments in a standard location in memory. In the code for `cp`, it reads those arguments as an array of strings which it then uses to decide what to do.

Here are a few examples in JavaScript.

### Print Out All Command-Line Arguments

```javascript
let process = require('process');

let commandLineArguments = process.argv;

for (let i = 0;i < commandLineArguments.length; i += 1) {
  let arg = commandLineArguments[i];

  console.log(`Argument at index ${i} is: ${arg}`);
}
```

Save this as, say, `argTest.js` and run it with a variety of arguments:

```console
node argTest.js one two three
node argTest.js 17 6 0 apples
node argTest.js supply three arguments
node argTest.js "one argument with spaces"
```

Example output (the first two lines will be different):

```shell
jesse@papert intro-javascript $ node argTest.js one two three
Argument at index 0 is: /Users/jesse/.nvm/versions/node/v12.14.0/bin/node
Argument at index 1 is: /Users/jesse/code/adjacent/intro-javascript/argTest.js
Argument at index 2 is: one
Argument at index 3 is: two
Argument at index 4 is: three
```

As you can see, the three values we supplied are present, but `process.argv` contains one string for everything we typed: the `node` command, `argTest.js`, and then the three arguments we supplied.

## Add Two Numbers

```javascript
let process = require('process');

let commandLineArgs = process.argv;

let firstUserArg = commandLineArgs[2];
let secondUserArg = commandLineArgs[3];

// The arguments arrive as strings, we need to convert them
// to numbers before we add them.
let leftSummand = Number.parseFloat(firstUserArg);
let rightSummand = Number.parseFloat(secondUserArg);

let sum = leftSummand + rightSummand;

console.log(`${leftSummand} + ${rightSummand} = ${sum}`);
```

Save this as `add.js` and experiment:

```console
$ node add.js 2 3
2 + 3 = 5
$ node add.js 2 4.5
2 + 4.5 = 6.5
$ node add.js -1 1
-1 + 1 = 0
$ node add.js 100 145.789
100 + 145.789 = 245.789
$
```

## Reading From A File

Create a file called `motd.txt` (MOTD for "message of the day") and type some text into it. It can be anything.

Save the following code to a `.js` file **in the same directory** as `motd.txt` and run it. Change the contents of `motd.txt` and run the code again.

```javascript
// The fs module allows us to interact with the file system
let fs = require('fs');

// This assumes motd.txt exists in the same directory as this program
let messageOfTheDay = fs.readFileSync('motd.txt', 'utf-8');

console.log('The message of the day is:');
console.log(messageOfTheDay);
```

## Prompting For User Input

Unless you're building an interactive command-line application (e.g., a game), prompting a user for input is relatively rare.

```javascript
let process = require('process');
let readline = require('readline');

let io = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function handleAnswer(answer) {
  console.log(`You answered: "${answer}"`);

  // This tells Node to stop waiting for input and to exit
  io.close();
}

// This tells Node to print the above question and call
// handleAnswer when you type something and hit enter.
io.question('What would you like for lunch today? ', handleAnswer);
```

We don't *have* to give the `handleAnswer` function a name. In a situation like this, where you're not using `handleAnswer` more than once, you're more likely to see the following:

```javascript
let process = require('process');
let readline = require('readline');

let io = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

io.question('What would you like for lunch today? ', function (answer) {
  console.log(`You answered: "${answer}"`);

  io.close();
});
```

This is called a *function literal*. We define the function in-place without assigning it a name. In the same way that we can reference the values `5` or `'apple'` in code without assigning them to a variable, we can reference a function without giving it a name.

This is one of the more unique features of JavaScript.
