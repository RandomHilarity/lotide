const findKey = require("../findKey.js");
const assert = require("chai").assert;

describe("findKey", () => {
  it("should return first value found for the provided key, `noma` for `stars: 2`", () => {
    assert.strictEqual(findKey({
      "Blue Hill": { stars: 1 },
      "Akaleri":   { stars: 3 },
      "noma":      { stars: 2 },
      "elBulli":   { stars: 3 },
      "Ora":       { stars: 2 },
      "Akelarre":  { stars: 3 }
    }, x => x.stars === 2), "noma");
  });
});