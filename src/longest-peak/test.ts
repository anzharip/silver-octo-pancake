// This file is initialized with a code version of this
// question's sample test case. Feel free to add, edit,
// or remove test cases in this file as you see fit!

import * as program from './program';
import * as chai from 'chai';

it('Test Case #1 longest-peak', function () {
  const array = [1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3];
  const expected = 6;
  chai.expect(program.longestPeak(array)).to.deep.equal(expected);
});

it('Test Case #1 longest-peak', function () {
  const array = [1, 3, 2];
  const expected = 3;
  chai.expect(program.longestPeak(array)).to.deep.equal(expected);
});

it('Test Case #1 longest-peak', function () {
  const array = [1, 2, 3, 2, 1, 1];
  const expected = 5;
  chai.expect(program.longestPeak(array)).to.deep.equal(expected);
});
