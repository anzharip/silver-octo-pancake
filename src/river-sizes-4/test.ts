import * as program from './program';
import * as chai from 'chai';

it('Test Case #1 river-sizes-4', function () {
  const testInput = [
    [1, 0, 0, 1, 0],
    [1, 0, 1, 0, 0],
    [0, 0, 1, 0, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 0],
  ];
  const expected = [1, 2, 2, 2, 5];
  chai.expect(program.riverSizes(testInput).sort((a, b) => a - b)).to.deep.equal(expected);
});
