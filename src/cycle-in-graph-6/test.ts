// This file is initialized with a code version of this
// question's sample test case. Feel free to add, edit,
// or remove test cases in this file as you see fit!

import * as program from './program';
import * as chai from 'chai';

it('Test Case #1 cycle-in-graph-6', function () {
  const input = [[1, 3], [2, 3, 4], [0], [], [2, 5], []];
  const expected = true;
  const actual = program.cycleInGraph(input);
  chai.expect(actual).to.deep.equal(expected);
});

it('Test Case #2 cycle-in-graph-6', function () {
  const input = [[], [0, 3], [0], [1, 2]];
  const expected = true;
  const actual = program.cycleInGraph(input);
  chai.expect(actual).to.deep.equal(expected);
});

it('Test Case #3 cycle-in-graph-6', function () {
  const input = [[1], [2], [3], [], [0], [0], [6]];
  const expected = true;
  const actual = program.cycleInGraph(input);
  chai.expect(actual).to.deep.equal(expected);
});

