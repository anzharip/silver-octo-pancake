// input 
// * the boards is made up of an m x n grid of cells, where each cell has an initial state: live (represented by 1) or dead (represented by a 0)
// * each cell interacts with its eight neighbors (horizontal, vertical, diagonal) using the following four rules: 
//   1. any live cell with fewer than two live neighrs dies as if caused by under population
//   2. any live cell with two or three live neighbors lives on to the next generation 
//   3. any live cell with more than three live neighrbors dies, as if by over population
//   4. any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction

// output



// ds

// algo 
// * for loop for each element 
// * for each node, their live neighbors 
//     * check state transition 
//         * if 0, then there is transition from 0 to 0 or no transition
//         * if 1, then there is transition from 1 to 1 or no transition
//         * if 2, then there is a transition from 0 to 1
//         * if 3, then there is a transition from 1 to 0 
// * check the neighbors 
//     * board[i][j] => current node 
//     * board[i - 1][j] => node upward
//     * board[i + 1][j] => node downward
//     * board[i][j - 1] => node to the left
//     * board[i][j + 1] => node to the right 
//     * board[i  - 1][j - 1] => node to the upper left
//     * board[i + 1][j + 1] => node to the lower right 
//     * board[i + 1][j - 1] => node to the lower left
//     * board[i - 1][j + 1] => node to the upper right 
//     * also check if the index is out of boundary or not 


// tc

// sc



/**
 Do not return anything, modify board in-place instead.
 */
export function gameOfLife(board: number[][]): void {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      traverseNode(i, j, board);
    }
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === 2) {
        board[i][j] = 1;
      } else if (board[i][j] === 3) {
        board[i][j] = 0;
      }
    }
  }
}

function traverseNode(i: number, j: number, board: number[][]) {
  const element = board[i][j];
  let liveNeighbors = 0;
  if (i - 1 >= 0) {
    const pastState = getPastState(i - 1, j, board);
    liveNeighbors += pastState;
  }
  if (i + 1 < board.length) {
    const pastState = getPastState(i + 1, j, board);
    liveNeighbors += pastState;
  }
  if (j - 1 >= 0) {
    const pastState = getPastState(i, j - 1, board);
    liveNeighbors += pastState;
  }
  if (j + 1 < board[i].length) {
    const pastState = getPastState(i, j + 1, board);
    liveNeighbors += pastState;
  }
  if (i - 1 >= 0 && j - 1 >= 0) {
    const pastState = getPastState(i - 1, j - 1, board);
    liveNeighbors += pastState;
  }
  if (i + 1 < board.length && j + 1 < board[i].length) {
    const pastState = getPastState(i + 1, j + 1, board);
    liveNeighbors += pastState;
  }
  if (i + 1 < board.length && j - 1 >= 0) {
    const pastState = getPastState(i + 1, j - 1, board);
    liveNeighbors += pastState;
  }
  if (i - 1 >= 0 && j + 1 < board[i].length) {
    const pastState = getPastState(i - 1, j + 1, board);
    liveNeighbors += pastState;
  }

  // check the life rules
  changeState(i, j, liveNeighbors, board);
}

function getPastState(i: number, j: number, board: number[][]) {
  const element = board[i][j];
  if (element === 0) return 0;
  else if (element === 1) return 1;
  // encode state change 0 to 1
  else if (element === 2) return 0;
  // encode state change 1 to 0
  else if (element === 3) return 1;
  else return 0;
}

function changeState(
  i: number,
  j: number,
  liveNeighbors: number,
  board: number[][]
) {
  if (liveNeighbors < 2) {
    if (board[i][j] === 1) {
      board[i][j] = 3;
    }
  } else if (liveNeighbors === 3) {
    if (board[i][j] === 0) {
      board[i][j] = 2;
    }
  } else if (liveNeighbors > 3) {
    if (board[i][j] === 1) {
      board[i][j] = 3;
    }
  }
}
