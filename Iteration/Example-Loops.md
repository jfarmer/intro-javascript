# Example Loops

## Count Up From 1 To 10 (By 1)

```javascript
// Counts like 1, 2, 3, 4, ..., 10
console.log('About to start counting from 1 to 10!');

for(let i = 1; i <= 10; i += 1) {
  console.log(`The current count is: ${i}`);
}

console.log('Done counting!')
```

## Count Up From 1 To N (By 1)

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

## Count Up From N to M (By 1)

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

## Count up From N to M (By K)

```javascript
let startCount = 17;
let endCount = 45;
let countSkip = 2;

// Counts like 17, 19, 21, 23, ..., 45
// Change startCount, endCount, and countSkip
console.log(`About to start counting from ${startCount} to ${endCount} by ${countSkip}!`);

for(let i = startCount; i <= endCount; i += countSkip) {
  console.log(`The current count is: ${i}`);
}

console.log('Done counting!')
```

## Loop Over An Array

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

## Add Numbers In Array

```javascript
let numbers = [10, 20, 40, 45, -20, 182];
let sumSoFar = 0;

for(let i = 0; i < numbers.length; i += 1) {
  let num = numbers[i];
  sumSoFar = sumSoFar + num; // We could also write sumSoFar += num
}

console.log(`The sum is: ${sumSoFar}`);
```

## Find Largest Number In Array

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

## Contents

1. [While Loops](./While.md)
1. [For Loops](./For.md)
1. [Example Loops](./Example-Loops.md)
1. [For...Of Loops](./For-Of.md)
