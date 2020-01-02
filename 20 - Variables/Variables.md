# Variables in JavaScript

You probably remember the word "variable" from math class. While there are similarities, don't assume that because "variable" is a word in both math-ese and code-ese they mean the same thing. Your intuition around variables from math class *will* mislead you at first.

Here is some code that makes use of variables. What do you think is happening? What symbols and words are familiar to you? Unfamiliar? Is there anything surprising?

```javascript
// Declare a variable named firstNum and assign a value 10 to it
let firstNum = 10;

// Declare a variable named secondNum and assign a value of 5 to it
let secondNum = 5;

// Declare a variable named total. Add the value of firstNum and
// the value of secondNum then assign that sum to total.
let total = firstNum + secondNum;

// Print out the value of total, which is 15
console.log(total);
```

## The Assignment Operator

In most programming languages, the symbol `=` is called the **assignment operator** and is used to assign a value to a variable. Be careful, though! You probably think of `=` as "equality", but when programming it means something else.

In JavaScript, `let` tells the interpreter that we're declaring a new variable.

So, when we write

```javascript
let currentYear = 2020;
```

we're not asking "Is `currentYear` equal to `2020`?" Rather, we're telling Javascript: "Here's a new variable named `currentYear` and we're assigning it a value of `2020`."

It bears repeating: when programming, `=` does **not** represent an equation. It is a *command* to the interpreter to store data in a variable.

## Assignment Happens Right-to-Left

When assigning a value to a variable with `=` there's an inherent right-to-left motion that happens in two steps:

1. Everything to the right of the `=` symbol is evaluated and reduced to a single value.
1. This value is then stored in the variable to the left of the `=` symbol.

This means that an expression like

```javascript
17 = age
```

doesn't make sense. In fact, if you try to run the above code, you'll get the following error:

```text
SyntaxError: Invalid left-hand side in assignment
```

This also means that we can reference variables in the right-hand side.

```javascript
let currentYear = 2020;
let nextDecade = currentYear + 10;
```

Here, `currentYear + 10` is evaluated first, resulting in a value of `2030`. The value `2030` is then assigned to the variable named `nextDecade`.

Some languages use something other than `=` to denote assignment such as `:=` or `<-`. These are  That said, most languages do use `=` and you'll have to get used to the fact that `=` means something different when programming.

### The `let` Keyword

We only use `let` when we declare the variable for the first time. After that, it is omitted. When we assign a value to a variable more than once, the previous value is overwritten and lost forever, unless we save it.

```javascript
let currentYear = 2020;

console.log('The current year is ' + currentYear);

currentYear = 2030;

console.log('The current year is now ' + currentYear);
```

If we wanted to save the original value of `currentYear` we could do something like this:

```javascript
let currentYear = 2020;

console.log('The current year is ' + currentYear);

let previousCurrentYear = currentYear;
currentYear = 2030;

console.log('The current year is now ' + currentYear + ' but it used to be ' + previousCurrentYear);
```

### A Mental Model of Assignment

Building a mental model of variable assignment is one of the first serious hurdles for beginners. Type out the code below and make a prediction about what it will print out.

The lines beginning with `//` are comments and you don't need to type them out. They are ignored by the JavaScript interpreter.

```javascript
let firstNumber = 20;
let secondNUmber = 30;

// Prints 50
console.log(firstNumber + secondNumber);

firstNumber = 150;

// Prints 180 since firstNumber is now 150
console.log(firstNumber + secondNumber);

secondNumber = 19;

// Prints 169 since firstNumber is 150 and secondNumber is 19
console.log(firstNumber + secondNumber);
```

Because the right-hand side of an expression involving `=` is evaluated first, we can write code like this:

```javascript
let count = 0;

console.log('1. The count is ' + count);

count = count + 1;

console.log('2. The count is now ' + count);

count = count + 5;

console.log('3. The count is now ' + count);
```

An expression like

```javascript
count = count + 1
```

should be read as "Evaluate `count + 1` and store the value in the variable named `count`." Functionally, this increments the value of `count` by 1.

A final example:

```javascript
let firstName = 'Jesse';
let lastName = 'Farmer';
let fullName = firstName + ' ' + lastName;

console.log(fullName);

let num1 = 10;
let num2 = 45;
let sum = num1 + num2;

sum = sum + 5;

console.log(sum);
```

## Vocabulary

The following sentences are all true of the above example:

- The single equals character `=` is called the **assignment operator**.
- The variable `firstName` is assigned the value `'Jesse'`, a `string`.
- The variable `lastName` contains the string `'Farmer'`
- `fullName` is a variable created by concatenating the value of `firstName`, a literal space character `' '`, and the value of `lastName`.
- `num1` is equal to `10`, a `number`
- `sum` is equal to `55`, which is the sum of the values of the variables `num1` and `num2`
- The last assignment increments `sum` by `5`, so the value of `sum` is now `60`

## Rules of Variable Naming

There are two limitations on variable names in JavaScript:

1. The name must contain only letters, digits, the `$` symbol, or the `_` symbol
1. The first character must not be a digit

The following are all valid variable names:

```text
num
_num
$num
nUM
NUM
num123
this_is_a_num
someNum
aNoThErNuM
```

By convention, variables begin with a lower-case letter and breaks in words are designated by capitalizing the first letter of the new word. The following would be conventional variable names in JavaScript:

```javascript
firstName
sumSoFar
timeSinceStartup
```

This style of naming is called [camel case](https://en.wikipedia.org/wiki/Camel_case).

## Contents

- [Variables in JavaScript](./Variables.md)
- [Template Strings](./Template-Strings.md)
