export function uniqueBy<T>(hash: (x: T) => string | number, arr: T[]): T[] {
  const result = [];
  const table: Record<string, boolean> = {};

  for (const item of arr) {
    const key = hash(item);
    if (table[key]) {
      continue;
    } else {
      table[key] = true;
      result.push(item);
    }
  }

  return result;
}
