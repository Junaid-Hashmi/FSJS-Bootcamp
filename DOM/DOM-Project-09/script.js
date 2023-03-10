// task 01
const title = document.querySelector("h1");
title.style.color = "red";
title.style.fontFamily = "serif";

// task 02
title.style.color = "hsl(212, 21%, 14%)";
title.style.fontFamily = "Fraunces";

// add to cart button hover
const btn = document.querySelector(".add-to-cart");
btn.addEventListener("mouseover", () => {
  btn.style.backgroundColor = "red";
});
