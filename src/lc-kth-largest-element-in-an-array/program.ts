// input
// * given an integer array nums
// * and an integer k

// output
// * return kth largest element in the array 
// * note that it is the kth largest element in the sorted order, not the kth distinct element

// constraint
// * 1 <= k <= nums.length <= 10^4
// * -10^4 <= nums[i] <= 10^4

// ds

// algo

// sc

// tc

// example 1
// input: nums = [3, 2, 1, 5, 6, 4, ], k = 2
// output: 5

// example 2
// input: nums = [3, 2, 3, 1, 2, 4, 5, 5, 6, ], k = 4
// output: 4

// #####

// sortedNums = [1, 2, 3, 4, 5, 6]
// reverseSortedNums = [6, 5, 4, 3, 2, 1]
// k = 2
// result = 5

// #####

// sortedNums = [1, 2, 2, 3, 3, 4, 5, 5, 6, ]
// reverseSortedNums = [6, 5, 5, 4, 3, 3, 2, 2, 1, ]
// k = 4
// result = 4

// #####

// nums = [3, 2, 1, 5, 6, 4, ]
//         i 
// i = 0 
// nums[i] = 3
// k = 2
// queue = [-Inf, -Inf]
// logic
// queue = [3, -Inf]

// ##
// nums = [3, 2, 1, 5, 6, 4, ]
//            i 
// i = 1
// nums[i] = 2
// queue = [3, -Inf]
// logic
// queue = [3, 2]

// ##
// nums = [3, 2, 1, 5, 6, 4, ]
//               i 
// i = 2
// nums[i] = 1
// queue = [3, 2]
// logic 
// queue = [3, 2]

// ##
// nums = [3, 2, 1, 5, 6, 4, ]
//                  i 
// i = 3
// nums[i] = 5
// queue = [3, 2]
// logic 
// queue = [5, 3]

// ##
// nums = [3, 2, 1, 5, 6, 4, ]
//                     i 
// i = 4
// nums[i] = 6
// queue = [5, 3]
// logic 
// queue = [6, 5]

// ##
// nums = [3, 2, 1, 5, 6, 4, ]
//                        i 
// i = 5
// nums[i] = 4
// queue = [6, 5]
// logic
// queue = [6, 5]
//             result 

// #####
// nums = [5,2,3,1,2]
//         i
// i = 0
// nums[i] = 5
// k = 4
// queue = [-Inf, -Inf, -Inf, -Inf, ]
// logic 
// queue = [5, -Inf, -Inf, -Inf, ]

// ##
// nums = [5,2,3,1,2]
//           i
// i = 1
// nums[i] = 2
// k = 4
// queue = [5, -Inf, -Inf, -Inf, ]
// logic 
// queue = [5, 2, -Inf, -Inf, ]

// ##
// nums = [5,2,3,1,2]
//             i
// i = 2
// nums[i] = 3
// k = 4
// queue = [5, 2, -Inf, -Inf, ]
// logic
// queue = [5, 3, 2, -Inf, ]



export function findKthLargest(nums: number[], k: number): number {
  const descSortedNums = nums.sort((a, b) => b - a);
  return descSortedNums[k - 1];
}
