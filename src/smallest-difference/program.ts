// input
// * two non empty arrays of integers
//   * the two arrays could have difference size 
//   * there could be duplicate integers 
//   * the length of the arrays could be one 


// output
// * find the pair of numbers (one from each array), whose absolute difference is close to zero
// * and returns an array containing these two numbers
//   * the number from the first array in the first position
// * the absolute difference of two integers is the distance between them on the real number line
//   * difference between -5 and 5 is 10
//   * absolute difference of -5 and -4 is 1
// * there will only be one pair of numbers with the smallest difference

// ds

// algo
// * one way, O(n.m)
// * can we make it faster? 
// * sort both of the arrays first 
// * use two pointers
// * record the smallest pair
//   * initialize with index 0 from both arrays
// * compare abs value 
//   * use while loop 
//   * update the smallest pair
//   * if array[ptr1] is smaller than array[ptr2], and ptr1 < array1.length
//     * increment ptr1
//   * if array[ptr2] is smaller than array[ptr1], and ptr2 < array2.length
//     * increment ptr2
//   * if array[ptr1] === array[ptr2], we found the answer with diff 0

// aux space
// * constant space
// * recording the smallest pair

// time complexity
// * sorting array, O(n log n) + O(m log m)
// * traversing the array O(n) + O(m)
// * O(n + n log n) + O(m + m log m)

export function smallestDifference(arrayOne: number[], arrayTwo: number[]) {
  // Write your code here.
  arrayOne.sort((a, b) => a - b);
  arrayTwo.sort((a, b) => a - b);
  let ptr1 = 0;
  let ptr2 = 0;
  let smallestAbsDiffPair: [number, number] = [arrayOne[0], arrayTwo[0]];
  while (ptr1 < arrayOne.length && ptr2 < arrayTwo.length) {
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
