# Template Strings

Assembling larger strings using string concatenation (`+`) is tedious and error-prone. Consider the following code:

```javascript
let firstName = 'Jesse';
let lastName = 'Farmer';

let fullName = firstName + ' ' + lastName;

console.log('Hello, my name is ' + fullName + '!');
```

This will print out

```text
Hello, my name is Jesse Farmer!
```

It's very easy to forget a space or the final puncutuation mark. You also have to read the code very carefully to understand what the final string will look like.

Fortunately, JavaScript supports something called **template strings** or **template literals** that allow us to write code like the following:

```javascript
let firstName = 'Jesse';
let lastName = 'Farmer';

let fullName = `${firstName} ${lastName}`

console.log(`Hello, my name is ${fullName}!`);
```

This will also print out `Hello, my name is Jesse Farmer!`.

Unlike the usual strings, which are enclosed by a single quotes `'...'`, template strings are enclosed by backticks `` `...` ``. When we want to reference a variable, we surround it with `${...}`.

Inside a template string, anything enclosed by `${...}` will be evaluated and substituted into the final string.

## Documentation

Read about [template strings on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals).
