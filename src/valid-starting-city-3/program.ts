// input
// * array of distances
//   * i is city
//   * i is distances[i] away from the next city, i + 1
//   * the last city is connected to the first city
//   * there is at least two cities
// * an array
//   * representing fuel available at each city
//   * fuel[i] === fuel available at city i
//   * total amount of fuel available from all cities combined is exactly enough to travel to all cities
//   * the fuel tank always starts out empty
// * a number, integer
//   * positive integer value for the number of miles the car can travel per gallon, or miles per gallon, MPG

// output
// * there is only one valid starting city
// * return the index of the valid starting city

// ds

// algo
// * insight
//   * traversing all the city while calculating all the state of the fuel on the car, the city with the least fuel remaining is guaranteed to be the last city
//   * can achieve linear time complexity O(n)
// * create helper function to generate currentFuelDistanceAfterTravel
//  * input current city
//  * input currentFuelDistance
// * create a for loop
//   * store a smallest [currentFuelDistance, city index] tuplet
//   * update whenever there is a new tuplet with smaller currentFuelDistance

// aux
// * constant aux space

// complexities

export function validStartingCity(
  distances: number[],
  fuel: number[],
  mpg: number
) {
  // Write your code here.

  let currentFuel = 0;
  let smallestCurrentFuelDistanceAndCity = [currentFuel, 0];
  for (let i = 0; i < distances.length; i++) {
    const currentFuelDistanceAndCity = getCurrentFuelDistanceAndCity(
      i,
      currentFuel,
      distances,
      fuel,
      mpg
    );
    currentFuel = currentFuelDistanceAndCity[0];
    if (smallestCurrentFuelDistanceAndCity[0] > currentFuelDistanceAndCity[0]) {
      smallestCurrentFuelDistanceAndCity = currentFuelDistanceAndCity;
    }
  }

  return smallestCurrentFuelDistanceAndCity[1];
}

const getCurrentFuelDistanceAndCity = (
  currentCity: number,
  currentFuelDistance: number,
  distances: number[],
  fuel: number[],
  mpg: number
) => {
  currentFuelDistance = currentFuelDistance + fuel[currentCity] * mpg;
  currentFuelDistance = currentFuelDistance - distances[currentCity];
  const nextCity = (currentCity + 1) % distances.length;
  return [currentFuelDistance, nextCity];
};
