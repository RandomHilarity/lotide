const tail = require("../tail.js");
const assert = require("chai").assert;

describe("#tail", () => {
  it("should return ['Lighthouse', 'Labs'] when given array [`Yo Yo`, `Lighthouse`, `Labs`]", () => {
    assert.deepEqual(tail([`Yo Yo`, `Lighthouse`, `Labs`]), [`Lighthouse`, `Labs`]);
  });

  it("should not modify the original array", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    tail(words);
    assert.strictEqual(words.length, 3);
  });
});