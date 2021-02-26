export function getPermutations(array: number[]) {
  // Write your code here.
  const permutations: number[][] = [];
  dfsPermutation([], permutations, array);
  return permutations;
}

const dfsPermutation = (
  path: number[],
  permutations: number[][],
  array: number[]
) => {
  if (path.length > 0 && !array.length) {
    permutations.push(path.slice());
  } else {
    for (let i = 0; i < array.length; i++) {
      path.push(array[i]);
      const newArray = [...array.slice(0, i), ...array.slice(i + 1)];
      dfsPermutation(path, permutations, newArray);
      path.pop();
    }
  }
};
