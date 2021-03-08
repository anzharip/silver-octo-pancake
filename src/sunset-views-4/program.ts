// input
// * an array of buildings
//   * caontain positive, non-zero integers representing the heights of the buildings 
//   * a building at index 0 thus has a height denoted by buildings[i]
// * and a direction that all of the buildings face
//   * all of the buildings face the same direction
//   * and this direction is either east or west 
//   * denoted by the inpuyt string named direction, which will always be equal to either "EAST" or "WEST"
//   * in relation to the input array, you can interprest these directions as right for EAST and left for WEST

// output
// * return an array of indices of the buildings that can see the sunset
// * a building can see the sunset if it is strictly taller than all of the buildinds that come afte it in the direction that it faces
// * the indices in the output array should be sorted in ascending order


// algo 

// ds

// aux space
// * result array 
// * O(n), n = input element, buildings array 

// time complex
// * O(n), n = input element, buildings array 
//   * when direction is EAST, it is O(2n), because there is a need to reverse the result array 

// sample input
// buildings = [3, 5, 4, 4, 3, 1, 3, 2]
// direction = "EAST"

// sample output
// [1, 3, 6, 7]


// buildings = [3, 5, 4, 4, 3, 1, 3, 2]
//                                   i
// direction = "EAST" => meaning facing right, start traversing the array from the right 
// result = []
// i = 7
// buildings[i] = 2
// if result array is empty
//     push the buildings[i]    
// result = [7]

// buildings = [3, 5, 4, 4, 3, 1, 3, 2]
//                                i
// direction = "EAST" => meaning facing right, start traversing the array from the right 
// result = [7]
// i = 6
// buildings[i] = 3
// if result array is empty
//     push the buildings[i]    
// else 
//     topOfStack = result[result.length - 1]
//     if (buildings[i] > topOfStack)
//         result.push(i)
// result = [7, 6]


// buildings = [3, 5, 4, 4, 3, 1, 3, 2]
//              0  1  2  3  4  5  6  7
//                             i
// direction = "EAST" => meaning facing right, start traversing the array from the right 
// result = [7]
// i = 5
// buildings[i] = 1
// if result array is empty
//     push the buildings[i]    
// else 
//     topOfStack = result[result.length - 1]
//     if (buildings[i] > topOfStack)
//         result.push(i)
// result = [7, 6]


// buildings = [3, 5, 4, 4, 3, 1, 3, 2]
// index        0  1  2  3  4  5  6  7
//                          i
// direction = "EAST" => meaning facing right, start traversing the array from the right 
// result = [7]
// i = 4
// buildings[i] = 3
// if result array is empty
//     push the buildings[i]    
// else 
//     topOfStack = result[result.length - 1]
//     if (buildings[i] > topOfStack)
//         result.push(i)
// result = [7, 6]

// buildings = [3, 5, 4, 4, 3, 1, 3, 2]
// index        0  1  2  3  4  5  6  7
//                       i
// direction = "EAST" => meaning facing right, start traversing the array from the right 
// result = [7]
// i = 3
// buildings[i] = 4
// if result array is empty
//     push the buildings[i]    
// else 
//     topOfStack = result[result.length - 1]
//     if (buildings[i] > topOfStack)
//         result.push(i)
// result = [7, 6, 3]

// buildings = [3, 5, 4, 4, 3, 1, 3, 2]
// index        0  1  2  3  4  5  6  7
//                    i
// direction = "EAST" => meaning facing right, start traversing the array from the right 
// result = [7]
// i = 2
// buildings[i] = 4
// if result array is empty
//     push the buildings[i]    
// else 
//     topOfStack = result[result.length - 1]
//     if (buildings[i] > topOfStack)
//         result.push(i)
// result = [7, 6, 3]


// buildings = [3, 5, 4, 4, 3, 1, 3, 2]
// index        0  1  2  3  4  5  6  7
//                 i
// direction = "EAST" => meaning facing right, start traversing the array from the right 
// result = [7]
// i = 1
// buildings[i] = 5
// if result array is empty
//     push the buildings[i]    
// else 
//     topOfStack = result[result.length - 1]
//     if (buildings[i] > topOfStack)
//         result.push(i)
// result = [7, 6, 3, 1]

// buildings = [3, 5, 4, 4, 3, 1, 3, 2]
// index        0  1  2  3  4  5  6  7
//              i
// direction = "EAST" => meaning facing right, start traversing the array from the right 
// result = [7]
// i = 0
// buildings[i] = 3
// if result array is empty
//     push the buildings[i]    
// else 
//     topOfStack = result[result.length - 1]
//     if (buildings[i] > topOfStack)
//         result.push(i)
// result = [7, 6, 3, 1]

// if direction = "EAST", reverse the result array 
// and then return the result array 

export enum Direction {
  East = "EAST",
  West = "WEST",
}

export function sunsetViews(
  buildings: number[],
  direction: Direction
): number[] {
  // Write your code here.
  let startIndex = direction === "EAST" ? buildings.length - 1 : 0;
  const endIndex = direction === "EAST" ? 0 : buildings.length - 1;
  const advanceValue = direction === "EAST" ? -1 : 1;
  const result: number[] = [];
  while (startIndex >= 0 && startIndex <= buildings.length - 1) {
    if (!result.length) {
      result.push(startIndex);
    } else {
      const topOfStackIndex = result[result.length - 1];
      const topOfStackValue = buildings[topOfStackIndex]
      if (buildings[startIndex] > topOfStackValue) {
        result.push(startIndex);
      }
    }
    startIndex = startIndex + advanceValue;
  }
  if (direction === "EAST") {
    result.reverse();
  }
  return result;
}
