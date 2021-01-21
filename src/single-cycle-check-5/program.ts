export function hasSingleCycle(array: number[]): boolean {
  let currentIdx = 0;
  for (let elVisited = 0; elVisited < array.length; elVisited++) {
    if (elVisited > 0 && currentIdx === 0) return false;
    currentIdx = getNextIdx(currentIdx, array);
  }
  return currentIdx === 0;
}

function getNextIdx(currentIdx: number, array: number[]): number {
  const jump = array[currentIdx];
  const nextIdx = (jump + currentIdx) % array.length;
  return nextIdx >= 0 ? nextIdx : nextIdx + array.length;
}
