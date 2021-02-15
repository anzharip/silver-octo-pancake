export function numberOfWaysToMakeChange(n: number, denoms: number[]) {
  // Write your code here.
  const changes: number[] = new Array(n + 1).fill(0);
  changes[0] = 1;
  for (const denom of denoms) {
    for (let i = 1; i < changes.length; i++) {
      if (i < denom) continue;
      changes[i] = changes[i] + changes[i - denom];
    }
  }
  return changes[n];
}
