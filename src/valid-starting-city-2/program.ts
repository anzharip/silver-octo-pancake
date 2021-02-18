export function validStartingCity(
  distances: number[],
  fuel: number[],
  mpg: number
) {
  // Write your code here.
  let traversed = 0;
  let currentCity = 0;
  let currentFuelDistance = 0;
  let lowestCityDistanceFuel = [0, 0];
  while (traversed < distances.length) {
    const nextCityFuelDistance = getNextCityFuelDistance(
      [currentCity, currentFuelDistance],
      distances,
      fuel,
      mpg
    );
    [currentCity, currentFuelDistance] = nextCityFuelDistance;
    if (currentFuelDistance < lowestCityDistanceFuel[1]) {
      lowestCityDistanceFuel = [currentCity, currentFuelDistance];
    }
    traversed++;
  }
  return lowestCityDistanceFuel[0];
}

const getNextCityFuelDistance = (
  cityFuelDistance: [number, number],
  distances: number[],
  fuel: number[],
  mpg: number
) => {
  const currentCity = cityFuelDistance[0];
  const currentFuelDistance = cityFuelDistance[1];

  let nextCity = (currentCity + 1) % distances.length;
  nextCity = nextCity < 0 ? nextCity + distances.length : nextCity;
  let nextFuelDistance = currentFuelDistance + fuel[currentCity] * mpg;
  nextFuelDistance = nextFuelDistance - distances[currentCity];

  return [nextCity, nextFuelDistance];
};
