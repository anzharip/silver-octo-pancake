export function findKthLargest(nums: number[], k: number): number {
  const descSortedNums = nums.sort((a, b) => b - a);
  return descSortedNums[k - 1];
}
