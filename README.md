# A JavaScript Crash Course

This is a JavaScript crash course for people who have just started to learn. It's nowhere close to comprehensive.

We want to emphasize a few key themes, habits, and tools that you'll carry with as you learn.

## Key Ideas

1. Every program can be assembled from ~7 fundamental building blocks
1. The picture in your head matters more than your knowledge of syntax
1. Don't be afraid to explore with purpose
1. Computers are fast but dumb

## Crash Course: Building Blocks

Every programming language has a small number of building blocks that can be combined to form any program you can imagine. Everything concept, feature, technology, or best practice beyond these basic building blocks were invented to help us mere humans manage the complexity of larger and larger programs.

These sections form the bulk of the crash course. Work through each one in order.

### [Data Types][dir-data]

How does a computer "know" that what it's looking at is a number? How can a computer store, represent, process different flavors of information, e.g., numbers vs. text vs. images?

[Learn about data types.][dir-data]

### [Variables][dir-variables]

There are infinitely many numbers. How can we describe a procedure that works for any number?

[Learn about variables.][dir-variables]

### [Conditionals / Branching][dir-conditionals]

How do we get a computer to make a decision? If X take the left fork. If Y take the right fork.

If the thermostat reads 70ºF, turn off the heater. Otherwise, turn on the heater.

[Learn about conditionals and branching.][dir-conditionals]

### [Collections][dir-collections]

How do we get a computer to deal with groups of data rather than individual pieces of data? Add up all the numbers in the list, find the email address of the oldest user in this list of users, etc.

[Learn about collections][dir-collections]

### [Iteration / Looping][dir-iteration]

How do we get a computer to perform some operation repeatedly, or carry out some operation once for every entry in a list?

[Learn about iteration.][dir-iteration]

### [Functions][dir-functions]

How do we give names to procedures so that we can refer to it by name rather than repeating the same lines of code in many places?

[Learn about functions.][dir-functions]

### [Input / Output][dir-input-output]

How does a computer interact with the outside world? How does it read data from a keyboard and mouse? How does tell the monitor what to display? How does it read or write data from the hard drive?

[Learn about input/output.][dir-input-output]

## The Picture In Your Head

Let's paint a picture of what a programmer does:

1. You have some problem you want to solve, some system or process you want to model
1. You form a picture of that problem in your head
1. You translate that picture into code a computer can execute (i.e., code)
1. You go back and forth between code and idea as the code reveals to you what parts of your idea were unclear ("oh, now that I've written some code, I see I was confused about X")

In other words, being a software engineer isn't about writing code any more than being a writer is about putting words on a page. The words are a way to express an idea. Expressing the words helps you understand the idea better.

Novices spend too much time focusing on the syntax and not enough time focusing on the picture in their head. This is understandable since the syntax is the most foreign and visible part of learning to code.

But most early frustration comes from believing you have a clear picture of what you're trying to do when, in fact, you don't.

## Explore With Purpose

The code won't hurt you. Did you read a piece of code that does something unfamiliar to you? Figure out how to isolate that piece of code and play freely with it.

What does it appear to do? How can I be sure? How does its behavior change when I modify different parts of it? Why would someone think to write this code in the first place?

If you develop this habit, you'll be able to tackle unfamiliar problems quickly and without stress.

## Computers Are Fast But Dumb

Computers are dumb but fast. They are "dumb" in the sense that they can only perform a limited number of operations. A task that might take 2 or 3 sentences to describe to another person might take 100s or 1000s of lines to express in terms a computer can use.

Computers make up for it by being able to perform billions of operations per second.

Imagine a person who only knew how to add and count, but didn't know how to multiply. They could multiply 12 and 146 together by adding 12 together 146 times. If they were able to add numbers at a rate of 30 numbers per minute, together 30 numbers per minute, it'd take them about 5 minutes to figure out that `12 × 150` is `1,800`.

That's pretty slow! It's also error-prone, since a mistake in the 3rd minute will be hard to spot and hard to correct after the fact.

If they knew how to multiply they could calculate `12 × 150` in seconds. But what if instead they were so good at adding that they could add together 30 million numbers per minute? They'd be able to calculate `12×150` instantaneously (or so it would appear to us).

Most computers can multiply directly, but the idea is the same. We build up more complex procedures out of simpler procedures and rely on the fact that computers can perform billions of operations per second.


[dir-data]: ./Data
[dir-variables]: ./Variables
[dir-conditionals]: ./Conditionals
[dir-functions]: ./Functions
[dir-iteration]: ./Iteration
[dir-input-output]: ./Input-Output
[dir-collections]: ./Collections
