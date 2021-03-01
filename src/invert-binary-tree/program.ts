// input
// * a binary tree

// output
// * invert the input binary tree
// * return binary tree
// * swap every left node in the tree for its corresponding right node
// * each BinaryTree node has an integer value, a left child node, and a right child node
//   * the child could be a BinaryTree instance, or null

// ds

// algo
// * post-order traversal, depth-first search
//   * implement the swap logic after traversing both left and right child node 
//   * perform recursive dfs if the child node is not null
// * dfs on left child if left child is not null
// * dfs on right child if the right child ir not null
// * swap left child and right child

// aux space
// * O(d), where d === tree depth

// time complex
// * O(n), where n === nodes in the tree


//                     1
//             2                    3
//     4          5          6          7
// 8     9

//                     1
//             2                    3
//     4          5          6          7
// 9     8

//                     1
//             2                    3
//     5          4          6          7
//             9     8

//                     1
//             2                    3
//     5          4          7          6
//             9     8


//                     1
//         3                    2                    
// 7            6        5          4          
//                             9     8


class BinaryTree {
  value: number;
  left: BinaryTree | null;
  right: BinaryTree | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export function invertBinaryTree(tree: BinaryTree | null) {
  // Write your code here.
  return dfsPostOrder(tree);
}

const dfsPostOrder = (tree: BinaryTree | null): BinaryTree | null => {
  if (tree) {
    if (tree.left) {
      dfsPostOrder(tree.left);
    }
    if (tree.right) {
      dfsPostOrder(tree.right);
    }
    [tree.left, tree.right] = [tree.right, tree.left];
  }
  return tree;
};
