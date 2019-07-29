const assertArraysEqual = require("../assertArraysEqual");

console.log("Do match. " + assertArraysEqual([1, 2, 3], [1, 2, 3]));
console.log("Do not match. " + assertArraysEqual([1, 2, 3], [1, 2, "3"]));
console.log("Do not match. " + assertArraysEqual([3, 2, 1], [1, 2, 3]));