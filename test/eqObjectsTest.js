const eqObjects = require("../eqObjects.js");
const assert = require("chai").assert;

describe("#eqObjects", () => {
  it("should return true when arrays match", () => {
    assert.strictEqual(eqObjects({ a: "1", b: "2" }, { b: "2", a: "1"}), true);
  });

  it("should return false when arrays don't match", () => {
    assert.strictEqual(eqObjects({ a: "1", b: "2" }, { c: "3", b: "2", a: "1"}), false);
  });

  it("should return true when arrays match, including nesting", () => {
    assert.strictEqual(eqObjects({ c: "1", d: ["2", 3] }, { d: ["2", 3], c: "1" }), true);
  });
  
  it("should return false when arrays don't match, including nesting", () => {
    assert.strictEqual(eqObjects({ c: "1", d: ["2", 3] }, { c: "1", d: ["2", 3, 4] }), false);
  });
  
});