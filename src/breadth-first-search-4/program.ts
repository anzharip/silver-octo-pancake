export class Node {
  name: string;
  children: Node[];

  constructor(name: string) {
    this.name = name;
    this.children = [];
  }

  addChild(name: string): Node {
    this.children.push(new Node(name));
    return this;
  }

  breadthFirstSearch(array: string[] = []): string[] {
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
