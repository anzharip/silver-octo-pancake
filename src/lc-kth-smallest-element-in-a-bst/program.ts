// input
// * given the root of a binary search tree
// * and an integer k
// *

// output
// * return kth (1-indexed) smallest element in the tree

// constraint
// * number of nodes in the tree is n
// * 1 <= k <= n <= 10^4
// * 0 <= Node.val <= 10^4

// ds

// algo
// * the smallest element will be the left most node in the tree
// * one thing to do is to traverse and collect all node value into an array, and then sort it
//   * but that would be O(n log n)
//   * can i do that in linear
// * whatever happens, I will need to find the smallest value first as an anchor/starting point to compare the rest
// * assuming the BST definiton has no duplicate, we can use in order traversal to sort the value
// * when traversing and appending the value of the node to the value array
//   * when the length of the value array already reach k
//   * return value array[k - 1] as the result

// aus space
// * O(n), n is the number of the node

// time complex
// * O(n), n is the number of the node

// #####

// sample 1
// input: root = [3, 1, 4, null, 2], k = 1
// output: 1

// sample 2
// input: root = [5, 3, 6, 2, 4, null, null, 1] k = 3
// output: 3

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function kthSmallest(root: TreeNode | null, k: number): number {
  const path: number[] = [];
  dfsKthSmallest(root, k, path);
  return path[k - 1];
}

function dfsKthSmallest(tree: TreeNode | null, k: number, path: number[] = []) {
  if (path.length >= k) {
    return;
  } else {
    if (tree) {
      if (tree.left) {
        dfsKthSmallest(tree.left, k, path);
      }
      path.push(tree.val);
      if (tree.right) {
        dfsKthSmallest(tree.right, k, path);
      }
    }
  }
}
