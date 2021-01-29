// This file is initialized with a code version of this
// question's sample test case. Feel free to add, edit,
// or remove test cases in this file as you see fit!

import * as program from './program';
import * as chai from 'chai';

it('Test Case #1 depth-first-search-3', function () {
  const graph = new program.Node('A');
  graph.addChild('B').addChild('C').addChild('D');
  graph.children[0].addChild('E').addChild('F');
  graph.children[2].addChild('G').addChild('H');
  graph.children[0].children[1].addChild('I').addChild('J');
  graph.children[2].children[0].addChild('K');
  chai.expect(graph.depthFirstSearch([])).to.deep.equal(['A', 'B', 'E', 'F', 'I', 'J', 'C', 'D', 'G', 'K', 'H']);
});
