export class AncestralTree {
  name: string;
  ancestor: AncestralTree | null;
  constructor(name: string) {
    this.name = name;
    this.ancestor = null;
  }
}

export const getYoungestCommonAncestor = (
  topAncestor: AncestralTree,
  descendantOne: AncestralTree,
  descendantTwo: AncestralTree
): AncestralTree => {
  const depthOne = getDescendantDepth(topAncestor, descendantOne);
  const depthTwo = getDescendantDepth(topAncestor, descendantTwo);
  if (depthOne > depthTwo) {
    return backtrackAncestralTree(
      descendantOne,
      descendantTwo,
      Math.abs(depthOne - depthTwo)
    );
  } else {
    return backtrackAncestralTree(
      descendantTwo,
      descendantOne,
      Math.abs(depthOne - depthTwo)
    );
  }
};

const getDescendantDepth = (
  topAncestor: AncestralTree,
  descendant: AncestralTree
): number => {
  let depth = 0;
  while (descendant !== topAncestor) {
    descendant = descendant.ancestor!;
    depth++;
  }
  return depth;
};

const backtrackAncestralTree = (
  lowerDescendant: AncestralTree,
  higherDescendant: AncestralTree,
  diff: number
): AncestralTree => {
  while (diff > 0) {
    lowerDescendant = lowerDescendant.ancestor!;
    diff--;
  }
  while (lowerDescendant !== higherDescendant) {
    lowerDescendant = lowerDescendant.ancestor!;
    higherDescendant = higherDescendant.ancestor!;
  }
  return lowerDescendant;
};
