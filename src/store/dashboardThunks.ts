import { createAsyncThunk } from "@reduxjs/toolkit";
import type { RootState } from "./store";

export const saveDashboard = createAsyncThunk(
  "dashboard/save",
  async (_, { getState }) => {
    const state = getState() as RootState;

    // 👇 Aggregating slices into one payload
    const payload = {
      cardA: state.cardA,
      cardB: state.cardB,
      cardC: state.cardC,
    };

    console.log("Saving Dashboard:", payload);

    // Mock API call
    await new Promise((res) => setTimeout(res, 1000));

    return payload; // success
  }
);
