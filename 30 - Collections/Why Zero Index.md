# Why Do Computers Count From 0?

Computers _don't_ count from 0! Computers don't count at all. A machine that drops pebbles one at a time isn't "counting"; it's doing something mechanical that humans can use for the purpose of counting.

Humans decide what conventions computers follow for a variety of reasons. When designing a programming language, the expression `someArray[1]` can mean whatever we want.

If a language supports lists and the first element is at index `0`, we say it uses 0-based indexing. If the first element is at index `1`, we say it uses 1-based indexing.

*Most* languages use 0-based indexing for two reasons:

1. The [C programming language][wiki-c-language] was (and is) overwhelmingly popular and it used 0-based indexing. Any new language that differed *too* much from the conventions of C risked hurting adoption among existing programmers.

   There's a kind of Darwinian process at work: the languages you see are those languages which were able to cross the adoption hurdle.
1. In 1983, [Edsget Dijkstra][wiki-dijkstra], one of the most influential computer scientists of all time, wrote a very popular essay: *[Why numbering should start at 0][dijkstra-zero-essay]*.

Why did C use 0-based indexing? Because in C, arrays are a very light abstraction over raw memory and 0-based indexing means we can access specific elements of the array with simple arithmetic.

## Arrays in C

In C, we might write the following:

```c
int8_t numbers[] = [13, 22, 31, 47];
```

In C, this says: "Declare `numbers` to be an array of four 8-bit integers." In memory, this would be stored as four consecutive chunks of 8 bits (a total of 32 bits). Adding spaces for clarity, it'd look like this in memory:

```text
00001101 00010110 00011111 00101111
```

`00001101` is 13 in binary, `00010110` is 22 in binary, etc.

The C compiler keeps track of the memory address where this region of memory begins. When we write `numbers[1]`, the C compiler knows

1. The address where the `numbers` array begins in memory
1. How many bits each element takes up in memory (this is what `int8_t` means)

To make memory access fast and easy, C uses the index as the offset from the starting memory address of the `numbers` array. The first element is offset by `0` from the start, the second element is offset by `1` (times the size of `int8_t`) from the start, etc.

- `numbers[0]` is translated into "read 8 bits of memory starting at the address of `numbers` plus `0` times the size of an `int8_t`, and interpret those bits as an integer."
- `numbers[1]` is translated into "read 8 bits of memory starting at the address of `numbers` plus `1` times the size of an `int8_t`, and interpret those bits as an integer."
- etc.

These decisions make a lot of sense given C's design constraint of being the simplest language that is easy to translate (i.e., compile) into CPU-specific code across a variety of different CPU types.

[wiki-c-language]: https://en.wikipedia.org/wiki/C_(programming_language)
[wiki-dijkstra]: https://en.wikipedia.org/wiki/Edsger_W._Dijkstra
[dijkstra-zero-essay]: https://www.cs.utexas.edu/users/EWD/transcriptions/EWD08xx/EWD831.html
