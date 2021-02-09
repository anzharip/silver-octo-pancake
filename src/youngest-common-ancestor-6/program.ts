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
): AncestralTree {
  // Write your code here.
  const depthOne = getDepth(topAncestor, descendantOne);
  const depthTwo = getDepth(topAncestor, descendantTwo);
  if (depthOne > depthTwo) {
    return backtrackYoungestCommonAncestor(
      topAncestor,
      descendantTwo,
      descendantOne,
      Math.abs(depthOne - depthTwo)
    );
  } else {
    return backtrackYoungestCommonAncestor(
      topAncestor,
      descendantOne,
      descendantTwo,
      Math.abs(depthOne - depthTwo)
    );
  }
}

const getDepth = (
  topAncestor: AncestralTree,
  descendant: AncestralTree
): number => {
  let depth = 0;
  let currentNode = descendant!;
  while (topAncestor !== currentNode) {
    currentNode = currentNode.ancestor!;
    depth++;
  }
  return depth;
};

const backtrackYoungestCommonAncestor = (
  topAncestor: AncestralTree,
  higherDescendant: AncestralTree,
  lowerDescendant: AncestralTree,
  depthDifference: number
): AncestralTree => {
  while (depthDifference > 0) {
    lowerDescendant = lowerDescendant.ancestor!;
    depthDifference--;
  }
  while (higherDescendant !== lowerDescendant) {
    lowerDescendant = lowerDescendant.ancestor!;
    higherDescendant = higherDescendant.ancestor!;
  }
  return lowerDescendant;
};
