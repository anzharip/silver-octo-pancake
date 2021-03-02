// input
// * an array of buildings
//   * contains positive, non-zero integers representing the heights of the buildling
//   * building at index i thus has height denoted by buildings[i]
//   * can this be empty? 
  
// * a direction that all of the buildings face
//   * all buildings face the same direction denoted by the input string direction
//   * which will always equal to EAST or WEST
//   * you can interpret EAST === right, WEST === left

// output
// * return an array of the indices of the buildings that can see the sunset
//   * the indices in the output array should be sorted in ascending order
// * a building can see the sunset if it is strictly taller than all of the buildings that come after it in the direction that it faces


// ds

// algo
// * how to do it in one pass?

// aux space

// time complexity

// sample input
// buildings = [3, 5, 4, 4, 3, 1, 3, 2]
// direction = "EAST"

// sample output
// [1, 3, 6, 7]

// sample input
// buildings = [3, 5, 4, 4, 3, 1, 3, 2]
// direction = "WEST"

// sample output
// [0, 1]



// buildings = [3, 5, 4, 4, 3, 1, 3, 2]
//                 1     3        6  7
// direction = "EAST"

// buildings = [3, 5, 4, 4, 3, 1, 3, 2]
//              i
// direction = "EAST"

// i = 0
// currentTallest = 0
// buildings[i] = 3
// is buildings[i] > currentTallest = TRUE
// stack.pop()
// stack.push(3)
// stack = [3]

// buildings = [3, 5, 4, 4, 3, 1, 3, 2]
//                 i
// direction = "EAST"

// i = 1
// currentTallest = 3
// buildings[i] = 5
// is buildings[i] > currentTallest = TRUE
// stack.pop()
// stack.push(5)
// stack = [5]

// buildings = [3, 5, 4, 4, 3, 1, 3, 2]
//                    i
// direction = "EAST"

// i = 2
// currentTallest = 5
// buildings[i] = 4
// is buildings[i] > currentTallest = FALSE
//     stack.pop()
// stack.push(4)
// stack = [5, 4]

// buildings = [3, 5, 4, 4, 3, 1, 3, 2]
//                       i
// direction = "EAST"

// i = 3
// currentTallest = 5
// buildings[i] = 4
// is buildings[i] >= buildings[i - 1] = TRUE
//     stack.pop()
// stack.push(4)
// stack = [5, 4]

// buildings = [3, 5, 4, 4, 3, 1, 3, 2]
//                          i
// direction = "EAST"

// i = 4
// currentTallest = 5
// buildings[i] = 3
// is buildings[i] >= buildings[i - 1] = FALSE
//     stack.pop()
// stack.push(3)
// stack = [5, 4, 3]

// buildings = [3, 5, 4, 4, 3, 1, 3, 2]
//                             i
// direction = "EAST"

// i = 5
// currentTallest = 5
// buildings[i] = 1
// is buildings[i] >= buildings[i - 1] = FALSE
//     stack.pop()
// stack.push(1)
// stack = [5, 4, 3, 1]

// buildings = [3, 5, 4, 4, 3, 1, 3, 2]
//                                i
// direction = "EAST"

// i = 6
// currentTallest = 5
// buildings[i] = 3
// while buildings[i] >= stack[stack.length - 1] = TRUE
//     stack.pop()
// stack.push(3)
// stack = [5, 4, 3]

// buildings = [3, 5, 4, 4, 3, 1, 3, 2]
//                                   i
// direction = "EAST"

// i = 7
// currentTallest = 5
// buildings[i] = 2
// while buildings[i] >= stack[stack.length - 1] = false
//     stack.pop()
// stack.push(2)
// stack = [5, 4, 3, 2]

// ##

// buildings = [3, 5, 4, 4, 3, 1, 3, 2]
//              i
// direction = "EAST"


// i = 0
// buildings[i] = 3
// stack = []
// if stack is empty stack.push(i) = TRUE
// else 
//     while buildings[i] >= buildings[stack[stack.length - 1]] = FALSE
//         stack.pop()
// stack.push(i)
// stack = [0]

// buildings = [3, 5, 4, 4, 3, 1, 3, 2]
//                 i
// direction = "EAST"

// i = 1
// buildings[i] = 5
// stack = [0]
// if stack is empty stack.push(i) = FALSE
// else 
//     while buildings[i] >= buildings[stack[stack.length - 1]] = TRUE
//         stack.pop()
// stack.push(i)
// stack = [1]

// buildings = [3, 5, 4, 4, 3, 1, 3, 2]
//                    i
// direction = "EAST"

// i = 2
// buildings[i] = 4
// stack = [1]
// if stack is empty stack.push(i) = FALSE
// else 
//     while buildings[i] >= buildings[stack[stack.length - 1]] = FALSE
//         stack.pop()
// stack.push(i)
// stack = [1, 2]

// buildings = [3, 5, 4, 4, 3, 1, 3, 2]
//                       i
// direction = "EAST"

// i = 3
// buildings[i] = 4
// stack = [1, 2]
// if stack is empty stack.push(i) = FALSE
// else 
//     while buildings[i] >= buildings[stack[stack.length - 1]] = TRUE
//         stack.pop()
// stack.push(i)
// stack = [1, 3]

export enum Direction {
  East = "EAST",
  West = "WEST",
}

export function sunsetViews(buildings: number[], direction: Direction) {
  // Write your code here.
  const stack: number[] = [];
  if (direction === "EAST") {
    for (let i = 0; i < buildings.length; i++) {
      if (!stack.length) {
        stack.push(i);
      } else {
        while (buildings[i] >= buildings[stack[stack.length - 1]]) {
          stack.pop();
        }
        stack.push(i);
      }
    }
  } else if (direction === "WEST") {
    for (let i = buildings.length - 1; i >= 0; i--) {
      if (!stack.length) {
        stack.push(i);
      } else {
        while (buildings[i] >= buildings[stack[stack.length - 1]]) {
          stack.pop();
        }
        stack.push(i);
      }
    }
    stack.reverse();
  }
  return stack;
}
