# Algebra of Programs

## Sets

In mathematics, everything is formulated in terms of sets. A **set** is any well-defined collection of distinct objects (called **elements**).

Sets can really only answer "For some object x and some set S, is x an element of S or not?" There's no notion of order or multiplicity. We denote sets by enclosing the elements with `{...}` brackets.

The following statements are all true:

```text
{1, 2, 3} = {2, 3, 1}
{1, 2, 3} = {1, 2, 3, 3}
{'apple', 2} = {2, 'apple', 'apple', 2}
```

For example, think of the set of all the names of US state capitals (call it **C**). Since *Sacramento, CA* is a state capital it is an element of **C**. Saying "The set **C** plus the city *Sacramento, CA*" still describes the same set, whereas "The set **C** plus the city *San Francisco, CA*" describes a different set (albeit one that shares many elements).

In a sentence: two sets are equal if they contain the same elements as each other.

In most programming languages, the [keys of an associative array or map](https://en.wikipedia.org/wiki/Associative_array) form a set.

### Element Of

You'll often see the symbol `∈`, which means "is an element of". For example, rather than writing

```text
2 is an element of {1, 2, 3}
```

we would write

```text
2 ∈ {1, 2, 3}
```

If `A` is a set and `x` is some object then `x ∈ A` means `x is an element of A`.

Similarly, `∉` means "is not an element of", e.g.,

```text
17 is not an element of {1, 2, 3}
17 ∉ {1, 2, 3}
```

These are just shorthand.

### Set-Builder Notation

The most commen way of specifying sets is through _[set-builder notation](https://en.wikipedia.org/wiki/Set-builder_notation)_.

For example, if `H` is the set of all living people in the United States, we could define the following subset of `H`:

```text
{p ∈ H : p was born in Sacramento, CA}
```

We'd read this as "The set of all elements `p` of `H` such that `p` was born in Sacramento, CA", i.e., the set of all living people in the United States who were born in Sacramento, CA.

More commonly one might write...

Let `N = {0, 1, 2, 3, 4, ....}` be the set of natural numbers.

- `{x ∈ N : x is even}` is the set of all even natural numbers.
- `{x ∈ N : x is prime}` is the set of all primes.
- `{x ∈ N : x > 100}` is the set of all natural numbers greater than 100.

Again, set-builder notation is just a short-hand.

### Common Sets

The following sets are very common in mathematics and are often designated using a [blackboard bold](https://en.wikipedia.org/wiki/Blackboard_bold):

- The natural numbers

  ```text
  ℕ = {0, 1, 2, 3, 4, ...}
  ```

- The integers

  ```text
  ℤ = {..., -3, -2, -1, 0, 1, 2, 3, ...}
  ```

- The rational numbers

  ```text
  ℚ = {p / q : p,q are integers and q is not 0}
  ```

- The real numbers

  The set of all numbers on the real number line, denoted `ℝ`.


## Functions

A function `f` associates each element of one set (called the **domain**) with a single element of another set (called the **co-domain** or **range**).

We write

```text
f: A → B
```

to denote a function with domain is the set **A** and whose codomain is **B**.

**Note**: The domain and codomain are *part* of a function's definition, so two functions that are expressed by the same formula but with different domains are *not* the same function.

**Also note**: One consequence of this definition is that if `x = y` then `f(x) = f(y)`. This is *not* the case for functions in most programming languages. For example, the `Date.now()` function in JavaScript will return a different value each time it is called.

Of course, a function like

```typescript
function negative(n: number): number {
  return -1 * number;
}
```

*does* behave this way.  That is, if `x === y` then `negative(x) === negative(y)`.

In programming, a function which always returns the same value given the same inputs is called a *[pure function](https://en.wikipedia.org/wiki/Pure_function)*. In mathematics, *every* function is a pure function.

Pure functions are much easier to reason about because they don't have any side-effects. Their output is determined entirely and only by their input.

## Cartesian Product

Given two sets **A** and **B**, we can form a new set consisting of all ordered pairs of elements from the two sets, denoted **A**×**B**. This is called the [Cartesian product](https://en.wikipedia.org/wiki/Cartesian_product), named after [René Descartes](https://en.wikipedia.org/wiki/Ren%C3%A9_Descartes).

That is, for two sets **A** and **B**, we have

```text
A×B = {(x, y) : x ∈ A and y ∈ B}
```

The x-y plane (aka the [Cartesian plane](https://en.wikipedia.org/wiki/Cartesian_coordinate_system)) is the set `ℝ×ℝ`, i.e., the set of all ordered pairs of real numbers.

## Binary Operations

If `S` is a set and `f` is a function `f: S×S → S` then we say that `f` is a **binary operation** on `S`.

That is, `f` takes a pair of elements from `S` as input and maps that pair to another element of `S`.

For example, the following function is a binary operation on the natural numbers:

```text
add: ℕ×ℕ → ℕ
add(x, y) = x + y
```

We'd say that "addition is a binary operation on the natural numbers." Any function that takes two natural numbers as input and maps that pair to another natural number is a binary operation.

We don't always have short-hand to denote the operation the way we do with operations like addition and subctraction.

For example, the following are also binary operations without any common short-hand:

```text
zero: ℕ×ℕ → ℕ
zero(x, y) = 0

first: ℕ×ℕ → ℕ
first(x, y) = x

max: ℕ×ℕ → ℕ
max(x, y) = x if x ≥ y, y otherwise
```

We deal with binary operations all the time when programming. Some examples:

- String concatenation is a binary operation on the set of all strings.

  ```typescript
  function stringConcat(str1: string, str2: string): string {
    return str1 + str2;
  }
  ```

- Array concatenation is a binary operation on the set of all arrays.

  ```typescript
  function arrayConcat(arr1: any[], arr2: any[]): any[] {
    return arr1.concat(arr2);
  }
  ```

- Logical `&&` is a binary operation on the set of boolean values.

  ```typescript
  function and(bool1: boolean, bool2: boolean): boolean {
    return bool1 && bool2;
  }
  ```

## Identity

Let `f` be a binary operation on a set `S`. Sometimes there are elements of `S` that interact with `f` in interesting ways.

One of the most common is an **identity element**.

If `e ∈ S` such that

```text
f(x, e) = f(e, x) = x
```

for every `x ∈ S` then we call `e` an **identity element** of `f`.

Identity elements are specific to a given operation. For example, `0` is the identity of addition on the natural numbers.

That is, if we let `add: ℕ×ℕ → ℕ` be defined by `add(x, y) = x + y`. Then the following holds:

```text
add(x, 0) = add(0, x) = x
```

Other common identity elements:

- The number `1` is the identity element of multiplication
- The empty string `''` is the identity element of string concatenation
- The empty array `[]` is the identity element of array concatenation
- `true` is the identity element of `&&`
- `false` is the identity element of `||`

Not every binary operation has an identity. For example, the operation defined by `first(x, y) = x` doesn't have an identity (why?).

## Monoid

## Morphisms
