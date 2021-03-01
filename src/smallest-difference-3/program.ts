// input
// * two non empty arrays of integers
//   * array one and two might have different length
//   * one could be one length, the other could be one million 
//   * or both be a million

// output
// * finds tha pair of numbers (one from each array)
//   * whose absolute difference is closest to zero
// * return an array containing these two numbers
//   * the number from the first array in the first position
//   * we can assume there is only one pair with the smallest difference

// ds

// algo
// * need to sort the array first, ascending
// * use two ptr, ptr1 and ptr2
// * both ptr starts at zero
// * track the smallest diff and pair
// * use while loop 
//   * if array1[ptr1] is smaller than array2[ptr2], increment ptr1
//     * since the array is sorted, we know that advancing ptr1 will potentially get a pair closer to zero
//     * since the next element will be larger than the current one, since the array is sorted in ascending order
//   * if array1[ptr2] is larger than array2[ptr2], increment ptr2
//   * if array1[[ptr1]] === array2[ptr2], we found the pair with diff 0
// * return the smallest diff pair

// aux space
// * constant space

// time complexity
// * O(n log n), n = number of elements in the first array
// * O(m log m), m = elements in the second array
// * O(n + m)
// * O(n + n log n) + O(m + m log m)
// * O(n log n) + O(m log m)


// sample input
// arrayOne = [-1, 5, 10, 20, 28, 3]
// arrayTwo = [26, 134, 135, 15, 17]

// sample output
// [28, 26]

// sortedArrayOne = [-1, 3, 5, 10, 20, 28]
// sortedArrayTwo = [15, 17, 26, 134, 135]
// ptr0 = -1
// ptr1 = 15
// diff = 15 - (-1) = 16

// sortedArrayOne = [-1, 3, 5, 10, 20, 28]
// sortedArrayTwo = [15, 17, 26, 134, 135]
// ptr0 = 3
// ptr1 = 15
// diff = 15 - (3) = 12

// sortedArrayOne = [-1, 3, 5, 10, 20, 28]
// sortedArrayTwo = [15, 17, 26, 134, 135]
// ptr0 = 5
// ptr1 = 15
// diff = 15 - (5) = 10

// sortedArrayOne = [-1, 3, 5, 10, 20, 28]
// sortedArrayTwo = [15, 17, 26, 134, 135]
// ptr0 = 10
// ptr1 = 15
// diff = 15 - (10) = 5

// sortedArrayOne = [-1, 3, 5, 10, 20, 28]
// sortedArrayTwo = [15, 17, 26, 134, 135]
// ptr0 = 20
// ptr1 = 15
// diff = 15 - (20) = |-5| = 5

// sortedArrayOne = [-1, 3, 5, 10, 20, 28]
// sortedArrayTwo = [15, 17, 26, 134, 135]
// ptr0 = 20
// ptr1 = 17
// diff = 17 - (20) = |-3| = 3

// sortedArrayOne = [-1, 3, 5, 10, 20, 28]
// sortedArrayTwo = [15, 17, 26, 134, 135]
// ptr0 = 20
// ptr1 = 26
// diff = 26 - (20) = |6|

// sortedArrayOne = [-1, 3, 5, 10, 20, 28]
// sortedArrayTwo = [15, 17, 26, 134, 135]
// ptr0 = 28
// ptr1 = 26
// diff = 28 - (26) = |2|

// sortedArrayOne = [-1, 3, 5, 10, 20, 28]
// sortedArrayTwo = [15, 17, 26, 134, 135]
// ptr0 = 28
// ptr1 = 134
// diff = 28 - (134) = |106|

// sortedArrayOne = [-1, 3, 5, 10, 20, 28]
// sortedArrayTwo = [15, 17, 26, 134, 135]
// ptr0 = out of bound
// ptr1 = 134







export function smallestDifference(
  arrayOne: number[],
  arrayTwo: number[]
): [number, number] {
  // Write your code here.
  arrayOne.sort((a, b) => a - b);
  arrayTwo.sort((a, b) => a - b);
  let ptr1 = 0;
  let ptr2 = 0;
  let pairWithSmallestDiff: [number, number] = [arrayOne[ptr1], arrayTwo[ptr2]];
  while (ptr1 < arrayOne.length && ptr2 < arrayTwo.length) {
    const previousDiff = Math.abs(
      pairWithSmallestDiff[0] - pairWithSmallestDiff[1]
    );
    const currentDiff = Math.abs(arrayOne[ptr1] - arrayTwo[ptr2]);
    if (currentDiff < previousDiff) {
      pairWithSmallestDiff = [arrayOne[ptr1], arrayTwo[ptr2]];
    }
    if (arrayOne[ptr1] < arrayTwo[ptr2]) {
      ptr1++;
    } else if (arrayOne[ptr1] > arrayTwo[ptr2]) {
      ptr2++;
    } else {
      return [arrayOne[ptr1], arrayTwo[ptr2]];
    }
  }
  return pairWithSmallestDiff;
}
