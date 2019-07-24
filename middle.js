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

let middle = function(inputArray) {
  let i = inputArray.length;
  if ([0,1,2].indexOf(i) > -1) {
    return [];
  } else if (i % 2 !== 0) {
    return [inputArray[inputArray.length / 2 - 0.5]];
  } else {
    return [inputArray[inputArray.length / 2 - 1], inputArray[inputArray.length / 2]];
  }
};

assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1], []));
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);