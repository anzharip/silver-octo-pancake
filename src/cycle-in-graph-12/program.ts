export function cycleInGraph(edges: number[][]): boolean {
  // Write your code here.
  const color: string[] = edges.map(() => "white");
  for (let i = 0; i < edges.length; i++) {
    const stack: [string, number][] = [["enter", i]];
    while (stack.length) {
      const [action, j] = stack.pop()!;
      if (action === "exit") {
        color[j] = "black";
      } else {
        if (color[j] === "black") continue;
        color[j] = "gray";
        stack.push(["exit", j]);
        for (const node of edges[j]) {
          if (color[node] === "white") {
            stack.push(["enter", node]);
          } else if (color[node] === "gray") {
            return true;
          }
        }
      }
    }
  }

  return false;
}
