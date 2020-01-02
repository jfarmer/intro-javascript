# A Picture of Computing

## The Von Neumann Architecture

- Input Device(s)
- Output Device(s)
- Central Processing Unit (CPU)
  - Control Unit (CU)
  - Arithmetic/Logic Unit (ALU)
- Primary Storage
- Secondary Storage

## Memory

You have probably heard that computers store everything as 1s and 0s. But so what? What does that mean?

Physically, computer memory is a big grid of capacitors, each of which is either charged or discharged. We can use any two symbols we like to represent these two states. We have reasons to use `1` and `0`, but we could just as easily use any of the following:

- `+` and `_`
- `C` and `D`
- `a` and `b`
- `$` and `#`
- `☝` and
- etc.

Say you had 32 capacitors, each of which was either charged or uncharged. If `+` represents charged and `_` represents discharged then one possible pattern could be:

```text
++++_+_+++_+++__+_+_+++___+_+__+ (using + and _)
11110101110111001010111000101001 (using 1 and 0)
````

We are allowed to slice and dice this data as we see fit. We could treat it as a single sequence of 32 `1`s and `0`s. We could treat it as four 8-symbol "words" in a row:

```text
(+ and _)       (1 and 0)
++++_+_+        11110101
++_+++__        11011100
+_+_+++_        10101110
__+_+__+        00101001
```

What does `11110101` *mean*? It could mean many things depending on the rule we use to assign it meaning. For each way of assigning meaning, we need some hardware to back it up.

The four most common ways we interpret binary data are:

- [Machine code](https://en.wikipedia.org/wiki/Machine_code), which are the set of instructions that a CPU can execute directly
- Whole numbers, by using the [base-2 numeral system](https://en.wikipedia.org/wiki/Binary_number)
- Fractional numbers, by interpreting the binary data according to the rules of [IEEE Standard 754 for Floating Point Arithmetic](https://en.wikipedia.org/wiki/IEEE_754)
- Text, by using a system that maps numbers to particular characters.

  Historically, [ASCII](https://en.wikipedia.org/wiki/ASCII) was the most common for languages that use the Latin alphabet. But computers from different countries would use different rules would use different rules to map between binary data and text.

  [KOI-8](https://en.wikipedia.org/wiki/KOI-8) was used in Russia, [JIS](https://en.wikipedia.org/wiki/JIS_encoding) in Japan, [ASMO 708](https://en.wikipedia.org/wiki/ISO/IEC_8859-6) in Arabic countries, [GB 18030](https://en.wikipedia.org/wiki/GB_18030) in China, etc.

  Today, [UTF-8](https://en.wikipedia.org/wiki/UTF-8) is used because it handles every alphabet simultaneously. Before the rise of UTF-8, we always had to be careful about which character encoding we were using.

The point isn't to understand the details of all these systems, but to drive home two points:

1. A single chunk of binary data can be interpreted in many ways
1. A computer only appears to "know" what to do with data because we have built into it machinery that is capable of interpreting binary data in various ways and acting on that interpretation
