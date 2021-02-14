export const longestPalindromicSubstring = (string: string): string => {
  let longest: string = string[0];
  for (let i = 1; i < string.length; i++) {
    const odd: string = getPalindrome(i, i, string);
    const even: string = getPalindrome(i - 1, i, string);
    const currentLongest: string = odd.length > even.length ? odd : even;
    longest = longest.length > currentLongest.length ? longest : currentLongest;
  }
  return longest;
};

const getPalindrome = (i: number, j: number, string: string): string => {
  while (string[i] === string[j] && i >= 0 && j < string.length) {
    i--, j++;
  }
  return string.slice(i + 1, j);
};
