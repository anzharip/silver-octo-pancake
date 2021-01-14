export function groupAnagrams(words: string[]) {
  const anagrams: { [key: string]: string[] } = {};
  for (let word of words) {
    const sortedWord = word.split("").sort().join("");
    if (sortedWord in anagrams) {
      anagrams[sortedWord].push(word);
    } else {
      anagrams[sortedWord] = [word];
    }
  }
  // Write your code here.
  return Object.values(anagrams);
}
