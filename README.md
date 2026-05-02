Advent of Code 2024 – Day 2 (Red-Nosed Reports)

This repository contains my solution for Advent of Code 2024 Day 2 challenge.

Problem Summary
Each line in the input represents a report containing a list of numbers.

Solution Approach
Part 1
Check if the sequence is fully increasing or decreasing
Validate that each adjacent difference is between 1 and 3
Part 2
Try removing each element one by one
If any resulting sequence is safe → count it as safe

Tech Stack
JavaScript (Node.js)

How to Run
1. Node.js installation if missing
2. Run the solution:
node solution.js

Files
solution.js → main logic
input.txt → puzzle input from Advent of Code

Output
Upon execution, output appears as follows
Part 1: 321
Part 2: 386