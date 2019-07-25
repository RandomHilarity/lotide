// assertEqual FUNCTION IMPLEMENTATION

const assertEqual = function(actual, expected) {
  const Pass = `✅Assertion Passed: ${actual} === ${expected}`;
  const Fail = `🛑Assertion Failed: ${actual} !== ${expected}`;
  actual === expected ? console.log(Pass) : console.log(Fail);
};

// EXERCISE FUNCTION

let eqArrays = function(firstArray, secondArray) {
  let result = true;
  firstArray.length === secondArray.length ? "" : result = false;
  for (let i = 0; i < firstArray.length; i++) {
    result && firstArray[i] === secondArray[i] ? result = true : result = false;
  }
  return result;
};

// TESTING

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => false
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => false