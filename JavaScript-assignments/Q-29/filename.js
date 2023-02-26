const prompt = require("prompt-sync")({ sigint: true });

const file = prompt("File Name: ");

let dotIndex = file.lastIndexOf(".");

console.log(file.slice(dotIndex + 1));
