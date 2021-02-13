export function taskAssignment(k: number, tasks: number[]) {
  // Write your code here.
  const result: number[][] = [];
  const durationToIndexMap = getDurationToIndexMap(tasks);
  const sortedTasks = tasks.slice().sort((a, b) => a - b);
  let ptrLeft = 0;
  let ptrRight = tasks.length - 1;
  while (ptrLeft < ptrRight) {
    const duration1 = sortedTasks[ptrLeft];
    const duration2 = sortedTasks[ptrRight];
    const pair1 = durationToIndexMap[duration1].pop()!;
    const pair2 = durationToIndexMap[duration2].pop()!;
    result.push([pair1, pair2]);
    ptrLeft++;
    ptrRight--;
  }
  return result;
}

const getDurationToIndexMap = (tasks: number[]) => {
  const durationToIndexMap: { [key: number]: number[] } = {};
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i] in durationToIndexMap) {
      durationToIndexMap[tasks[i]].push(i);
    } else {
      durationToIndexMap[tasks[i]] = [i];
    }
  }
  return durationToIndexMap;
};
