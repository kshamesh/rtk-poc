const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

interface TravelOption {
  planId: string;
  options: string[];
}

export async function getTravelOptions(
  planId: string | undefined
): Promise<TravelOption[]> {
  await delay(300); // fake network delay
  return [
    { planId: "plan-101", options: ["Electric Car", "Hybrid Car"] },
    { planId: "plan-102", options: ["Bicycle", "Metro"] },
    { planId: "plan-103", options: ["Cruise", "Ferry", "Subway"] },
  ].filter((option) => option.planId === planId);
}
