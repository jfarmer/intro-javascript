# Iteration

Computers are great at performing the same task over and over and over again without losing focus, zoning out, misremembering, etc. **Iteration** (or **looping**) is how we make computers repeat themselves.

## While Loops

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
// Declare a new variable named currentCount and set its value to 10
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

## For Loops

This pattern account for probably 95%+ of the loops you'll ever write:

```javascript
let counter = 1;

while (counter <= 10) {
  // Code...
  // More code...
  // etc.

  counter = counter + 1;
}
```

One of the awkward things about the structure of a `while` loop is that the three parts that tied most closely to the `while` keyword can be spaced very far apart (particularly if the loop body is several lines long).

- Initialization / setup
- The loop condition
- The incrementing step

If the loop body were 50 lines long, for example, the incrementing step would be far, far away from the `while` keyword.

Because this pattern is common and while loops can be a little awkward, most languages have what are called **for loops**.

Here's the same loop written using a `for`:

```javascript
for(let counter = 1; counter <= 10; counter = counter + 1) {
  // Code...
  // More code...
  // etc.
}
```

In other words, the three main parts (initialization, condition, increment) are moved right next to the `for` keyword and separated by semicolons (`;`).

> **Trip-Up Alert!**
>
> Remember how the `for` loop translates into the `while` loop. The increment step is executed AFTER the rest of the loop body even though in a `for` loop it appears (visually) *before* the loop body.
>
> `while` loops organize things as the computer executes them. `for` loops organize things for the sake of the programmer: related lines of code are close to each other visually.

### Incrementing And Decrementing Shorthand

Incrementing numbers is so common there is a special syntax for it:

```javascript
let counter = 1;

// Increment counter by 1, its value is now 2
counter += 1;

// Increment counter by 5, its value is now 7
counter += 7;
```

Likewise, you can decrement numbers:

```javascript
let counter = 10;

// Counter is now 9
counter -= 1;

// Counter is now 5
counter -= 4
```

## Example Loops

### Count Up From 1 To 10 (By 1)

```javascript
// Counts like 1, 2, 3, 4, ..., 10
console.log('About to start counting from 1 to 10!');

for(let i = 1; i <= 10; i += 1) {
  console.log(`The current count is: ${i}`);
}

console.log('Done counting!')
```

### Count Up From 1 To N (By 1)

```javascript
let endCount = 19;

// Counts like 1, 2, 3, 4, ..., 19
// Change endCount and see what happens
console.log(`About to start counting from 1 to ${endCount}!`);

for(let i = 1; i <= endCount; i += 1) {
  console.log(`The current count is: ${i}`);
}

console.log('Done counting!')
```

### Count Up From N to M (By 1)

```javascript
let startCount = 14;
let endCount = 22;

// Counts like 14, 15, 16, ..., 22
// Change startCount and endCount and see what happens
console.log(`About to start counting from ${startCount} to ${endCount}!`);

for(let i = startCount; i <= endCount; i += 1) {
  console.log(`The current count is: ${i}`);
}

console.log('Done counting!')
```

### Count up From N to M (By K)

```javascript
let startCount = 17;
let endCount = 45;
let countSkip = 2;

// Counts like 17, 19
// Change startCount, endCount,
console.log(`About to start counting from ${startCount} to ${endCount} by ${countSkip}!`);

for(let i = startCount; i <= endCount; i += countSkip) {
  console.log(`The current count is: ${i}`);
}

console.log('Done counting!')
```

### Loop Over An Array

Because array indexes start at `0`, it's much more common to start a loop counter at `0` and use `<` rather than `<=` in the loop condition.

```javascript
let firstNames = ['Vincent', 'Amir', 'April', 'Galit', 'Casey'];

for(let i = 0; i < firstNames.length; i += 1) {
  let currentName = firstNames[i];

  console.log(`Say hello to ${currentName}!`);
}
```

Things you might notice:

1. We use `let` inside the loop body, which might be surprising. Any time you see `let` inside a `{ ... }` block (e.g., loops, conditionals, function bodies, etc.), JavaScript will discard the variable once you exit the block. This prevents extra variables from popping up in surprising places in your code.

   Since we only care about `currentName` inside the loop body, we declare it inside the loop body.

1. We use `i` as a counter variable rather than `counter`. Using `i`, `j`, `k`, etc. as variable names for counters is one of the most common conventions across all programming languages.

### Add Numbers In Array

```javascript
let numbers = [10, 20, 40, 45, -20, 182];
let sumSoFar = 0;

for(let i = 0; i < numbers.length; i += 1) {
  let num = numbers[i];
  sumSoFar = sumSoFar + num; // We could also write sumSoFar += num
}

console.log(`The sum is: ${sumSoFar}`);
```

### Find Largest Number In Array

```javascript
let numbers = [10, 20, 40, 45, -20, 182];
let maxSoFar = numbers[0]; // We have to initialize it to _some_ number.

for(let i = 0; i < numbers.length; i += 1) {
  let num = numbers[i];

  if (num > maxSoFar) {
    maxSoFar = num;
  }
}

console.log(`The max is: ${maxSoFar}`);
```

## For...Of Loops

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

### Refactor: Printing Names

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

### Refactor: Add Numbers

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
