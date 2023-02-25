const prompt = require("prompt-sync")({ sigint: true });

const num = Number(prompt("Enter a number: "));

if (num % 2 == 0) {
  console.log("Number is even");
} else {
  console.log("Number is odd");
}
