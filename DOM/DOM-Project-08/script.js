//--------------------- task 1 -------------------------------
const asideSection = document.querySelector(".new");

// creating line
let hrNew = document.createElement("hr");
hrNew.classList.add("hr-line");

// creating h2
let h2New = document.createElement("h2");
h2New.classList.add("new-head");
h2New.textContent = "This is my custom heading";

// appending
asideSection.appendChild(hrNew);
asideSection.appendChild(h2New);
// enabling scroll
asideSection.style.overflowY = "scroll";

// New section border
asideSection.style.border = "3px solid hsl(5, 85%, 63%)";
asideSection.style.borderRadius = "6px";

//--------------------- task 2 -------------------------------
