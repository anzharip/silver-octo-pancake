export const kadanesAlgorithm = (array: number[]): number => {
  let currentMax = array[0];
  let globalMax = array[0];
  for (let i = 1; i < array.length; i++) {
    currentMax = Math.max(currentMax + array[i], array[i]);
    globalMax = Math.max(globalMax, currentMax);
  }
  return globalMax;
};
