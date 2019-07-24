// TESTING FUNCTIONS
const assertEqual = function(actual, expected) {
  const Pass = `✅Assertion Passed: ${actual} === ${expected}`;
  const Fail = `🛑Assertion Failed: ${actual} !== ${expected}`;
  actual === expected ? console.log(Pass) : console.log(Fail);
};

// NEW EXERCISE

// allItems: an array of strings to look through
// itemsToCount: an object specifying what to count

const countOnly = function(allItems, itemsToCount) {
  let resultsObject = {};
  for (let name in itemsToCount) {
    let trueFalse = itemsToCount[name];
    if (trueFalse) {
      let counter = 0;
      for (let i = 0; i < allItems.length; i++) {
        if (name === allItems[i]) {
          counter ++;
          resultsObject[name] = counter;
        }
      }
    }
  }
  return resultsObject;
};

// TESTING

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];
  
const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
