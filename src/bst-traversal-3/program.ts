// input
// * three functions that take in BST and an empty array
//   * traverse the BST
//   * add its node values to the input array, and return that array 

// output
// * the three functions should traverse the BST using the in-order, pre-order, and post-order tree-traversal techniques respectively

// aux space
// * O(n) for the result array 

// time complex
// * O(n), for traversing all nodes in the tree



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

export function inOrderTraverse(tree: BST | null, array: number[] = []) {
  // Write your code here.
  if (tree) {
    if (tree.left) {
      inOrderTraverse(tree.left, array);
    }
    array.push(tree.value);
    if (tree.right) {
      inOrderTraverse(tree.right, array);
    }
  }
  return array;
}

export function preOrderTraverse(tree: BST | null, array: number[] = []) {
  // Write your code here.
  if (tree) {
    array.push(tree.value);
    if (tree.left) {
      preOrderTraverse(tree.left, array);
    }
    if (tree.right) {
      preOrderTraverse(tree.right, array);
    }
  }
  return array;
}

export function postOrderTraverse(tree: BST | null, array: number[] = []) {
  // Write your code here.
  if (tree) {
    if (tree.left) {
      postOrderTraverse(tree.left, array);
    }
    if (tree.right) {
      postOrderTraverse(tree.right, array);
    }
    array.push(tree.value);
  }
  return array;
}
