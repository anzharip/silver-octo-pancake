import * as program from "./program";
import * as chai from "chai";

it("Test Case #1 lc-sort-an-array", function () {
  const input = [5, 2, 3, 1];
  const output = [1, 2, 3, 5];
  chai.expect(program.sortArray(input)).to.deep.equal(output);
});

it("Test Case #1 lc-sort-an-array", function () {
  const input = [5, 1, 1, 3, 0, 0];
  const output = [0, 0, 1, 1, 3, 5];
  chai.expect(program.sortArray(input)).to.deep.equal(output);
});

it("Test Case #1 lc-sort-an-array", function () {
  const input = [-2, 3, -5];
  const output = [-5, -2, 3];
  chai.expect(program.sortArray(input)).to.deep.equal(output);
});
