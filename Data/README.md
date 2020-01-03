# Data Types

Remember, underneath it all the computer is encoding data as sequences of `1`s and `0`s, which we call a **binary sequence**. We call each individual `1` or `0` a **bit** (short for **b**inary dig**it**).

The fact that we use `1` and `0` is suggestive, but the sequences themselves have no *inherent* meaning. What makes these sequences useful is our ability to *interpret* them according to different rules. Each way of interpreting a sequence is called a **data type**.

For example, we might say "Given an 8-bit binary sequence, we can use the [binary numbering system][wiki-binary-number] to interpret it as a non-negative integer between 0 and 255." Some languages support this data type explicitly and would call it an "8-bit unsigned integer".

Or we might say, "Given ten 8-bit binary sequences in a row, we can use [ASCII](http://www.asciitable.com/) to interpret it as a string of text."

JavaScript has 8 core data types: `number`, `string`, `boolean`, `null`, `undefined`, `bigint`, `symbol`, and `object`. We'll explain more about each of these types later, but for now we'll cover the most common.

## Contents

- [Numbers](./Numbers.md)
- [Strings](./Strings.md)
- [Booleans](./Booleans.md)

[wiki-binary-number]: https://en.wikipedia.org/wiki/Binary_number
