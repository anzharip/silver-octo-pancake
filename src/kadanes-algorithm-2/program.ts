export function kadanesAlgorithm(array: number[]) {
  let currentNodeMax = array[0];
  let globalMax = array[0];
  for (let i = 1; i < array.length; i++) {
    currentNodeMax = Math.max(array[i], currentNodeMax + array[i]);
    globalMax = Math.max(globalMax, currentNodeMax);
  }
  return globalMax;
}
