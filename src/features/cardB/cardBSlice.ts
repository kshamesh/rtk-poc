import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface CardBState {
  name: string;
  items: string[];
}

const initialState: CardBState = { name: "Initial B", items: [] };

const cardBSlice = createSlice({
  name: "cardB",
  initialState,
  reducers: {
    updateCardB(state, action: PayloadAction<Partial<CardBState>>) {
      return { ...state, ...action.payload };
    },
  },
});

export const { updateCardB } = cardBSlice.actions;
export default cardBSlice.reducer;
