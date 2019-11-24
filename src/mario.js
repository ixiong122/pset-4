const readlineSync = require("readline-sync");

const MIN = 1;
const MAX = 24;
let height;
let row;

do {
  height = readlineSync.question("\nHeight: ");
} while (height < MIN || height > MAX);
console.log();
let step = height;
while (step > 0) {
  row = ""
  for (i = 0; i <= height; i++) {
    row = row + "#";
  }
  for (i = 0; i < step - 1; i++) {
    row = row.replace(row.charAt(i), " ");
  }
  console.log(row);
  step = step -1
}
console.log("\n");
log(row + "#");
