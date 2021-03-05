// input
// * stringifies phone number of any non-zero length 

// output
// * return all mnemonics for this phone number, in any order
// * valid mnemonics can only contain letter and the digits 0 and 1
//   * if a digit can be represented by letters, then it must be
//   * digits 0 and 1 are the only one that don't have letter representations on the keypad

// ds

// algo

// aux space

// time complex

// sample input
// phoneNumber = "1905"

// sample output
// ['1w0j', '1w0k', '1w0l', '1x0j', '1x0k', '1x0l', '1y0j', '1y0k', '1y0l', '1z0j', '1z0k', '1z0l']


// #####
// phoneNumber = "1905"
// keypad = {
//     "1": "1", 
//     "2": "abc",
//     "3": "def", 
//     "4": "ghi", 
//     "5": "jkl", 
//     "6": "mno", 
//     "7": "pqrs", 
//     "8": "tuv", 
//     "9": "wxyz", 
//     "0": "0"
// }
// dfs
// path = []
// when path.length === phoneNumber.length, append path to result
// currentNumber = phoneNumber[i]
// letters = keypad[currentNumber]
// when i is equal to or larger than phoneNumber.length, stop 
// for loop on letters
//   append letter on the path
//   then dfs 
//   then pop out the letter of the path => backtracking 
//   increase i to move to the next number in the phone number
// return result 

export function phoneNumberMnemonics(phoneNumber: string) {
  // Write your code here.
  const result: string[] = [];
  const keypad: { [key: string]: string } = {
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
  dfs(0, [], keypad, result, phoneNumber);
  return result;
}

const dfs = (
  i: number = 0,
  path: string[] = [],
  keypad: { [key: string]: string },
  result: string[] = [],
  phoneNumber: string
) => {
  if (path.length === phoneNumber.length) {
    result.push(path.join(""));
  } else {
    if (i < phoneNumber.length) {
      const currentNumber = phoneNumber[i];
      const letters = keypad[currentNumber];
      for (let j = 0; j < letters.length; j++) {
        path.push(letters[j]);
        dfs(i + 1, path, keypad, result, phoneNumber);
        path.pop();
      }
    }
  }
};
