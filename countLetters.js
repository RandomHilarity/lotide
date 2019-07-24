// TESTING FUNCTIONS
const assertEqual = function(actual, expected) {
  const Pass = `✅Assertion Passed: ${actual} === ${expected}`;
  const Fail = `🛑Assertion Failed: ${actual} !== ${expected}`;
  actual === expected ? console.log(Pass) : console.log(Fail);
};
  
// NEW EXERCISE

const countLetters = function(stringToCount) {
  let lettersCounted = {};
  for (let letter of stringToCount) {
    letter !== " " && typeof lettersCounted[letter] !== "number" ? lettersCounted[letter] = 1 : letter !== " " ? lettersCounted[letter] = ++lettersCounted[letter] : "";
  }
  return lettersCounted;
};

// TESTING

const testAnswer = {l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1};
console.log(countLetters("Lighthouse in the house"));
console.log(testAnswer);