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
  const depthOne = getDepth(topAncestor, descendantOne);
  const depthTwo = getDepth(topAncestor, descendantTwo);
  if (depthOne > depthTwo) {
    return backtrack(
      descendantOne,
      descendantTwo,
      Math.abs(depthOne - depthTwo)
    );
  } else {
    return backtrack(
      descendantTwo,
      descendantOne,
      Math.abs(depthOne - depthTwo)
    );
  }
};

export const getDepth = (
  topAncestor: AncestralTree,
  descendant: AncestralTree
): number => {
  let depth = 0;
  while (descendant !== topAncestor) {
    depth++;
    descendant = descendant.ancestor!;
  }
  return depth;
};

export const backtrack = (
  lowerDescendant: AncestralTree,
  higherDescendant: AncestralTree,
  diff: number
): AncestralTree => {
  while (diff > 0) {
    diff--;
    lowerDescendant = lowerDescendant.ancestor!;
  }
  while (lowerDescendant !== higherDescendant) {
    lowerDescendant = lowerDescendant.ancestor!;
    higherDescendant = higherDescendant.ancestor!;
  }
  return lowerDescendant;
};
