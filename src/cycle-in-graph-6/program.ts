export const cycleInGraph = (edges: number[][]): boolean => {
  const state: string[] = edges.map(() => "WHITE");
  for (let i = 0; i < edges.length; i++) {
    const stack: [string, number][] = [["ENTER", i]];
    while (stack.length) {
      const [act, v] = stack.pop()!;
      if (act === "EXIT") {
        state[v] = "BLACK";
      } else {
        if (state[v] === "BLACK") continue
        state[v] = "GRAY";
        stack.push(["EXIT", v]);
        for (const n of edges[v]) {
          if (state[n] === "GRAY") {
            return true;
          } else if (state[n] === "WHITE") {
            stack.push(["ENTER", n]);
          }
        }
      }
    }
  }

  return false;
};
