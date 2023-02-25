const prompt = require("prompt-sync")({ sigint: true });

const n = prompt("Enter a number: ");

for (let i = 1; i <= 10; i++) {
  console.log(`${n} * ${i} = ${n * i}`);
}
