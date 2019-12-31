# Strings

The second primitive data type we'll look at is `string`. This is how JavaScript represents textual data. If it helps, you can think "text" whenever you read "string".

In JavaScript, strings are enclosed in either double quotes `"like this"` or single quotes `'like this, instead'`. There's no difference between the two, but we'll generally prefer single quotes for the sake of consistency.

As with numbers, let's start by playing with strings and building up a reasonable mental model. Type each line that follows into the Node REPL and predict what you'll see once you hit enter.

Make sure you're typing the quotation character `'`.

```javascript
'one'
'two'
'three'

'Hello, World!'

'Jesse' + ' ' + 'Farmer'
'one' + 'two' + 'three'

'abcdef'.charAt(0)
'abcdef'.charAt(1)
'abcdef'.charAt(2)
'abcdef'.charAt(3)
'abcdef'.charAt(4)

'======='
'==='.padStart(7, '*')
'==='.padEnd(7, '*')

'this is a sentence'.toUpperCase()
'oNe TwO tHrEe'.toLowerCase()
```

The syntax `'abcdef'.charAt(3)` might be unfamiliar to you. Don't worry if it is — your goal should be to gain a bit of familiarity and start forming tentative ideas about what is going on.

What do you think `charAt`, `padStart`, `padEnd`, etc. are doing?

## Documentation

If you want to see everything you can do with strings, see MDN's documentation for [String.prototype](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/prototype).
