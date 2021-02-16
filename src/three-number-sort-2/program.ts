export function threeNumberSort(array: number[], order: number[]) {
  // Write your code here.
  const firstValue = order[0];
  const secondValue = order[1];

  let l = 0;
  let m = 0;
  let r = array.length - 1;

  while (m <= r) {
    const value = array[m];

    if (value === firstValue) {
      swapNodes(l, m, array);
      l++;
      m++;
    } else if (value === secondValue) {
      m++;
    } else {
      swapNodes(m, r, array);
      r--;
    }
  }
  return array;
}

const swapNodes = (i: number, j: number, array: number[]) => {
  [array[i], array[j]] = [array[j], array[i]];
};
