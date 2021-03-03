// input
// * stringified phone number
//   * non-zero length 

// output
// * return all mnemonics for this phone number
//   * in any order
// * for this problem, a valid mnemonic may only contain letter and the digits 0 and 1
// * if a digit is able to be represented by a letter
// * digit 0 and 1 are the only two digits that do not have a letter representations on the keyboard

// ds

// algo

// aux space

// time complexity

// sample input
// phoneNumber = [1905]

// sample output
// [
//     "1w0j", 
//     "1w0k,
//     "1w01",
//     "1x0j",
//     "1x0k",
//     "1x0l",
//     "1y0j",
//     "1y0l",
//     "1z0j",
//     "1z0k",
//     "1z0l"
// ]

// {
//     1: "1", 
//     2: "abc", 
//     3: "def", 
//     4: "ghi", 
//     5: "jkl", 
//     6: "mno", 
//     7: "pqrs",
//     8: "tuv", 
//     9: "wxyz", 
//     0: "0"
// }
// phoneNumber = "1905"
// path = []
// if path.length === phoneNumber.length? 
//   if true, join path array into string
//   append path to result
// result = []


// hashmap = {
//     1: "1", 
//     2: "abc", 
//     3: "def", 
//     4: "ghi", 
//     5: "jkl", 
//     6: "mno", 
//     7: "pqrs",
//     8: "tuv", 
//     9: "wxyz", 
//     0: "0"
// }
// phoneNumber = "1905"
//                i
// i = 0
// phoneNumber[i] = 1
// for loop on the hashmap
// path = [1]
// if path.length === phoneNumber.length? 
//   if true, join path array into string
//   append path to result
// result = []

// hashmap = {
//     1: "1", 
//     2: "abc", 
//     3: "def", 
//     4: "ghi", 
//     5: "jkl", 
//     6: "mno", 
//     7: "pqrs",
//     8: "tuv", 
//     9: "wxyz", 
//     0: "0"
// }
// phoneNumber = "1905"
//                 i
// i = 1
// phoneNumber[i] = 9
// for loop on the hashmap
// path = [1w]
// if path.length === phoneNumber.length? 
//   if true, join path array into string
//   append path to result
// result = []

// hashmap = {
//     1: "1", 
//     2: "abc", 
//     3: "def", 
//     4: "ghi", 
//     5: "jkl", 
//     6: "mno", 
//     7: "pqrs",
//     8: "tuv", 
//     9: "wxyz", 
//     0: "0"
// }
// phoneNumber = "1905"
//                  i
// i = 2
// phoneNumber[i] = 0
// for loop on the hashmap
//     then recursion
// path = [1w0]
// if path.length === phoneNumber.length? 
//   if true, join path array into string
//   append path to result
// result = []

// hashmap = {
//     1: "1", 
//     2: "abc", 
//     3: "def", 
//     4: "ghi", 
//     5: "jkl", 
//     6: "mno", 
//     7: "pqrs",
//     8: "tuv", 
//     9: "wxyz", 
//     0: "0"
// }
// phoneNumber = "1905"
//                   i
// i = 3
// phoneNumber[i] = 5
// for loop on the hashmap
//     then recursion
// path = [1w0j]
// if path.length === phoneNumber.length? 
//   if true, join path array into string
//   append path to result
// result = ["1w0j"]

// hashmap = {
//     1: "1", 
//     2: "abc", 
//     3: "def", 
//     4: "ghi", 
//     5: "jkl", 
//     6: "mno", 
//     7: "pqrs",
//     8: "tuv", 
//     9: "wxyz", 
//     0: "0"
// }
// phoneNumber = "1905"
//                   i
// i = 3
// phoneNumber[i] = 5
// for loop on the hashmap
//     then recursion
// path = [1w0k]
// if path.length === phoneNumber.length? 
//   if true, join path array into string
//   append path to result
// result = [
//     "1w0j",
//     "1w0k",
//     ]

// hashmap = {
//     1: "1", 
//     2: "abc", 
//     3: "def", 
//     4: "ghi", 
//     5: "jkl", 
//     6: "mno", 
//     7: "pqrs",
//     8: "tuv", 
//     9: "wxyz", 
//     0: "0"
// }
// phoneNumber = "1905"
//                   i
// i = 3
// phoneNumber[i] = 5
// for loop on the hashmap
//     then recursion
// path = [1w0l]
// if path.length === phoneNumber.length? 
//   if true, join path array into string
//   append path to result
// result = [
//     "1w0j",
//     "1w0k",
//     "1w0l",
//     ]

// hashmap = {
//     1: "1", 
//     2: "abc", 
//     3: "def", 
//     4: "ghi", 
//     5: "jkl", 
//     6: "mno", 
//     7: "pqrs",
//     8: "tuv", 
//     9: "wxyz", 
//     0: "0"
// }
// phoneNumber = "1905"
//                  i
// i = 2
// phoneNumber[i] = 5
// for loop on the hashmap
//     then recursion
// path = [1w0]
// if path.length === phoneNumber.length? 
//   if true, join path array into string
//   append path to result
// result = [
//     "1w0j",
//     "1w0k",
//     "1w0l",
//     ]


// hashmap = {
//     1: "1", 
//     2: "abc", 
//     3: "def", 
//     4: "ghi", 
//     5: "jkl", 
//     6: "mno", 
//     7: "pqrs",
//     8: "tuv", 
//     9: "wxyz", 
//     0: "0"
// }
// phoneNumber = "1905"
//                 i
// i = 1
// phoneNumber[i] = 9
// for loop on the hashmap
//     then recursion
// path = [1w]
// if path.length === phoneNumber.length? 
//   if true, join path array into string
//   append path to result
// result = [
//     "1w0j",
//     "1w0k",
//     "1w0l",
//     ]


// hashmap = {
//     1: "1", 
//     2: "abc", 
//     3: "def", 
//     4: "ghi", 
//     5: "jkl", 
//     6: "mno", 
//     7: "pqrs",
//     8: "tuv", 
//     9: "wxyz", 
//     0: "0"
// }
// phoneNumber = "1905"
//                 i
// i = 1
// phoneNumber[i] = 9
// for loop on the hashmap
//     then recursion
// path = [1x]
// if path.length === phoneNumber.length? 
//   if true, join path array into string
//   append path to result
// result = [
//     "1w0j",
//     "1w0k",
//     "1w0l",
//     ]


// hashmap = {
//     1: "1", 
//     2: "abc", 
//     3: "def", 
//     4: "ghi", 
//     5: "jkl", 
//     6: "mno", 
//     7: "pqrs",
//     8: "tuv", 
//     9: "wxyz", 
//     0: "0"
// }
// phoneNumber = "1905"
//                  i
// i = 2
// phoneNumber[i] = 0
// for loop on the hashmap
//     then recursion
// path = [1x0]
// if path.length === phoneNumber.length? 
//   if true, join path array into string
//   append path to result
// result = [
//     "1w0j",
//     "1w0k",
//     "1w0l",
//     ]


// hashmap = {
//     1: "1", 
//     2: "abc", 
//     3: "def", 
//     4: "ghi", 
//     5: "jkl", 
//     6: "mno", 
//     7: "pqrs",
//     8: "tuv", 
//     9: "wxyz", 
//     0: "0"
// }
// phoneNumber = "1905"
//                   i
// i = 3
// phoneNumber[i] = 5
// for loop on the hashmap
//     then recursion
// path = [1x0j]
// if path.length === phoneNumber.length? 
//   if true, join path array into string
//   append path to result
// result = [
//     "1w0j",
//     "1w0k",
//     "1w0l",
//     "1x0j"
//     ]


// hashmap = {
//     1: "1", 
//     2: "abc", 
//     3: "def", 
//     4: "ghi", 
//     5: "jkl", 
//     6: "mno", 
//     7: "pqrs",
//     8: "tuv", 
//     9: "wxyz", 
//     0: "0"
// }
// phoneNumber = "1905"
//                   i
// i = 3
// phoneNumber[i] = 5
// for loop on the hashmap
//     then recursion
// path = [1x0k]
// if path.length === phoneNumber.length? 
//   if true, join path array into string
//   append path to result
// result = [
//     "1w0j",
//     "1w0k",
//     "1w0l",
//     "1x0j",
//     "1x0k"
//     ]

// hashmap = {
//     1: "1", 
//     2: "abc", 
//     3: "def", 
//     4: "ghi", 
//     5: "jkl", 
//     6: "mno", 
//     7: "pqrs",
//     8: "tuv", 
//     9: "wxyz", 
//     0: "0"
// }
// phoneNumber = "1905"
//                   i
// i = 3
// phoneNumber[i] = 5
// for loop on the hashmap
//     then recursion
// path = [1x0k]
// if path.length === phoneNumber.length? 
//   if true, join path array into string
//   append path to result
// result = [
//     "1w0j",
//     "1w0k",
//     "1w0l",
//     "1x0j",
//     "1x0k"
//     ]


// #####

// phoneNumber = "1905"
//                i

// i = 0
// phoneNumberMap[i] = "1"
//                      j
// j = 0
// path = [1]

// phoneNumber = "1905"
//                 i
// i = 1
// phoneNumberMap[i] = "wxyz"
//                      j
// j = 0
// path = [1, w]

// phoneNumber = "1905"
//                  i
// i = 2
// phoneNumberMap[i] = "0"
//                      j
// j = 0
// path = [1, w, 0]

// phoneNumber = "1905"
//                   i 
// i = 3
// phoneNumberMap[i] = "jkl"
//                      j
// j = 0
// path = [1, w, 0, j]


// phoneNumber = "1905"
//                   i 
// i = 3
// phoneNumberMap[i] = "jkl"
//                       j
// j = 0
// path = [1, w, 0, k]


// phoneNumber = "1905"
//                   i 
// i = 3
// phoneNumberMap[i] = "jkl"
//                       j
// j = 0
// path = [1, w, 0, l]

// phoneNumber = "1905"
//                  i 
// i = 2
// phoneNumberMap[i] = "0"
//                      j
// j = 0
// path = [1, w, 0]

// phoneNumber = "1905"
//                 i 
// i = 1
// phoneNumberMap[i] = "wxyz"
//                       j
// j = 0
// path = [1, x]

export function phoneNumberMnemonics(phoneNumber: string) {
  // Write your code here.
  const numberStringMap: { [key: string]: string } = {
    "1": "1",
    "2": "abc",
    "3": "def",
    "4": "ghi",
    "5": "jkl",
    "6": "mno",
    "7": "pqrs",
    "8": "tuv",
    "9": "wxyz",
    "0": "0",
  };
  const result: string[] = [];
  dfs(0, [], phoneNumber, result, numberStringMap);
  return result;
}

const dfs = (
  i: number,
  path: string[],
  phoneNumber: string,
  result: string[],
  numberStringMap: { [key: string]: string }
) => {
  if (path.length === phoneNumber.length) {
    const resultPath = path.slice().join("");
    result.push(resultPath);
  } else {
    const letters = numberStringMap[phoneNumber[i]];
    for (let j = 0; j < letters.length; j++) {
      path.push(letters[j]);
      dfs(i + 1, path, phoneNumber, result, numberStringMap);
      path.pop();
    }
  }
};
