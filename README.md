Advent of Code 2024 – Day 2 (Red-Nosed Reports)

This repository contains my solution for Advent of Code 2024 Day 2 challenge.

Problem Summary

Each line in the input represents a report containing a list of numbers.

Solution Approach

Part 1

Check if the sequence is fully increasing or decreasing

Validate that each adjacent difference is between 1 and 3

<img width="416" height="59" alt="image" src="https://github.com/user-attachments/assets/7624d486-3d3e-4ea5-b116-47929e9e19a6" />

Part 2

Try removing each element one by one

If any resulting sequence is safe → count it as safe

<img width="408" height="66" alt="image" src="https://github.com/user-attachments/assets/61304c59-eceb-47c8-bafd-c52e878ac7ef" />

<img width="1065" height="70" alt="image" src="https://github.com/user-attachments/assets/860b3022-c2f4-40ac-82c2-1a2daf19fc3c" />

Tech Stack

JavaScript (Node.js)

How to Run

1. Node.js installation if missing

2. Run the solution:

```bash
node solution.js
```

Files

solution.js → main logic

input.txt → puzzle input from Advent of Code

Output

Upon execution, output appears as follows

```text
Part 1: 321  
Part 2: 386  
```
