// TEST FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  const Pass = `✅Assertion Passed: ${actual} === ${expected}`;
  const Fail = `🛑Assertion Failed: ${actual} !== ${expected}`;
  actual === expected ? console.log(Pass) : console.log(Fail);
};

const head = function(array) {
  return array[0];
};

console.log(head([1, 2, 3]));

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Wrong!");
assertEqual(head([]), "Hello");