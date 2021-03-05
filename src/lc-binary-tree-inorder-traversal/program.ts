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

function inorderTraversal(root: TreeNode | null): number[] {
  const values: number[] = [];
  dfsInorder(root, values);
  return values;
}

const dfsInorder = (tree: TreeNode | null, values: number[]) => {
  if (tree) {
    if (tree.left) {
      dfsInorder(tree.left, values);
    }
    values.push(tree.val);
    if (tree.right) {
      dfsInorder(tree.right, values);
    }
  }
};
