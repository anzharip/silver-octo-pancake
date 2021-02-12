// This file is initialized with a code version of this
// question's sample test case. Feel free to add, edit,
// or remove test cases in this file as you see fit!

import * as program from './program';
import * as chai from 'chai';

it('Test Case #1 kadanes-algorithm', function () {
  chai.expect(program.kadanesAlgorithm([3, 5, -9, 1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1, -5, 4])).to.deep.equal(19);
});

it('Test Case #2 kadanes-algorithm', function () {
  chai.expect(program.kadanesAlgorithm([1, 3, -10, 4, 5])).to.deep.equal(9);
});
