// This file is initialized with a code version of this
// question's sample test case. Feel free to add, edit,
// or remove test cases in this file as you see fit!

import * as program from './program';
import * as chai from 'chai';

function testMinMaxPeek(min: number, max: number, peek: number, stack: program.MinMaxStack) {
  chai.expect(stack.getMin()).to.deep.equal(min);
  chai.expect(stack.getMax()).to.deep.equal(max);
  chai.expect(stack.peek()).to.deep.equal(peek);
}

it('Test Case #1 min-max-stack-construction', function () {
  const stack = new program.MinMaxStack();
  stack.push(5);
  testMinMaxPeek(5, 5, 5, stack);
  stack.push(7);
  testMinMaxPeek(5, 7, 7, stack);
  stack.push(2);
  testMinMaxPeek(2, 7, 2, stack);
  chai.expect(stack.pop()).to.deep.equal(2);
  chai.expect(stack.pop()).to.deep.equal(7);
  testMinMaxPeek(5, 5, 5, stack);
});
