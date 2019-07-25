// TESTING FUNCTION

const assertEqual = function(actual, expected) {
  const Pass = `✅Assertion Passed: ${actual} === ${expected}`;
  const Fail = `🛑Assertion Failed: ${actual} !== ${expected}`;
  actual === expected ? console.log(Pass) : console.log(Fail);
};

// NEW EXERCISE FUNCTION

const findKey = function(object, callback) {
  for (let names in object) {
    if (callback(object[names]) === true) {
      return names;
    }
  }
};

// TESTING AND VALIDATION

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), "noma");
  