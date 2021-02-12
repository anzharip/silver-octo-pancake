// input = non empty array of integers

// output = maximum sum, that can be obtained by summing up all of the integers in a non-empty subarray of the input Array.
// a subarray must only contain adjacent numbers (number next to each other in the input Array)

// sample input = [3, 5, -9, 1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1, -5, 4]
// sample output = 19 // [1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1, -5, 4]

// time = O()
// currentSum = math.sum(sample input)
// currentIndex = 0
// left = currentIndex - 1, while currentIndex - 1 >=0
// right = currentIndex + 1, while currentIndex + 1 < input array length
// if newSum less than currentSum

export function kadanesAlgorithm(array: number[]): number {
  if (array.length === 1) return array[0];
  let nodeMax = array[0];
  let globalMax = array[0];
  for (let i = 1; i < array.length; i++) {
    nodeMax = Math.max(nodeMax + array[i], array[i]);
    globalMax = Math.max(globalMax, nodeMax);
  }

  return globalMax;
}
