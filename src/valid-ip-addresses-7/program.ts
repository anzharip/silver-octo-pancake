export function validIPAddresses(string: string) {
  if (string.length < 4) return [];
  const result: string[] = [];
  // Write your code here.
  for (let i = 1; i < string.length; i++) {
    const segmentOne = string.slice(0, i);
    if (!isValidIPSegment(segmentOne)) continue;
    for (let j = i + 1; j < string.length; j++) {
      const segmentTwo = string.slice(i, j);
      if (!isValidIPSegment(segmentTwo)) continue;
      for (let k = j + 1; k < string.length; k++) {
        const segmentThree = string.slice(j, k);
        const segmentFour = string.slice(k);
        if (isValidIPSegment(segmentThree) && isValidIPSegment(segmentFour)) {
          result.push(
            `${segmentOne}.${segmentTwo}.${segmentThree}.${segmentFour}`
          );
        }
      }
    }
  }

  return result;
}

const isValidIPSegment = (string: string): boolean => {
  if (string.length > 3) return false;
  if (string[0] === "0" && string.length > 1) return false;
  const numString = Number(string);
  if (numString < 0 || numString > 255) return false;
  return true;
};
