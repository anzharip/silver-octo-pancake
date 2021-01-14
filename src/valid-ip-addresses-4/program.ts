export function validIPAddresses(string: string): string[] {
  // Write your code here.
  const ipAddresses: string[] = [];
  for (let i = 0; i < Math.min(string.length, 4); i++) {
    const currentIpAddress = ["", "", "", ""];
    currentIpAddress[0] = string.slice(0, i);
    if (!isValidPart(currentIpAddress[0])) continue;

    for (let j = i + 1; j < i + Math.min(string.length - 1, 4); j++) {
      currentIpAddress[1] = string.slice(i, j);
      if (!isValidPart(currentIpAddress[1])) continue;

      for (let k = j + 1; k < j + Math.min(string.length - j, 4); k++) {
        currentIpAddress[2] = string.slice(j, k);
        currentIpAddress[3] = string.slice(k);

        if (
          isValidPart(currentIpAddress[2]) &&
          isValidPart(currentIpAddress[3])
        ) {
          ipAddresses.push(currentIpAddress.join("."));
        }
      }
    }
  }

  return ipAddresses;
}

function isValidPart(string: string): boolean {
  const stringAsInt = parseInt(string);
  if (stringAsInt > 255) return false;
  return string.length === stringAsInt.toString().length;
}
