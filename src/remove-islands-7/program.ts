// input
// * two dimensional array/matrix of potentially unequal height and width 
//   * contining only 0 and 1
//   * the matrix represent two toned image
//   * each 1 represents black, and 0 represents white
//   * an island is defined as any number of 1 that are horizontally or vertically adjacent, but not diagonally and that don't touch the border of the image
//   * in other words, a group of horizontally or vertically adjacent 1 is not an island if any of those 1 are in the first row, last row, first column, or last column of the input matrix
// * an island can twist
//   * it does not have to be straight vertical line or horizontal line
//   * is can be L shaped
// * you can think of islands as patched of black that do not touch the border of the two toned image

// output
// * return a modified version of the input matrix
// * where all of the islands are removed
// * remove the islands by replacing it with 0s
// * naturally allowed to mutate the input matrix

// ds

// algo 
// * traverse all of the edges first 
//   * traverse the horizontally and vertically adjacent too
//   * mutate 1s into -1s

// * then traverse the matrix again
//   * if there is 1, mutate into 0 -> this order is important!
//   * if there is -1, mutate into 1 -> this order is important!
//   * if there is 0, continue

// * can be done in O(n), where n is the elements of the 2d matrix
//   * two pass

// aux space

// time complex

// sample input
// [
//     [1, 0, 0, 0, 0, 0],
//     [0, 1, 0, 1, 1, 1],
//     [0, 0, 1, 0, 1, 0],
//     [1, 1, 0, 0, 1, 0],
//     [1, 0, 1, 1, 0, 0],
//     [1, 0, 0, 0, 0, 1],
// ]

// sample output
// [
//     [1, 0, 0, 0, 0, 0],
//     [0, 0, 0, 1, 1, 1],
//     [0, 0, 0, 0, 1, 0],
//     [1, 1, 0, 0, 1, 0],
//     [1, 0, 0, 0, 0, 0],
//     [1, 0, 0, 0, 0, 1],
// ]

// #####

// [
//   i [1, 0, 0, 0, 0, 0],
//      j
//     [0, 1, 0, 1, 1, 1],
//     [0, 0, 1, 0, 1, 0],
//     [1, 1, 0, 0, 1, 0],
//     [1, 0, 1, 1, 0, 0],
//     [1, 0, 0, 0, 0, 1],
// ]

// i = 0 -> represents row
// j = 0 -> represents column
// matrix[i][j] = 1

// if i = 0 or 
//     if j = 0 or 
//     if i = matrix.length - 1 or 
//     if j = matrix[i].length - 1 or 
//     skip traverse, meaning it is the edge

export function removeIslands(matrix: number[][]) {
  // Write your code here.
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) continue;
      if (
        i === 0 ||
        i === matrix.length - 1 ||
        j === 0 ||
        j === matrix[i].length - 1
      ) {
        traverseAndMarkEdges(i, j, matrix);
      }
    }
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 1) {
        matrix[i][j] = 0;
      } else if (matrix[i][j] === -1) {
        matrix[i][j] = 1;
      } else {
        continue;
      }
    }
  }
  return matrix;
}

const traverseAndMarkEdges = (i: number, j: number, matrix: number[][]) => {
  if (matrix[i][j] === 1) matrix[i][j] = -1;
  if (i - 1 >= 0 && matrix[i - 1][j] === 1) {
    traverseAndMarkEdges(i - 1, j, matrix);
  }
  if (i + 1 < matrix.length && matrix[i + 1][j] === 1) {
    traverseAndMarkEdges(i + 1, j, matrix);
  }
  if (j - 1 >= 0 && matrix[i][j - 1] === 1) {
    traverseAndMarkEdges(i, j - 1, matrix);
  }
  if (j + 1 < matrix[i].length && matrix[i][j + 1] === 1) {
    traverseAndMarkEdges(i, j + 1, matrix);
  }
};
