// --------------------Task 01------------------
// adding an li element to nav ul
let navList = document.querySelector("nav ul");
let newLiElement = document.createElement("li");
newLiElement.innerHTML = `<a href="#">Hire Me</a>`;
navList.appendChild(newLiElement);
