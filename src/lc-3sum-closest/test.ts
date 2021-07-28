import * as chai from "chai";
import * as program from "./program";

it("Test Case #1 lc-3sum-closest", function () {
  const nums = [-1, 2, 1, -4];
  const target = 1;
  const answer = 2;

  chai.expect(program.threeSumClosest(nums, target)).to.equal(answer);
});
