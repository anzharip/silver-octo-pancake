type Triplet = [number, number, number];

export function threeNumberSum(array: number[], targetSum: number): Triplet[] {
  // Write your code here.
  array.sort((a, b) => a - b);
  const triplets: Triplet[] = [];
  for (let i = 0; i < array.length - 2; i++) {
    let j = i + 1;
    let k = array.length - 1;
    while (j < k) {
      const currentSum = array[i] + array[j] + array[k];
      if (currentSum === targetSum) {
        triplets.push([array[i], array[j], array[k]]);
        j++;
        k--;
      } else if (currentSum < targetSum) {
        j++;
      } else if (currentSum > targetSum) {
        k--;
      }
    }
  }
  return triplets;
}
