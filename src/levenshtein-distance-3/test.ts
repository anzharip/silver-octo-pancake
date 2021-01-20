import * as program from './program';
import * as chai from 'chai';

it('Test Case #1 levenshtein-distance-3', function () {
  chai.expect(program.levenshteinDistance('abc', 'yabd')).to.deep.equal(2);
});
