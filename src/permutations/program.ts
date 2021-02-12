export function getPermutations(array: number[]) {
  // Write your code here.
  const result: number[][] = [];
  helper([], result, array);
  return result;
}

const helper = (
  currentArray: number[],
  result: number[][],
  array: number[]
) => {
  if (currentArray.length && !array.length) {
    result.push(currentArray);
  } else {
    for (let i = 0; i < array.length; i++) {
      const newArray = [...array.slice(0, i), ...array.slice(i + 1)];
      const newCurrentArray = [...currentArray, array[i]];
      helper(newCurrentArray, result, newArray);
    }
  }
};
