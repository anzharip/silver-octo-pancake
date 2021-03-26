// input
// * an array of string strs

// output
// * group the anagrams together
// * you can return the answer in any order

// constraint
// * 1 <= strs.length <= 10^4
// * 0 <= strs[i].length <= 100
// * strs[i] consist of lower-case english letters

// ds

// algo

// sc

// tc

// example 1
// input: strs = ["eat", "tea", "tan", "ate", "nat", "bat", ]
// output: [
//     ["bat"], 
//     ["nat", "tan"], 
//     ["ate", "eat", "tea"]
// ]

// example 2
// input: strs = [""]
// output: [[""]]

// example 3
// input: strs = ["a"]
// output: [["a"]]

// #####

// strs = ["eat", "tea", "tan", "ate", "nat", "bat", ]
//         i
// i = 0
// strs[i] = "eat"
// resultObject = {}
// sortedWord = "aet"
// does sortedWord exist in resultObject? 
//     if yes, append resultObject[sortedWord].push(strs[i])
//     if no, create new property resultObject[sortedWord] = [strs[i]]
// resultObject = {
//     aet: ["eat", ]
// }

// ##
// strs = ["eat", "tea", "tan", "ate", "nat", "bat", ]
//                 i
// i = 1
// strs[i] = "tea"
// resultObject = {
//     aet: ["eat", ]
// }
// sortedWord = "aet"
// does sortedWord exist in resultObject? 
//     if yes, append resultObject[sortedWord].push(strs[i])
//     if no, create new property resultObject[sortedWord] = [strs[i]]
// resultObject = {
//     aet: ["eat", "tea", ]
// }

// ##

// strs = ["eat", "tea", "tan", "ate", "nat", "bat", ]
//                        i
// i = 2
// strs[i] = "tan"
// resultObject = {
//     aet: ["eat", "tea", ]
// }
// sortedWord = "ant"
// does sortedWord exist in resultObject? 
//     if yes, append resultObject[sortedWord].push(strs[i])
//     if no, create new property resultObject[sortedWord] = [strs[i]]
// resultObject = {
//     aet: ["eat", "tea", ], 
//     ant: ["tan", ]
// }

// ##

// strs = ["eat", "tea", "tan", "ate", "nat", "bat", ]
//                               i
// i = 3
// strs[i] = "ate"
// resultObject = {
//     aet: ["eat", "tea", ], 
//     ant: ["tan", ]
// }
// sortedWord = "aet"
// does sortedWord exist in resultObject? 
//     if yes, append resultObject[sortedWord].push(strs[i])
//     if no, create new property resultObject[sortedWord] = [strs[i]]
// resultObject = {
//     aet: ["eat", "tea", "ate", ], 
//     ant: ["tan", ]
// }

// #####

// strs = []



function groupAnagrams(strs: string[]): string[][] {
  const resultObject: { [key: string]: string[] } = {};
  const result: string[][] = [];
  for (const str of strs) {
    const sortedStr = str.split("").sort().join();
    if (resultObject[sortedStr] !== undefined) {
      resultObject[sortedStr].push(str);
    } else {
      resultObject[sortedStr] = [str];
    }
  }
  for (const key in resultObject) {
    const value = resultObject[key];
    result.push(value);
  }
  return result;
}
