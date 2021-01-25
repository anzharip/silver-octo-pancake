export class AncestralTree {
  name: string;
  ancestor: AncestralTree | null;

  constructor(name: string) {
    this.name = name;
    this.ancestor = null;
  }
}

export const getYoungestCommonAncestor = (
  topAnc: AncestralTree,
  descOne: AncestralTree,
  descTwo: AncestralTree
): AncestralTree => {
  const depthOne = getDepth(topAnc, descOne);
  const depthTwo = getDepth(topAnc, descTwo);
  if (depthOne > depthTwo) {
    return backtrack(descOne, descTwo, Math.abs(depthOne - depthTwo));
  } else {
    return backtrack(descTwo, descOne, Math.abs(depthOne - depthTwo));
  }
};

const getDepth = (topAnc: AncestralTree, desc: AncestralTree): number => {
  let depth = 0;
  while (desc !== topAnc) {
    depth++;
    desc = desc.ancestor!;
  }
  return depth;
};

const backtrack = (
  lowerDesc: AncestralTree,
  higherDesc: AncestralTree,
  diff: number
): AncestralTree => {
  while (diff > 0) {
    diff--;
    lowerDesc = lowerDesc.ancestor!;
  }
  while (lowerDesc !== higherDesc) {
    lowerDesc = lowerDesc.ancestor!;
    higherDesc = higherDesc.ancestor!;
  }
  return lowerDesc;
};
