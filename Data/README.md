# Data Types

A **data type** is a rule for interpreting a particular sequence of symbols. At the most basic level, information is stored on a computer as sequences of two symbols: `0` and `1`.


## Symbols vs. Meaning

That's pretty abstract — what do we mean? Let's think of an example that doesn't have to do with computers. Consider the the following sequence of symbols:

```text
.....
````

That could represent _anything_. Maybe we're reading a movie script and it's meant to represent a character's stunned silence. Maybe it's being used to separate two parts of a larger document and represents the place where one section ends and another begins. Maybe it represents the number 5.

`.....` by itself has no _inherent_ meaning. We need a rule for how to make sense of it. There might be many different rules we use depending on the context.

## Data Types on Computers

Back to computers. Underneath it all the computer is encoding information as sequences of `1`s and `0`s. We call these **binary sequences** and we call each individual `1` or `0` a **bit** (short for **b**inary dig**it**).

For example:

- `101` is a binary sequence consisting of 3 bits
- `10011101` is an 8-bit binary sequence
- `10` is a 2-bit binary sequence

The fact that we use `1` and `0` is suggestive, but the sequences themselves have no *inherent* meaning, just like `.....` has no inherent meaning. What makes these sequences useful is our ability to *interpret* them according to different rules. Each way of interpreting a sequence is called a **data type**.

For example, we might say "Given an 8-bit binary sequence, we can use the [binary numbering system][wiki-binary-number] to interpret it as a non-negative integer between 0 and 255." Some languages support this data type explicitly and would call it an "8-bit unsigned integer".

Or we might say, "Given ten 8-bit binary sequences in a row, we can use [ASCII](http://www.asciitable.com/) to interpret it as a string of text."

JavaScript has 8 core data types: `number`, `string`, `boolean`, `null`, `undefined`, `bigint`, `symbol`, and `object`. We'll explain more about each of these types later, but for now we'll cover the most common.

## Contents

- [Numbers](./Numbers.md)
- [Strings](./Strings.md)
- [Booleans](./Booleans.md)

[wiki-binary-number]: https://en.wikipedia.org/wiki/Binary_number
