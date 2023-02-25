const prompt = require("prompt-sync")({ sigint: true });

const month = prompt("Enter a month: ");

if (month == "September" || month == "October" || month == "November") {
  console.log("Season: Autumn");
} else if (month == "December" || month == "January" || month == "February") {
  console.log("Season: Winter");
} else if (month == "March" || month == "April" || month == "May") {
  console.log("Season: Spring");
} else if (month == "June" || month == "July" || month == "August") {
  console.log("Season: Summer");
} else {
  console.log("Please enter a valid month");
}
