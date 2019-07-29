const assertEqual = function(actual, expected) {
  const Pass = `✅Assertion Passed: ${actual} === ${expected}`;
  const Fail = `🛑Assertion Failed: ${actual} !== ${expected}`;
  let output = "";
  actual === expected ? output = Pass : output = Fail;
  return output;
};

module.exports = assertEqual;