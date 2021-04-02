import * as program from "./program";
import * as chai from "chai";

it("Test Case #1 lc-kth-largest-element-in-an-array-2", function () {
  const input = [3, 2, 3, 1, 2, 4, 5, 5, 6];
  const k = 4;
  const output = 4;
  chai.expect(program.findKthLargest(input, k)).to.eq(output);
});

it("Test Case #1 lc-kth-largest-element-in-an-array-2", function () {
  const input = [5, 2, 4, 1, 3, 6, 0];
  const k = 4;
  const output = 3;
  chai.expect(program.findKthLargest(input, k)).to.eq(output);
});
