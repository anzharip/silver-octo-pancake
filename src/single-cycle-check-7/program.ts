export function hasSingleCycle(array: number[]) {
  // Write your code here.
  let traversedNode = 0;
  let currentIndex = 0;

  while (traversedNode < array.length) {
    currentIndex = getNextIndex(currentIndex, array);
    traversedNode++;
    if (currentIndex === 0 && traversedNode < array.length) return false;
  }

  return currentIndex === 0;
}

const getNextIndex = (currentIndex: number, array: number[]) => {
  const jumps = array[currentIndex];
  const nextIndex = (currentIndex + jumps) % array.length;
  return nextIndex < 0 ? array.length + nextIndex : nextIndex;
};
