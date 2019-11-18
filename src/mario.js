const readlineSync = require("readline-sync");

const MIN = 1;
const MAX = 24;
let height = 0;
let i=0;
let row = "#";
do {
  height = readlineSync.question("Height: ");
} while (height < MIN || height > MAX);
for (i=0;i<height;i+=1){
  console.log("#"+row);
}
