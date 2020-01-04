# For Loops

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

## Incrementing And Decrementing Shorthand

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

## Contents

1. [While Loops](./While.md)
1. [For Loops](./For.md)
1. [Example Loops](./Example-Loops.md)
1. [For...Of Loops](./For-Of.md)
