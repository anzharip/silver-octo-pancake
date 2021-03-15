// This file is initialized with a code version of this
// question's sample test case. Feel free to add, edit,
// or remove test cases in this file as you see fit!

import * as program from './program';
import * as chai from 'chai';

it('Test Case #1 reverse-words-in-string', function () {
  const input = 'AlgoExpert is the best!';
  const expected = 'best! the is AlgoExpert';
  const actual = program.reverseWordsInString(input);
  chai.expect(actual).to.deep.equal(expected);
});

it('Test Case #1 reverse-words-in-string', function () {
  const input = "a ab a";
  const expected = "a ab a";
  const actual = program.reverseWordsInString(input);
  chai.expect(actual).to.deep.equal(expected);
});