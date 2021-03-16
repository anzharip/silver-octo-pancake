import * as program from "./program";
import * as chai from "chai";

it("Test Case #1 lc-subsets", function () {
  chai
    .expect(program.subsets([1, 2, 3]))
    .to.have.deep.members([
      [],
      [1],
      [2],
      [1, 2],
      [3],
      [1, 3],
      [2, 3],
      [1, 2, 3],
    ]);
});
