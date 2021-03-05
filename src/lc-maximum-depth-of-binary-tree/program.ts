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

class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function maxDepth(root: TreeNode | null): number {
  if (root === null) return 0;
  const maxDepth: { [key: string]: number } = {
    value: 0,
  };
  dfs(root, 0, maxDepth);
  return maxDepth.value;
}

const dfs = (
  tree: TreeNode,
  depth: number,
  maxDepth: { [key: string]: number }
) => {
  const currentDepth = depth + 1;

  if (tree.left) {
    dfs(tree.left, currentDepth, maxDepth);
  }
  if (tree.right) {
    dfs(tree.right, currentDepth, maxDepth);
  }
  if (currentDepth > maxDepth.value) {
    maxDepth.value = currentDepth;
  }
};
