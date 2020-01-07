# Input and Output

Every "computation" follows the same pattern:

1. Data is sent to the computer though an external device or system
1. The computer processes the data
1. The results of the computation are output to an external device or system

**[Input/Output (IO)][wiki-input-output]** is the term we use to describe how computers communicate with the outside world. We generally talk about a computer "reading" or "receiving" input and "writing" or "sending" output. In a complex program, the above steps might repeated many times with data being read from and written to many places.

Think about a typical laptop in 2020. How many ways can you send data to it? There's the keyboard, touchpad, camera, and microphone. There are also network ports like a physical ethernet cable or a wireless antenna. You probably have some [USB ports][wiki-USB] that allow you to connect many peripherals, like a thumb drive, external DVD player, backup drive, etc.

The hard drive inside your computer also acts an input device if we're reading data from it.

If you're using a smart phone, you probably have a touch screen that sends data to your phone's internal processor indicating how many fingers are touching the scree and their location. It also has a [GPS][wiki-GPS] chip and an [accelerometer][wiki-accelerometer] that tell the phone where its currently located and whether it's currently accelerating, respectively.

All of these components exist for the same reason: to get data that lives outside into a form that the CPU can use to do work.

Common output devices include your computer monitor, audio speakers, or a printer. Network devices, hard drives, etc. can also serve as output.

A computer in a hybrid car might receive data from many systems, decide whether the car should be using the electric motor or the combustion engine, and output signals to some other system that controls which power source the car is using.

## Input vs. Output

The idea that some components (like a hard drive) can be both input and output might seem strange at first, but think of a plain piece of paper. When we write on it, it's serving as output. When we read from it, it's serving as input.

If you've ever played a video game with a controller that vibrates, the "vibration" is a output, while the buttons you press are input. The game tells the console to *output* a signal to the controller that will make it vibrate.

## Contents

- [Input in JavaScript](./Input.md)
- [Output in JavaScript](./Output.md)

[wiki-input-output]: https://en.wikipedia.org/wiki/Input/output
[wiki-USB]: https://en.wikipedia.org/wiki/USB
[wiki-GPS]: https://en.wikipedia.org/wiki/Global_Positioning_System
[wiki-accelerometer]: https://en.wikipedia.org/wiki/Accelerometer
