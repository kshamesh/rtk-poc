// src/api/mockApiClient.ts
import type { Plan } from "../Plan/Plan";

// Fake API delay
const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

// -----------------------------
// Mock "database"
// -----------------------------
export const mockPlans: Record<string, Plan> = {
  "101": {
    id: "plan-101",
    name: "Existing Dashboard Plan",
    createdAt: "2025-01-01T10:00:00Z",
    createdBy: "system",
    productId: "101",
    isNew: false,
    cardA: {
      title: "Plan Card A Title",
      value: 999,
    },
  },
  "102": {
    id: "plan-102",
    name: "Another Dashboard Plan",
    createdAt: "2025-01-02T10:00:00Z",
    createdBy: "system",
    productId: "102",
    isNew: false,
    cardA: {
      title: "Another Card A Title",
      value: 555,
    },
  },
  "103": {
    id: "plan-103",
    name: "Third Dashboard Plan",
    createdAt: "2025-01-03T10:00:00Z",
    createdBy: "system",
    productId: "103",
    isNew: false,
    cardA: {
      title: "Third Card A Title",
      value: 333,
    },
  },
  // Add more mock plans as needed
};

// -----------------------------
// API methods
// -----------------------------

/**
 * GET plan by productId
 * - returns existing plan or null
 */
export async function getPlan(productId?: string): Promise<Plan | null> {
  await delay(500);
  if (!productId) return null;

  return mockPlans[productId] ?? null;
}

/**
 * CREATE a new plan
 * - new plans do NOT have cardA initially
 */
export async function createPlan(productId: string): Promise<Plan> {
  await delay(500);

  const newPlan: Plan = {
    id: `new-${Date.now()}`,
    name: "New Dashboard Plan",
    createdAt: new Date().toISOString(),
    createdBy: "mockUser",
    productId,
    isNew: true,
    cardA: {
      title: "",
      value: 0,
    },
  };

  mockPlans[productId] = newPlan;
  return newPlan;
}
