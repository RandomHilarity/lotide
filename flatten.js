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

let flatten = function(complexArray) {
  let newArray = [];
  for (let i = 0; i < complexArray.length; i++) {
    if (!Array.isArray(complexArray[i])) {
      newArray.push(complexArray[i]);
    } else {
      for (let j = 0; j < complexArray[i].length; j++) {
        newArray.push(complexArray[i][j]);
      }
    }
  }
  return newArray;
};

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);