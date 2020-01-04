# For...Of Loops

After people used `while` loops for a while, they realized that the `for` loop covered most of the common cases in a more programmer-friendly way.

After you've written enough `for` loops, the following pattern will crop up over and over again:

```javascript
let someArray = [...];

for(let i = 0; i < someArray.length; i += 1) {
  let element = someArray[i];

  // Do stuff with element
}
```

Conceptually, what we're asking the computer to do is execute the loop body once for each element of the given array. The *only* place we use `i` in the loop body is to extract the current element.

In this context, keeping track of `i`, checking it against the length, incrementing it, etc. just adds noise. It's also a potential source of bugs.

For that reason, many languages have constructs that let you loop over array/lists/collections without having to do all that bookkeeping and JavaScript is no exception.

We can rewrite the above using a `for...of` loop as follows:

```javascript
let someArray = [...];

for(let element of someArray) {
  // Do stuff with element
}
```

## Refactor: Printing Names

A previous example using a `for` loop:

```javascript
let firstNames = ['Vincent', 'Amir', 'April', 'Galit', 'Casey'];


for(let i = 0; i < firstNames.length; i += 1) {
  let currentName = firstNames[i];

  console.log(`Say hello to ${currentName}!`);
}
```

With a `for...of` loop:

```javascript
let firstNames = ['Vincent', 'Amir', 'April', 'Galit', 'Casey'];

for(let currentName of firstNames) {
  console.log(`Say hello to ${currentName}!`);
}
```

## Refactor: Add Numbers

Adding a list of numbers using a `for` loop:

```javascript
let numbers = [10, 20, 40, 45, -20, 182];
let sumSoFar = 0;

for(let i = 0; i < numbers.length; i += 1) {
  let num = numbers[i];

  sumSoFar = sumSoFar + num; // We could also write sumSoFar += num
}

console.log(`The sum is: ${sumSoFar}`);
```

With a `for...of` loop:

```javascript
let numbers = [10, 20, 40, 45, -20, 182];
let sumSoFar = 0;

for(let num of numbers) {
  sumSoFar = sumSoFar + num;
}

console.log(`The sum is: ${sumSoFar}`);
```

And for completeness' sake, with a `while` loop:

```javascript
let numbers = [10, 20, 40, 45, -20, 182];
let sumSoFar = 0;
let i = 0;

while(i < numbers.length) {
  let num = numbers[i];

  sumSoFar = sumSoFar + num;

  i += 1;
}

console.log(`The sum is: ${sumSoFar}`);
```

Which flavor of loop makes the most sense to you? To your classmates? Why? Which are easier to read? Which are easier to write? Which make it clearer what the code is doing?

## Contents

1. [While Loops](./While.md)
1. [For Loops](./For.md)
1. [Example Loops](./Example-Loops.md)
1. [For...Of Loops](./For-Of.md)
