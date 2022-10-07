const words = require("./wordle");

// console.log(words);

let contains1 = ["x"];
// let first = [];
// let second = [];
// let third = [];
// let fourth = [];
// let fith = [];

let possible = [];
for (let i = 0; i < words.length; i++) {
  if (words[i].indexOf(contains1) > -1) {
    possible.push(words[i]);
  }
}
console.log(possible);
