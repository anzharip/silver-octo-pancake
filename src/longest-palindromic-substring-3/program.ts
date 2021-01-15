export function longestPalindromicSubstring(string: string): string {
  let currentLongest = [0, 1];
  for (let i = 1; i < string.length; i++) {
    const odd = longestPalindromeFrom(string, i - 1, i + 1);
    const even = longestPalindromeFrom(string, i - 1, i);
    const longest = odd[1] - odd[0] > even[1] - even[0] ? odd : even;
    currentLongest =
      currentLongest[1] - currentLongest[0] > longest[1] - longest[0]
        ? currentLongest
        : longest;
  }
  return string.slice(currentLongest[0], currentLongest[1]);
}

function longestPalindromeFrom(
  string: string,
  leftIdx: number,
  rightIdx: number
): number[] {
  while (leftIdx >= 0 && rightIdx < string.length) {
    if (string[leftIdx] !== string[rightIdx]) break;
    leftIdx--;
    rightIdx++;
  }
  return [leftIdx + 1, rightIdx];
}
