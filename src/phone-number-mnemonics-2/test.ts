// This file is initialized with a code version of this
// question's sample test case. Feel free to add, edit,
// or remove test cases in this file as you see fit!

import * as program from './program';
import * as chai from 'chai';

it('Test Case #1 phone-number-mnemonics-2', function () {
  const phoneNumber = '1905';
  const expected = ['1w0j', '1w0k', '1w0l', '1x0j', '1x0k', '1x0l', '1y0j', '1y0k', '1y0l', '1z0j', '1z0k', '1z0l'];
  const actual = program.phoneNumberMnemonics(phoneNumber);
  chai.expect(actual).to.deep.equal(expected);
});
