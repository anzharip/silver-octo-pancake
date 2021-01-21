export class Node {
  children: Node[];
  name: string;

  constructor(name: string) {
    this.name = name;
    this.children = [];
  }

  addChild(name: string) {
    this.children.push(new Node(name));
    return this;
  }

  breadthFirstSearch(array: string[] = []) {
    const queue: Node[] = [this];
    while (queue.length > 0) {
      const current = queue.shift()!;
      array.push(current.name);
      for (const child of current.children) {
        queue.push(child);
      }
    }
    return array;
  }
}
