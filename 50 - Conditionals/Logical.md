# Logical Operators - Combining Booleans

If we have two boolean expressions — expressions that evaluate to `true` or `false` — we can combine them with **logical operators** to produce more complex boolean expressions.

The three main logical operators are:

1. Logical AND (represented by `&&`)
1. Logical OR (represnted by `||`)
1. Logical NOT (represented by `!`)

## Logical AND

If we have two boolean expressions — call them `firstExpression` and `secondExpression` — then `firstExpression && secondExpression` is a new boolean expression which evaluates to `true` only when both of the initial expressions also evaluate to `true`. If one or both of them are `false` then the combined expression is also `false`.

Consider this code:

```javascript
let minimumVotingAgeUS = 18;
let age = 20;
let registeredToVote = false;

if (isRegisteredToVote && age >= minimumVotingAgeUS) {
  console.log('Congratulations, you can vote in the US!');
}
```

You can read this as "If you're registered to vote and you're above the minimum voting age, then print a message saying you can vote. Otherwise, do nothing."

`age >= minimumVotingAgeUS` is `true`, but because `isRegisteredToVote` is `false`, nothing is printed.

## Logical OR

Like logical AND, we have logical OR. The expression `firstExpression || secondExpression` evaluates to `true` if one or *both* of the two expressions evaluates to `true`.

### Truth Tables For AND and OR

In the following table, the first two columns represent all possible values of the two original boolean expressions (denoted by `P` and `Q`). The third column is the boolean value we get when we combine them with `&&`.

|`P`    |`Q`    |`P && Q`|
|-------|-------|--------|
|`true` |`true` |`true`  |
|`true` |`false`|`false` |
|`false`|`true` |`false` |
|`false`|`false`|`false` |

This tells us that when `P` is `true` and `Q` is `false` then `P && Q` is `false`.

A similar table for `||` looks like:

|`P`    |`Q`    |`P || Q`|
|-------|-------|--------|
|`true` |`true` |`true`  |
|`true` |`false`|`true`  |
|`false`|`true` |`true`  |
|`false`|`false`|`false` |


### Tip to Remember

Over time these tables will become second nature, but the following two statements might help you remember when you're unsure:

- The only way `P && Q` is `true` is if both `P` and `Q` are `true`.
- The only way `P || Q` is `false` is if both `P` and `Q` are `false`.

## Logical NOT

Unlike `&&` and `||`, logical NOT only takes one boolean expression. If turns `true` into `false` and `false` into `true`.

For example, `!(x < 3)` evaluates to `true` exactly when `x < 3` evaluates to `false`. Reading it out loud, you might say "`x` is not less than `3`" or "it's not the case that `x` is less than `3`."

Sometimes it's easier to express an idea using `!`. For example, imagine if we were given a single character from the alphabet and wanted to check if it were a consonant. Checking directly would take 21 comparisons (one for each possible consontant), so it might be easier to check if it is NOT a vowel.

The truth table for `!`:

|`P`    |`!P`   |
|-------|-------|
|`true` |`false`|
|`false`|`false`|

## Contents

- [Conditionals in JavaScript](./JavaScript-Conditionals.md)
- [Comparing Values](./Comparison.md)
- [Logical Operators](./Logical.md)
