// input
// * an integer array nums of unique elements

// output
// * return all possible subsets (the power set)
//   * the solution set must no conatain duplicate subsets
//   * return the solution in any order

// 1 <= nums.length <= 10
// -10 <= nums[i] <= 10
// all the numbers of nums are unique

// ds

// algo

// aux space

// time complex

// #####

// example 1
// input: nums = [1, 2, 3]
// output: [
//     [], 
//     [1], 
//     [2], 
//     [1, 2], 
//     [3], 
//     [1, 3], 
//     [2, 3], 
//     [1, 2, 3]
// ]

// example 2
// input: nums = [0]
// output: [[], [0]]

// #####

// nums = [1, 2, 3]
//         i
// i = 0
// path = []
// result = []





export function subsets(nums: number[]): number[][] {
  const path: number[] = [];
  const result: number[][] = [];
  dfsPowerset(0, path, result, nums);
  return result;
}

function dfsPowerset(
  i: number,
  path: number[],
  result: number[][],
  nums: number[]
) {
  result.push(path.slice());
  for (let index = i; index < nums.length; index++) {
    path.push(nums[index]);
    dfsPowerset(index + 1, path, result, nums);
    path.pop();
  }
}
