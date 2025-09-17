const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

export async function getTravelOptions(): Promise<string[]> {
  await delay(800); // fake network delay
  return ["Electric Car", "Hybrid Car"];
}
