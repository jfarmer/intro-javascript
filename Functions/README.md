# Functions

Functions are named, reusable bits of code. In the same way that we can use variables to refer to data by name rather than by value, we can use functions to refer to code by name rather than copying-and-pasting the same lines of code throughout our program.

For example, imagine we had a service that printed out a greeting every time a user signed in. The message was the same except for a few user-specific details.

We could do this:

```javascript
let username;
let signupDate;

username = 'jfarmer';
signupDate = 'October 15, 2013';
console.log(`Hello, ${username}! You've been a member since ${signupDate}.`);

username = 'rklein';
signupDate = 'March 20, 2004';
console.log(`Hello, ${username}! You've been a member since ${signupDate}.`);

username = 'twashington';
signupDate = 'June 4, 2019';
console.log(`Hello, ${username}! You've been a member since ${signupDate}.`);
```

Each section of code involves three things:

1. Assigning values to two variables (`username` and `signupDate`)
1. Creating a welcome message using a template string, substituting in the values of `username` and `signupDate` into their respective places
1. Printing out the welcome message using `console.log`

There is a lot of repetition. In particular, we repeat the contents of our welcome message multiple times. We can define a function that creates our welcome message for us. The above code would then become:

```javascript
function getWelcomeMessage(username, signupDate) {
  return `Hello, ${username}! You've been a member since ${signupDate}.`;
}

console.log(getWelcomeMessage('jfarmer', 'October 15, 2013'));
console.log(getWelcomeMessage('rklein', 'March 20, 2004'));
console.log(getWelcomeMessage('twashington', 'June 4, 2019'));
```

Think about the advantages here:

1. The code is easier to understand, both because it's shorter and because the function name hints at the purpose of the `'Hello, ...'` string.
1. The welcome message is only defined in one place, which means there's only one place we have to edit if we ever want to change it.
1. We can verify that `getWelcomeMessage` does exactly what we expect without

## Contents

- [Playing With Functions](./Playing.md)
- [Defining and Calling Functions](./Defining.md)
- [Returning](./Returning.md)
- [Examples](./Example-Functions.md)
