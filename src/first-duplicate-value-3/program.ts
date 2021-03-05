// input 
// * given an array of integers between 1 and n, inclusive, where n is the length of the array 
  

// output
// * write a function that return the first integer that appears more than once (when the array is read from left to right)
// * in other words, out of all the integers that might occur more than once in the iinput array
//   * the function sholud return the one whose first duplicate value has the minium incdex
// * if no integer appears more than once, the function should return -1
// * allowed to mutate the input array 

// ds

// algo 
// * considering there is correlation between the length of the input array and the maxium value of the integers
//   * we can derive something out of it? 
// * also, the input will be either unique, or there will be a pair
// * without using aux space, we can mutate the input array to store the duplicate integer information 

// aux space

// time complexity 

// sample input
// array = [2, 1, 5, 2, 3, 3, 4]

// sample output 
// 2

// sample input #2
// array = [2, 1, 5, 3, 3, 2, 4]

// sample output #2
// 3


// array = [2, 1, 5, 2, 3, 3, 4]
//          i
// i = 0
// array[i] = 2
// absValue = |2| = 2
// absValueIdx = 2 - 1 = 1
// if (array[absValueIdx] < 0) return absValue
// array[absValueIdx] = array[absValueIdx] * -1

// array = [2, -1, 5, 2, 3, 3, 4]
//          i


// array = [2, -1, 5, 2, 3, 3, 4]
//              i
// i = 0
// array[i] = 2
// absValue = |2| = 2
// absValueIdx = 2 - 1 = 1
// if (array[absValueIdx] < 0) return absValue
// array[absValueIdx] = array[absValueIdx] * -1
// array = [-2, -1, 5, 2, 3, 3, 4]
//               i


// array = [-2, -1, 5, 2, 3, 3, 4]
//                  i
// i = 2
// array[i] = 2
// absValue = |2| = 2
// absValueIdx = 2 - 1 = 1
// if (array[absValueIdx] < 0) return absValue
// array[absValueIdx] = array[absValueIdx] * -1
// array = [-2, -1, 5, 2, -3, 3, 4]
//                  i


// array = [-2, -1, 5, 2, -3, 3, 4]
//                     i
// i = 3
// array[i] = 2
// absValue = |2| = 2
// absValueIdx = 2 - 1 = 1
// if (array[absValueIdx] < 0) return absValue !Found the result 
// array[absValueIdx] = array[absValueIdx] * -1

export function firstDuplicateValue(array: number[]): number {
  // Write your code here.
  for (let i = 0; i < array.length; i++) {
    const absValue = Math.abs(array[i]);
    const absValueIdx = absValue - 1;
    if (array[absValueIdx] < 0) return absValue;
    array[absValueIdx] = array[absValueIdx] * -1;
  }
  return -1;
}
