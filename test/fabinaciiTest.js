const chai = require("chai");
const assertArrays = require("chai-arrays");
const fibonacci = require("../fabinacii");
const expect = chai.expect;
chai.use(assertArrays);

describe("fibonacci", function () {
  it("Expect Fabinacii result to be an array", function () {
    expect(fibonacci([1, 2, 3])).to.be.array();
  });
});
