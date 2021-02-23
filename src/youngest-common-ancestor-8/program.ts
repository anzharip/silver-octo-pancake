// input 
// * three input, type AncestralTree
//   * have ancestor property poting to their youngest ancestor
// * first input
//   * is the top ancestor in an ancestral tree
//   * this instance has no ancestor
//   * the ancestor points to null
// * input two and three
//   * descendants in the ancestral tree


// output 
// * returns youngest common ancestor to the two descendants, type AncestralTree
// * a descendant can be considered as an ancestor
//  * e.g. youngest common ancestor of node A and node B, can be node A

// ds 

// algo
// * make descendant one and two level in terms of their depth relative to the topAncestor
//   * track the depth of descendantOne and descendantTwo
//   * find the diff of the depth, and move the deepestDescendant one ancestor at a time while decrementing the diff
// * after they are level, trace back the descendantOne and descendantTwo one ancestor at a time toward the topAncestor, and stop after they are pointing to the same AncestralTree node
// * return the either the descendantOne or descendantTwo

// aux space
// * constant

// time complexity
// * depth of the tree

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
  const depthOne = getDepth(topAncestor, descendantOne);
  const depthTwo = getDepth(topAncestor, descendantTwo);
  const diff = Math.abs(depthOne - depthTwo);
  if (depthOne > depthTwo) {
    return helperGetCommonAncestor(diff, descendantOne, descendantTwo);
  } else {
    return helperGetCommonAncestor(diff, descendantTwo, descendantOne);
  }
}

const getDepth = (
  topAncestor: AncestralTree,
  descendant: AncestralTree
): number => {
  let depth = 0;
  while (topAncestor !== descendant) {
    descendant = descendant.ancestor!;
    depth++;
  }
  return depth;
};

const helperGetCommonAncestor = (
  diff: number,
  deeperAncestor: AncestralTree,
  higherAncestor: AncestralTree
): AncestralTree => {
  while (diff > 0) {
    deeperAncestor = deeperAncestor.ancestor!;
    diff--;
  }
  while (deeperAncestor !== higherAncestor) {
    deeperAncestor = deeperAncestor.ancestor!;
    higherAncestor = higherAncestor.ancestor!;
  }
  return deeperAncestor;
};
