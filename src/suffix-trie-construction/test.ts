// This file is initialized with a code version of this
// question's sample test case. Feel free to add, edit,
// or remove test cases in this file as you see fit!

import * as program from './program';
import * as chai from 'chai';

it('Test Case #1 suffix-trie-construction', function () {
  const trie = new program.SuffixTrie('babc');
  const expected = {
    c: {'*': true},
    b: {
      c: {'*': true},
      a: {b: {c: {'*': true}}},
    },
    a: {b: {c: {'*': true}}},
  };
  chai.expect(trie.root).to.deep.equal(expected);
  chai.expect(trie.contains('abc')).to.deep.equal(true);
});
