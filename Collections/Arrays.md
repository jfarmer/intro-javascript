# Arrays

Arrays or lists are the most basic type of collection: a sequential list of values referenced by their position in the list.

Some simple examples:

- The list of month names in English, e.g., `['January', 'February', ..., 'December']`
- A shopping list
- A TODO list
- The entries in a phone book
- A list of lines in a text fileWe

For example, if we're building a TODO list, it's natural to think of the tasks as organized in a list. There could be 10 things in the list or 20 or 3. And that amount could change over time as people add new tasks or mark old tasks as completed.

Do these example seem incredibly common? They are — and so are arrays! You will be using arrays in virtually every program you write outside of narrowly-tailored exercises.

Every language has at least one way of representing ordered lists. The terminology might differ slightly — arrays, lists, and vectors are all common terms — but the core concept is the same.

## Arrays in JavaScript

In JavaScript we use `Array` to represent ordered lists. The individual values in an array are called **elements** or **members**.

Don't be afraid to [read the MDN documentation on Arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array).

## Questions Arrays Can Answer

Arrays are great at answering questions like "What's the first thing on the list?", "What's the last thing on the list?", "What's the fourth thing on the list?", "How long is the list?", etc.

Arrays can also be empty, like a blank sheet of paper. "Are you empty?" is also a question an `Array` would be happy to answer.

### Declaring an Array

The following code declares a 4-element array and prints out its contents. Type it up yourself and see:

```javascript
let powersOfTen = [1, 10, 100, 1000];

console.log(powersOfTen);
```

Remember, the `let` keyword tells the JavaScript interpreter that we're declaring a new variable.
The expression `[1, 10, 100, 1000]` is an array of four numbers. We assign it to a variable named `powersOfTen` and then print out its value.

## Collections As A Storage Room — A Metaphor

If you're having trouble thinking about collections, imagine them as a storage room full of boxes and manned by a concierge. You don't have direct access to the storage room, but you can ask the concierge for information about what's in the storage room, tell them to put something new into the storage room, or tell them to take something out of the storage room.

Every collection involves organizing and labeling the boxes in a slightly different way. Which way we prefer depends on what we intend to do with contents of the boxes.

To begin with, you need to have some convention for referring to particular boxes. An `Array` is like a storage room where the boxes are ordered from left to right. Rather than asking for a box with a particular label, you ask about the first box, the second box, etc.

### An Array Thought Experiment

You're the concierge. You take out your sharpie and write the box number on each box, from '#1' to '#10' if there are 10 boxes. You'll need to keep these numbers up-to-date if someone ever adds or removes something from the storage unit.

Which request would be more annoying to fulfill and why?

1. Add a a new box after the last box and put my coat in it
1. Add a new box before the first box and put my coat it it

Remember, the boxes have to be labeled with their position. If you add a new box to the beginning, that is now box #1 and the previous "first box" is now box #2.

The exact same reasoning applies to computer arrays.

## Play With Arrays

Type the following code. For each line, have each member of your team state their expectations of what the line will do when executed. Run the code and check your expectations.

```javascript
// This is an empty array
[]

// This is an array with a single element, the string 'apples'
['apples']

// This is an array with three elements: the numbers 1, 2, and 3
[1, 2, 3]

// This is an array of all the months
['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'November', 'December']

// The elements of an array don't all need to be the same type.
// In fact, that can be any type.
[10, 'cats', 4.5, 'piano']

// We can use variables in arrays, too.
let someDummyValue = 'arglebargle'
[1, 2, someDummyValue, 19]
```

## Reading From Arrays

Let's take a look at the array of months from above. Paste the following into the Node REPL:

```javascript
let months = ["January", "February", "March",
              "April", "May", "June",
              "July", "August", "September",
              "October", "November", "December"];
```

(Yes, you can split up array declarations across multiple lines, so long as the lines end with a comma.)

Once we have data in an array, how do we get data out of an array? We do it by indexing the array, a fancy way of telling the array: "Give me the element at _this_ position."

Make sure you've entered in the code that defines the `months` array above, then run the following:

```javascript
// What value is at index 0?
months[0]
```

This should print out `'January'`.

## Counting From 0

It probably strikes you as odd that `'January'`, the first element of the `months` array, is at `months[0]` and not `months[1]`. If it doesn't, seek medical attention immediately: you might be a computer.

Computers and most programming languages count from 0 rather than 1. So the first element of an array is at index 0, the second is at index 1, etc. There are good reasons for this, but for now you'll just have to get used to it.

Run the following, one line at a time:

```javascript
months[0]
months[1]
months[11]
months[100]

let monthNum = 7
months[monthNum]
```

The index doesn't need to be a literal number; it can also be a variable that holds a number, too.

## Array Vocabulary

Using the same `months` array from above, the following statements are all true:

- The string `'January'` is the first element of the array `months`
- The string `'January'` is at index `0`
- The string `'December'` is the last element of the array `months`
- The string `'December'` is at index `11`
- The array months has `12` elements
- The value at index `3` is the string `'April'`, which is the fourth element

## Contents

- [Arrays in JavaScript](./Arrays.md)
- [Dictionaries in JavaScript](./Dictionaries.md)
