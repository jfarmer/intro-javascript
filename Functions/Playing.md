# Playing With Functions

Paste the following into the Node REPL so that you can play around with them. We'll discuss what's happening shortly, for now do you best to make sense of what's happening.

```javascript
function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

function divide(x, y) {
  return x / y;
}
```

Once you've pasted the above into the Node REPL, type the following get a feel for what calling a function involves. Use your own values.

```javascript
add(1, 2);
add(0, 4);
add(17, -2);
add(14.5, 16);

subtract(4, 1);
subtract(1, 4);
subtract(4, 4);

add(10, add(20, 30));
add(add(10, 20), 30);

multiply(0, 20);
multiply(11, 11);
multiply(3, add(6, 9));
```

## Contents

- [Playing With Functions](./Playing.md)
- [Defining and Calling Functions](./Defining.md)
- [Returning](./Returning.md)
- [Examples](./Example-Functions.md)
