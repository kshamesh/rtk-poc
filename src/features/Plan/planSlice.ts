// src/features/plan/planSlice.ts
import {
  createSlice,
  createAsyncThunk,
  type PayloadAction,
} from "@reduxjs/toolkit";
import type { Plan } from "./Plan";
import type { RootState } from "../../store/store";
import { getPlan, createPlan } from "../api/planApi";

// plan state
interface PlanState {
  plan: Plan | null;
  loading: boolean;
  error?: string | null;
}

const initialState: PlanState = {
  plan: null,
  loading: false,
  error: null,
};

/**
 * loadOrCreatePlan: try to fetch plan by id; if API returns null -> create a new plan
 * - planId: optional; if undefined treat as new plan -> create one
 */
export const loadOrCreatePlan = createAsyncThunk<
  Plan,
  string, // planId
  { state: RootState }
>("plan/loadOrCreate", async (productId, { rejectWithValue }) => {
  try {
    // 1. Try existing plan
    const existing = await getPlan(productId);
    if (existing) return existing;

    // 2. Otherwise create new
    const created = await createPlan(productId);
    return created;
  } catch (err: any) {
    return rejectWithValue(err?.message || "Failed to load/create plan");
  }
});

const planSlice = createSlice({
  name: "plan",
  initialState,
  reducers: {
    setPlan(state, action: PayloadAction<Plan>) {
      state.plan = action.payload;
      state.error = null;
    },
    clearPlan(state) {
      state.plan = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadOrCreatePlan.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loadOrCreatePlan.fulfilled, (state, action) => {
        state.loading = false;
        state.plan = action.payload;
      })
      .addCase(loadOrCreatePlan.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { setPlan, clearPlan } = planSlice.actions;
export default planSlice.reducer;

// selectors
export const selectPlan = (s: RootState) => s.plan.plan;
export const selectPlanLoading = (s: RootState) => s.plan.loading;
export const selectPlanError = (s: RootState) => s.plan.error;
