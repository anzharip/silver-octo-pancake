export function threeNumberSort(array: number[], order: number[]) {
  // Write your code here.
  let left = 0;
  let middle = 0;
  let right = array.length - 1;
  console.log(array)
  while (middle <= right) {
    const value = array[middle];
    if (value === order[0]) {
      console.log("(value === order[0])")
      swapNode(left, middle, array);
      left++;
      middle++;
    } else if (value === order[1]) {
      console.log("(value === order[1])")
      middle++;
    } else if (value === order[2]) {
      console.log("(value === order[2])")
      swapNode(middle, right, array);
      right--;
    }
    console.log(array)
  }

  return array;
}

const swapNode = (i: number, j: number, array: number[]) => {
  [array[i], array[j]] = [array[j], array[i]];
};
