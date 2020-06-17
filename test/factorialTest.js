/* Done by;
 Tusime Godwin
 Ineza Racheal 
 Opiyo Christopher */
const assertEqual = require("chai").assert;
const MathsService = require("../factorial");
const chai = require("chai");
const expect = chai.expect;
const mathsService = new MathsService();

describe("Factorial", function () {
  it("factorial should return correct value", function () {
    expect(mathsService.factorial(0)).to.equal(1);
    //assertEqual(1, 0);
  });

  it("factorial should return correct value", function () {
    expect(mathsService.factorial(1)).to.equal(1);
  });

  it("factorial should return correct value", function () {
    expect(mathsService.factorial(5)).to.equal(120);
  });
});
