# Dictionaries

Another common type of collection is called a **dictionary**, **map**, or **associative array**. Unlike arrays, elements of a dictionary are identified by a text label rather than their position in the collection. They don't have a notion of "the first element", "the second element", etc., but they do have a notion of "The element with the label 'banana'", "The element with the label 'orangutan'", etc.

Using the storage room metaphor, a dictionary is like a storage room where each box has a unique label but they're otherwise unordered. Rather than asking the concierge, "What's in box #24?" you'd ask, "What's in the box labeled 'Personal'?"

## Creating Dictionaries

```javascript
let person = { firstName: 'Frank', lastName: 'Hardy', age: 32 };
```

We've seen `{ ... }` used elsewhere to denote the body of a branch. Here, JavaScript sees the lack of any keyword and assumes we're about to define a dictionary.

`person` is now a variable that holds our dictionary as a value. A single entry in the dictionary like `firstName: 'Frank'` is called a **key / value pair**. `firstName` is the *key* and the string `'Frank'` is the value. We can access specific elements of the dictionary through its *keys*.

## Accessing Elements of a Dictionary

There are two ways to access elements of a dictionary: using `dictionary.keyName` and using `dictionary['keyName']`.

```javascript
let person = { firstName: 'Frank', lastName: 'Hardy', age: 32 };

// Each pair of console.log statements will print out the same thing

console.log('The first name is:', person.firstName);
console.log('The first name is:', person['firstName']);

console.log('The last name is:', person.lastName);
console.log('The last name is:', person['lastName']);

console.log('The age is:', person.age);
console.log('The age is:', person['age']);
```

Here, both `person.firstName` and `person['firstName']` refer to the same value in the dictionary (namely,`'Frank'`). Anywhere you see `dictionary.keyName` you can replace it with `dictionary['keyName']`.

If you try to access an element of a dictionary that hasn't been set, you will get `undefined`.

```javascript
let person = { firstName: 'Frank', lastName: 'Hardy', age: 32 };

// prints 'The home town is: undefined'
console.log('The home town is:', person.homeTown);
```

## Changing Elements of a Dictionary

We can treat the elements of dictionaries like variables, which means you can use `=` to set or change an entry.

```javascript
let person = { firstName: 'Frank', lastName: 'Hardy', age: 32 };

// person.firstName is 'Frank'
console.log('The first name is:', person.firstName);

person.firstName = 'Jesse';

// person.firstName is now 'Jesse'
console.log('The first name is now:', person.firstName);
```

## `.` vs `[]`

Most people would probably say that `person.firstName` is clearer than `person['firstName']`, but the `[]` syntax has one advantage: you can dynamically access or set an element.

Consider the following:

```javascript
// We can split up dictionary declarations across multiple lines
let daysInMonth = {
  January: 31,
  February: 29,
  March: 31,
  April: 30,
  May: 31,
  July: 31,
  August: 31,
  September: 30,
  October: 31,
  November: 30,
  December: 31
}

let monthName = 'December';           // Change this value and see what happens
let numDays = daysInMonth[monthName]; // <--- Notice this!

console.log(`There are ${numDays} in ${monthName}.`);
```

If we wrote `daysInMonth.monthName`, the JavaScript interpreter would try to find an entry in the dictionary whose key was `monthName`. Since that doesn't exist, we'd get back `undefined`. But by using the `[]` syntax, we can refer to the key dynamically — the value of `monthName` is used as the key.

## Dictionary Values

In JavaScript, the keys of a dictionary are always strings, but values can be anything. Consider:

```javascript
// Set customerData to an empty dictionary
let customerData = {};

customerData['A1234'] = { ID: 'A1234', firstName: 'Frank', lastName: 'Smith', age: 32 };
customerData['B7631'] = { ID: 'B7631', firstName: 'April', lastName: 'Garcia', age: 39 };
customerData['C9834'] = { ID: 'C9834', firstName: 'Erik', lastName: 'Hansen', age: 28 };
```

This is a dictionary whose values are themselves dictionaries! In fact, this is a mini-database: if we have the customer ID we can access that customer's data.

```javascript
let customerID = 'B7631';
let customer = customerData[customerID];

if (customer !== undefined) {
  console.log(`Customer ${customer.ID} found: ${customer.firstName} ${customer.lastName}`);
} else {
  console.log(`No customer found for customerID: ${customerID}.`);
}
```

Imagine you're writing code to summarize a big spreadsheet of customers. There's one customer per row and each is uniquely identified by a value in a column called "Customer ID".

If we know we're going to be accessing the data by customer ID very frequently, a dictionary with the customer IDs as keys and the customer data as values is the natural way to go.

## Contents

- [Arrays in JavaScript](./Arrays.md)
- [Dictionaries in JavaScript](./Dictionaries.md)
