const eqArrays = require("./eqArrays");

let assertArraysEqual = function(eqFirstArray, eqSecondArray) {
  let output = "";
  eqArrays(eqFirstArray, eqSecondArray) ? output = "The arrays match." : output = "The arrays do not match.";
  return output;
};

module.exports = assertArraysEqual;