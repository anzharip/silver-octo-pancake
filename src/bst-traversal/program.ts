// input 
// * BST class

// output
// * array of elements utilizing inOrderTraverse
// * array of elements utilizing preOrderTraverse
// * array of elements utilizing postOrderTraverse

// ds

// algo
// * all of them should be dfs
// * inOrderTraverse
//   * create a recursive function
//   * input is tree
//   * another input is array to accumulate result
//   * perform dfs for each children
//     * if a child is null, do nothing
//   * after performing dfs on the left children, append current node.value to result array
// * preOrderTraverse
//   * before performing dfs on the left and right children, append current node.value to result array
// * postOrderTraverse
//   * after performing dfs on the left and right children, append current node.value to result array

// aux space
// * the stack utilized in recursive function
// * the depth of the the tree 

// complexities
// * O(n), n = number of tree nodes
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
