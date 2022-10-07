const words = require("./wordle");

const yellowLetters = [];
const redLetters = [];
// const greenLetters = { 1: "?", 2: "?", 3: "?", 4: "?", 5: "?" };

wordleSorter = (yellows, reds) => {
  let possibles = [];
  for (let i = 0; i < words.length; i++) {
    if (
      yellows.every((letter) => words[i].includes(letter)) &&
      !possibles.includes(words[i]) //every yellow is included and not already in possibles array
    ) {
      possibles.push(words[i]);
    }
  }
  console.log(possibles, "POSSIBLES");
  let excludingReds = [];
  for (let j = 0; j < possibles.length; j++) {
    if (
      !reds.some((letter) => possibles[j].includes(letter)) &&
      !excludingReds.includes(possibles[j])
      //if none (opposite of some) of the redLetters are included in possibles[j] AND the word isnt already in the array
    ) {
      excludingReds.push(possibles[j]);
    }
  }
  console.log(excludingReds, "EXC REDS");
  let final = [];
  for (let k = 0; k < excludingReds.length; k++) {
    if (
      excludingReds[k][0] === "b" &&
      excludingReds[k][1] === "l" &&
      excludingReds[k][2] === "o" &&
      excludingReds[k][4] === "e"
      // excludingReds[k][3] === "l"
    ) {
      final.push(excludingReds[k]);
    }
  }
  console.log(final, "FINAL");
};
wordleSorter(yellowLetters, redLetters);
