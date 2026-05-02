const fs = require("fs");

function isSafe(report) {
  let increasing = true;
  let decreasing = true;

  for (let i = 0; i < report.length - 1; i++) {
    const diff = report[i + 1] - report[i];

    if (Math.abs(diff) < 1 || Math.abs(diff) > 3) {
      return false;
    }

    if (diff > 0) decreasing = false;
    if (diff < 0) increasing = false;
  }

  return increasing || decreasing;
}

function isSafeWithDampener(report) {
  if (isSafe(report)) return true;

  for (let i = 0; i < report.length; i++) {
    const modified = report.slice(0, i).concat(report.slice(i + 1));
    if (isSafe(modified)) return true;
  }

  return false;
}

function solve(input) {
  const reports = input
    .trim()
    .split("\n")
    .map(line => line.split(" ").map(Number));

  let part1 = 0;
  let part2 = 0;

  for (const report of reports) {
    if (isSafe(report)) part1++;
    if (isSafeWithDampener(report)) part2++;
  }

  return { part1, part2 };
}

// run
const input = fs.readFileSync("input.txt", "utf-8");
const { part1, part2 } = solve(input);

console.log("Part 1:", part1);
console.log("Part 2:", part2);