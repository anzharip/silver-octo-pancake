import * as program from './program';
import * as chai from 'chai';

it('Test Case #1 single-cycle-check-8', function () {
  chai.expect(program.hasSingleCycle([2, 3, 1, -4, -4, 2])).to.deep.equal(true);
});
