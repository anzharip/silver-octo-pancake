// input:
// string

// output:
// longest palindromic substring

// single char strings are palindrome
// there will only be one longest palindromic substring

export function longestPalindromicSubstring(string: string) {
  if (!string.length) return string;
  let longest = string[0];
  for (let i = 1; i < string.length; i++) {
    const odd = traverseNode(string, i, i);
    const even = traverseNode(string, i - 1, i);
    const currentLongest = odd.length > even.length ? odd : even;
    longest = longest.length > currentLongest.length ? longest : currentLongest;
  }

  return longest;
}

const traverseNode = (string: string, k: number, l: number): string => {
  console.log(k, l);
  while (string[k] === string[l] && k >= 0 && l < string.length) {
    k--, l++;
  }
  return string.slice(k + 1, l);
};
