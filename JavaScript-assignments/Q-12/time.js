const now = new Date();

// YYYY-MM-DD HH:mm
console.log(
  `${now.getFullYear()}-${now.getMonth()}-${now.getDate()} ${now.getHours()}:${now.getMinutes()}`
);

// DD-MM-YYYY HH:mm
console.log(
  `${now.getDate()}-${now.getMonth()}-${now.getFullYear()} ${now.getHours()}:${now.getMinutes()}`
);

// DD/MM/YYYY HH:mm
console.log(
  `${now.getDate()}/${now.getMonth()}/${now.getFullYear()} ${now.getHours()}:${now.getMinutes()}`
);
