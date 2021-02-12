import { globalAgent } from "http";

export const kadanesAlgorithm = (array: number[]) => {
  let currentMax = array[0];
  let globalMax = array[0];
  for (let i = 1; i < array.length; i++) {
    currentMax = Math.max(array[i], currentMax + array[i]);
    globalMax = Math.max(globalMax, currentMax);
  }
  return globalMax;
};
