import * as program from "./program";
import * as chai from "chai";

it("Test Case #1 lc-find-the-duplicate-number", function () {
  const input = [1, 3, 4, 2, 2];
  const output = 2;

  chai.expect(program.findDuplicate(input)).to.equal(output);
});
