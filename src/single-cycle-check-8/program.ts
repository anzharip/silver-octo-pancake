// input
// * array of integers
// * representing jump of its value in the array
// * value int 2 === jump of two indices forward
// * value int -3 === jump of two indices backward
// * if spills past the array's bounds === wraps over to the other side
// * jump of -1 at index 0 === current position last index in the array
// * jump 1 at the last index === brings back to index 0
// * empty array?
//   * should be caught by 0 === undefined
// * one element array?
// * one million array?
// * each element not visited exactly once, but already return to starting index

// output
// * return boolean
// * representing whether the jumps form a single cycle
// * single cycle === starting at any index, and following the jumps, each element visited exactly once
// * and returns to the index start

// ds
// * nothing in particular
// * utilizes modulo to wrap the index if over the boundary

// auxiliary
// * in place

// complexities
// * time O(n), n = element of the array
// * space O(1), no aux space

export function hasSingleCycle(array: number[]) {
  // Write your code here.
  let currentIndex = 0;
  let traversed = 0;
  while (traversed < array.length) {
    if (currentIndex === 0 && traversed > 0) return false;
    currentIndex = getNextIndex(currentIndex, array);
    traversed++;
  }
  return currentIndex === 0;
}

const getNextIndex = (currentIndex: number, array: number[]) => {
  const jump = array[currentIndex];
  const nextIndex = (currentIndex + jump) % array.length;
  return nextIndex < 0 ? array.length + nextIndex : nextIndex;
};
