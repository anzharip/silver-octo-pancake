export const getPermutations = (array: number[]): number[][] => {
  const permutations: number[][] = [];
  if (!array.length) return permutations;
  const isVisited: boolean[] = array.map((_) => false);
  helper(array, permutations, isVisited, []);
  return permutations;
};

const helper = (
  array: number[],
  permutations: number[][],
  isVisited: boolean[],
  currentPermutation: number[]
) => {
  if (currentPermutation.length === array.length) {
    permutations.push(currentPermutation);
  } else {
    for (let i = 0; i < array.length; i++) {
      if (isVisited[i]) continue;
      isVisited[i] = true;
      const newIsVisited = isVisited.slice();
      const newCurrentPermutation = [...currentPermutation, array[i]];
      helper(array, permutations, newIsVisited, newCurrentPermutation);
      isVisited[i] = false;
    }
  }
};
