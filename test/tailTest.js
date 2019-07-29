const tail = require("../tail.js");
const assertEqual = require("../assertEqual.js");

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
console.log("✅✅ " + assertEqual(tail(words).length, 2)); // no need to capture the return value since we are not checking it
console.log("✅✅ " + assertEqual(words.length, 3)); // original array should still have 3 elements!