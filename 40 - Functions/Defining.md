# Defining Functions

In JavaScript, the general syntax for defining a function is:

```javascript
function nameOfTheFunction(firstArg, secondArg, thirdArg) {
  // Code
  // Code
  // ...

  return someValue;
}
```

The `function` keyword tells the JavaScript interpreter that we're about to define a function. Next, we give the function a name. We put the  `(...)` is a list of parameters that will be given values when the function is called elsewhere.

Between the `{ ... }` is the body of the function. Finally, the `return` keyword sends the desired value back to the place where the function was called.

Consider the following function:

```javascript
function square(num) {
  let numSquared = num * num;

  return numSquared;
}
```

Elsewhere, we might call:

```javascript
let squareOf17 = square(17);
let squareOf20 = square(20);

console.log(`17 squared is ${squareOf17}`);
console.log(`20 squared is ${squareOf20}`);
```

When the JavaScript interpreter sees `square(17)` it recognizes it as a function call. The interpreter looks up the function definition and then execution jumps to the body of the `square` function.

The expression `square(17)` will evaluate to whatever the function call returns (using the `return` keyword), so ultimately the value of `squareOf17` will be set to whatever `square(17)` returns.

Because we called `square` with `17`, the value of `num` inside the function is `17`. We declare a variable inside the `square` function called `numSquared` and set it to `17 * 17`.

We then return the value of `numSquared` (here `289`) back to the place where the function was called.

We do likewise with `square(20)`.

Each function call (`square(17)` and `square(20)`) causes the JavaScript interpreter to jump to the function body of `square`, do the work described therein, and then return back to the caller with the given return value.
