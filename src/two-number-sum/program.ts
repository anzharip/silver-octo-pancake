export function twoNumberSum(array: number[], targetSum: number): number[] {
  // Write your code here.
  for (let el of array) {
    for (let el2 of array) {
      if (el === el2) {
        continue;
      } else if (el + el2 === targetSum) {
        return [el, el2];
      }
    }
  }
  return [];
}
