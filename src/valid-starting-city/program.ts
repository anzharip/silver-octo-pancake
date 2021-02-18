// input
// * distances === array of number
//   * the index i is the city
//   * city i is distances[i] away from city i + 1
//   * cities are connected via circular road, hence the last city is connected to the first city
//   * distance in miles? 
// * fuel === array of number
//   * fuel[i] === fuel available to city i
//   * fuel in gallon? 
//   * does the fuel accumulate? 
// * mpg === number
//   * positive integer value, for the number of miles the car can travel per gallon
// * total amount of fuel available for all cities is exactly enough to travel to all cities
// * fuel tank start out empty
// * there will always at least two cities

// output
// * index of valid starting city === i, number

// cases
// * starting city only two
// * 

// ds

// algo

// iterative

// aux

// complexities


export function validStartingCity(
  distances: number[],
  fuel: number[],
  mpg: number
) {
  // Write your code here.
  const possibleStartingCities = distances.map(() => false);
  for (let i = 0; i < distances.length; i++) {
    if (distances[i] < fuel[i] * mpg) possibleStartingCities[i] = true;
  }
  let validCity = 0;
  for (let i = 0; i < distances.length; i++) {
    if (possibleStartingCities[i]) {
      const reachedTheLastCity = canReachTheLastCity(i, distances, fuel, mpg);
      if (reachedTheLastCity) return i;
    }
  }

  return validCity;
}

const canReachTheLastCity = (
  i: number,
  distances: number[],
  fuel: number[],
  mpg: number
): boolean => {
  let currentMaxDistance = 0;
  let currentCity = i;
  let currentFuelDistance = 0;
  const lastCity = i - 1 < 0 ? distances.length + (i - 1) : i - 1;
  for (let j = 0; j < distances.length - 1; j++) {
    const nextCityFuelDistance = moveToTheNextCity(
      [currentCity, currentFuelDistance],
      distances,
      fuel,
      mpg
    );
    if (nextCityFuelDistance[1] < 0) break;
    [currentCity, currentFuelDistance] = nextCityFuelDistance;
  }
  return currentCity === lastCity;
};

const moveToTheNextCity = (
  cityFuelDistance: [number, number],
  distances: number[],
  fuel: number[],
  mpg: number
): number[] => {
  const currentCity = cityFuelDistance[0];
  const currentFuelDistance = cityFuelDistance[1] + fuel[currentCity] * mpg;

  let nextCity = (cityFuelDistance[0] + 1) % distances.length;
  nextCity = nextCity < 0 ? nextCity + distances.length : nextCity;
  const distanceToNextCity = distances[currentCity];
  const nextFuelDistance = currentFuelDistance - distanceToNextCity;

  return [nextCity, nextFuelDistance];
};
