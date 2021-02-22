// input
// * non empty array
//   * distinct integer
//   * representing a target sum

// output
// * find all triplets in the array that sum up to the target sum
// * return a two dimensional array of all these triplets
// * the numbers in the triplets should be ordered in ascending order
// * and the triplets themselves should be ordered in ascending order, with respect to the numbers they hold
// * if no three numbers sum up to the target sum, function should return an empty array

// ds
// * tree
// * backtracking problem
// * should use memoization

// algo
// * create a new array copy, then sort small to large
// * it's like a combination problem
// * create a tree
// * traverse all element
// * when the accumulated result array length === 3, calculate if the sum equal to targetSum
//   * if equal to targetSum, collect it in the result array

// iterative
// * probably recursive

// aux
// * tree depth

// complexities
// * tree depth

// sample input
// array = [12, 3, 1, 2, -6, 5, -8, 6]
// targetSum =

// sample output
// [
//     [-8, 2, 6],
//     [-8, 3, 5],
//     [-6, 1, 5]
//     ]

type Triplet = [number, number, number];

export function threeNumberSum(array: number[], targetSum: number): Triplet[] {
  const result: Triplet[] = [];
  const sortedArray = array.slice().sort((a, b) => a - b);
  dfsCombination([], 0, sortedArray, result, targetSum);
  return result;
}

const dfsCombination = (
  path: number[],
  index: number,
  array: number[],
  result: number[][],
  targetSum: number
) => {
  if (path.length === 3) {
    if (path[0] + path[1] + path[2] === targetSum) {
      result.push(path.slice());
    }
  }
  for (let i = index; i < array.length; i++) {
    path.push(array[i]);
    // const newArray = array.slice(i + 1);
    dfsCombination(path, i + 1, array, result, targetSum);
    path.pop();
  }
};
