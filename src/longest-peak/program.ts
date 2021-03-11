// input 
// * takes in an array of integers 

// output
// * return the length of the longest peak in the array 
// * a peak is degined as adjacent integers in the array that are strictly increasing until they reach a tip, at which point they become strictly decreasing
//   * at least three integers are required to form a peak 

// aux space

// time complex

// sample input 
// array = [1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3]

// sample output
// 6 // 0, 10, 6, 5, -1, -3

// #####

// algo
// * traverse the input array with i 
//   * i start from index 1, not 0
// * calculate peak length starting from i 
//   * traverse peak length starting from i 



// array = [1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3]
// i = 1
// h = i - 1 = 0
// hasAscending = false
// hasDescending = false
// hasPlateau = false
// state = 'start', 'asc', 'desc' 
// if array[i] > array[h]
//     then it is ascending
//     if previous state === descending, means it is the end of the peak, already finished ascending and descending 
//         calculate the length from i 
//     if previous state === ascending, means it is still ascending
//         continue traversal 
//     if previous state === not defined, means it just started the traversal 
//         continue traversal 
// if array[i] < array[h]
//     then it is descending
//     if previous state === ascending, means it has reached the peak 
//         continue traversal 
//     if previous state === descending, means it is still descending
//         continue traversal 
//         there is a state where it is descending from the start of the array 
//     if previous state === not defined, means it just started the traversal 
//         continue traversal 
// if array[i] === array[h]
//     then it is plateauing, stop traversal 

// #####

// array = [1, 3, 2]
//          h  i
// hasAscending = false; 
// hasDescending = false; 
// hasPlateau = false; 
// i = 1
// h = 1 - 1 = 0
// array[i] = 3
// array[j] = 1
// hasAscending = true; 

// array = [1, 3, 2]
//             h  i
// hasAscending = false; 
// hasDescending = false; 
// hasPlateau = false; 
// i = 2
// h = 2 - 1 = 1
// array[i] = 2
// array[j] = 3
// hasDescending = true; 

export function longestPeak(array: number[]): number {
  // Write your code here.
  if (array.length < 3) return 0;
  let longestPeakLength = 0;
  let startIndex = 1;
  for (let i = 1; i < array.length; i++) {
    if (i < startIndex) continue;
    const currentPeakLength = getPeakLength(i, array);
    if (currentPeakLength > longestPeakLength) {
      longestPeakLength = currentPeakLength;
      startIndex = startIndex + i - 1;
    }
  }
  return longestPeakLength;
}

function getPeakLength(i: number, array: number[]): number {
  let hasAscending = false;
  let hasDescending = false;
  let h = i - 1;
  let length = 1;
  while (i < array.length) {
    const valueOne = array[h];
    const valueTwo = array[i];
    if (valueTwo > valueOne) {
      if (hasDescending) {
        break;
      } else {
        hasAscending = true;
      }
    } else if (valueTwo < valueOne) {
      hasDescending = true;
    } else if (valueTwo === valueOne) {
      break;
    }

    length++;
    i++;
    h++;
  }
  if (hasAscending && hasDescending) {
    return length;
  } else {
    return 0;
  }
}
