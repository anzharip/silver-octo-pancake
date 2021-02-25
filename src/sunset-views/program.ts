// input
// * an array of buildings
//   * a building can see the sunset if it is strictly taller than all of the building that come after it in the direction it faces
//   * contains positive, non zero integers > 0 representing the height of the building
//     * a building of at index i has a height denoted by buildings[i]
//   * all of the building face the same direction
//     * either EAST or WEST
//     * you can interpret these direction as right for EAST or left for WEST
// * a direction, string
//   * EAST or WEST

// output
// * return an array of the INDICES of the building that can see the sunset
//   * the indices in the output array should be sorted in ascending order

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

// ds
// * a max stack, array

// algo
// * how do i use stack in these problem?
// * traverse the array either from the end (EAST), or from 0 (WEST)
// * start from 0, take notes of the current highest building
//   * if the current building is higher than the currentHighestBuilding, update currentHighestBuilding
//   * if it is the same or smaller, continue
// * we can simulate the simple max stack with an array

// aux space
// * the max stack

// time complexity
// * O(n)
export enum Direction {
  East = "EAST",
  West = "WEST",
}

export function sunsetViews(buildings: number[], direction: Direction) {
  // Write your code here.
  const result = [];
  let currentHighestBuildingHeight = 0;
  if (direction === "WEST") {
    for (let i = 0; i < buildings.length; i++) {
      if (buildings[i] > currentHighestBuildingHeight) {
        currentHighestBuildingHeight = buildings[i];
        result.push(i);
      }
    }
  } else if (direction === "EAST") {
    for (let i = buildings.length - 1; i >= 0; i--) {
      if (buildings[i] > currentHighestBuildingHeight) {
        currentHighestBuildingHeight = buildings[i];
        result.push(i);
      }
    }
    result.reverse();
  }
  return result;
}
