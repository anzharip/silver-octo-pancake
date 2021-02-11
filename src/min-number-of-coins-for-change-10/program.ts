export function minNumberOfCoinsForChange(n: number, denoms: number[]) {
  // Write your code here.
  const coinChanges: number[] = new Array(n + 1).fill(Infinity);
  coinChanges[0] = 0;
  for (let i = 1; i < coinChanges.length; i++) {
    for (const denom of denoms) {
      if (i - denom >= 0) {
        coinChanges[i] = Math.min(coinChanges[i - denom] + 1, coinChanges[i]);
      }
    }
  }
  return coinChanges[n] === Infinity ? -1 : coinChanges[n];
}
