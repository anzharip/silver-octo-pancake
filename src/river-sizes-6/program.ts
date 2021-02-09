export function riverSizes(matrix: number[][]) {
  // Write your code here.
  const sizes: number[] = [];
  const visited: boolean[][] = matrix.map((row) => row.map(() => false));
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (visited[i][j]) continue;
      if (matrix[i][j] === 0) continue;
      traverseNode(i, j, matrix, visited, sizes);
    }
  }

  return sizes;
}

const traverseNode = (
  i: number,
  j: number,
  matrix: number[][],
  visited: boolean[][],
  sizes: number[]
) => {
  let size: number = 0;
  const stack: [number, number][] = [[i, j]];
  while (stack.length) {
    const [i, j] = stack.pop()!;
    if (visited[i][j]) continue;
    if (matrix[i][j] === 0) continue;
    visited[i][j] = true;
    size++;
    const neighbors: [number, number][] = getNeighbors(i, j, matrix, visited);
    for (const neighbor of neighbors) {
      stack.push(neighbor);
    }
  }
  if (size > 0) sizes.push(size);
};

const getNeighbors = (
  i: number,
  j: number,
  matrix: number[][],
  visited: boolean[][]
): [number, number][] => {
  const neighbor: [number, number][] = [];
  if (i - 1 >= 0 && !visited[i - 1][j]) {
    neighbor.push([i - 1, j]);
  }

  if (i + 1 < matrix.length && !visited[i + 1][j]) {
    neighbor.push([i + 1, j]);
  }

  if (j - 1 >= 0 && !visited[i][j - 1]) {
    neighbor.push([i, j - 1]);
  }

  if (j + 1 < matrix[i].length && !visited[i][j + 1]) {
    neighbor.push([i, j + 1]);
  }
  return neighbor;
};
