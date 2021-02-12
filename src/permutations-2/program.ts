export function getPermutations(array: number[]) {
  // Write your code here.
  const permutations: number[][] = [];
  const isVisited: boolean[] = array.map(() => false);
  if (!array.length) return permutations;
  helper(permutations, array, [], isVisited);
  return permutations;
}

const helper = (
  permutations: number[][],
  array: number[],
  currentPermutation: number[],
  isVisited: boolean[]
) => {
  if (currentPermutation.length === array.length) {
    permutations.push(currentPermutation);
  }
  for (let i = 0; i < array.length; i++) {
    if (isVisited[i]) continue;
    const newCurrentPermutation = [...currentPermutation, array[i]];
    isVisited[i] = true;
    const newIsVisited = isVisited.slice();
    helper(permutations, array, newCurrentPermutation, isVisited);
    isVisited[i] = false;
  }
};
