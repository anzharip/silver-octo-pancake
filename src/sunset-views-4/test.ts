// This file is initialized with a code version of this
// question's sample test case. Feel free to add, edit,
// or remove test cases in this file as you see fit!

import * as program from './program';
import * as chai from 'chai';

it('Test Case #1 sunset-views-4', function () {
  const buildings = [3, 5, 4, 4, 3, 1, 3, 2];
  const direction = program.Direction.East;
  const expected = [1, 3, 6, 7];
  const actual = program.sunsetViews(buildings, direction);
  chai.expect(actual).to.deep.equal(expected);
});
