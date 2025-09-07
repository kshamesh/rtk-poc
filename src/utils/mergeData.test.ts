// utils/mergeData.test.ts
import { describe, expect, test } from "vitest";
import { mergeData } from "./mergeData";

interface User {
  id: number;
  name: string;
  email: string;
  age?: number;
}

describe("mergeData utility", () => {
  const original: User = {
    id: 1,
    name: "Alice",
    email: "alice@example.com",
    age: 25,
  };

  test("returns original if modified is null", () => {
    const result = mergeData(original, null);
    expect(result).toEqual(original);
  });

  test("overwrites fields if modified has values", () => {
    const modified: Partial<User> = { name: "Alicia" };
    const result = mergeData(original, modified);

    expect(result).toEqual({
      id: 1,
      name: "Alicia",
      email: "alice@example.com",
      age: 25,
    });
  });

  test("ignores undefined fields in modified", () => {
    const modified: Partial<User> = { name: undefined };
    const result = mergeData(original, modified);

    // Should keep the original name
    expect(result.name).toBe("Alice");
  });

  test("allows null to overwrite a value", () => {
    const modified: Partial<User> = { email: null as any };
    const result = mergeData(original, modified);

    expect(result.email).toBeNull();
  });

  test("works with multiple field updates", () => {
    const modified: Partial<User> = {
      name: "Alicia",
      age: 30,
      email: "alice@example2.com",
    };
    const result = mergeData(original, modified);

    expect(result).toEqual({
      id: 1,
      name: "Alicia",
      email: "alice@example2.com",
      age: 30,
    });
  });
});
