// input
// * non-empty array of distinct integer
// * integer representing a target sum 

// output
// * find all triplets in the array that sum up to the target sum and return a two dimensional array of all these triplets
// * return 2d array, triplets[]
// * the number in each triplets should be ordererd in asceding order
//   * the triplets themselves have to be ordered in ascending order
// * if there are no triplets found, return an empty array

// ds

// algo
// * need to use three pointer
// * sort the array in ascending order
// * make a for loop on i, while i < array.length - 2, increment i + 1
//   * < array.length - 2, because of pointer k will always occupy the array.length - 1 and pointer j will occupy array.length - 2
//   * pointer j = i + 1
//   * pointer k = array.length - 1
//   * create a while loop inside the for loop
//     * condition while j < k
//     * inside the 

// aux space
// * result 2d array, potentially O(n), n total element of the triplet from all triplets

// time complexity
// * O(n^2), n element of input array 

type Triplet = [number, number, number];

export function threeNumberSum(array: number[], targetSum: number): Triplet[] {
  // Write your code here.
  const result: Triplet[] = [];
  array.sort((a, b) => a - b);
  for (let i = 0; i < array.length - 2; i++) {
    let j = i + 1;
    let k = array.length - 1;
    while (j < k) {
      const currentSum = array[i] + array[j] + array[k];
      if (currentSum === targetSum) {
        result.push([array[i], array[j], array[k]]);
        j++;
        k--;
      } else if (currentSum < targetSum) {
        j++;
      } else if (currentSum > targetSum) {
        k--;
      }
    }
  }
  return result;
}
