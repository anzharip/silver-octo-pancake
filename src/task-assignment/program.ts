// input:
// k = representing number of workers, an integer
// array = representing duratino os tasks that must be completed by the workers, an array of positive integers,
// each worker => must complete two unique tasks
// each worker => can only work on one task at a time
// number of tasks will always be => 2k, each worker always has each two tasks to complete
// all tasks are independent od one another, can be completed in any order
// workers => complete assigned tasks in parallel, time taken to complete all tasks will be = to time taken to complete the longest pair of tasks (check sample output)
// there will always be at least one worker, k > 0

// output:
// optimal assignments of tasks to each workers, such that tasks are completed ASAP
// return a list of pairs, each pair stores the indices of the tasks that should be completed by one worker
// format = [task1, task2]
// order of task1, task2 doesnt matter
// can return the pairs in any order
// if multiple optimal assignments exist, any correct answer is accepted

// sample input:
// k = 3
// tasks = [1, 3, 5, 3, 1, 4]

// sample output:
// [
//     [0, 2], // 1 + 5 = 6
//     [4, 5], // 1 + 4 = 5
//     [1, 3] // 3 + 3 = 6
// ]

// another correct answer:
// [
//     [2, 4], // 5 + 1 = 6
//     [0, 5], // 1 + 4 = 5
//     [1, 3] // 3 + 3 = 6
// ]

// export function taskAssignment(k: number, tasks: number[]) {
//   // Write your code here.
//   const result: number[][] = [];
//   const isVisited: boolean[] = new Array(k).fill(false);
//   let currentMin = 0;
//   let currentMax = 0;
//   for (let i = 0; i < tasks.length; i++) {
//     if (tasks[currentMin] > tasks[i]) currentMin = i;
//     if (tasks[currentMax] < tasks[i]) currentMax = i;
//   }
//   isVisited[currentMin] = true;
//   isVisited[currentMax] = true;
//   result.push([currentMin, currentMax]);

//   while (result.length < k) {
//     const pair = getPair(tasks, isVisited);
//     result.push(pair);
//   }
//   return result;
// }

// const getPair = (tasks: number[], isVisited: boolean[]) => {
//   const pair = [];
//   for (let j = 0; j < tasks.length; j++) {
//     if (isVisited[j]) continue;
//     if (pair.length === 2) {
//       return pair;
//     }
//     pair.push(j);
//     isVisited[j] = true;
//   }
//   return pair;
// };

export function taskAssignment(k: number, tasks: number[]) {
  // Write your code here.
  const result: number[][] = [];
  const durationToIndex = getDurationToIndex(tasks);
  const sortedTasks = tasks.slice().sort((a, b) => a - b);
  let ptr1 = 0;
  let ptr2 = sortedTasks.length - 1;
  while (ptr1 < ptr2) {
    const pair1 = durationToIndex[sortedTasks[ptr1]].pop()!;
    const pair2 = durationToIndex[sortedTasks[ptr2]].pop()!;
    result.push([pair1, pair2]);
    ptr1++;
    ptr2--;
  }
  return result;
}

const getDurationToIndex = (tasks: number[]) => {
  const durationToIndex: { [key: number]: number[] } = {};
  for (let i = 0; i < tasks.length; i++) {
    const duration = tasks[i];
    if (tasks[i] in durationToIndex) {
      durationToIndex[duration].push(i);
    } else {
      durationToIndex[duration] = [i];
    }
  }
  return durationToIndex;
};
