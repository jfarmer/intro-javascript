# Defining Functions

There are four parts to defining a function:

1. Signaling to the JavaScript interpreter that we're about to define a function
1. Giving the function a name
1. Listing the inputs (called **parameters**) that the function will use
1. Writing the body of the function, i.e., the code that the JavaScript interpreter will run when we call the function

In JavaScript, the general syntax for defining a function is:

```javascript
function nameOfTheFunction(firstArg, secondArg, thirdArg) {
  // First line of function body
  // More code more code
  // ...

  return someValue;
}
```

The `function` keyword tells the JavaScript interpreter that we're about to define a function. Next, we give the function a name (here `nameOfTheFunction`). The list of expected inputs goes between the parentheses `(...)`, separated by commas.

The function body goes between the curly bracers `{ ... }`. Inside the body, the `return` keyword tells the JavaScript interpreter to leave the function and return with `someValue`.

Consider the following function which takes two numbers as input and returns the larger of the two:

```javascript
function max(x, y) {
  if (x > y) {
    return x;
  } else {
    return y;
  }
}
```

Elsewhere, we might call:

```javascript
let firstReturnValue = max(20, 100);
console.log(`The larger number is ${firstReturnValue}`);

let secondReturnValue = max(768, 400);
console.log(`This time the larger number is ${secondReturnValue}`);
```

When the JavaScript interpreter sees `max(20, 100)` it recognizes it as a function call. The interpreter jumps to the function body, setting `x` to the first argument we suppled and `y` to the second argument we supplied. So, in this instance `x` is set to `20` and `y` is set to `100`.

If `x` is greater than `y`, the function stops running and returns `x` to the place where we originally called the function. Otherwise, the function stops running and returns `y` to the place where we originally called the function.

In this instance, the call to `max(20, 100)` returns `100`, so we set `firstReturnValue` to `100`.

The same process happens when we call `max(768, 400)`, except this time `x` is set to `768` and `y` is set to `400`. Since `400` is larger, the call to `max(768, 400)` returns `768` and we set `secondReturnValue` to `768`.

## Names

None of the names involved matter to the JavaScript interpreter, so long as we use them consistently. We use names like `max`, `x`, and `y` for *our* sake, not the computers. We could write a function like:

```javascript
function waffles(zoo, skating) {
  if (zoo > skating) {
    return zoo;
  } else {
    return skating;
  }
}
```

This function does exactly the same thing as `max`. We'd have to call it like `waffles(20, 100)`, but functionally the computer would perform the exact same work.

We want to use names like `max` to help ourselves and anyone else reading our code. So, please, use descriptive names and think carefully about the way your names might impact other people's understanding of your code — that includes your future self!
