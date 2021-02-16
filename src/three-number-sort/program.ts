// input:
// * an array of integers
//   * only contain integers that are in the second array
// * another array of three distinct integers
//   * represents a desired order for the integersr in the first array
// * example:
//   * array 2nd = [x, y, z]
//   * 1st array = [x, x, ..., x, y, y, ..., y, z, z, ..., z]
// * example:
//   * array = [1, 0, 0, -1, -1, 0, 1, 1]
//   * order = [0, 1, -1]
//   * output = [0, 0, 0, 1, 1, 1, -1, -1]
// * mutate the array in place
// * the desired order won't necessarily be ascending or descending
// * the 1st array won't necessarily contain all three integers found in the second array

export function threeNumberSort(array: number[], order: number[]) {
  // Write your code here.
  const orderCounts: { [key: number]: number } = {};
  for (const num of order) {
    orderCounts[num] = 0;
  }
  for (const number of array) {
    orderCounts[number]++;
  }
  array = [];
  for (const num of order) {
    const count = orderCounts[num];
    for (let i = 0; i < count; i++) {
      array.push(num);
    }
  }

  return array;
}
