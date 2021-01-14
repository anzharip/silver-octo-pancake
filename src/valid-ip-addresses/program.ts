export function validIPAddresses(string: string): string[] {
  // Write your code here.
  const ipAddressesFound: string[] = [];
  for (let i = 0; i < Math.min(string.length, 4); i++) {
    const currentIpAddressesParts = ["", "", "", ""];

    currentIpAddressesParts[0] = string.slice(0, i);
    if (!isValidPart(currentIpAddressesParts[0])) continue;

    for (let j = i + 1; j < i + Math.min(string.length - i, 4); j++) {
      currentIpAddressesParts[1] = string.slice(i, j);
      if (!isValidPart(currentIpAddressesParts[1])) continue;

      for (let k = j + 1; k < j + Math.min(string.length - j, 4); k++) {
        currentIpAddressesParts[2] = string.slice(j, k);
        currentIpAddressesParts[3] = string.slice(k);

        if (
          isValidPart(currentIpAddressesParts[2]) &&
          isValidPart(currentIpAddressesParts[3])
        ) {
          ipAddressesFound.push(currentIpAddressesParts.join("."));
        }
      }
    }
  }
  return ipAddressesFound;
}

function isValidPart(string: string): boolean {
  const stringAsInt = parseInt(string);
  if (stringAsInt > 255) return false;
  return string.length === stringAsInt.toString().length;
}
