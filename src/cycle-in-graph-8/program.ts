export const cycleInGraph = (edges: number[][]): boolean => {
  const state: string[] = edges.map(() => "WHITE");
  for (let i = 0; i < edges.length; i++) {
    const stack: [string, number][] = [["ENTER", i]];
    while (stack.length) {
      const [action, j] = stack.pop()!;
      if (action === "EXIT") {
        state[j] = "BLACK";
      } else {
        if (state[j] === "BLACK") continue;
        state[j] = "GRAY";
        stack.push(["EXIT", j]);
        for (const k of edges[j]) {
          if (state[k] === "GRAY") {
            return true;
          } else if (state[k] === "WHITE") {
            stack.push(["ENTER", k]);
          }
        }
      }
    }
  }
  return false;
};
