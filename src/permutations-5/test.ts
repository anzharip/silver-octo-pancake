// This file is initialized with a code version of this
// question's sample test case. Feel free to add, edit,
// or remove test cases in this file as you see fit!

import * as program from './program';
import * as chai from 'chai';

it('Test Case #4 permutations-5', function () {
  const perms = program.getPermutations([1, 2, 3]);
  chai.expect(perms.length).to.deep.equal(6);
  chai.expect(perms).to.deep.include([1, 2, 3]);
  chai.expect(perms).to.deep.include([1, 3, 2]);
  chai.expect(perms).to.deep.include([2, 1, 3]);
  chai.expect(perms).to.deep.include([2, 3, 1]);
  chai.expect(perms).to.deep.include([3, 1, 2]);
  chai.expect(perms).to.deep.include([3, 2, 1]);
});
