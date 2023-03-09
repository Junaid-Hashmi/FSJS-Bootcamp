// -------------------------------Task 2-------------------------------------
// adding a new accordion section 'skills'
const accordionWrapper = document.querySelector(".accordian-wrapper");
let newAccordion = document.createElement("div");
newAccordion.classList.add("accordian");
accordionWrapper.appendChild(newAccordion);

let newh3 = document.createElement("h3");
let newText = document.createElement("p");

newh3.textContent = "Skills";
newText.textContent =
  "I possess a good command over the Full Stack Development technologies like MERN which can be seen in my work over Github.";

newAccordion.appendChild(newh3);
newAccordion.appendChild(newText);
console.log(accordionWrapper.innerHTML);

// -------------------------------Task 1-------------------------------------
// changing bgc of all accordion headings
let h3All = document.querySelectorAll("h3");
for (let heading of h3All) {
  heading.style.backgroundColor = "#dadaf8";
}

// ------------------------------------------------------------------------
let accordian = document.querySelectorAll(".accordian h3");
accordian.forEach((element) => {
  element.addEventListener("click", () => {
    let para = element.nextElementSibling;
    if (para.style.display === "block") {
      para.style.display = "none";
    } else {
      para.style.display = "block";
    }
  });
});
