// This file is initialized with a code version of this
// question's sample test case. Feel free to add, edit,
// or remove test cases in this file as you see fit!

import * as program from './program';
import * as chai from 'chai';

it('Test Case #1 valid-starting-city-3', function () {
  const distances = [5, 25, 15, 10, 15];
  const fuel = [1, 2, 1, 0, 3];
  const mpg = 10;
  const expected = 4;
  const actual = program.validStartingCity(distances, fuel, mpg);
  chai.expect(actual).to.deep.equal(expected);
});