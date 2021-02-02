const matrix: number[][] = [[1, 3], [2, 3, 4], [0], [], [2, 5], []]

const traverseNode = (matrix: number[][]): number[] => {
  const array: number[] = [];
  const stack: number[] = [];
  stack.push(0);
  const visited: boolean[] = matrix.map(() => false);
  while (stack.length) {
    const i = stack.pop()!;
    if (visited[i]) continue
    visited[i] = true;
    array.push(i)
    const currentNode = matrix[i];
    for (let j = currentNode.length - 1; j >= 0; j--) {
      stack.push(matrix[i][j]);
    }
  }
  return array;
};

// console.log(traverseNode(matrix));
