export function bubbleSort(array: number[]) {
  // Write your code here.
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
}

function swapNode(i: number, j: number, array: number[]) {
  [array[i], array[j]] = [array[j], array[i]];
}
