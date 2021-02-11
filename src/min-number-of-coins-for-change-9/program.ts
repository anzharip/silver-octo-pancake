export function minNumberOfCoinsForChange(n: number, denoms: number[]) {
  const minChanges: number[] = new Array(n + 1).fill(Infinity);
  minChanges[0] = 0;
  for (let i = 1; i < minChanges.length; i++) {
    const possibleChanges = [];
    for (const denom of denoms) {
      if (i - denom >= 0) possibleChanges.push(minChanges[i - denom] + 1);
    }
    minChanges[i] = Math.min(...possibleChanges, minChanges[i]);
  }
  return minChanges[n] === Infinity ? -1 : minChanges[n];
}
