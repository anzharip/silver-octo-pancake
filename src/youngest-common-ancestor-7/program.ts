// input
// * three inputs
// * all an instances of AncestralTree
//   * have an ancestor property pointing to their youngest ancestor
// * first input is the top ancestor in the ancestral tree
//   * top ancestor === has no ancestor, it's ancestor is null
// * other two inputs is the descendants in the ancestral tree

// output
// * return the youngest common ancestor to the two descendants
// * AncestralTree object
// * a descendant could be an ancestor of other descendant

// cases
// * no common ancestor? not possible, the top ancestor is the common ancestor
// * common ancestor under the depth of the top ancestor
// * one of the descendant is an ancestor
// * both descendant point to the same node

// ds
// * tree

// algo
// * find out the depth of descendant one and two relative to the top ancestor
// * find out the deepest descendant
// * bring out the deepest descendant to be the same level of the highest descendant
// * trace back both descendant together upward toward the top ancestor until they find the common ancestor
//   * the youngest common ancestor could be the top ancestor, or the node deeper than the top ancestor

// recursive:
// * iterative should work
// * recursive usually incurs aux space, during the program execution the memory for the variables is used until the call stack is finished
// * usually either related to the depth of the call stack

// aux
// * no aux

// complexities
// * time O(d), d = depth of the tree
// * space O(1) constant

// This is an input class. Do not edit.
class AncestralTree {
  name: string;
  ancestor: AncestralTree | null;

  constructor(name: string) {
    this.name = name;
    this.ancestor = null;
  }
}

export function getYoungestCommonAncestor(
  topAncestor: AncestralTree,
  descendantOne: AncestralTree,
  descendantTwo: AncestralTree
) {
  // Write your code here.
  let depthDescendantOne = getDepth(descendantOne, topAncestor);
  let depthDescendantTwo = getDepth(descendantTwo, topAncestor);
  const depthDifference = Math.abs(depthDescendantOne - depthDescendantTwo);
  if (depthDescendantOne > depthDescendantTwo) {
    return traverse(descendantOne, descendantTwo, depthDifference);
  } else {
    return traverse(descendantTwo, descendantOne, depthDifference);
  }
}

const getDepth = (
  descendant: AncestralTree,
  topAncestor: AncestralTree
): number => {
  let depth = 0;
  while (descendant !== topAncestor) {
    descendant = descendant.ancestor!;
    depth++;
  }
  return depth;
};

const traverse = (
  deeperDescendant: AncestralTree,
  higherDescendant: AncestralTree,
  depthDifference: number
): AncestralTree => {
  while (depthDifference !== 0) {
    deeperDescendant = deeperDescendant.ancestor!;
    depthDifference--;
  }
  while (deeperDescendant !== higherDescendant) {
    deeperDescendant = deeperDescendant.ancestor!;
    higherDescendant = higherDescendant.ancestor!;
  }
  return deeperDescendant;
};
