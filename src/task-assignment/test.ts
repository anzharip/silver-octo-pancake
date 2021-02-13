// This file is initialized with a code version of this
// question's sample test case. Feel free to add, edit,
// or remove test cases in this file as you see fit!

import * as program from "./program";
import * as chai from "chai";

it("Test Case #1 task-assignment", function () {
  const k = 3;
  const tasks = [1, 3, 5, 3, 1, 4];
  const expected = [
    [4, 2],
    [0, 5],
    [3, 1],
  ];
  const actual = program.taskAssignment(k, tasks);
  chai.expect(actual).to.deep.equal(expected);
});

it("Test Case #5 task-assignment", function () {
  const k = 7;
  const tasks = [2, 1, 3, 4, 5, 13, 12, 9, 11, 10, 6, 7, 14, 8];
  const expected = [
    [1, 12],
    [0, 5],
    [2, 6],
    [3, 8],
    [4, 9],
    [10, 7],
    [11, 13],
  ];
  const actual = program.taskAssignment(k, tasks);
  chai.expect(actual).to.deep.equal(expected);
});
