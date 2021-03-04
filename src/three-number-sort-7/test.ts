// This file is initialized with a code version of this
// question's sample test case. Feel free to add, edit,
// or remove test cases in this file as you see fit!

import * as program from './program';
import * as chai from 'chai';

it('Test Case #1 three-number-sort-7', function () {
  const array = [1, 0, 0, -1, -1, 0, 1, 1];
  const order = [0, 1, -1];
  const expected = [0, 0, 0, 1, 1, 1, -1, -1];
  const actual = program.threeNumberSort(array, order);
  chai.expect(actual).to.deep.equal(expected);
});
