// Do not edit the class below except
// for the depthFirstSearch method.
// Feel free to add new properties
// and methods to the class.
export class Node {
  name: string;
  children: Node[];

  constructor(name: string) {
    this.name = name;
    this.children = [];
  }

  addChild(name: string) {
    this.children.push(new Node(name));
    return this;
  }

  depthFirstSearch(array: string[] = []) {
    const stack = [];
    stack.push(this);
    while (stack.length) {
      const currentNode = stack.shift()!;
      array.push(currentNode.name);
      let children: Node[] = currentNode.children.map((element) => element);
      children = children.reverse();
      children.forEach((element) => {
        stack.unshift(element);
      });
    }
    return array;
  }
}
