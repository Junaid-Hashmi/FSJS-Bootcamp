const allUnitStats = document.querySelectorAll(".clash-card__unit-stats");
const barbarianUnitStats = document.querySelector(
  ".clash-card__unit-stats--barbarian"
);
const archerUnitStats = document.querySelector(
  ".clash-card__unit-stats--archer"
);
const giantUnitStats = document.querySelector(".clash-card__unit-stats--giant");
const goblinUnitStats = document.querySelector(
  ".clash-card__unit-stats--goblin"
);
const wizardUnitStats = document.querySelector(
  ".clash-card__unit-stats--wizard"
);

// Setting all stats text color to white
for (let stats of allUnitStats) {
  stats.style.color = "#fff";
}
const costTexts = document.querySelectorAll(
  ".clash-card__unit-stats .no-border"
);
for (let cost of costTexts) {
  cost.style.color = "#fff";
}

// changing unit stats bgc
barbarianUnitStats.style.backgroundColor = "#ec9b3b";
archerUnitStats.style.backgroundColor = "#ee5487";
giantUnitStats.style.backgroundColor = "#f6901a";
goblinUnitStats.style.backgroundColor = "#82bb30";
wizardUnitStats.style.backgroundColor = "#4facff";
