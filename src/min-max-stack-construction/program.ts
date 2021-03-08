// input 
// * write a MinMaxStack class 
//   * pushing and popping values on and off the stack 
//   * peeking at the value at the top of the stack 
//   * getting both the minium and the maximum value in the stack at any given point in time 
// * all class methods, when considered independently, should run in constant time and with constant space

// output


// ds
// * stack 

// algo 
// * at all times, always store the current min, current max
// * when adding pushing new value, re calculate current min and current max
//   * if value is smaller than current min, update current min
//     * get current min from current top element of the stack 
//     * if there is no current top element, in other words the stack is empty, set the min and max as the same with the value to be pushed
//   * if value is larger than current max, update current max


// aux space
// * 3N, so it would be O(n)

// time complex
// * push, peek, min, max, pop all is constant O(n)

// sample usage
// MinMaxStack(): - //instantiate
// push(5): - 
// getMin(): 5
// getMax(): 5
// peek(): 5
// push(7): - 
// getMin(): 5
// getMax(: 7
// peek(): 7
// push(2): - 
// getMin(): 2
// getMax(): 7
// peek(): 2
// pop(): 2
// pop(): 7
// getMin(): 5
// getMax(): 5
// peek(): 5

// #####

// stack = []
// push(5)
// stack = [{
//     value: 5, 
//     min: 5, 
//     max: 5
// }]
// getMin()
//     stack[stack.length - 1].min
// getMax()
//     stack[stack.length - 1].max
// peek()
//     stack[stack.length - 1].value

// ##
// stack = [{
//     value: 5, 
//     min: 5, 
//     max: 5
// }]
// push(7)
// stack = [
//     {
//         value: 5, 
//         min: 5, 
//         max: 5
//     }, 
//     {
//         value: 7, 
//         min: 5, 
//         max: 7
//     }
// ]
// getMin(): 5
//     stack[stack.length - 1].min
// getMax(): 7
//     stack[stack.length - 1].max
// peek(): 7
//     stack[stack.length - 1].value


// ##

// stack = [
//     {
//         value: 5, 
//         min: 5, 
//         max: 5
//     }, 
//     {
//         value: 7, 
//         min: 5, 
//         max: 7
//     }
// ]
// push(2)
// stack = [
//     {
//         value: 5, 
//         min: 5, 
//         max: 5
//     }, 
//     {
//         value: 7, 
//         min: 5, 
//         max: 7
//     },
//     {
//         value: 2, 
//         min: 2, 
//         max: 7
//     },
// ]

// Feel free to add new properties and methods to the class.
export type StackElement = {
  value: number;
  min: number;
  max: number;
};

export class MinMaxStack {
  stack: StackElement[];

  constructor(stack: StackElement[] = []) {
    this.stack = [];
  }

  peek() {
    // Write your code here.
    if (this.stack.length) {
      return this.stack[this.stack.length - 1].value;
    } else {
      return -1;
    }
  }

  pop() {
    // Write your code here.
    if (this.stack.length) {
      const currentTopElement = this.stack.pop();
      return currentTopElement?.value;
    } else {
      return -1;
    }
  }

  push(number: number) {
    // Write your code here.
    if (!this.stack.length) {
      const newElement = {
        value: number,
        min: number,
        max: number,
      };
      this.stack.push(newElement);
    } else {
      const currentTopElement = this.stack[this.stack.length - 1];
      const newMin =
        number < currentTopElement.min ? number : currentTopElement.min;
      const newMax =
        number > currentTopElement.max ? number : currentTopElement.max;
      const newElement = {
        value: number,
        min: newMin,
        max: newMax,
      };
      this.stack.push(newElement);
    }
  }

  getMin() {
    // Write your code here.
    if (this.stack.length) {
      return this.stack[this.stack.length - 1].min;
    } else {
      return -1;
    }
  }

  getMax() {
    // Write your code here.
    if (this.stack.length) {
      return this.stack[this.stack.length - 1].max;
    } else {
      return -1;
    }
  }
}
