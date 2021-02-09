export function hasSingleCycle(array: number[]) {
  // Write your code here.
  let currentIndex = 0;
  for (let i = 0; i < array.length; i++) {
    if (currentIndex === 0 && i > 0) return false;
    currentIndex = getNextIndex(currentIndex, array);
  }
  return currentIndex === 0;
}

const getNextIndex = (currentIndex: number, array: number[]) => {
  const jumps = array[currentIndex];
  const nextIndex = (currentIndex + jumps) % array.length;
  return nextIndex >= 0 ? nextIndex : nextIndex + array.length;
};
