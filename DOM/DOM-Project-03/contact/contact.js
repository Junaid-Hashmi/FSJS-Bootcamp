let inputName = document.querySelector(".userName");
let inputEmail = document.querySelector(".userEmail");
let inputMessage = document.querySelector(".userMessage");
let outputName = document.querySelector(".enterName");
let outputEmail = document.querySelector(".enterMail");
let outputMessage = document.querySelector(".enterMessage");

document
  .querySelector('button[type="submit"]')
  .addEventListener("click", (e) => {
    e.preventDefault();
    outputName.value = inputName.value;
    outputEmail.value = inputEmail.value;
    outputMessage.value = inputMessage.value;
  });
