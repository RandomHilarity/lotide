const assertEqual = function(actual, expected) {
  const Pass = `✅✅ Passed: ${actual} === ${expected}`;
  const Fail = `🛑🛑 Failed: ${actual} !== ${expected}`;
  let output = "";
  actual === expected ? output = Pass : output = Fail;
  return output;
};

module.exports = assertEqual;