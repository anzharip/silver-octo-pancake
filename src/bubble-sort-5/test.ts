// This file is initialized with a code version of this
// question's sample test case. Feel free to add, edit,
// or remove test cases in this file as you see fit!

import * as program from './program';
import * as chai from 'chai';

it('Test Case #1 bubble-sort-5', function () {
  const input = [8, 5, 2, 9, 5, 6, 3];
  chai.expect(program.bubbleSort(input)).to.deep.equal([2, 3, 5, 5, 6, 8, 9]);
});
