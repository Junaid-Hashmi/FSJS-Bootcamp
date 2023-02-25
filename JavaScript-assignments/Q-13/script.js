const prompt = require("prompt-sync")({ sigint: true });

const age = Number(prompt("Enter your age: "));

if (age >= 18) {
  console.log("You are old enough to drive.");
} else {
  console.log(`You have to wait ${18 - age} years to drive.`);
}
