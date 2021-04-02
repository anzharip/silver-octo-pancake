// input
// * given an integer array nums
// * and an integer k

// output
// * return the kth largest element in the array 

// constraint
// * 1 <= k <= nums.length <= 10^4
// * -10^4 <= nums[i] <= 10^4

// ds

// algo
// * use quicksort/quickselect
// * if partition index = nums.length - k

// tc

// sc

// example 1
// input: nums = [3, 2, 1, 5, 6, 4], k = 2
// output: 5

// example 2
// input: nums = [3, 2, 3, 1, 2, 4, 5, 5, 6, ], k = 4
// output: 4

// #####
// nums = [3, 2, 1, 5, 6, 4]
// sortedAscendingNums = [1, 2, 3, 4, 5, 6, ]
// k = 2
// result = 5
// nums.length = 6
// indexK = nums.length - 2 = 4
// nums[indexK] = 5

// #####

// nums = [5, 2, 4, 1, 3, 6, 0]
// sortedAscendingNums = [0, 1, 2, 3, 4, 5, 6]
// k = 4
// result = 3
// nums.length = 7
// indexK = nums.length - k = 7 - 4 = 3
// nums[indexK] = 3

export function findKthLargest(nums: number[], k: number): number {
  quickSortPartial(0, nums.length - 1, nums, k);
  return nums[nums.length - k];
}

const quickSortPartial = (
  startIdx: number,
  endIdx: number,
  nums: number[],
  k: number
) => {
  if (startIdx >= endIdx) return;
  const partitionIdx = hoarePartition(startIdx, endIdx, nums);
  if (partitionIdx < nums.length - k) {
    quickSortPartial(partitionIdx + 1, endIdx, nums, k);
  } else {
    quickSortPartial(startIdx, partitionIdx, nums, k);
  }
};

const hoarePartition = (i: number, j: number, nums: number[]) => {
  const pivot = nums[Math.floor((i + j) / 2)];
  while (true) {
    while (i <= j && nums[i] < pivot) {
      i++;
    }
    while (i <= j && nums[j] > pivot) {
      j--;
    }
    if (i >= j) return j;
    [nums[i], nums[j]] = [nums[j], nums[i]];
    i++;
    j--;
  }
};
