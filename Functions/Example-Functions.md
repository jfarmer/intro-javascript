# Example Functions

These are some example functions that involve every building block so far: variables, conditionals, collections, and iteration.

## Add Numbers in Array

```javascript
function sum(array) {
  let sumSoFar = 0;

  for(let num of array) {
    sumSoFar += num;
  }

  return sumSoFar;
}

console.log(sum([10, 20, 30]));
console.log(sum([-10, 20, 14.5, 100]));
```

## Find Largest Number

```javascript
function max(array){
  let maxSoFar = array[0];

  for(let num of array) {
    if (num > maxSoFar) {
      maxSoFar = num;
    }
  }

  return maxSoFar;
}

console.log(max([10, 20, 30]));
console.log(max([-10, 20, 14.5, 100]));
```

## Find Longest String

```javascript
function longest(array) {
  let longestSoFar = array[0];

  for (let string of array) {
    if (string.length > longestSoFar.length) {
      longestSoFar = string;
    }
  }

  return longestSoFar;
}

console.log(longest(['a', 'aa', 'aaaa', 'bbb']));
console.log(longest(['What', 'is', 'the', 'longest', 'string?']));
```

## Contents

- [Playing With Functions](./Playing.md)
- [Defining and Calling Functions](./Defining.md)
- [Returning](./Returning.md)
- [Examples](./Example-Functions.md)
