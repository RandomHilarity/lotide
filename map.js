// TESTING FUNCTIONS

let eqArrays = function(firstArray, secondArray) {
  let result = true;
  firstArray.length === secondArray.length ? "" : result = false;
  for (let i = 0; i < firstArray.length; i++) {
    result && firstArray[i] === secondArray[i] ? result = true : result = false;
  }
  return result;
};
  
let assertArraysEqual = function(eqFirstArray, eqSecondArray) {
  eqArrays(eqFirstArray, eqSecondArray) ? console.log("The arrays match.") : console.log("The arrays do not match.");
};

// EXCERCISE FUNCTION

const map = function(array, callbackFunc) {
  const results = [];
  for (let item of array) {
    results.push(callbackFunc(item));
  }
  return results;
};

// VALIDATION AND TESTING

const words = ["ground", "control", "to", "major", "tom"];

const results1 = map(words, word => word[0]);
const results2 = map(words, word => `${word}` + `${word}`);
const results3 = map(words, word => word.length);

assertArraysEqual(results1, ["g", "c", "t", "m", "t"]);
assertArraysEqual(results2, ["groundground", "controlcontrol", "toto", "majormajor", "tomtom"]);
assertArraysEqual(results3, [6, 7, 2, 5, 3]);