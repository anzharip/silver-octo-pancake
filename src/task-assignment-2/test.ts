// This file is initialized with a code version of this
// question's sample test case. Feel free to add, edit,
// or remove test cases in this file as you see fit!

import * as program from "./program";
import * as chai from "chai";

it("Test Case #1 task-assignment-2", function () {
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
