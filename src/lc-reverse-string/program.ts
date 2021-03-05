/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {
  let ptr1 = 0;
  let ptr2 = s.length - 1;
  while (ptr1 < ptr2) {
    [s[ptr1], s[ptr2]] = [s[ptr2], s[ptr1]];
    ptr1++;
    ptr2--;
  }
}
