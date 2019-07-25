// TESTING FUNCTIONS

const assertEqual = function(actual, expected) {
  const Pass = `✅Assertion Passed: ${actual} === ${expected}`;
  const Fail = `🛑Assertion Failed: ${actual} !== ${expected}`;
  actual === expected ? console.log(Pass) : console.log(Fail);
};

let eqArrays = function(firstArray, secondArray) {
  let result = true;
  firstArray.length === secondArray.length ? "" : result = false;
  for (let i = 0; i < firstArray.length; i++) {
    result && firstArray[i] === secondArray[i] ? result = true : result = false;
  }
  return result;
};

// NEW EXERCISE FUNCTION

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!

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

// VALIDATION

const ab = { a: "1", b: "2"};
const ba = { b: "2", a: "1"};
assertEqual(eqObjects(ab, ba), true); // true

const abc = { a: "1", b: "2", c: "3"};
assertEqual(eqObjects(ab, abc), false); // false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true);

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false);
