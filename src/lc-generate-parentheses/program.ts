// input
// * n pairs of parentheses
//   * 1 <= n <= 8

// output
// * write a function to generate all combinations of well-formed parentheses

// ds

// algo

// aux space

// time complex

// input
// n = 3

// output 
// ["((()))", "(()())", "(())()", "()(())", "()()()"]

// input
// n = 1

// output 
// ["()"]

// ((()))
// (()())
// ()(())


// path = []
// n = 3
// open = 3
// close = 3
// closeThatCanBePutDown = 0
// path = ["("]
// open = 2
// close = 3
// closeThatCanBePutDown = 1


// path = ["("]
// open = 2
// close = 3
// closeThatCanBePutDown = 1
// path = ["(("]
// open = 1
// close = 3
// closeThatCanBePutDown = 2

// path = ["(("]
// open = 1
// close = 3
// closeThatCanBePutDown = 2
// path = ["((("]
// open = 0
// close = 3
// can i put more open parenthesis? no, because open === 0
// can i put close parenthesis? yes, because open < close 
// closeThatCanBePutDown = 3


function generateParenthesis(n: number): string[] {
  const result: string[] = [];
  dfsBacktrack(n, n, [], result, n);
  return result;
}

const dfsBacktrack = (
  open: number,
  close: number,
  path: string[],
  result: string[],
  n: number
) => {
  if (path.length === 2 * n) {
    result.push(path.slice().join(""));
  } else {
    if (open < close) {
      // can put down open
      if (open > 0) {
        path.push("(");
        dfsBacktrack(open - 1, close, path, result, n);
        path.pop();
      }
      // can put down close
      if (close > 0) {
        path.push(")");
        dfsBacktrack(open, close - 1, path, result, n);
        path.pop();
      }
    } else if (open === close) {
      // can put down open
      if (open > 0) {
        path.push("(");
        dfsBacktrack(open - 1, close, path, result, n);
        path.pop();
      }
      // cannot put down close
    }
  }
};
