// input
// * an array of integers between 1 and n inclusive
//   * n is the length of the array 
//   * is n positive or negative? 
//     * let's assume it is always positive 

// output
// * return the first integer that appears more than once
//   * when the array is read from left to right
// * out of all the integers that might occur more than once in the input array 
//   * should return one whose first duplicate value has the minimum index
// * if no integer appears more than once, return -1 
// * allowed to mutate the input array 

// ds

// algo

// aux space

// time complex

// sample input#1
// array = [2, 1, 5, 2, 3, 3, 4]

// sample output#1
// 2

// sample input#2
// array = [2, 1, 5, 3, 3, 2, 4]

// sample output#2
// 3

// #####

// array = [2, 1, 5, 2, 3, 3, 4]
//          i
// n = 7
// i = 0
// array[i] = 2
// absArrayI = |2| = 2
// absArrayI - 1 = 1
//   mutate array[1]
// is array[absArrayI - 1] < 0?
//   if true, return absArrayI
// array[absArrayI - 1] *= -1


// array = [2, -1, 5, 2, 3, 3, 4]
//              i
// n = 7
// i = 1
// array[i] = -1
// absArrayI = |-1| = 1
// absArrayI - 1 = 0
//   mutate array[0]
// is array[absArrayI - 1] < 0?
//   if true, return absArrayI
// array[absArrayI - 1] *= -1


// array = [-2, -1, 5, 2, 3, 3, 4]
//                  i
// n = 7
// i = 2
// array[i] = 5
// absArrayI = |5| = 5
// absArrayI - 1 = 4
//   mutate array[4]
// is array[absArrayI - 1] < 0?
//   if true, return absArrayI
// array[absArrayI - 1] *= -1

// array = [-2, -1, 5, 2, -3, 3, 4]
//                     i
// n = 7
// i = 3
// array[i] = 2
// absArrayI = |2| = 2
// absArrayI - 1 = 1
//   mutate array[1]
// is array[absArrayI - 1] < 0? === TRUE
//   if true, return absArrayI
// array[absArrayI - 1] *= -1

export function firstDuplicateValue(array: number[]) {
  // Write your code here.
  for (let i = 0; i < array.length; i++) {
    const absValue = Math.abs(array[i]);
    const storeIndex = absValue - 1;
    if (array[storeIndex] < 0) return absValue;
    array[storeIndex] = array[storeIndex] * -1;
  }
  return -1;
}
