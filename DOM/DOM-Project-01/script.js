// --------------------Task 01------------------
// adding an li element to nav ul
let navList = document.querySelector("nav ul");
let newLiElement = document.createElement("li");
newLiElement.innerHTML = `<a href="#">Hire Me</a>`;
navList.appendChild(newLiElement);

// hiding all social media icons
let footerIcons = document.querySelector("footer ul");
footerIcons.style.visibility = "hidden";
