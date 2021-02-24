// input
// * three arguments
//   * all of them instances of AncestralTree
//   * each have ancestor property pointing to their youngest ancestor
// * first input, top ancestor in the ancestral tree
//   * this top ancestor is the only node with their ancestor set to null
// * the other two, is the descendant of the ancestral tree

// output
// * return the youngest COMMON ancestor to the two descendant, type AncestralTree
// * a descendant is considered as their own ancestor
//   * so node A and node B can have node A as their youngest common ancestor

// ds
// * just variables
// * constant space

// algo
// * find the depth of each descendant relative to their top ancestor 
// * calculate the diff of the descendant's depth
// * find out which one is the deepest descendant
// * trace back the deepest descendant toward the top ancestor until their diff is 0
// * now that the deepest and higest descendant have their relative depth toward the top ancestor the same (diff 0)
//   * trace back both the deepest and highest descendant toward their top ancestor, until the deepest and highest descendant is the same node
//   * this will point to the youngest common ancestor


// aux space
// * constant space

// time complexity
// * O(d), d = depth of the deeper descendant
// * linear

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
  const depthOne = getDepth(descendantOne, topAncestor);
  const depthTwo = getDepth(descendantTwo, topAncestor);
  const diff = Math.abs(depthOne - depthTwo);
  if (depthOne > depthTwo) {
    return helper(descendantOne, descendantTwo, diff);
  } else {
    return helper(descendantTwo, descendantOne, diff);
  }
}

const getDepth = (
  descendant: AncestralTree,
  topAncestor: AncestralTree
): number => {
  let diff = 0;
  while (descendant !== topAncestor) {
    descendant = descendant.ancestor!;
    diff++;
  }
  return diff;
};

const helper = (
  deeperDescendant: AncestralTree,
  higherDescendant: AncestralTree,
  diff: number
): AncestralTree => {
  while (diff > 0) {
    deeperDescendant = deeperDescendant.ancestor!;
    diff--;
  }
  while (deeperDescendant !== higherDescendant) {
    deeperDescendant = deeperDescendant.ancestor!;
    higherDescendant = higherDescendant.ancestor!;
  }
  return deeperDescendant;
};
