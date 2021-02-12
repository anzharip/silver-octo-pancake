export const bubbleSort = (array: number[]): number[] => {
  let swappingOccurs = true;
  while (swappingOccurs) {
    swappingOccurs = false;
    for (let i = 0; i < array.length; i++) {
      const j = i + 1;
      if (j === array.length) continue;
      if (array[i] > array[j]) {
        swapNode(i, j, array);
        swappingOccurs = true;
      }
    }
  }
  return array;
};

const swapNode = (i: number, j: number, array: number[]) => {
  [array[i], array[j]] = [array[j], array[i]];
};
