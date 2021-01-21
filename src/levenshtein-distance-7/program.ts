export function levenshteinDistance(src: string, tgt: string) {
  const edits: number[][] = [];
  for (let i = 0; i < tgt.length + 1; i++) {
    const row: number[] = [];
    for (let j = 0; j < src.length + 1; j++) {
      row.push(j);
    }
    row[0] = i;
    edits.push(row);
  }

  for (let i = 1; i < tgt.length + 1; i++) {
    for (let j = 1; j < src.length + 1; j++) {
      if (tgt[i - 1] === src[j - 1]) {
        edits[i][j] = edits[i - 1][j - 1];
      } else {
        edits[i][j] =
          Math.min(
            (edits[i][j] = edits[i - 1][j - 1]),
            (edits[i][j] = edits[i - 1][j]),
            (edits[i][j] = edits[i][j - 1])
          ) + 1;
      }
    }
  }
  return edits[tgt.length][src.length];
}
