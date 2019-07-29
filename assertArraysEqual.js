const eqArrays = require("./eqArrays");

let assertArraysEqual = function(firstArray, secondArray) {
  let output = "";
  eqArrays(firstArray, secondArray) ? output = "The arrays match." : output = "The arrays do not match.";
  return output;
};

module.exports = assertArraysEqual;