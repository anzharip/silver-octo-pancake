// input
// * takes in a string of words separated by one or more whitespaces 
//   * word can caontain special characters, punctuation, and numbers
//   * the words in the string will be separated by one or more whitespaces
//   * and reverse string must contain the same whitespaces as the original string
//   * example "whitespaces 4" should return "4 whitespaces"

// output
// * and return a string that has these words in reverse
//   * example with input "tim is great" should return "great is tim"
//   * not allowed to use built in split or reverse
//   * allowed to use join method 

// ds

// algo

// aux space
// * O(n)
// * result 
// * reversedResult 
// * O(2n)

// time complex
// * O(n)
// * traversing string
// * traversing result 
// * O(2n)

// #####

// sample input
// string = "AlgoExpert is the best!" 

// sample output
// "best! the is AlgoExpert"

// #####

// sample input 
// string = " a  thing "

// sample output
// " thing  a "

// #####
// string = " a  thing "
//           i
// i = 0
// string[i] = " "
// path = []
// result = []

// append string[i] to path 

// path = [" ", ]
// result = []

// ##

// string = " a  thing "
//            i
// i = 1
// string[i] = "a"
// path = [" ", ]
// result = []

// change state from whitespace to letter
//   join path into word
//   push word into result 
//   empty path 
//   push string[i] into path

// path = ["a", ]
// result = [" ", ]

// ##

// string = " a  thing "
//             i
// i = 2
// string[i] = " "
// path = ["a", ]
// result = [" ", ]

// change state from letters to whitespace
//   join path into word
//   push word into result 
//   empty path 
//   push string[i] into path

// word = "a"
// path = [" ", ]
// result = [" ", "a"]

// ##

// string = " a  thing "
//              i
// i = 3
// string[i] = " "
// path = [" ", ]
// result = [" ", "a"]

// state from whitespace to whitespace
//   push string[i] to path
//   continue

// path = [" ", " ", ]
// result = [" ", "a"]

// ##

// string = " a  the "
//               i
// i = 4
// string[i] = "t"
// path = [" ", " ", ]
// result = [" ", "a"]

// state from whitespace to letter
//     join path into word
//     push word into result 
//     empty path 
//     push string[i] into path

// word = "  "
// path = ["t", ]
// result = [" ", "a", "  ", ]

// ##

// string = " a  the "
//                i
// i = 5
// string[i] = "h"
// path = ["t", ]
// result = [" ", "a", "  ", ]

// from letter to letter
//     push string[i] to path
//     continue

// path = ["t", "h", ]
// result = [" ", "a", "  ", ]

// ##

// string = " a  the "
//                 i
// i = 6
// string[i] = "e"
// path = ["t", "h", ]
// result = [" ", "a", "  ", ]

// from letter to letter
//     push string[i] to path
//     continue

// path = ["t", "h", "e", ]
// result = [" ", "a", "  ", ]

// string = " a  the "
//                  i
// i = 7
// string[i] = " "
// path = ["t", "h", "e", ]
// result = [" ", "a", "  ", ]

// from letter to whitespace
//     join path into word
//     push word into result 
//     empty path 
//     push string[i] into path

// word = "the"
// path = [" ", ]
// result = [" ", "a", "  ", "the", ]

// ## end for loop 

// path = [" ", ]
// result = [" ", "a", "  ", "the", ]

// if (path.length)
//     join path into word
//     push word into result 

// word = " "
// result = [" ", "a", "  ", "the", " ", ]

// ##

// traverse the result array from the end, and concat the result into string 
// reversedResult = [" ", "the", "  ", "a", " ", ]
// reversedResult = " the  a "

enum State {
  Start = "start",
  End = "end",
  Letter = "letter",
  Whitespace = "whitespace",
}

export function reverseWordsInString(string: string) {
  // Write your code here.

  let state: State = State.Start;
  let path: string[] = [];
  let result: string[] = [];
  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    if (char === " ") {
      if (state === State.Letter) {
        const word = path.join("");
        result.push(word);
        path = [char];
        state = State.Whitespace;
      } else {
        path.push(char);
        state = State.Whitespace;
      }
    } else {
      if (state === State.Letter) {
        path.push(char);
        state = State.Letter;
      } else {
        const word = path.join("");
        result.push(word);
        path = [char];
        state = State.Letter;
      }
    }
  }

  if (path.length) {
    const word = path.join("");
    result.push(word);
  }

  let reversedResult: string = "";
  for (let i = result.length - 1; i >= 0; i--) {
    const word = result[i];
    reversedResult = reversedResult.concat(word);
  }

  return reversedResult;
}
