// input
// * an array of integers
//   * guaranteed to only contain integers that are in the second array 
// * and another array of three distinct integers
//   * the second array represents a desired order for the integers in the first array 
// * example, a second array of [x, y, z] represents a desired order of [x, x, ..., x, y, ..., y, z, z, ..., z] in the first array 

// output
// * sorts the first array according to the desired order in the second array 
// * should perform this in place, mutate the input array 
// * shoul not use any auxiliary space
// * note that the desired order won't necessarily be ascending or descending and the first array won't necessarily contain all three integers found in the second array 
//   * it might only contain one or two 

// algo 
// * dutch flag problem 
// * use three pointers 

// ds

// aux space

// time complexity 

// sample input
// array = [1, 0, 0, -1, -1, 0, 1, 1]
// order = [0, 1, -1]

// sample output
// [0, 0, 0, 1, 1, 1, -1, -1]



// array = [1, 0, 0, -1, -1, 0, 1, 1]
//          i  j                   k
// for loop 0...array.length - 2
//     j = i + 1
//     k = array.length - 1
// while j < k
// if array[j] === 1
//     j++
// if array[j] === 0
//    swap array[j], array[i]
//    j++
//    i++
// if array[j] === -1
//   swap array[j], array[k]
//   k--

// array = [0, 1, 0, -1, -1, 0, 1, 1]
//             i  j                k
// for loop 0...array.length - 2
//     j = i + 1
//     k = array.length - 1
// while j < k
// if array[j] === 1
//     j++
// if array[j] === 0
//    swap array[j], array[i]
//    j++
//    i++
// if array[j] === -1
//   swap array[j], array[k]
//   k--

// array = [0, 0, 1, -1, -1, 0, 1, 1]
//                i   j            k
// for loop 0...array.length - 2
//     j = i + 1
//     k = array.length - 1
// while j < k
// if array[j] === 1
//     j++
// if array[j] === 0
//    swap array[j], array[i]
//    j++
//    i++
// if array[j] === -1
//   swap array[j], array[k]
//   j++
//   k--


// array = [0, 0, 1, 1, -1, 0, 1, -1]
//                i      j     k
// for loop 0...array.length - 2
//     j = i + 1
//     k = array.length - 1
// while j < k
// if array[j] === 1
//     j++
// if array[j] === 0
//    swap array[j], array[i]
//    j++
//    i++
// if array[j] === -1
//   swap array[j], array[k]
//   k--
//   j++

// array = [0, 0, 1, 1, 1, 0, -1, -1]
//                i        j
//                         k
// for loop 0...array.length - 2
//     j = i + 1
//     k = array.length - 1
// while j < k
// if array[j] === 1
//     j++
// if array[j] === 0
//    swap array[j], array[i]
//    j++
//    i++
// if array[j] === -1
//   swap array[j], array[k]
//   k--
//   j++


// array = [0, 0, 0, 1, 1, 1, -1, -1]
//                   i         j
//                         k
// for loop 0...array.length - 2
//     j = i + 1
//     k = array.length - 1
// while j < k
// if array[j] === 1
//     j++
// if array[j] === 0
//    swap array[j], array[i]
//    j++
//    i++
// if array[j] === -1
//   swap array[j], array[k]
//   k--
//   j++


// array = [0, 0, 0, 1, 1, 1, -1, -1]
//             i
//                j
//                                 k

// for loop 0...array.length - 2
//     j = i + 1
//     k = array.length - 1
// while j < k
// if array[j] === 1
//     j++
// if array[j] === 0
//    swap array[j], array[i]
//    j++
//    i++
// if array[j] === -1
//   swap array[j], array[k]
//   k--
//   j++

// array = [0, 0, 0, 1, 1, 1, -1, -1]
//                i
//                   j
//                                 k

// for loop 0...array.length - 2
//     j = i + 1
//     k = array.length - 1
// while j < k
// if array[j] === 1
//     j++
// if array[j] === 0
//    swap array[j], array[i]
//    j++
//    i++
// if array[j] === -1
//   swap array[j], array[k]
//   k--
//   j++

// array = [0, 0, 0, 1, 1, 1, -1, -1]
//                i
//                      j
//                                 k

// for loop 0...array.length - 2
//     j = i + 1
//     k = array.length - 1
// while j < k
// if array[j] === 1
//     j++
// if array[j] === 0
//    swap array[j], array[i]
//    j++
//    i++
// if array[j] === -1
//   swap array[j], array[k]
//   k--
//   j++


// array = [0, 0, 0, 1, 1, 1, -1, -1]
//                i
//                         j
//                                 k

// for loop 0...array.length - 2
//     j = i + 1
//     k = array.length - 1
// while j < k
// if array[j] === 1
//     j++
// if array[j] === 0
//    swap array[j], array[i]
//    j++
//    i++
// if array[j] === -1
//   swap array[j], array[k]
//   k--
//   j++


// array = [0, 0, 0, 1, 1, 1, -1, -1]
//                i
//                             j
//                                 k

// for loop 0...array.length - 2
//     j = i + 1
//     k = array.length - 1
// while j < k
// if array[j] === 1
//     j++
// if array[j] === 0
//    swap array[j], array[i]
//    j++
//    i++
// if array[j] === -1
//   swap array[j], array[k]
//   k--

// array = [0, 0, 0, 1, 1, 1, -1, -1]
//                i
//                                 j
//                             k

// for loop 0...array.length - 2
//     j = i + 1
//     k = array.length - 1
// while j < k
// if array[j] === 1
//     j++
// if array[j] === 0
//    swap array[j], array[i]
//    j++
//    i++
// if array[j] === -1
//   swap array[j], array[k]
//   k--


// #####

// array  = [0, 1, 2, 0, 0, 2, 2]
//           i
//              j
//                             k

// array  = [0, 1, 2, 0, 0, 2, 2]
//           i
//                 j
//                             k

// array  = [0, 1, 2, 0, 0, 2, 2]
//           i
//                    j
//                          k

// array  = [0, 1, 2, 2, 0, 0, 2]
//           i
//                       j
//                       k

// array  = [0, 1, 2, 2, 0, 0, 2]
//              i
//                       j
//                       k

// array  = [0, 1, 2, 2, 0, 0, 2]
//              i
//                          j
//                       k


// array  = [0, 1, 2, 2, 0, 0, 2]
//              i
//                 j
//                             k

// array  = [0, 1, 2, 2, 0, 0, 2]
//              i
//                    j
//                          k

// array  = [0, 1, 2, 0, 0, 2, 2]
//              i
//                       j
//                       k

// array  = [0, 0, 2, 0, 1, 2, 2]
//                 i
//                          j
//                       k

// array  = [0, 0, 2, 0, 1, 2, 2]
//                 i
//                    j
//                             k

// array  = [0, 0, 0, 2, 1, 2, 2]
//                    i
//                       j
//                             k

// array  = [0, 0, 0, 2, 1, 2, 2]
//                    i
//                          j
//                             k

// array  = [0, 0, 0, 2, 1, 2, 2]
//                    i
//                             j
//                          k

// array  = [0, 0, 0, 2, 1, 2, 2]
//                    i
//                       j
//                             k

// array  = [0, 0, 0, 2, 1, 2, 2]
//                    i
//                          j
//                             k

// array  = [0, 0, 0, 2, 1, 2, 2]
//                    i
//                             j
//                          k


// array  = [0, 0, 0, 2, 1, 2, 2]
//                    i
//                             j
//                          k
// #####

// array = [0, 1, 2, 0, 2]
//          i
//             j
//                      k

// array = [0, 1, 2, 0, 2]
//          i
//                j
//                      k

// array = [0, 1, 2, 0, 2]
//          i
//                j
//                   k

// array = [0, 1, 0, 2, 2]
//          i
//                j
//                   k

// array = [0, 1, 0, 2, 2]
//             i
//                   j
//                   k

// array = [0, 1, 0, 2, 2]
//             i
//                   j
//                k

// ##

// array = [0, 1, 0, 2, 2]
//             i
//                j
//                      k

// array = [0, 0, 1, 2, 2]
//                i
//                   j
//                      k



export function threeNumberSort(array: number[], order: number[]) {
  // Write your code here.
  let i = 0;
  let j = 0;
  let k = array.length - 1;
  while (j <= k) {
    if (array[j] === order[1]) {
      j++;
    } else if (array[j] === order[0]) {
      [array[j], array[i]] = [array[i], array[j]];
      i++;
      j++;
    } else if (array[j] === order[2]) {
      [array[j], array[k]] = [array[k], array[j]];
      k--;
    }
  }
  return array;
}
