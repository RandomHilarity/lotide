const countOnly = require("../countOnly");
const assert = require("chai").assert;

const testNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const searchNames = { "Jason": true, "Karima": true, "Fang": true };

describe("#countOnly", () => {
  it("should return 1 from {'Jason': true, 'Karima': true, 'Fang': true } for Jason", () => {
    assert.deepEqual(countOnly(testNames, searchNames), {"Jason": 1, "Fang": 2});
  });
  
  it("should return undefined from {'Jason': true, 'Karima': true, 'Fang': true } for Karima", () => {
    assert.deepEqual(countOnly(testNames, { "Karima": true }), undefined);
  });
});