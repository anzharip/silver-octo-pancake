/**
 Do not return anything, modify matrix in-place instead.
 */
export function rotate(matrix: number[][]): void {
  const mLen = matrix.length;
  for (let i = 0; i < Math.ceil(matrix.length / 2); i++) {
    for (let j = i; j < mLen - i - 1; j++) {
      [
        matrix[i][j],
        matrix[j][mLen - i - 1],
        matrix[mLen - i - 1][mLen - j - 1],
        matrix[mLen - j - 1][i],
      ] = [
        matrix[mLen - j - 1][i],
        matrix[i][j],
        matrix[j][mLen - i - 1],
        matrix[mLen - i - 1][mLen - j - 1],
      ];
    }
  }
}
