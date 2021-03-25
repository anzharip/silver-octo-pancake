// matrix = [
//   [1, 2, 3, 4, 5],
//   [6, 7, 8, 9, 10],
//   [11, 12, 13, 14, 15],
//   [16, 17, 18, 19, 20],
//   [21, 22, 23, 24, 25],

// ]

// matrix.length = 5 x 5
// j = 0
// jReflect = 4
// matrix.length - j - 1 = 5 - 0 - 1 = 4

// ##

// matrix.length = 5
// j = 1
// matrix.length - j - 1 = 5 - 1 - 1 = 3

// ##

// matrix.length = 5
// j = 2
// matrix.length - j - 1 = 5 - 2 - 1 = 2

/**
 Do not return anything, modify matrix in-place instead.
 */
export function rotate(matrix: number[][]) {
  transposeMatrix(matrix);
  reflectMatrix(matrix);
}

function transposeMatrix(matrix: number[][]) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = i; j < matrix.length; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }
  return matrix;
}

function reflectMatrix(matrix: number[][]) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length / 2; j++) {
      const arrayLength = matrix[i].length;
      [matrix[i][j], matrix[i][arrayLength - j - 1]] = [
        matrix[i][arrayLength - j - 1],
        matrix[i][j],
      ];
    }
  }
  return matrix;
}
