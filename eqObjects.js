const eqArrays = require("./eqArrays.js");

// NEW EXERCISE FUNCTION

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (let values in object1) {
    if (Array.isArray(object1[values]) && Array.isArray(object2[values])) {
      if (eqArrays(object1[values], object2[values]) === false) {
        return false;
      }
    } else if (object1[values] !== object2[values]) {
      return false;
    }
  }
  return true;
};

module.exports = eqObjects;