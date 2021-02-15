export function bubbleSort(array: number[]) {
  // Write your code here.
  let swap = true;
  while (swap) {
    swap = false;
    for (let j = 1; j < array.length; j++) {
      const i = j - 1;
      if (array[i] > array[j]) {
        swapNode(i, j, array);
        swap = true;
      }
    }
  }

  return array;
}

const swapNode = (i: number, j: number, array: number[]) => {
  [array[i], array[j]] = [array[j], array[i]];
};
