import * as program from "./program";
import * as chai from "chai";

it("Test Case #1 lc-top-k-frequent-elements", function () {
  chai
    .expect(program.topKFrequent([1, 1, 1, 2, 2, 3], 2))
    .to.have.members([1, 2]);
});

it("Test Case #1 lc-top-k-frequent-elements", function () {
  chai.expect(program.topKFrequent([1, 2], 2)).to.have.members([1, 2]);
});
