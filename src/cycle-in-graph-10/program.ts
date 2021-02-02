export const cycleInGraph = (edges: number[][]): boolean => {
  const state: string[] = edges.map(() => "white");
  for (let i = 0; i < edges.length; i++) {
    const stack: [string, number][] = [["enter", i]];
    while (stack.length) {
      const [action, j] = stack.pop()!;
      if (action === "exit") {
        state[j] = "black";
      } else {
        if (state[j] === "black") continue;
        state[j] = "gray";
        stack.push(["exit", j]);
        for (const k of edges[j]) {
          if (state[k] === "gray") {
            return true;
          } else if (state[k] === "white") {
            stack.push(["enter", k]);
          }
        }
      }
    }
  }
  return false;
};
