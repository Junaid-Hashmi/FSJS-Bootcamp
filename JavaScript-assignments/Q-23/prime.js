const prompt = require("prompt-sync")({ sigint: true });

const num = Number(prompt("Enter a number: "));

for (let i = 2; i <= num; i++) {
  if (num % i == 0) {
    console.log("Not Prime");
    break;
  } else {
    console.log("Prime");
    break;
  }
}
