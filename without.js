// OLD EXERCISE FUNCTION
  
let eqArrays = function(firstArray, secondArray) {
  let result = true;
  for (let i = 0; i < firstArray.length; i++) {
    result = true;
    result && firstArray[i] === secondArray[i] ? result = true : result = false;
  }
  return result;
};
    
let assertArraysEqual = function(eqFirstArray, eqSecondArray) {
  eqArrays(eqFirstArray, eqSecondArray) ? console.log("The arrays match.") : console.log("The arrays do not match.");
};

// NEW EXERCISE FUNCTION

let without = function(originalArray, removalArray) {
  let newArray = [];
  for (let i = 0; i < originalArray.length; i++) {
    if (removalArray.indexOf(originalArray[i]) === -1) {
      newArray.push(originalArray[i]);
    }
  }
  return newArray;
};

// TESTING

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
assertArraysEqual(without([1, 1, 2, 3, 4], [1, "2", "3"]), [2, 3, 4]);
assertArraysEqual(without([1, 2, 3, 4, 5], [1, "a", "b", "c", 2]), [3, 4, 5]);
assertArraysEqual(without([1, 1, 1, 1, 1], [1]), []);

const unmodified = [1, 2, 3];
without(unmodified, [1]);
assertArraysEqual(unmodified, [1, 2, 3]);