// ------------------------------- task 1 -------------------------------
const courseLinksAll = document.querySelectorAll("a");
for (let course of courseLinksAll) {
  if (course.textContent.includes("2.0")) {
    course.style.display = "none";
  }
}

// ------------------------------- task 2 -------------------------------
const textInput = document.querySelector(".main__form-input");
const submitBtn = document.querySelector(".main__form-btn");

// enabling the input and btn
textInput.disabled = false;
submitBtn.disabled = false;

// adding back the languages in the left
submitBtn.addEventListener("click", () => {
  for (let course of courseLinksAll) {
    if (course.textContent.includes("2.0")) {
      course.style.display = "inline-block";
    }
  }
});
