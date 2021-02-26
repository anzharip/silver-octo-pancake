// input 
// * given a string of length 12 or smaller
//   * containing only digits

// output
// * return all the possible ip addresses that can be created by inserting three dots in the string
//   * return in an array of strings
//     * in no particular order
//     * if no valid combination found, return an empty list/array
//   * meaning, have to use all of the numbers in the string
//   * is it possible if the string starts with 0? 
//     * yes it is possible, 0.255.255.255 is a valid ip address
// * ip address => sequence of four positive integers that are separated by dots
//   * each individual integer is within the range of 0 - 255 inclusive
// * is not valid if any of the individual integers ocntains leading 0s
//   * 192.168.0.1 is valid 
//   * 192.168.00.1 is NOT valid 
//   * 192.168.0.01 is NOT valid
// * another example
//   * 99.1.1.10 is valid
//   * 991.1.1.0 is NOT valid

// ds

// algo 
// * use three pointer system
//   * denoting the position of the dots in the ip addresses
// * create three loop to simulate the movements of the dots 
// * create a for loop to traverse the input string
//   * start from index i = 1, stops at index array.length - 3, because index array.length - 1 and array.length - 2 will be occupied
//   * initialize this for every loop 
//     * j = i + 1
//     * k = j + 1
// * create a helper function to validate the ip address segment

// aux space
// * the result array to accumulate the ip address combination 
// * but it should be constant since the input is constant? 

// time complexity
// * n^3
// * but it should be constant since the input is constant? 


export function validIPAddresses(string: string) {
  // Write your code here.
  const result: string[] = [];
  for (let i = 1; i < string.length - 2; i++) {
    const segmentOne = string.slice(0, i);
    if (!isValidIPAddress(segmentOne)) continue;
    for (let j = i + 1; j < string.length - 1; j++) {
      const segmentTwo = string.slice(i, j);
      if (!isValidIPAddress(segmentTwo)) continue;
      for (let k = j + 1; k < string.length; k++) {
        const segmentThree = string.slice(j, k);
        if (!isValidIPAddress(segmentThree)) continue;
        const segmentFour = string.slice(k);
        if (!isValidIPAddress(segmentFour)) continue;
        result.push(
          `${segmentOne}.${segmentTwo}.${segmentThree}.${segmentFour}`
        );
      }
    }
  }
  return result;
}

const isValidIPAddress = (string: string): boolean => {
  if (string.length > 3) return false;
  if (string.length > 1 && string[0] === "0") return false;
  const numString = Number(string);
  if (numString < 0) return false;
  if (numString > 255) return false;
  return true;
};
