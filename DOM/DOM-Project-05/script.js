// 1 - add 'Pro Subscription Button in navbar
const targetDiv = document.querySelector(".nav-center div:last-child");
// creating new button
let newBtn = document.createElement("a");
newBtn.textContent = "Pro Subscription";
newBtn.classList.add("btn");
// appending new btn
targetDiv.appendChild(newBtn);

// 2 - add 'Chinese' tag to recipes list
const tagsList = document.querySelector(".tags-container div");
// creating new tag
let newTag = document.createElement("a");
newTag.textContent = "Chinese (7)";
// appending
tagsList.appendChild(newTag);

// 3 - adding 6th card in recipe gallery
const recipeGallery = document.querySelector(".recipe-gallery");
// // creating new card
// let newCard = document.createElement("div");
// newCard.classList.add("card");
// newCard.textContent = "6th card";
// // appending
// recipeGallery.appendChild(newCard);
let firstCard = document.querySelector(".card");
// cloning the first card
let sixthCard = firstCard.cloneNode(true);
recipeGallery.appendChild(sixthCard);
