const readlineSync = require("readline-sync");

const MIN = 1;
const MAX = 24;
let height;
let leftPyramid;
let rightPyramid;

do {
  height = readlineSync.question("\nHeight: ");
} while (height < MIN || height > MAX || Number.isNaN(height) || height % 1 !==0);

let step = height;

console.log();

while (step > 0) {
  leftPyramid = "";
  rightPyramid = "";

  for (i = 0; i <= height; i++) {
     leftPyramid = leftPyramid + "#";
   }
   for (i = 0; i < step - 1; i++) {
     leftPyramid = leftPyramid.replace(leftPyramid.charAt(i), " ");
   }
   for (i = step - 2; i < height; i++) {
     rightPyramid = rightPyramid + "#";
   }

   console.log(leftPyramid + " " + rightPyramid);
   step = step - 1;
}
console.log("\n");
