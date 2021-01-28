export const cycleInGraph = (edges: number[][]): boolean => {
  const visited: boolean[] = edges.map(() => false);
  const currentlyInStack: boolean[] = edges.map(() => false);
  for (let node = 0; node < edges.length; node++) {
    if (visited[node]) continue;
    const nodeInCycle = isNodeInCycle(node, edges, visited, currentlyInStack);
    if (nodeInCycle) return true;
  }
  return false;
};

const isNodeInCycle = (
  node: number,
  edges: number[][],
  visited: boolean[],
  currentlyInStack: boolean[]
): boolean => {
  visited[node] = true;
  currentlyInStack[node] = true;

  const neighbors = edges[node];
  for (const neighbor of neighbors) {
    if (!visited[neighbor]) {
      const nodeInCycle = isNodeInCycle(
        neighbor,
        edges,
        visited,
        currentlyInStack
      );
      if (nodeInCycle) return true;
    } else if (currentlyInStack[neighbor]) return true;
  }
  currentlyInStack[node] = false;
  return false;
};
