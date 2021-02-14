import * as program from './program';
import * as chai from 'chai';

it('Test Case #1 longest-palindromic-substring-10', function () {
  chai.expect(program.longestPalindromicSubstring('abaxyzzyxf')).to.deep.equal('xyzzyx');
});
