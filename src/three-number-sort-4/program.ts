export function threeNumberSort(array: number[], order: number[]) {
  // Write your code here.
  let l = 0;
  let m = 0;
  let r = array.length - 1;

  while (m <= r) {
    const value = array[m];
    if (array[m] === order[0]) {
      swap(l, m, array);
      l++;
      m++;
    } else if (array[m] === order[1]) {
      m++;
    } else if (array[m] === order[2]) {
      swap(m, r, array);
      r--;
    }
  }
  return array;
}

const swap = (i: number, j: number, array: number[]) => {
  [array[i], array[j]] = [array[j], array[i]];
};
