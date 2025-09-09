// src/api/mockApiClient.ts
import type { Plan } from "../Plan/Plan";

// Fake API delay
const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

// -----------------------------
// Mock "database"
// -----------------------------
const mockPlans: Record<string, Plan> = {
  "101": {
    id: "plan-101",
    name: "Existing Dashboard Plan",
    createdAt: "2025-01-01T10:00:00Z",
    createdBy: "system",
    productId: "101",
    isNew: false,
  },
  "102": {
    id: "plan-102",
    name: "Another Dashboard Plan",
    createdAt: "2025-01-02T10:00:00Z",
    createdBy: "system",
    productId: "102",
    isNew: false,
  },
  "103": {
    id: "plan-103",
    name: "Third Dashboard Plan",
    createdAt: "2025-01-03T10:00:00Z",
    createdBy: "system",
    productId: "103",
    isNew: false,
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
  };

  mockPlans[productId] = newPlan;
  return newPlan;
}
