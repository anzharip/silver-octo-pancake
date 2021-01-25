export function riverSizes(matrix: number[][]): number[] {
  const sizes: number[] = [];
  const visited: boolean[][] = matrix.map((row) => row.map(() => false));
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) continue;
      if (visited[i][j]) continue;
      traverseNode(i, j, matrix, visited, sizes);
    }
  }
  return sizes;
}

function traverseNode(
  i: number,
  j: number,
  matrix: number[][],
  visited: boolean[][],
  sizes: number[]
) {
  let currentSize = 0;
  const nodesToExplore = [[i, j]];
  while (nodesToExplore.length) {
    const currentNode = nodesToExplore.pop()!;
    [i, j] = currentNode;
    if (matrix[i][j] === 0) continue;
    if (visited[i][j]) continue;
    visited[i][j] = true;
    currentSize++;
    const unvisitedNeighbors = getUnvisitedNeighbors(i, j, matrix, visited);
    unvisitedNeighbors.forEach((neighbor) => nodesToExplore.push(neighbor));
  }
  if (currentSize > 0) sizes.push(currentSize);
}

function getUnvisitedNeighbors(
  i: number,
  j: number,
  matrix: number[][],
  visited: boolean[][]
): [number, number][] {
  const unvisitedNeighbors: [number, number][] = [];
  if (i - 1 >= 0 && !visited[i - 1][j]) {
    unvisitedNeighbors.push([i - 1, j]);
  }
  if (i + 1 < matrix.length && !visited[i + 1][j]) {
    unvisitedNeighbors.push([i + 1, j]);
  }
  if (j - 1 >= 0 && !visited[i][j - 1]) {
    unvisitedNeighbors.push([i, j - 1]);
  }
  if (j + 1 < matrix[i].length && !visited[i][j + 1]) {
    unvisitedNeighbors.push([i, j + 1]);
  }
  return unvisitedNeighbors;
}
