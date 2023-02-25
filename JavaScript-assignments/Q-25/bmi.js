const prompt = require("prompt-sync")({ sigint: true });

// bmi = weight in Kg / (height x height)
const weight = Number(prompt("Enter your weight (in kgs): "));
const height = Number(prompt("Enter your height (in metres): "));
const bmi = weight / (height * height);

if (bmi < 18.5) {
  console.log("Underweight");
} else if (bmi >= 18.5 && bmi <= 24.9) {
  console.log("Normal weight");
} else if (bmi >= 25 && bmi <= 29.9) {
  console.log("Overweight");
} else if (bmi >= 30) {
  console.log("Obese");
} else {
  console.log("Enter valid height and weight values in kg & metre units!");
}
