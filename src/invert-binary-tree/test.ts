// This file is initialized with a code version of this
// question's sample test case. Feel free to add, edit,
// or remove test cases in this file as you see fit!

import * as program from './program';
import * as chai from 'chai';

class BinaryTree {
  value: number;
  left: BinaryTree | null;
  right: BinaryTree | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(values: number[], i = 0): BinaryTree {
    if (i >= values.length) return this;
    const queue: BinaryTree[] = [this];
    while (queue.length > 0) {
      let current = queue.shift()!;
      if (current.left === null) {
        current.left = new BinaryTree(values[i]);
        break;
      }
      queue.push(current.left);
      if (current.right === null) {
        current.right = new BinaryTree(values[i]);
        break;
      }
      queue.push(current.right);
    }
    this.insert(values, i + 1);
    return this;
  }

  invertedInsert(values: number[], i = 0): BinaryTree {
    if (i >= values.length) return this;
    const queue: BinaryTree[] = [this];
    while (queue.length > 0) {
      let current = queue.shift()!;
      if (current.right === null) {
        current.right = new BinaryTree(values[i]);
        break;
      }
      queue.push(current.right);
      if (current.left === null) {
        current.left = new BinaryTree(values[i]);
        break;
      }
      queue.push(current.left);
    }
    this.invertedInsert(values, i + 1);
    return this;
  }
}

it('Test Case #1 invert-binary-tree', function () {
  const tree = new BinaryTree(1).insert([2, 3, 4, 5, 6, 7, 8, 9]);
  const invertedTree = new BinaryTree(1).invertedInsert([2, 3, 4, 5, 6, 7, 8, 9]);
  program.invertBinaryTree(tree);
  chai.expect(tree).to.deep.equal(invertedTree);
});
