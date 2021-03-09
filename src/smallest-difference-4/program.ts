// input
// * two non-empty arrays of integers

// output
// * finds the pair of numbers (one from each array)
//   * whose absolute diff is closest to zero
// * return an array containing these two number
//   * number from the first array in the first position
// * note that the abs diff of two integers is the distance between them on the real number line 
//   * for example, the absolute diff of -5 and 5 is 10
//   * abs diff of -5 and -4 is 1
// * there will always only be one pair of numbers with the smallest difference

// ds

// algo

// aux space

// time complex

// sample input
// arrayOne = [-1, 5, 10, 20, 28, 3]
// arrayTwo = [26, 134, 135, 15, 17]

// sample output
// [28, 26]

// #####
// arrayOne = [-1, 5, 10, 20, 28, 3]
// arrayTwo = [26, 134, 135, 15, 17]

// sort both of the array 

// sortedArrayOne = [-1, 3, 5, 10, 20, 28]
// sortedArrayTwo = [15, 17, 26, 134, 135]

// traversing the array 
// sortedArrayOne = [-1, 3, 5, 10, 20, 28]
//                   i
// sortedArrayTwo = [15, 17, 26, 134, 135]
//                   j
// i = 0
// j = 0
// sortedArrayOne[i] = -1
// sortedArrayTwo[j] = 15
// smallestAbsDiffPair = [0, 0]
// while i < sortedArrayOne.length&& j < sortedArrayTwo.length
// smallestAbsDiffValue = abs(sortedArrayOne][smallestAbsDiffPair[0]] - smallestAbsDiffPair[1])
// currentAbsDiff = Math.abs(sortedArrayOne[i] - sortedArrayTwo[j])
// if (currentAbsDiff < smallestAbsDiffValue)
//     then update the pair smallestAbsDiffPair
//     smallestAbsDiffPair = [sortedArrayOne[i], sortedArrayTwo[j]]
// then move the pointers
//     if (sortedArrayOne[i] > sortedArrayTwo[j])
//         j++
//     if (sortedArrayOne[i] < sortedArrayTwo[j])
//         i++
//     if (sortedArrayOne[i] === sortedArrayTwo[j])
//         return [sortedArrayOne[i], sortedArrayTwo[j]] => because the diff will be 0



// #####

// sortedArrayOne = [-1, 3, 5, 10, 20, 28]
//                   i
// sortedArrayTwo = [15, 17, 26, 134, 135]
//                   j
// i = 0
// j = 0
// smallestDiffPair = [-1, 15]
// sortedArrayOne[i] = -1
// sortedArrayTwo[j] = 15
// smallestDiffValue = 16
// currentAbsDiff = |-1 - 15| = |-16| = 16
// if currentAbsDiff < smallestAbsDiffValue
//     update smallestAbsDiffPair
// smallestDiffPair = [-1, 15]
// if sortedArrayOne[i] < sortedArrayTwo[j]
//     i++
// if sortedArrayOne[i] > sortedArrayTwo[j]
//     j++
// if sortedArrayOne[i] === sortedArrayTwo[j]
//     return [sortedArrayOne[i], sortedArrayTwo[j]]
// i = 1

// ##
// sortedArrayOne = [-1, 3, 5, 10, 20, 28]
//                       i
// sortedArrayTwo = [15, 17, 26, 134, 135]
//                   j
// i = 1
// j = 0
// smallestDiffPair = [-1, 15]
// smallestDiffValue = 16
// sortedArrayOne[i] = 3
// sortedArrayTwo[j] = 15
// currentAbsDiff = |3 - 15| = |-12| = 12
// if currentAbsDiff < smallestAbsDiffValue
//     update smallestAbsDiffPair
// smallestDiffPair = [3, 15]
// if sortedArrayOne[i] < sortedArrayTwo[j]
//     i++
// if sortedArrayOne[i] > sortedArrayTwo[j]
//     j++
// if sortedArrayOne[i] === sortedArrayTwo[j]
//     return [sortedArrayOne[i], sortedArrayTwo[j]]
// i = 2

// ##

// sortedArrayOne = [-1, 3, 5, 10, 20, 28]
//                          i
// sortedArrayTwo = [15, 17, 26, 134, 135]
//                   j
// i = 2
// j = 0
// smallestDiffPair = [3, 15]
// smallestDiffValue = 12
// sortedArrayOne[i] = 5
// sortedArrayTwo[j] = 15
// currentAbsDiff = |5 - 15| = |-12| = 12
// if currentAbsDiff < smallestAbsDiffValue
//     update smallestAbsDiffPair
// smallestDiffPair = [3, 15]
// if sortedArrayOne[i] < sortedArrayTwo[j]
//     i++
// if sortedArrayOne[i] > sortedArrayTwo[j]
//     j++
// if sortedArrayOne[i] === sortedArrayTwo[j]
//     return [sortedArrayOne[i], sortedArrayTwo[j]]
// i = 2

export function smallestDifference(arrayOne: number[], arrayTwo: number[]) {
  // Write your code here.
  arrayOne.sort((a, b) => a - b);
  arrayTwo.sort((a, b) => a - b);
  let i = 0;
  let j = 0;
  let smallestAbsDiffPair = [arrayOne[0], arrayTwo[0]];
  while (i < arrayOne.length && j < arrayTwo.length) {
    const smallestAbsDiffValue = Math.abs(
      smallestAbsDiffPair[0] - smallestAbsDiffPair[1]
    );
    const valueOne = arrayOne[i];
    const valueTwo = arrayTwo[j];
    const currentAbsDiffValue = Math.abs(valueOne - valueTwo);
    if (currentAbsDiffValue < smallestAbsDiffValue) {
      smallestAbsDiffPair = [valueOne, valueTwo];
    }
    if (valueOne > valueTwo) {
      j++;
    } else if (valueOne < valueTwo) {
      i++;
    } else {
      return [valueOne, valueTwo];
    }
  }
  return smallestAbsDiffPair;
}
