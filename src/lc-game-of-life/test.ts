import * as program from "./program";
import * as chai from "chai";

it("Test Case #1 lc-game-of-life", function () {
  const input = [
    [0, 1, 0],
    [0, 0, 1],
    [1, 1, 1],
    [0, 0, 0],
  ];
  const output = [
    [0, 0, 0],
    [1, 0, 1],
    [0, 1, 1],
    [0, 1, 0],
  ];
  program.gameOfLife(input);
  chai.expect(input).to.be.deep.equal(output);
});

it("Test Case #1 lc-game-of-life", function () {
  const input = [
    [1, 1],
    [1, 0],
  ];
  const output = [
    [1, 1],
    [1, 1],
  ];
  program.gameOfLife(input);
  chai.expect(input).to.be.deep.equal(output);
});

it("Test Case #1 lc-game-of-life", function () {
  const input = [[0, 1]];
  const output = [[0, 0]];
  program.gameOfLife(input);
  chai.expect(input).to.be.deep.equal(output);
});
