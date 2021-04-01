// input
// * given an array of integers nums

// output
// * sort the array in ascending order

// constraint
// * 1 <= nums.length <= 50000
// * -50000 <= nums[i] <= 50000

// ds

// algo

// tc

// sc

// example 1
// input: nums = [5, 2, 3, 1, ]
// output: [1, 2, 3, 5, ]

// example 2
// input: nums = [5, 1, 1, 3, 0, 0, ]
// output: [0, 0, 1, 1, 3, 5, ]

// #####
// nums = [0, 1, 1, 3, 0, 2, ]
//                        p
//         l
//                        r
// l = 0
// r = 2
// p = 2
// nums[l] = 0
// nums[r] = 2
// nums[p] = 2

// while nums[l] < nums[p] && l <= r
//     l++
// l = 3
// nums[l] = 3

// while nums[r] > nums[p] && l <= r
//     r--
// r = 5
// nums[r] = 2

// nums = [0, 1, 1, 3, 0, 2, ]
//                        p
//                  l
//                        r

// swap nums[l], nums[r]
// nums = [0, 1, 1, 2, 0, 3, ]

// ##
// nums = [0, 1, 1, 2, 0, 3, ]
//                  l
//                        r

// pivot = 2
// l = 3
// r = 2
// nums[l] = 2
// nums[r] = 3

// while nums[l] < nums[p] && l <= r
//     l++
// l = 3
// nums[l] = 2

// while nums[r] > nums[p] && l <= r
//     r--
// r = 4
// nums[r] = 0

// nums = [0, 1, 1, 2, 0, 3, ]
//                  l
//                     r

// swap nums[l], nums[r]

// nums = [0, 1, 1, 0, 2, 3, ]
//                  l
//                     r
// ##

// nums = [0, 1, 1, 0, 2, 3, ]
//                  l
//                     r
// pivot = 2
// l = 3
// nums[l] = 0
// r = 4
// nums[r] = 2

// while nums[l] < pivot
//     l++
// l = 4
// nums[l] = 2

// while nums[r] > pivot
//     r--
// r = 4
// nums[r] = 2

// if l >= r
//   return r

// #####

// nums = [3, 2]
//         l
//            r
// pivot = 2
// l = 0
// nums[l] = 3
// r = 1
// nums[r] = 2

// while nums[l] < pivot
//     l++
// l = 0
// nums[l] = 3

// while nums[r] > pivot
//     r--
// r = 1
// nums[r] = 2

// nums = [3, 2]
//         l
//            r

// swap nums[l], nums[r]

// nums = [2, 3]
//         l
//            r

// ##

// nums = [2, 3]
//         l
//            r

// pivot = 2
// l = 0
// nums[l] = 2
// r = 1
// nums[r] = 3

// while nums[l] < pivot
//     l++
// l = 0
// nums[l] = 2

// while nums[r] > pivot
//     r--
// r = 0
// nums[r] = 2

// if l >= r
//   return r

export function sortArray(nums: number[]): number[] {
  quicksortHelper(0, nums.length - 1, nums);
  return nums;
}

function quicksortHelper(startIdx: number, endIdx: number, nums: number[]) {
  if (startIdx >= endIdx) return;
  const pivotIdx = hoarePartition(startIdx, endIdx, nums);
  quicksortHelper(startIdx, pivotIdx, nums);
  quicksortHelper(pivotIdx + 1, endIdx, nums);
}

function hoarePartition(leftIdx: number, rightIdx: number, nums: number[]) {
  const pivot = nums[Math.floor((leftIdx + rightIdx) / 2)];

  while (true) {
    while (nums[leftIdx] < pivot && leftIdx <= rightIdx) {
      leftIdx++;
    }
    while (nums[rightIdx] > pivot && leftIdx <= rightIdx) {
      rightIdx--;
    }
    if (leftIdx >= rightIdx) return rightIdx;
    [nums[leftIdx], nums[rightIdx]] = [nums[rightIdx], nums[leftIdx]];
    leftIdx++;
    rightIdx--;
  }
}
