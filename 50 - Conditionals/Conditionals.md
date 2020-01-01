# Conditionals in JavaScript

Consider the following JavaScript:

```javascript
let minimumVotingAgeUS = 18;
let age = 20;

if (age < minimumVotingAgeUS) {
  console.log(`You must be at least ${minimumVotingAgeUS} years old to vote in the US.`);
  console.log(`Our records indicate you are ${age} years old.`);
} else {
  console.log('You can vote in the US!');
}
```

In this code, the values of `age` and `minimumVotingAgeUS` are hard-coded, but try to imagine them coming from somewhere else. Maybe we retrieve the minimum voting age in the US from a database. Maybe the user enters their age.

But no matter where the values of `age` and `minimumVotingAgeUS` come from, the conditional code will work the same:

- If `age` is less than `minimumVotingAgeUS` then print out a message informing the user that they can't vote (and why)
- Otherwise, print out a message saying the user can vote

The general form of most conditional statements in JavaScript will look like:

```javascript
if (some expression that can be true or false) {
  // The code for the "true" branch goes here
  // That is, the code that we want to run when the above
  // expression evaluates to true
  // ...
  // ...
  // Potentially many lines of code
} else {
  // The code for the "false" branch goes here
  // That is, the code that we want to run when the above
  // expression evaluates to false
  // ...
  // ...
  // Again, potentially many lines of code
}
```

At any given moment, the computers will execute only *one* of the two branches.
