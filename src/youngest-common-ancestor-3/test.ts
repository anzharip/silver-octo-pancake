import * as program from "./program";
import * as chai from "chai";

class AncestralTree {
  name: string;
  ancestor: AncestralTree | null;

  constructor(name: string) {
    this.name = name;
    this.ancestor = null;
  }

  addAsAncestor(descendants: AncestralTree[]) {
    for (const descendant of descendants) {
      descendant.ancestor = this;
    }
  }
}

function getTrees() {
  const trees: { [key: string]: AncestralTree } = {};
  const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  for (const letter of ALPHABET) {
    trees[letter] = new AncestralTree(letter);
  }
  return trees;
}

it("Test Case #1 youngest-common-ancestor-3", function () {
  const trees = getTrees();
  trees["A"].addAsAncestor([trees["B"], trees["C"]]);
  trees["B"].addAsAncestor([trees["D"], trees["E"]]);
  trees["D"].addAsAncestor([trees["H"], trees["I"]]);
  trees["C"].addAsAncestor([trees["F"], trees["G"]]);

  const yca = program.getYoungestCommonAncestor(trees.A, trees.E, trees.I);
  chai.expect(yca).to.deep.equal(trees.B);
});
