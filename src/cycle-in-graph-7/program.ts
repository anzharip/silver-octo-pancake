export const cycleInGraph = (edges: number[][]): boolean => {
  const state: string[] = edges.map((_) => "WHITE");
  for (let i = 0; i < edges.length; i++) {
    const stack: [string, number][] = [["ENTER", i]];
    while (stack.length) {
      const [act, v] = stack.pop()!;
      if (act === "EXIT") {
        state[v] = "BLACK";
      } else {
        if (state[v] === "BLACK") continue;
        state[v] = "GRAY";
        stack.push(["EXIT", v]);
        for (const edge of edges[v]) {
          if (state[edge] === "GRAY") {
            return true;
          } else if (state[edge] === "WHITE") {
            stack.push(["WHITE", edge]);
          }
        }
      }
    }
  }
  return false;
};
