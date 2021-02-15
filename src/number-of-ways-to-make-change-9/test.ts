import * as program from './program';
import * as chai from 'chai';

it('Test Case #1 number-of-ways-to-make-change-9', function () {
  chai.expect(program.numberOfWaysToMakeChange(6, [1, 5])).to.deep.equal(2);
});

