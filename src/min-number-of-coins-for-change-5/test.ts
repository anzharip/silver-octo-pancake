import * as program from './program';
import * as chai from 'chai';

it('Test Case #1 min-number-of-coins-for-change-5', function () {
  chai.expect(program.minNumberOfCoinsForChange(7, [1, 5, 10])).to.deep.equal(3);
});
