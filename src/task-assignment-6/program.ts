// input
// * given an integer k representing the number of workers
// * array of positive integers representing durations of tasks that must be completed by the workers
// * each worker must complete two unique tasks, and they can only work one task at a time
// * the number of tasks will always equal to 2k, each worker will always has exactly two task to complete
// * all tasks are independent of each other, and can be completed in any order
// * workers will complete their task in parallel, and the time taken to complete all tasks will be equal to the time taken to complete the longest pair of tasks
// * always given at least one worker
//   * hence k will always be greater than 0

// output
// * write a function that return the optimal assignment of tasks to each worker
//   * such that the tasks are completed as fast as possible
// * return a list of pairs, each pair stores the indices of the tasks that should be completed by one worker
// * [task1, task2], the order of task 1 and task 2 does not matter
// * can return the pairs in any order
// * possible to have multiple optimal assignments, any correct answer will be accepted

// ds
// * hashtable storing the initial index position
//   * length to indexes map

// algo
// * create hashtable storing the initial index position
//   * length to indexes map
// * sort the tasks array
//   * can I mutate the tasks array?
// * use two pointer system
//   * put ptr1 on index 0, and ptr2 on index sortedArray.length -1
//     * this will form the longest optimal task combination
//   * ptr1 and ptr2 will form a pair
//   * get the initial index from the hashtable
//   * append the pair to the result

// aux space
// * hashtable, O(n), n === number of tasks
// * the result 2D array, O(n)

// time complexity
// * due to sorting, O(n log n)
// * another pass to construct the result, O(n)

export function taskAssignment(k: number, tasks: number[]) {
  // Write your code here.
  const mapLengthToIndex: { [key: number]: number[] } = {};
  for (let i = 0; i < tasks.length; i++) {
    if (mapLengthToIndex[tasks[i]]) {
      mapLengthToIndex[tasks[i]].push(i);
    } else {
      mapLengthToIndex[tasks[i]] = [i];
    }
  }
  tasks.sort((a, b) => a - b);
  const result: [number, number][] = [];
  let ptr1 = 0;
  let ptr2 = tasks.length - 1;
  while (ptr1 < ptr2) {
    const taskIndexOne = mapLengthToIndex[tasks[ptr1]].pop()!;
    const taskIndexTwo = mapLengthToIndex[tasks[ptr2]].pop()!;
    result.push([taskIndexOne, taskIndexTwo]);
    ptr1++;
    ptr2--;
  }
  return result;
}
