// This file is initialized with a code version of this
// question's sample test case. Feel free to add, edit,
// or remove test cases in this file as you see fit!

import * as program from './program';
import * as chai from 'chai';

it('Test Case #1 two-number-sum', function () {
  const output = program.twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10);
  chai.expect(output.length === 2).to.deep.equal(true);
  chai.expect(output.includes(11)).to.deep.equal(true);
  chai.expect(output.includes(-1)).to.deep.equal(true);
});