export function longestPalindromicSubstring(string: string) {
  // Write your code here.
  let longest = string[0];
  for (let i = 1; i < string.length; i++) {
    const odd = getLongestPalindrome(i, i, string);
    const even = getLongestPalindrome(i - 1, i, string);
    const currentLongest = odd.length > even.length ? odd : even;
    longest = longest.length > currentLongest.length ? longest : currentLongest;
  }
  return longest;
}

const getLongestPalindrome = (i: number, j: number, string: string): string => {
  while (string[i] === string[j] && i >= 0 && j < string.length) {
    i--, j++;
  }
  return string.slice(i + 1, j);
};
