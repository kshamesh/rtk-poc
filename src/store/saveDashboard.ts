import { createAsyncThunk } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import { selectSelectedUserIds } from "../selectors/cardDSelectors";

export const saveDashboard = createAsyncThunk(
  "dashboard/save",
  async (_, { getState }) => {
    const state = getState() as RootState;

    // 👇 Aggregating slices into one payload
    // This is where you'd structure the data as needed by your backend
    // For this example, we'll just log it to the console
    // Individual slices/teams need to agree on the global payload structure
    // the orchestration of the global save is handled here
    const globalPayload = {
      cardA: state.cardA,
      cardB: state.cardB,
      cardC: state.cardC,
      selectedUserIds: selectSelectedUserIds(state),
    };

    console.log("Saving Dashboard:", globalPayload);

    // Mock API call
    await new Promise((res) => setTimeout(res, 1000));

    return globalPayload; // success
  }
);
