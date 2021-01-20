export function levenshteinDistance(source: string, target: string): number {
  const edits: number[][] = [];
  for (let i = 0; i < target.length + 1; i++) {
    const row: number[] = [];
    for (let j = 0; j < source.length + 1; j++) {
      row.push(j);
    }
    row[0] = i;
    edits.push(row);
  }
  for (let i = 1; i < target.length + 1; i++) {
    for (let j = 1; j < source.length + 1; j++) {
      if (target[i - 1] === source[j - 1]) {
        edits[i][j] = edits[i - 1][j - 1];
      } else {
        edits[i][j] =
          1 + Math.min(edits[i - 1][j - 1], edits[i - 1][j], edits[i][j - 1]);
      }
    }
  }
  return edits[target.length][source.length];
}
