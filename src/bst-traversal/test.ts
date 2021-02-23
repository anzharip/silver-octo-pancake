// This file is initialized with a code version of this
// question's sample test case. Feel free to add, edit,
// or remove test cases in this file as you see fit!

import * as program from './program';
import * as chai from 'chai';

class BST {
  value: number;
  left: BST | null;
  right: BST | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

it('Test Case #1 bst-traversal', function () {
  const root = new BST(10);
  root.left = new BST(5);
  root.left.left = new BST(2);
  root.left.left.left = new BST(1);
  root.left.right = new BST(5);
  root.right = new BST(15);
  root.right.right = new BST(22);
  chai.expect(program.inOrderTraverse(root, [])).to.deep.equal([1, 2, 5, 5, 10, 15, 22]);
  chai.expect(program.preOrderTraverse(root, [])).to.deep.equal([10, 5, 2, 1, 5, 15, 22]);
  chai.expect(program.postOrderTraverse(root, [])).to.deep.equal([1, 2, 5, 5, 22, 15, 10]);
});

