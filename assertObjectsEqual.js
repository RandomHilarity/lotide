// TESTING FUNCTIONS

let eqArrays = function(firstArray, secondArray) {
  let result = true;
  firstArray.length === secondArray.length ? "" : result = false;
  for (let i = 0; i < firstArray.length; i++) {
    result && firstArray[i] === secondArray[i] ? result = true : result = false;
  }
  return result;
};

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (let values in object1) {
    if (Array.isArray(object1[values]) && Array.isArray(object2[values])) {
      console.log(eqArrays(object1[values], object2[values]));
      if (eqArrays(object1[values], object2[values]) === false) {
        return false;
      }
    } else if (object1[values] !== object2[values]) {
      return false;
    }
  }
  return true;
};

// NEW EXERCISE FUNCTION

const assertObjectsEqual = function(actual, expected) {
  const inspect = require("util").inspect;
  console.log(`Example label: ${inspect(actual)}`);
  console.log(`Example label: ${inspect(expected)}`);
  eqObjects(actual, expected) ? console.log("The arrays match.") : console.log("The arrays do not match.");
};

// VALIDATION

const ab = { a: "1", b: "2"};
const ba = { b: "2", a: "1"};
assertObjectsEqual(ab, ba); // true

const abc = { a: "1", b: "2", c: "3"};
assertObjectsEqual(ab, abc); // false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc);

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, cd2);