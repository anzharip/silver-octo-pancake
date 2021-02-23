// input 
// * a BST
// * an empty array
//   * this is used as a return value 
// * each BST node has these properties 
//   * value, an integer 
//   * left, child BST node or null
//   * right, child BST node or null
// * reading the prompt, do i need to verify the tree too? 
//   * didn't think so, but ask this to the interviewer later

// output
// * return traversed node.value
//   * in order
//   * pre order
//   * post order

// ds
// * array, on the input array to be returned 

// algo
// * depth first search
// * in-order
//   * in-order, as in in-between? 
//   * in-order characteristics generate an array of of ascending order
//   * left, current, right
//   * traverse child left, if tree.left === null do nothing
//   * if tree === not null, append the node.value to result array
//   * traverse child right, if tree.right === null do nothing
// * pre-order
//   * pre-order, as in before traversing any child, append/evaluate the current node value
//   * pre-order can be used to copy the tree, characteristics will result the value in descending order
//   * it is topologically sorted? because the root is processed before the childs? 
//   * current node, left, right
//   * if tree === not null, append the node.value to result array
//   * traverse child left, if tree.left === null do nothing
//   * traverse child right, if tree.right === null do nothing
// * post-order 
//   * post-order, as in after traversing all child, append/evaluate the current node value
//   * post order can be used to delete the tree
//   * left, right, current node
//   * traverse child left, if tree.left === null do nothing
//   * traverse child right, if tree.right === null do nothing
//   * if tree === not null, append the node.value to result array

// aux space
// * the empty array to accumulate all the node.value

// time complexity
// * O(n), n = all node in the BST

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

export function inOrderTraverse(tree: BST | null, array: number[]) {
  // Write your code here.
  if (tree?.left) {
    inOrderTraverse(tree.left, array);
  }
  if (tree) {
    array.push(tree.value);
  }
  if (tree?.right) {
    inOrderTraverse(tree.right, array);
  }
  return array;
}

export function preOrderTraverse(tree: BST | null, array: number[]) {
  // Write your code here.
  if (tree) {
    array.push(tree.value);
  }
  if (tree?.left) {
    preOrderTraverse(tree.left, array);
  }
  if (tree?.right) {
    preOrderTraverse(tree.right, array);
  }
  return array;
}

export function postOrderTraverse(tree: BST | null, array: number[]) {
  // Write your code here.
  if (tree?.left) {
    postOrderTraverse(tree.left, array);
  }
  if (tree?.right) {
    postOrderTraverse(tree.right, array);
  }
  if (tree) {
    array.push(tree.value);
  }
  return array;
}
