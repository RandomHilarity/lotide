// TESTING FUNCTIONS

const assertEqual = function(actual, expected) {
  const Pass = `✅Assertion Passed: ${actual} === ${expected}`;
  const Fail = `🛑Assertion Failed: ${actual} !== ${expected}`;
  actual === expected ? console.log(Pass) : console.log(Fail);
};

// NEW EXERCISE FUNCTION

const findKeyByValue = function(allValues, searchValue) {
  for (let genre in allValues) {
    if (allValues[genre] === searchValue) {
      return genre;
    }
  }
};

// VALIDATION

const bestTVShowsByGenre = {
  // eslint-disable-next-line camelcase
  sci_fi : "The Expanse",
  comedy : "Brooklyn Nine-Nine",
  drama :  "The Wire"
};
  
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);