import * as program from './program';
import * as chai from 'chai';

it('Test Case #1 max-subset-sum-no-adjacent-3', function () {
  chai.expect(program.maxSubsetSumNoAdjacent([75, 105, 120, 75, 90, 135])).to.deep.equal(330);
});
