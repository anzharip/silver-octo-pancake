import * as chai from "chai";
import * as program from "./program";

it("Test Case #1 breadth-first-search-4", function () {
  const graph = new program.Node("A");
  graph.addChild("B").addChild("C").addChild("D");
  graph.children[0].addChild("E").addChild("F");
  graph.children[2].addChild("G").addChild("H");
  graph.children[0].children[1].addChild("I").addChild("J");
  graph.children[2].children[0].addChild("K");
  chai
    .expect(graph.breadthFirstSearch([]))
    .to.deep.equal(["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K"]);
});
