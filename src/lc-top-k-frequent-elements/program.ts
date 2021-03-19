// input
// * given an integer array nums
// * and an integer k


// output
// * return the k most frequent elements
// * you may return the answer in any order

// constrants
// * 1 <= nums.length <= 10^5
// * k is in the range [1, the number of unique elements in the array]
// * it is guaranteed that the answer is unique

// ds

// algo

// sc
// * O(n), because of storig the hashmap and order array 

// tc
// * O(n log n), because of sorting

// example 1
// input: nums = [1, 1, 1, 2, 2, 3], k = 2
// output: [1, 2]

// example 2
// input: nums = [1], k = 1
// output: [1]

// #####

// build the hashmap, numsToFrequencyMap
// sort the hashmap based on the frequency
// get the array.slice(0, k)


export function topKFrequent(nums: number[], k: number): number[] {
  const numsToFrequencyMap: { [key: number]: number } = {};
  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    if (numsToFrequencyMap[element] !== undefined) {
      numsToFrequencyMap[element] += 1;
    } else {
      numsToFrequencyMap[element] = 1;
    }
  }

  const order: [number, number][] = [];
  for (const key in numsToFrequencyMap) {
    const frequency = numsToFrequencyMap[key];
    order.push([Number(key), Number(frequency)]);
  }

  order.sort((a, b) => b[1] - a[1]);

  const result: number[] = [];
  for (let i = 0; i < k; i++) {
    const element = order[i];
    const num = element[0];
    result.push(num);
  }
  return result;
}
