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
    const stack: Node[] = [this];
    while (stack.length) {
      const currentNode = stack.pop()!;
      array.push(currentNode.name);
      const children = currentNode.children;
      for (let i = children.length - 1; i >= 0; i--) {
        stack.push(children[i]);
      }
    }
    return array;
  }
}
