// OLD EXERCISE FUNCTION
  
let eqArrays = function(firstArray, secondArray) {
  let result = true;
  for (let i = 0; i < firstArray.length; i++) {
    result = true;
    result && firstArray[i] === secondArray[i] ? result = true : result = false;
  }
  return result;
};

// NEW EXERCISE FUNCTION

let assertArraysEqual = function(eqFirstArray, eqSecondArray) {
  eqArrays(eqFirstArray, eqSecondArray) ? console.log("The arrays match.") : console.log("The arrays do not match.");
};

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [1, 2, "3"]);
assertArraysEqual([3, 2, 1], [1, 2, 3]);