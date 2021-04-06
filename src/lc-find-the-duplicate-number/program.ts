// input
// * an array of integers nums
//   * containing n + 1 integers 
//   * where each integer is in the range [1, n] inclusive

// output
// * there is only one repeated number in nums, return this repeated number

// constraint
// * 2 <= n <= 3 * 10^4
// * nums.length == n + 1
// * 1 <= nums[i] <= n
// * all the integers in nums appear only once except for precisely one integer which appears two or more times 

// ds

// algo
// * traverse each element of the array once, make it O(n)
// * store the info of where we already traversed the element 
// * since we already know that n will always be positive, we can store the info in the array elements 
// * we can put the number nums[i] into negatives

// tc
// * O(n)

// sc
// * O(1)

// #####
// example 1
// Input: nums = [1, 3, 4, 2, 2, ]
// Output: 2

// #####
// nums = [1, 3, 4, 2, 2, ]
//         i
// i = 0
// nums[i] = 1
// abs(nums[i]) = 1
// nums[abs(nums[i])] = nums[1] = 3
// if nums[abs(nums[i])] < 0, then this is the result 
//     return abs(nums[i])
// if not, set index nums[abs(nums[i])] to negative
// nums[1] = 3 * -1 = -3
// nums = [1, -3, 4, 2, 2, ]

// ##
// nums = [1, -3, 4, 2, 2, ]
//            i
// i = 1
// nums[i] = -3
// abs(nums[i]) = 3
// nums[abs(nums[i])] = nums[3] = 2
// if nums[abs(nums[i])] < 0, then this is the result 
//     return abs(nums[i])
// if not, set index nums[abs(nums[i])] to negative
// nums[3] = 2 * -1 = -2
// nums = [1, -3, 4, -2, 2, ]

export function findDuplicate(nums: number[]): number {
  for (let i = 0; i < nums.length; i++) {
    const storageIndex = Math.abs(nums[i]);
    if (nums[storageIndex] < 0) {
      return Math.abs(nums[i]);
    } else {
      nums[storageIndex] = nums[storageIndex] * -1;
    }
  }
  return nums[0];
}
