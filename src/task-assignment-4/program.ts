export const taskAssignment = (k: number, tasks: number[]): number[][] => {
  const result: number[][] = [];
  const durationToIndexMap = getDurationToIndexMap(tasks);
  const sortedTasks = tasks.slice().sort((a, b) => a - b);

  let ptr1 = 0;
  let ptr2 = tasks.length - 1;
  while (ptr1 < ptr2) {
    const duration1 = sortedTasks[ptr1];
    const duration2 = sortedTasks[ptr2];
    const pair1 = durationToIndexMap[duration1].pop()!;
    const pair2 = durationToIndexMap[duration2].pop()!;
    result.push([pair1, pair2]);
    ptr1++;
    ptr2--;
  }
  return result;
};

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
