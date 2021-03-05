// input
// * a string for creation
//   * length? empty? 
// * a string for searching


// output
// * write a SuffixTrie class for a Suffix-Trie-like data structure
// * the class should have a root property set to to be the root node of the trie and should support
//   * creating the trie from a string; will be done by calling the populateSuffixTrieFrom method upon class instantiation
//     * which should populate the root of the class
//   * searching for strings in the trie
// * every string added to the trie should end with the special endSymbol character "*"

// ds

// algo

// aux space

// time complex


// sample input for creation
// string = "babc"

// sample output for creation
// {
//     "c": {"*": true},
//     "b": {
//         "c": {"*": true}, 
//         "a": {"b": {"c": {"*": true}}}
//     },
//     "a": {"b": {"c": {"*": true}}}
// }

// sample input for searching in the suffix trie above
// string = "abc"

// sample output for searching
// true

// #####

// root = {}
// string = "babc"
//           i
// root = {
//     "b": {}
// }

// root = {
//     "b": {}
// }
// string = "babc"
//            i
// root = {
//     "b": {
//         "a": {}
//     }
// }


// root = {
//     "b": {
//         "a": {}
//     }
// }
// string = "babc"
//             i
// root = {
//     "b": {
//         "a": {
//             "b": {}
//         }
//     }
// }


// root = {
//     "b": {
//         "a": {
//             "b": {}
//         }
//     }
// }
// string = "babc"
//              i
// root = {
//     "b": {
//         "a": {
//             "b": {
//                 "c": {}
//             }
//         }
//     }
// }


// root = {
//     "b": {
//         "a": {
//             "b": {
//                 "c": {}
//             }
//         }
//     }
// }
// string = "babc"
//              i
// root = {
//     "b": {
//         "a": {
//             "b": {
//                 "c": {
//                     "*": true
//                 }
//             }
//         }
//     }
// }

// ##

// root = {
//     "b": {
//         "a": {
//             "b": {
//                 "c": {
//                     "*": true
//                 }
//             }
//         }
//     }
// }
// string = "babc"
//            i
// root = {
//     "a": {},
//     "b": {
//         "a": {
//             "b": {
//                 "c": {
//                     "*": true
//                 }
//             }
//         }
//     }
// }


// root = {
//     "a": {},
//     "b": {
//         "a": {
//             "b": {
//                 "c": {
//                     "*": true
//                 }
//             }
//         }
//     }
// }
// string = "babc"
//             i
// root = {
//     "a": {
//         "b": {}
//     },
//     "b": {
//         "a": {
//             "b": {
//                 "c": {
//                     "*": true
//                 }
//             }
//         }
//     }
// }


// root = {
//     "a": {
//         "b": {}
//     },
//     "b": {
//         "a": {
//             "b": {
//                 "c": {
//                     "*": true
//                 }
//             }
//         }
//     }
// }
// string = "babc"
//              i
// root = {
//     "a": {
//         "b": {
//             "c": {}
//         }
//     },
//     "b": {
//         "a": {
//             "b": {
//                 "c": {
//                     "*": true
//                 }
//             }
//         }
//     }
// }


// root = {
//     "a": {
//         "b": {
//             "c": {}
//         }
//     },
//     "b": {
//         "a": {
//             "b": {
//                 "c": {
//                     "*": true
//                 }
//             }
//         }
//     }
// }
// string = "babc" => end of string
//              i
// root = {
//     "a": {
//         "b": {
//             "c": {
//                 "*": true
//             }
//         }
//     },
//     "b": {
//         "a": {
//             "b": {
//                 "c": {
//                     "*": true
//                 }
//             }
//         }
//     }
// }

// ##

// root = {
//     "a": {
//         "b": {
//             "c": {
//                 "*": true
//             }
//         }
//     },
//     "b": {
//         "a": {
//             "b": {
//                 "c": {
//                     "*": true
//                 }
//             }
//         }
//     }
// }
// string = "babc" => b exist, do not append new node 
//             i
// root = {
//     "a": {
//         "b": {
//             "c": {
//                 "*": true
//             }
//         }
//     },
//     "b": {
//         "a": {
//             "b": {
//                 "c": {
//                     "*": true
//                 }
//             }
//         }
//     }
// }


// root = {
//     "a": {
//         "b": {
//             "c": {
//                 "*": true
//             }
//         }
//     },
//     "b": {
//         "a": {
//             "b": {
//                 "c": {
//                     "*": true
//                 }
//             }
//         }
//     }
// }
// string = "babc"
//              i
// root = {
//     "a": {
//         "b": {
//             "c": {
//                 "*": true
//             }
//         }
//     },
//     "b": {
//         "c": {}
//         "a": {
//             "b": {
//                 "c": {
//                     "*": true
//                 }
//             }
//         }
//     }
// }


// root = {
//     "a": {
//         "b": {
//             "c": {
//                 "*": true
//             }
//         }
//     },
//     "b": {
//         "c": {}
//         "a": {
//             "b": {
//                 "c": {
//                     "*": true
//                 }
//             }
//         }
//     }
// }
// string = "babc" => end of array 
//              i
// root = {
//     "a": {
//         "b": {
//             "c": {
//                 "*": true
//             }
//         }
//     },
//     "b": {
//         "c": {
//             "*": true
//         }
//         "a": {
//             "b": {
//                 "c": {
//                     "*": true
//                 }
//             }
//         }
//     }
// }

// ##

// root = {
//     "a": {
//         "b": {
//             "c": {
//                 "*": true
//             }
//         }
//     },
//     "b": {
//         "c": {
//             "*": true
//         }
//         "a": {
//             "b": {
//                 "c": {
//                     "*": true
//                 }
//             }
//         }
//     }
// }
// string = "babc"
//              i
// root = {
//     "c": {}
//     "a": {
//         "b": {
//             "c": {
//                 "*": true
//             }
//         }
//     },
//     "b": {
//         "c": {
//             "*": true
//         }
//         "a": {
//             "b": {
//                 "c": {
//                     "*": true
//                 }
//             }
//         }
//     }
// }


// root = {
//     "c": {}
//     "a": {
//         "b": {
//             "c": {
//                 "*": true
//             }
//         }
//     },
//     "b": {
//         "c": {
//             "*": true
//         }
//         "a": {
//             "b": {
//                 "c": {
//                     "*": true
//                 }
//             }
//         }
//     }
// }
// string = "babc" => end of array 
//              i
// root = {
//     "c": {
//         "*": true
//     }
//     "a": {
//         "b": {
//             "c": {
//                 "*": true
//             }
//         }
//     },
//     "b": {
//         "c": {
//             "*": true
//         }
//         "a": {
//             "b": {
//                 "c": {
//                     "*": true
//                 }
//             }
//         }
//     }
// }

interface TrieNode {
  [key: string]: TrieNode | boolean;
}

// Do not edit the class below except for the
// populateSuffixTrieFrom and contains methods.
// Feel free to add new properties and methods
// to the class.
export class SuffixTrie {
  root: TrieNode;
  endSymbol: string;

  constructor(string: string) {
    this.root = {};
    this.endSymbol = "*";
    this.populateSuffixTrieFrom(0, string);
  }

  populateSuffixTrieFrom(idx: number, string: string) {
    // Write your code here.
    let currentNode = this.root;
    for (let i = idx; i < string.length; i++) {
      if (currentNode[string[i]] === undefined) {
        currentNode[string[i]] = {};
        currentNode = currentNode[string[i]] as TrieNode;
      } else {
        currentNode = currentNode[string[i]] as TrieNode;
      }
    }
    currentNode[this.endSymbol] = true;
    if (idx + 1 < string.length) {
      this.populateSuffixTrieFrom(idx + 1, string);
    }
  }

  contains(string: string) {
    // Write your code here.
    let currentNode = this.root;
    for (let i = 0; i < string.length; i++) {
      if (currentNode[string[i]] !== undefined) {
        currentNode = currentNode[string[i]] as TrieNode;
      } else {
        return false;
      }
    }
    if (currentNode["*"] !== undefined) {
      return true;
    } else {
      return false;
    }
  }
}
