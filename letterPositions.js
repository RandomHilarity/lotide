// TESTING FUNCTIONS
  
let eqArrays = function(firstArray, secondArray) {
  let result = true;
  firstArray.length === secondArray.length ? "" : result = false;
  for (let i = 0; i < firstArray.length; i++) {
    result && firstArray[i] === secondArray[i] ? result = true : result = false;
  }
  return result;
};
  
let assertArraysEqual = function(eqFirstArray, eqSecondArray) {
  eqArrays(eqFirstArray, eqSecondArray) ? console.log("The arrays match.") : console.log("The arrays do not match.");
};
  
//assertArraysEqual([1, 2, 3], [1, 2, 3]);
//assertArraysEqual([1, 2, 3], [1, 2, "3"]);
//assertArraysEqual([3, 2, 1], [1, 2, 3]);

// NEW EXERCISE FUNCTION

const getAllIndexes = function(arr, letter) {
  let indexes = [];
  for (let i = 0; i < arr.length; i++)
    if (arr[i] === letter)
      indexes.push(i);
  return indexes;
};

const letterPositions = function(countString) {
  let finalResult = {};
  for (let letter of countString) {
    if (letter !== " ") {
      finalResult[letter] = getAllIndexes(countString, letter);
    }
  }
  return finalResult;
};

// EXPECTED RESULTS

const test1 = "hello";
const result1 = { h: [ 0, 6 ], e: [ 1, 7 ], l: [ 2, 3, 8, 9 ], o: [ 4, 10 ] };

const test2  = "Lighthouse in the house";
const result2 = {
  l: [0],
  i: [1, 11],
  g: [2],
  h: [3, 5, 15, 18],
  t: [4, 14],
  o: [6, 19],
  u: [7, 20],
  s: [8, 21],
  e: [9, 16, 22],
  n: [12]
};

assertArraysEqual(letterPositions(test1), result1);
assertArraysEqual(letterPositions(test2), result2);