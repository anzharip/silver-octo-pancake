export const removeIslands = (matrix: number[][]): number[][] => {
  const visited: boolean[][] = matrix.map((row) => row.map((_) => false));
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (visited[i][j]) continue;
      if (matrix[i][j] === 0) continue;
      if (
        i === 0 ||
        i === matrix.length - 1 ||
        j === 0 ||
        j === matrix[i].length - 1
      ) {
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
};

const traverseEdges = (
  i: number,
  j: number,
  matrix: number[][],
  visited: boolean[][]
) => {
  const stack: [number, number][] = [[i, j]];
  while (stack.length) {
    const currentNode = stack.pop()!;
    [i, j] = currentNode;
    if (visited[i][j]) continue;
    if (matrix[i][j] === 0) continue;
    visited[i][j] = true;
    matrix[i][j] = 2;
    const unvisitedNeighbors = getUnvisitedNeighbors(i, j, matrix, visited);
    unvisitedNeighbors.forEach((neighbor) => stack.push(neighbor));
  }
};

const getUnvisitedNeighbors = (
  i: number,
  j: number,
  matrix: number[][],
  visited: boolean[][]
): [number, number][] => {
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
};
