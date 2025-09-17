// create a fake dining card api similar to travel card api
const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

interface DinningOptions {
  planId: string;
  options: string[];
}

export async function getDinningOptions(
  planId: string | undefined
): Promise<DinningOptions[]> {
  await delay(200); // fake network delay
  return [
    {
      planId: "plan-101",
      options: ["Vegetarian", "Vegan", "Gluten-Free"],
    },
    { planId: "plan-102", options: ["Steak", "Seafood", "Dessert"] },
    { planId: "plan-103", options: ["Fast Food", "Snacks", "Drinks"] },
  ].filter((plan) => !planId || plan.planId === planId);
}
