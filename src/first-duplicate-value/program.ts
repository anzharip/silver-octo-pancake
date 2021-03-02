// input
// * an array of integers
//   * between 1 and n, inclusive
//   * n is the length of the array 
//   * could be length 1? 
//   * could be length 2? 
//   * could be length 3? 
//   * could be length one million? 


// output
// * write a function that returns the first integer that appears more than once
//   * when the array is read from left to right
// * out of all the integers that might occur more than once in the input array
//   * should return the one whose first duplicate value has the minium index
// * if no integer appears more than once
//   * return -1
// * allowed to mutate the input array 
//   * why would I mutate the input array? 

// ds

// algo
// * either can use sorting
//   * store up the index first, then sort the array 
//   * when duplicate is found, consult the index hashmap, then track the lowest index pair
//   * but this would end up in O(n log n) due to sorting
// * i think we can do this in O(n)
//   * traverse the array with for loop 
//   * track the occurence of value into a hashmap 
//   {
//       2: 1, 
//       1: 1, 
//       ...: ...
//   }
//   * for every loop, check the value of hashmap[i] === 2
//     * if we found the first element of hashmap[i] that reach value 2, then we found our result

// aux space
// * O(m), m is the occurence of unique value from the input array 

// time complexity
// * O(n), n is the length of the input array 

// sample input
// array = [2, 1, 5, 2, 3, 3, 4]

// sample output
// 2 // 2 is the first integer that ppears more than once
// // 3 also appears more than once, but the second 3 appears after the second 2

// sample input #2
// array = [2, 1, 5, 3, 3, 2, 4]

// sample output #2
// 3 // 3 is the first integer that appears more than once
// // 2 also appears more than once, but the second 2 appears after the second 3

// array = [2, 1, 5, 2, 3, 3, 4]
//          i 
// hashmap = {}
// i = 0
// array[i] = 2
// is array[i] already in hashmap? = false
//   if false, create new property 
//   if true, increment the count inside the property
// hashmap = {
//     2: 1
// }
// hashmap[array[i]] = 1

// array = [2, 1, 5, 2, 3, 3, 4]
//             i 
// hashmap = {}
// i = 1
// array[i] = 1
// is array[i] already in hashmap? = false
//   if false, create new property 
//   if true, increment the count inside the property
// hashmap = {
//     2: 1,
//     1: 1,
// }
// hashmap[array[i]] = 1

// array = [2, 1, 5, 2, 3, 3, 4]
//                i 
// hashmap = {}
// i = 2
// array[i] = 5
// is array[i] already in hashmap? = false
//   if false, create new property 
//   if true, increment the count inside the property
// hashmap = {
//     2: 1,
//     1: 1,
//     5: 1
// }
// hashmap[array[i]] = 1

// array = [2, 1, 5, 2, 3, 3, 4]
//                   i 
// hashmap = {}
// i = 3
// array[i] = 2
// is array[i] already in hashmap? = false
//   if false, create new property 
//   if true, increment the count inside the property
// hashmap = {
//     2: 2,
//     1: 1,
//     5: 1
// }
// hashmap[array[i]] = 2
// we found our value, return early 

// #####

// array = [2, 1, 5, 3, 3, 2, 4]
//          i
// hashmap = {}
// i = 0
// array[i] = 2
// is array[i] already in hashmap?
//   if false, create new property 
//   if true, increment the count inside the property
// hashmap = {
//     2: 1
// }
// hashmap[array[i]] = 1


// array = [2, 1, 5, 3, 3, 2, 4]
//             i
// hashmap = {
//     2: 1,
// }
// i = 1
// array[i] = 1
// is array[i] already in hashmap?
//   if false, create new property 
//   if true, increment the count inside the property
// hashmap = {
//     2: 1,
//     1: 1
// }
// hashmap[array[i]] = 1


// array = [2, 1, 5, 3, 3, 2, 4]
//                i
// hashmap = {
//     2: 1,
//     1: 1
// }
// i = 2
// array[i] = 5
// is array[i] already in hashmap?
//   if false, create new property 
//   if true, increment the count inside the property
// hashmap = {
//     2: 1,
//     1: 1,
//     5: 1
// }
// hashmap[array[i]] = 1


// array = [2, 1, 5, 3, 3, 2, 4]
//                   i
// hashmap = {
//     2: 1,
//     1: 1,
//     5: 1
// }
// i = 3
// array[i] = 3
// is array[i] already in hashmap?
//   if false, create new property 
//   if true, increment the count inside the property
// hashmap = {
//     2: 1,
//     1: 1,
//     5: 1,
//     3: 1
// }
// hashmap[array[i]] = 1

// array = [2, 1, 5, 3, 3, 2, 4]
//                      i
// hashmap = {
//     2: 1,
//     1: 1,
//     5: 1,
//     3: 1
// }
// i = 4
// array[i] = 3
// is array[i] already in hashmap?
//   if false, create new property 
//   if true, increment the count inside the property
// hashmap = {
//     2: 1,
//     1: 1,
//     5: 1,
//     3: 2
// }
// hashmap[array[i]] = 2
// we found our value 


// #####

export function firstDuplicateValue(array: number[]) {
  const hashmap: { [key: number]: number } = {};
  for (let i = 0; i < array.length; i++) {
    if (array[i] in hashmap) {
      hashmap[array[i]] = hashmap[array[i]] + 1;
    } else {
      hashmap[array[i]] = 1;
    }
    if (hashmap[array[i]] === 2) {
      return array[i];
    }
  }
  // Write your code here.
  return -1;
}
