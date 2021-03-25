import * as program from "./program";
import * as chai from "chai";

it("Test Case #1 lc-rotate-image", function () {
  const matrix = [
    [5, 1, 9, 11],
    [2, 4, 8, 10],
    [13, 3, 6, 7],
    [15, 14, 12, 16],
  ];
  program.rotate(matrix);
  chai.expect(matrix).to.have.deep.members([
    [15, 13, 2, 5],
    [14, 3, 4, 1],
    [12, 6, 8, 9],
    [16, 7, 10, 11],
  ]);
});

it("Test Case #1 lc-rotate-image", function () {
  const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
  program.rotate(matrix);
  chai.expect(matrix).to.have.deep.members([
    [7, 4, 1],
    [8, 5, 2],
    [9, 6, 3],
  ]);
});

it("Test Case #1 lc-rotate-image", function () {
  const matrix = [
    [1, 2],
    [3, 4],
  ];
  program.rotate(matrix);
  chai.expect(matrix).to.have.deep.members([
    [3, 1],
    [4, 2],
  ]);
});

it("Test Case #1 lc-rotate-image", function () {
  const matrix = [[1]];
  program.rotate(matrix);
  chai.expect(matrix).to.have.deep.members([[1]]);
});
