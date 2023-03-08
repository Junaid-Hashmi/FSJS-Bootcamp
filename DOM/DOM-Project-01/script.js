// --------------------Task 01------------------
// adding an li element to nav ul
const navList = document.querySelector("nav ul");
let newLiElement = document.createElement("li");
newLiElement.innerHTML = `<a href="#">Hire Me</a>`;
navList.appendChild(newLiElement);

// hiding all social media icons
let footerIcons = document.querySelector("footer ul");
footerIcons.style.visibility = "hidden";

// ------------------Task 02------------------------
// hiding 'hire me' nav link
const navLiAll = navList.children;
navLiAll[navLiAll.length - 1].style.display = "none";

// changing search bar's placeholder text
const searchFieldInput = document.querySelector(".search-field input");
searchFieldInput.placeholder = "Search My Project";
