# While Loops

**While loops** are the most fundamental type of loop. In fact, every other type of loop can be written using a while loop.

Here's a `while` loop that counts up from `1` to `10`:

```javascript
let currentCount = 1;

while (currentCount <= 10) {
  console.log(`The currentCount is: ${currentCount}`);

  currentCount = currentCount + 1;
}

console.log('Done counting!');
```

The `while` keyword is what tells the JavaScript interpreter we're about to start a while loop. With commentary:

```javascript
// Declare a new variable named currentCount and set its value to 1
let currentCount = 1;

// Repeat everything between { ... } so long as currentCount is <= 10
while (currentCount >= 10) {
  // The loop body is everything between { ... } following the while keyword

  // Print the current count (using a template string)
  console.log(`The currentCount is: ${currentCount}`);

  // Increment currentCount by 1
  currentCount = currentCount + 1;
}

// We'll exit the loop body once currentCount <= 10 evaluates to false

// Print 'Done counting!'
console.log('Done counting!');
```

Each "pass" through the loop body is called an **iteration**.

There are four main parts to any `while` loop:

1. Any setup or initialization required before we begin looping
1. `while (some condition) { ... }`, which tells the JavaScript interpreter to execute the loop body (everything between `{ ... }`) so long as `some condition` evaluates to `true`
1. The loop body, which can contain any code we want.

   There will usually be a line that modifies one or more variables used in the `while` condition.
1. Any tear-down or cleanup necessary after we stop looping

## Contents

1. [While Loops](./While.md)
1. [For Loops](./For.md)
1. [Example Loops](./Example-Loops.md)
1. [For...Of Loops](./For-Of.md)
