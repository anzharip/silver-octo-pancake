// input
// * given an integer aray nums


// output
// * return an array answer
//   * such that answer[i] is equal to the product of all the elements of nums except nums[i]
//   * the product of any prefix or suffix of nums is guarranteed to fit in a a 32 bit integer

// constraint
// * 2 <= nums.length <= 10^5
// * -30 <= nums[i] <= 30

// ds

// algo

// sc

// tc

// example 1
// input: nums = [1, 2, 3, 4]
// output: [24, 12, 8, 6]

// example 2
// input: [-1, 1, 0, -3, 3]
// output: [0, 0, 9, 0, 0]

// #####

// nums = [1, 2, 3, 4]
//         i
// i = 0
// nums[i] = 1
// left = []
// i - 1 = 0 - 1 = -1
// if i - 1 < 0
//     left[i] = 1
// left = [1]

// ##

// nums = [1, 2, 3, 4]
//            i
// i = 1
// nums[i] = 2
// left = [1, ]
// i - 1 = 1 - 1 = 0
// if i - 1 < 0
//     left[i] = 1
// else 
//     left[i] = nums[i - 1] * left[i - 1]
// nums[i - 1] = 1
// left[i - 1] = 1
// left[i] = 1 * 1 = 1
// left = [1, 1, ]

// ##

// nums = [1, 2, 3, 4]
//               i
// i = 2
// nums[i] = 3
// left = [1, 1, ]
// i - 1 = 2 - 1 = 1
// if i - 1 < 0
//     left[i] = 1
// else 
//     left[i] = nums[i - 1] * left[i - 1]
// nums[i - 1] = 2
// left[i - 1] = 1
// left[i] = 2 * 1 = 2
// left = [1, 1, 2, ]

// ##

// nums = [1, 2, 3, 4]
//                  i
// i = 3
// nums[i] = 4
// left = [1, 1, 2, ]
// i - 1 = 3 - 1 = 2
// if i - 1 < 0
//     left[i] = 1
// else 
//     left[i] = nums[i - 1] * left[i - 1]
// nums[i - 1] = 3
// left[i - 1] = 2
// left[i] = 3 * 2 = 6
// left = [1, 1, 2, 6, ]

// #####

// nums = [1, 2, 3, 4]
//                  i
// i = 3
// nums[i] = 4
// right = [1]
// i + 1 = 3 + 1 = 4
// if 1 + 1 >= nums.length
//     right[i] = 1


function productExceptSelf(nums: number[]): number[] {
  const left: number[] = nums.map(() => 1);
  const right: number[] = nums.map(() => 1);
  const result: number[] = nums.map(() => 1);
  for (let i = 0; i < nums.length; i++) {
    if (i - 1 < 0) {
      left[i] = 1;
    } else {
      left[i] = nums[i - 1] * left[i - 1];
    }
  }
  for (let i = nums.length - 1; i >= 0; i--) {
    if (i + 1 >= nums.length) {
      right[i] = 1;
      result[i] = left[i] * right[i];
    } else {
      right[i] = nums[i + 1] * right[i + 1];
      result[i] = left[i] * right[i];
    }
  }
  return result;
}
