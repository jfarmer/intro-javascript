# Returning From A Function

The idea of "returning" from a function is one of the harder things for novices to wrap their heads around, so don't be hard on yourself if you find it frustrating.

The idea is that when we call a function, we're telling the computer to do some work defined elsewhere and give us back the result of that work. We are constantly doing the following:

1. Defining functions — describing the work
1. Calling functions — telling the computer to do the work
1. Returning from functions — giving us back the result of the work

Inputs, work, return value.

## Returning vs. Printing

It's sometimes hard for novices to see the difference between a function that returns a value vs. a function that prints a value. Consider the following code:

```javascript
function doubleWithPrinting(num) {
  let twiceNum = 2 * num;

  console.log(twiceNum);
}

function doubleWithReturn(num) {
  let twiceNum = 2 * num;

  return twiceNum;
}

doubleWithoutPrinting(15);
doubleWithReturn(15);
```

Both `doubelWithPrinting` and `doubleWithReturn` are 100% valid JavaScript, but they do different things.

When we call `doubelWithPrinting(15)` the following happens:

1. The JavaScript interpreter jumps to the body of `doubelWithPrinting` and sets the value of `num` to `15`
1. Sets `twiceNum` to `30`
1. Prints `30` to the console
1. Returns with `undefined`, since there is no `return` statement

When we call `doubleWithReturn(15)` the following happens:

1. The JavaScript interpreter jumps to the body of `doubleWithReturn` and sets the value of `num` to `15`
1. Sets `twiceNum` to `30`
1. Returns with `30` (nothing is printed)

With `doubleWithReturn`, we could store its return value in a variable and then print that out. This is more flexible and less prone to surprising behavior. For example, it's very unlikely you'd write a function like `double` and only *ever* want to print out the value. By returning, you can still print it if you like, but you can also pass use the return value in future work.

You'll get used to this as you define and call more and more functions.

## Contents

- [Playing With Functions](./Playing.md)
- [Defining and Calling Functions](./Defining.md)
- [Returning](./Returning.md)
- [Examples](./Example-Functions.md)
