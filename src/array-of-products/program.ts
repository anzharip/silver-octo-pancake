// input
// * a non-empty array of integers

// output
// * return an array of the same length 
//   * where each element in tht output array is equal to the product of every other number in the input array 
//   * in other words, the value at output[i] is equal to the product of every number in the input array other than input[i]
// * don't solve this problem with division

// ds

// algo
// * brute force method === O(n^2)
//    * can I do better

// aux space

// time complex

// sample input
// array = [5, 1, 4, 2]

// sample output
// [8, 40, 10, 20]
// // 8 === 1 * 4 * 2
// // 40 === 5 * 4 * 2
// // 10 === 5 * 1 * 2
// // 20 === 5 * 1 * 4

// #####

// array = [5, 1, 4, 2]
//          i 
//         [1, 20, 2, 4]

// output[0] = (input[1] * input[2] * input[3])
// output[1] = (input[0] * input[2] * input[3])
// output[2] = (input[0] * input[1] * input[3])
// output[3] = (input[0] * input[1] * input[2])


// array = [5, 1, 4, 2]

export function arrayOfProducts(array: number[]) {
  // Write your code here.
  const result: number[] = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (i === j) continue;
      if (!result[i]) {
        result[i] = array[j];
      } else {
        result[i] = result[i] * array[j];
      }
    }
  }
  return result;
}
