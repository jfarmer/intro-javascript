# Intro JavaScript

## A Picture of Computing

### The Von Neumann Architecture

- Input Device(s)
- Output Device(s)
- Central Processing Unit (CPU)
  - Control Unit (CU)
  - Arithmetic/Logic Unit (ALU)
- Primary Storage
- Secondary Storage

### Memory

You have probably heard that computers store everything as 1s and 0s. But so what? What does that mean?

Physically, computer memory is a big grid of capacitors, each of which is either charged or discharged. We can use any two symbols we like to represent these two states. We have reasons to use `1` and `0`, but we could just as easily use any of the following:

- `+` and `_`
- `C` and `D`
- `a` and `b`
- `$` and `#`
- `☝` and
- etc.

Say you had 32 capacitors, each of which was either charged or uncharged. If `+` represents charged and `_` represents discharged then one possible pattern could be:

```text
++++_+_+++_+++__+_+_+++___+_+__+ (using + and _)
11110101110111001010111000101001 (using 1 and 0)
````

We are allowed to slice and dice this data as we see fit. We could treat it as a single sequence of 32 `1`s and `0`s. We could treat it as four 8-symbol "words" in a row:

```text
(+ and _)       (1 and 0)
++++_+_+        11110101
++_+++__        11011100
+_+_+++_        10101110
__+_+__+        00101001
```

What does `11110101` *mean*? It could mean many things depending on the rule we use to assign it meaning. For each way of assigning meaning, we need some hardware to back it up.

The four most common ways we interpret binary data are:

- [Machine code](https://en.wikipedia.org/wiki/Machine_code), which are the set of instructions that a CPU can execute directly
- Whole numbers, by using the [base-2 numeral system](https://en.wikipedia.org/wiki/Binary_number)
- Fractional numbers, by interpreting the binary data according to the rules of [IEEE Standard 754 for Floating Point Arithmetic](https://en.wikipedia.org/wiki/IEEE_754)
- Text, by using a system that maps numbers to particular characters.

  Historically, [ASCII](https://en.wikipedia.org/wiki/ASCII) was the most common for languages that use the Latin alphabet. But computers from different countries would use different rules would use different rules to map between binary data and text.

  [KOI-8](https://en.wikipedia.org/wiki/KOI-8) was used in Russia, [JIS](https://en.wikipedia.org/wiki/JIS_encoding) in Japan, [ASMO 708](https://en.wikipedia.org/wiki/ISO/IEC_8859-6) in Arabic countries, [GB 18030](https://en.wikipedia.org/wiki/GB_18030) in China, etc.

  Today, [UTF-8](https://en.wikipedia.org/wiki/UTF-8) is used because it handles every alphabet simultaneously. Before the rise of UTF-8, we always had to be careful about which character encoding we were using.

The point isn't to understand the details of all these systems, but to drive home two points:

1. A single chunk of binary data can be interpreted in many ways
1. A computer only appears to "know" what to do with data because we have built into it machinery that is capable of interpreting binary data in various ways and acting on that interpretation

## Data Types

Remember, underneath it all the computer is encoding data as sequences of `1`s and `0`s. Each sequence can be interpreted according to many different rules. Each rule (or way of interpreting) is called a "data type".

### Numbers

JavaScript has a few core data types, which is calls "primitive" types. The first we'll deal with is `number`.

Open up a terminal and run the `node` command to get a node prompt.

Type — **don't copy!** — each of these lines one by one. Before you hit enter, make a prediction about what you'll see on the screen. Were your predictions correct?

```javascript
1 + 2
3 + 4

1 - 2
2 - 1

14 + 192
99.5 + 100.5
```

Try some examples on your own. See if you can't find anything surprising.

Again, type each line below, make a prediction about what you'll see, and hit enter. In code, we denote multiplication with `*` and division with `/`.

```javascript
1 * 2
2 * 10
15.5 * 4

8 / 2
10 / 2
10 / 3

5 / 2
2 / 5
```

#### Extra Numerical Operations

Here are two operations that might not be obvious at first glance. See if you can't figure out what they do. Play around with different values.

The first operation is `**`:

```javascript
10**1
10**2
10**3
10**4

2**2
2**3
2**4
```

The second operation is `%`:

```javascript
5 % 2
5 % 3
5 % 4
5 % 5

10 % 2
10 % 3
10 % 4
10 % 5

20 % 18
```

What might `%` be doing? What happens if you use negative numbers?

### Documentation

See the MDN page on [Arithmetic operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators) for more.

### Strings

The second primitive data type we'll look at is `string`, which is how JavaScript represents textual data. If it helps, you can think "text" whenever you read "string".

In JavaScript, strings are enclosed in either double quotes `"like this"` or single quotes `'like this, instead'`. There's no difference between the two, but we'll generally prefer single quotes for the sake of consistency.

As with numbers, let's start by playing with strings and building up a reasonable mental model. Type each line that follows into the Node REPL and predict what you'll see once you hit enter.

Make sure you're typing the quotation character `'`

```javascript
'one'
'two'
'three'

'Hello, World!'

'Jesse' + ' ' + 'Farmer'
'one' + 'two' + 'three'

'abcdef'.charAt(0)
'abcdef'.charAt(1)
'abcdef'.charAt(2)
'abcdef'.charAt(3)
'abcdef'.charAt(4)

'======='
'==='.padStart(7, '*')
'==='.padEnd(7, '*')

'this is a sentence'.toUpperCase()
'oNe TwO tHrEe'.toLowerCase()
```

The syntax `'abcdef'.charAt(3)` might be unfamiliar to you. Don't worry if it is — your goal should be to gain a bit of familiarity and start forming tentative ideas about what is going on.

If you want to see everything you can do with strings, see MDN's documentation for [String.prototype](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/prototype).

### Booleans

Another primitive data type is `boolean`. There are only two boolean values: `true` and `false`.

Here are some lines to play with. See if you can't form some ideas about what `&&`, `||`, etc. are doing.  We'll be covering these more in depth later.

```javascript
true && true
true && false
false && true
false && false

true && true && true
true && true && false
true && false && true
false && true && true

true || true
true || false
false || true
false || false

!true
!false
```

If you're interested, don't be afraid to read the MDN documentation on [Logical Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators).

## Variables

Rather than always referring to data by its literal value (e.g., the number `5`), we can assign data to named variables and then refer to that name.

You can think of a variable like a post-it note with a label on it. Rather than saying "The number 4" we might say "The number on the post-it note labeled 'age'", where 'age' is the variable. Here's some code that makes use of variables. Can you follow it?

Look at the code below:

```javascript
let currentYear = 2020;

console.log('The current year is ' + currentYear);
```

The `=` symbol is probably familiar to you, but be careful! If you imagine that `=` here means the same as it does in, say, algebra class, you're going to confuse yourself. It's best to treat it as an entirely unfamiliar symbol with no prior associations.

In this case, `=` is the "assignment operator". When we write

```javascript
let currentYear = 2020;
```

we're not asking "Is `currentYear` equal to `2020`?" Rather, we're telling Javascript: "Here's a new variable named `currentYear` and we're assigning it a value of `2020`."

There's an inherent right-to-left motion in variable assignment. Everything to the right of the `=` symbol is evaluated and then stored in the value to the left of the `=` symbol.

This means that an expression like

```javascript
17 = age
```

doesn't make sense. In fact, if you try to run the above code, you'll get the following error:

```text
SyntaxError: Invalid left-hand side in assignment
```

Some languages use something other than `=` to denote assignment like `:=` or `<-`. Most languages do use `=` and you'll have to get used to the fact that `=` when programming means something different than it does in other contexts.

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

```javascript
let firstNumber = 20;
let secondNUmber = 30;

console.log(firstNumber + secondNumber);

firstNumber = 150;

console.log(firstNumber + secondNumber);

secondNumber = 19;

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

The following sentences are all true of the above example:

- The single equals character `=` is called the **assignment operator**.
- The variable `firstName` is assigned the value `'Jesse'`, a `string`.
- The variable `lastName` contains the string `'Farmer'`
- `fullName` is a variable created by concatenating the value of `firstName`, a literal space character `' '`, and the value of `lastName`.
- `num1` is equal to `10`, a `number`
- `sum` is equal to `55`, which is the sum of the values of the variables `num1` and `num2`
- The last assignment increments `sum` by `5`, so the value of `sum` is now `60`

### Rules of Variable Naming

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

By convention, variables begin with a lower-case letter and breaks in words are designated by capitalizing the first letter of the new word. For example:

```javascript
firstName
sumSoFar
timeSinceStartup
```

This style of naming is called [camel case](https://en.wikipedia.org/wiki/Camel_case).

## Collections

We often want to deal with collections of values rather than individual values. For example, if we're building a TODO list, it's natural to think of the tasks as organized in a list.

There could be 10 things in the list or 20 or 3. And that amount could change over time as people add new tasks or mark old tasks as completed.

Every language has at least one way of representing ordered lists. The terminology might differ slightly — arrays, lists, and vectors are all common terms — but the core concept is the same.

### Arrays

In JavaScript we use `Arrays` to represent ordered lists. The individual items of an array are called elements or members.

Why do we need arrays? Imagine a program that asks you to enter any number of sentences, one line at a time. When you type `done`, it prints out the sentences from shortest to longest, regardless of what order you entered them.

How could we write a program that does that? We don't know beforehand how many sentences the user will enter or how long each sentence will be. What if the user decided to paste in the complete works of Shakespeare one line at a time? That's a lot of long, long lines.

Without an `Array` we'd have to resort to something crazy like using a separate variable for each line, but of course we don't know how many variables we'd need as we're writing the program. With an `Array`, we just read in each line and append them successively to the end of the `Array`.

### Array Questions

Arrays are great at answering questions like "What's the first thing on the list?", "What's the last thing on the list?", "What's the fourth thing on the list?", "How long is the list?", etc.

Arrays can also be empty, like a blank sheet of paper. "Are you empty?" is also a question an `Array` would be happy to answer.

### Creating an Array

Run the following code:

```javascript
let powersOfTen = [1, 10, 100, 1000];

console.log(powersOfTen);
```

The expression `[1, 10, 100, 1000]` is an array of four numbers. We assign it to a variable named `powersOfTen` and then print out its value.

### A Metaphor for Arrays

If you're having trouble thinking about collections, imagine them as a storage room full of boxes and manned by a concierge. You don't have direct access to the storage room, but you can ask the concierge for information about what's in the storage room, tell them to put something new into the storage room, or tell them to take something out of the storage room.

To do that, though, you need to have some convention for referring to particular boxes. An `Array` is like a storage room where the boxes are ordered from left to right. Rather than asking for a box with a particular label, you ask about the first box, the second box, etc.

And of course you can place a new box at the beginning or the end of the ordered collection of boxes.

### An Array Thought Experiment

You're the concierge. You take out your sharpie and write the box number on each box, from '#1' to '#10' if there are 10 boxes. You'll need to keep these numbers up-to-date if someone ever adds or removes something from the storage unit.

Which request would be more annoying to fulfill and why?

1. Add a a new box after the last box and put my coat in it
1. Add a new box before the first box and put my coat it it

Remember, the boxes have to be labeled with their position. If you add a new box to the beginning, that is now box #1 and the previous "first box" is now box #2.

The exact same reasoning applies to computer arrays.

### Playing With Arrays

Type the following code. For each line, have each member of your team state their expectations of what the line will do when executed. Run the code and check your expectations.

```javascript
// This is an empty array
console.log([]);

// This is an array with a single element, the string 'apples'
console.log(['apples']);

// This is an array with three elements: the numbers 1, 2, and 3
console.log([1, 2, 3]);

// This is an array of all the months
console.log(['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'November', 'December']);

// The elements of an array don't all need to be the same type.
// In fact, that can be any type.
console.log([10, 'cats', 4.5, 'piano']);

// We can use variables in arrays, too.
someDummyValue = 'arglebargle'
console.log([1, 2, dummy]);
```

### Reading From Arrays

Let's take a look at the array of months from above. Paste the following into the node repl:

```javascript
let months = ["January", "February", "March",
              "April", "May", "June",
              "July", "August", "September",
              "October", "November", "December"];
```

(Yes, you can split up array declarations across multiple lines, so long as the lines end with a comma.)

Once we have data in an array, how do we get data out of an array? We do it by indexing the array, a fancy way of telling the array: "Give me the element at _this_ position."

Make sure you've entered in the code that defines the `months` array above, then run the following:

```javascript
// What value is at index 0?
months[0]
```

This should print out `'January'`.

### Counting From 0

It probably strikes you as odd that `'January'`, the first element of the `months` array, is at `months[0]` and not `months[1]`. If it doesn't, seek medical attention immediately: you might be a computer.

Computers and most programming languages count from 0 rather than 1. So the first element of an array is at index 0, the second is at index 1, etc. There are good reasons for this, but for now you'll just have to get used to it.

Run the following, one line at a time:

```javascript
months[0]
months[1]
months[11]
months[100]

monthNum = 7
months[monthNum];
```

The index doesn't need to be a literal number; it can also be a variable that holds a number, too.

### Array Vocabulary

Using the same `months` array from above, the following statements are all true:


- The string `'January'` is the first element of the array `months`
- The string `'January'` is at index `0`
- The string `'December'` is the last element of the array `months`
- The string `'December'` is at index `11`
- The array months has `12` elements
- The value at index `3` is the string `'April'`, which is the fourth element

## Functions

## Conditionals / Branching

## Looping / Iteration

## Input and Output
