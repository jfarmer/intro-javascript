# Comparing Values

Here's the "template" for most conditional statements, where `// ...` means any number of lines of code:

```javascript
if (someExpression) {
  // ...
} else {
  // ...
}
```

The `else` section is optional. If we omit it and the conditional check is `false`, JavaScript will do nothing.

`someExpression` can be anything that evaluates to `true` or `false`. There are many operations that allow us to compare values and get a `true` or `false` value.

## Comparison Operators

Often we want to branch depending on how two values compare to each other. JavaScript has 6 ways of comparing values:

1. Less than `<`
1. Less than or equal to `<=`
1. Equal to `===`
1. Not equal to `!==`
1. Greater than or equal to `>=`
1. Greater than `>`

Play with the following code by changing the values of `firstValue` and `secondValue`. Does it do what you expect? Why or why not?

```javascript
let firstValue = 20;
let secondValue = 30;

if (firstValue < secondValue) {
  console.log(`${firstValue} is less than ${secondValue}.`);
}

if (firstValue <= secondValue) {
  console.log(`${firstValue} is less than or equal to ${secondValue}.`);
}

if (firstValue === secondValue) {
  console.log(`${firstValue} is exactly equal to ${secondValue}.`);
}

if (firstValue !== secondValue) {
  console.log(`${firstValue} is NOT equal to ${secondValue}.`);
}

if (firstValue >= secondValue) {
  console.log(`${firstValue} is greater than or equal to ${secondValue}.`);
}

if (firstValue > secondValue) {
  console.log(`${firstValue} is greater than ${secondValue}.`);
}
```

What happens if you change `firstValue` and `secondValue` to strings? Like this:

```javascript
let firstValue = 'C';
let secondValue = 'Q';
```

What happens if you change their values? Stick with one-letter values first to see if you can't figure out what JavaScript's comparison operators do when you use them with strings.

Once you have an idea, change the values to full words.

## Contents

- [Conditionals in JavaScript](./JavaScript-Conditionals.md)
- [Comparing Values](./Comparison.md)
- [Logical Operators](./Logical.md)
