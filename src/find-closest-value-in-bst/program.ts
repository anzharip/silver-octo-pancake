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

export function findClosestValueInBst(tree: BST, target: number) {
  // Write your code here.
  return helper(tree, target, tree.value);
}

function helper(tree: BST | null, target: number, closestValue: number) {
  let currentNode = tree;
  while (currentNode !== null) {
    if (
      Math.abs(target - closestValue) > Math.abs(target - currentNode.value)
    ) {
      closestValue = currentNode.value;
    }
    if (target > currentNode.value) {
      currentNode = currentNode.right;
    } else if (target < currentNode.value) {
      currentNode = currentNode.left;
    } else {
      break;
    }
  }

  return closestValue;
}
