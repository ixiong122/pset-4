const readlineSync = require("readline-sync");

const MIN = 1;
const MAX = 24;
let height = 0;
let row = "#";
let row2 = "#";

do {
  height = readlineSync.question("Height: ");
} while (height < MIN || height > MAX);

for (let i = 1; i <= height; i++) {
  row =  row + row2 ;
  console.log(row);
}
