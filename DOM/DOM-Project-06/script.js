// 1 Logo change
const logo = document.querySelector(".logo");
logo.src = "./assets/ineuron-logo.png";

// 2 changing Premium price
const price = document.querySelector(".app_price span");
price.textContent = "$10";

// 3 adding Linkedin icon in footer
const footerSocial = document.querySelector(".footer_social");

// creating new div
let newDiv = document.createElement("div");
newDiv.classList.add("footer_social_ico");
newDiv.innerHTML = `<i class="fa-brands fa-linkedin"></i>`;
// appending
footerSocial.appendChild(newDiv);

console.log(footerSocial.innerHTML);
