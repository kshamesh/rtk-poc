// utils/mergeData.ts
export function mergeData<T extends Record<string, any>>(
  original: T,
  modified: Partial<T> | null | undefined
): T {
  if (!modified) return original;

  const merged: T = { ...original };

  (Object.keys(modified) as (keyof T)[]).forEach((key) => {
    const value = modified[key];

    // Rule:
    // - If value is undefined, ignore (keep original)
    // - If value is null, explicitly overwrite (means cleared field)
    // - Else, overwrite with value
    if (value !== undefined) {
      merged[key] = value as T[keyof T];
    }
  });

  return merged;
}
