// input 
// * an array of buildings 
//   * contains positive, non-zero integers representing the heights of the buildings
//   * a building at index i thus has a height denoted by buildings[i]
// * and a direction that all of the buildings face
//   * all of the building face the same direction, either east or west
//   * EAST or WEST
//   * you can interpreset right === EAST, left === WEST

// output
// * return an array of the indices of the buildings that can see the sunset
//   * indices must be sorted in ascending order
// * a building can see the sunset if it is strictly taller than all of the buildinds that come after in in the direction that it faces

// ds
// * can use stack 
// * or just array accumulating the result
// * array accumulating the result is more straightforward

// algo

// aux space
// * need extra space to store the result
// * at worst O(n) if all buildings in the input array could see the sun 

// time complexity
// * O(n), n is number of elements in buildings array 
// * if building facing EAST, will need extra pass to reverse the result array 

// sample input #1
// buildings = [3, 5, 4, 4, 3, 1, 3, 2]
// direction = "EAST"

// sample output #1
// [1, 3, 6, 7]

// sample input #2
// buildings = [3, 5, 4, 4, 3, 1, 3, 2]
// direction = "WEST"

// #####


// buildings = [3, 5, 4, 4, 3, 1, 3, 2]
//                                   i
// result = []
// direction = "EAST"
// if result.length is empty
//   result.push(buildings[i])
// else 
//   if buildings[i] > result[result.length - 1]
//     result.push(buildings[i])
// result = [2]


// buildings = [3, 5, 4, 4, 3, 1, 3, 2]
//                                i
// result = []
// direction = "EAST"
// if result.length is empty
//   result.push(buildings[i])
// else 
//   if buildings[i] > result[result.length - 1]
//     result.push(buildings[i])
// result = [2, 3]

// buildings = [3, 5, 4, 4, 3, 1, 3, 2]
//                             i
// result = []
// i = 5
// buildings[i] = 1
// direction = "EAST"
// if result.length is empty
//   result.push(buildings[i])
// else 
//   if buildings[i] > result[result.length - 1]
//     result.push(buildings[i])
// result = [2, 3]


// buildings = [3, 5, 4, 4, 3, 1, 3, 2]
//                          i
// result = []
// i = 4
// buildings[i] = 3
// direction = "EAST"
// if result.length is empty
//   result.push(buildings[i])
// else 
//   if buildings[i] > result[result.length - 1]
//     result.push(buildings[i])
// result = [2, 3]

// buildings = [3, 5, 4, 4, 3, 1, 3, 2]
//                       i
// result = []
// i = 3
// buildings[i] = 4
// direction = "EAST"
// if result.length is empty
//   result.push(buildings[i])
// else 
//   if buildings[i] > result[result.length - 1]
//     result.push(buildings[i])
// result = [2, 3, 4]


// buildings = [3, 5, 4, 4, 3, 1, 3, 2]
//                    i
// result = []
// i = 2
// buildings[i] = 4
// direction = "EAST"
// if result.length is empty
//   result.push(buildings[i])
// else 
//   if buildings[i] > result[result.length - 1]
//     result.push(buildings[i])
// result = [2, 3, 4]


// buildings = [3, 5, 4, 4, 3, 1, 3, 2]
//                 i
// result = []
// i = 1
// buildings[i] = 5
// direction = "EAST"
// if result.length is empty
//   result.push(buildings[i])
// else 
//   if buildings[i] > result[result.length - 1]
//     result.push(buildings[i])
// result = [2, 3, 4, 5]

// buildings = [3, 5, 4, 4, 3, 1, 3, 2]
//              i
// result = []
// i = 0
// buildings[i] = 3
// direction = "EAST"
// if result.length is empty
//   result.push(i)
// else 
//   if buildings[i] > result[result.length - 1]
//     result.push(i)
// result = [7, 6, 3, 1]

// result.reverse()



export enum Direction {
  East = "EAST",
  West = "WEST",
}

export function sunsetViews(buildings: number[], direction: Direction) {
  // Write your code here.
  const result: number[] = [];
  if (direction === "WEST") {
    for (let i = 0; i < buildings.length; i++) {
      if (!result.length) {
        result.push(i);
      } else {
        const lastIndex = result[result.length - 1];
        if (buildings[i] > buildings[lastIndex]) {
          result.push(i);
        }
      }
    }
  } else if (direction === "EAST") {
    for (let i = buildings.length - 1; i >= 0; i--) {
      if (!result.length) {
        result.push(i);
      } else {
        const lastIndex = result[result.length - 1];
        if (buildings[i] > buildings[lastIndex]) {
          result.push(i);
        }
      }
    }
    result.reverse();
  }
  return result;
}
