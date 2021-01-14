export function groupAnagrams(words: string[]): string[][] {
  const anagrams: { [keys: string]: string[] } = {};
  for (let word of words) {
    const sortedWord = word.split("").sort().join("");
    if (sortedWord in anagrams) {
      anagrams[sortedWord].push(word);
    } else {
      anagrams[sortedWord] = [word];
    }
  }
  return Object.values(anagrams);
}
