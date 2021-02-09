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
    // Write your code here.
    const stack: Node[] = [this];
    while (stack.length) {
        const currrentNode = stack.pop()!; 
        array.push(currrentNode.name); 
        const children = currrentNode.children; 
        for (let i = children.length - 1; i >= 0; i--) {
            stack.push(children[i])
        }
    }
    return array;
  }
}
