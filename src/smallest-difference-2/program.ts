// input
// * two non empty arrays of integers
//   * could be one element
//   * could be one million element
//   * array sizes one and two could be different

// output
// * find the pair of numbers (one from each array)
//   * whose absolute difference is closest to zero
//   * returns an array containing these two numbers
//   * number from the first array in the first position
// * there will only be one pair of numbers with the smallest difference
//   * no duplicate

// algo
// * sort the arrays first, ascending
// * use two pointer 
//   * each pointer for each arrays
//   * both start at index 0
// * initialize pairWithSmallestAbsDiff
//   * with array1[0] and array2[0]
// * use while loop 
//   * condition === (while ptr1 < array1.length and ptr2 < array2.length)
//   * calculate currentPairWithSmallestAbsDiff
//     * compare and update with pairWithSmallestAbsDiff
//   * increment ptr1 if array1[ptr1] is smaller than array2[ptr2]
//     * advancing the ptr1 because we know the next element in array1 will be larger than the current element
//     * , hence will probably get the diff closer to zero 
//   * increment ptr2 if array1[ptr1] is larger than array2[ptr2]
//   * return pair array1[ptr1] and array2[ptr2] if array1[ptr1] === array2[ptr2]
//     * meaning the diff is 0

// ds

// aux space
// * constant

// time complex
// * O(n log n), n = number of elements on arrayOne
// * O(m log m), m = number of elements on arrayTwo
// * because of sorting

// sample input
// arrayOne = [-1, 5, 10, 20, 28, 3]
// arrayTwo = [26, 134, 135, 15, 17]

// sample output
// [28, 26]

// sample input
// sortedArrayOne = [-1, 3, 5, 10, 20, 28]
// sortedArrayTwo = [15, 17, 26, 134, 135]

// sample output
// [28, 26]


// sortedArrayOne = [-1, 3, 5, 10, 20, 28]
// sortedArrayTwo = [15, 17, 26, 134, 135]
// ptr1 = -1
// ptr2 = 15
// currentPairAbsDiff = 16
// smallestAbsDiff = 16
export function smallestDifference(arrayOne: number[], arrayTwo: number[]) {
  // Write your code here.
  arrayOne.sort((a, b) => a - b);
  arrayTwo.sort((a, b) => a - b);
  let ptr1 = 0;
  let ptr2 = 0;
  let smallestAbsDiffPair: [number, number] = [arrayOne[0], arrayTwo[0]];
  while (ptr1 < arrayOne.length && ptr2 < arrayTwo.length) { // got it wrong in this part, try to simulate the pointer in spreadsheet nexttime
    const previousAbsDiff = Math.abs(
      smallestAbsDiffPair[0] - smallestAbsDiffPair[1]
    );
    const currentAbsDiff = Math.abs(arrayOne[ptr1] - arrayTwo[ptr2]);
    if (previousAbsDiff > currentAbsDiff) {
      smallestAbsDiffPair = [arrayOne[ptr1], arrayTwo[ptr2]];
    }
    if (arrayOne[ptr1] < arrayTwo[ptr2] && ptr1 < arrayOne.length) {
      ptr1++;
    } else if (arrayOne[ptr1] > arrayTwo[ptr2] && ptr2 < arrayTwo.length) {
      ptr2++;
    } else {
      return [arrayOne[ptr1], arrayTwo[ptr2]];
    }
  }
  return smallestAbsDiffPair;
}
