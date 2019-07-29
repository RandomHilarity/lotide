const countLetters = require("../countLetters.js");
const assert = require("chai").assert;

describe("#countLetters", () => {
  
  it("should return { 'h': 1, 'e': 1, 'l': 2, 'o': 1 } when given `hello`", () => {
    assert.deepEqual(countLetters("hello"), {'h': 1, 'e': 1, 'l': 2, 'o': 1});
  });

  it("should return the correct answer when given `lighthouse in the house`", () => {
    assert.deepEqual(countLetters("lighthouse in the house"), {l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1});
  });
});