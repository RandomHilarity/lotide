const findKeyByValue = require("../findKeyByValue.js");
const assert = require("chai").assert;

describe("#findKeyByValue", () => {
  it("should return `drama` for `The Wire` in the test array", () => {
    const bestTVShowsByGenre = {
      "sci_fi" : "The Expanse",
      "comedy" : "Brooklyn Nine-Nine",
      "drama" :  "The Wire"
    };
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama"); 
  });

  it("should return undefined when the value does not exist", () => {
    const bestTVShowsByGenre = {
      "sci_fi" : "The Expanse",
      "comedy" : "Brooklyn Nine-Nine",
      "drama" :  "The Wire"
    };
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "That 70's Show"), undefined);
  });
});