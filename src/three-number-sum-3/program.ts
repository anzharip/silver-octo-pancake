// input
// * an array
//   * non empty
//   * distinct integer
// * an integer
//   * representing a target sum

// output
// * find all triplets in the array
//   * sums up to the target sum
// * return two dimensional array of all these triplets
//   * each number in triplets should be ordered in ascending order
//   * the triplets themselves has to be in ascending order
// * if there is no triplets found, return an empty array

// ds

// algo
// * naive approach -> recursion, generate all possible combination
// * O(n!/r!(n - r)!)
// * use three pointer solution
// * potentially O(n^2)
// * sort the array first in ascending order
// * prepare three pointers i, j, k
// * initialize i to 0, j to i + 1, and k to array.length - 1
// * create a for loop traversing from index 0 + 1 to array.length - 1 - 1
//   * the first index is already initialized to i/0
//   * the last index is already initialized to k
// * for each loop on the for loop, declare a while loop
// * the while loop condition is where j < k
//   * inside the while loop, if array[i] + array[j] + [k] === target sum, add the i j k triplets to the result array
//   * if array[i] + array[j] + [k] < target sum, increment pointer j
//     * because the currentsum is smaller than the target sum, and incrementing the pointer j will increase the value of the currentSum
//   * if array[i] + array[j] + [k] > target sum, decrement pointer j
//     * because the currentSum is larger than the target sum, decrementing point k will decrese the value of the currentSum

// aux
// * result is aux space
// * potentially the length of input array

// complexities

type Triplet = [number, number, number];

export function threeNumberSum(array: number[], targetSum: number): Triplet[] {
  // Write your code here.
  const result: Triplet[] = [];
  array.sort((a, b) => a - b);
  for (let i = 0; i < array.length - 2; i++) {
    let j = i + 1;
    let k = array.length - 1;
    while (j < k) {
      if (array[i] + array[j] + array[k] === targetSum) {
        result.push([array[i], array[j], array[k]]);
        j++;
        k--;
      } else if (array[i] + array[j] + array[k] < targetSum) {
        j++;
      } else if (array[i] + array[j] + array[k] > targetSum) {
        k--;
      }
    }
  }

  return result;
}
