export function removeIslands(matrix: number[][]) {
  // Write your code here.
  const visited: boolean[][] = matrix.map((row) => row.map(() => false));
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (
        i === 0 ||
        i === matrix.length - 1 ||
        j === 0 ||
        j === matrix[i].length - 1
      ) {
        if (matrix[i][j] === 0) continue;
        if (visited[i][j]) continue;
        traverseEdges(i, j, matrix, visited);
      }
    }
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) continue;
      if (matrix[i][j] === 1) matrix[i][j] = 0;
      if (matrix[i][j] === 2) matrix[i][j] = 1;
    }
  }
  return matrix;
}

const traverseEdges = (
  i: number,
  j: number,
  matrix: number[][],
  visited: boolean[][]
) => {
  const stack = [[i, j]];
  while (stack.length) {
    const [i, j] = stack.pop()!;
    if (matrix[i][j] === 0) continue;
    if (matrix[i][j] === 2) continue;
    if (visited[i][j]) continue;
    visited[i][j] = true;
    matrix[i][j] = 2;
    const neighbors = getNeighbors(i, j, matrix, visited);
    for (const neighbor of neighbors) {
      stack.push(neighbor);
    }
  }
};

const getNeighbors = (
  i: number,
  j: number,
  matrix: number[][],
  visited: boolean[][]
) => {
  const neighbors = [];
  if (i - 1 >= 0 && !visited[i - 1][j]) {
    neighbors.push([i - 1, j]);
  }
  if (i + 1 < matrix.length && !visited[i + 1][j]) {
    neighbors.push([i + 1, j]);
  }
  if (j - 1 >= 0 && !visited[i][j - 1]) {
    neighbors.push([i, j - 1]);
  }
  if (j + 1 < matrix[i].length && !visited[i][j + 1]) {
    neighbors.push([i, j + 1]);
  }
  return neighbors;
};
