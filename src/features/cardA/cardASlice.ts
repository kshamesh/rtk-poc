import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
export interface CardAState {
  title: string;
  value: number;
}

const initialState: CardAState = { title: "Initial A", value: 10 };

const cardASlice = createSlice({
  name: "cardA",
  initialState,
  reducers: {
    updateCardA(state, action: PayloadAction<Partial<CardAState>>) {
      return { ...state, ...action.payload };
    },
    resetCardA() {
      return initialState;
    },
  },
});

export const { updateCardA, resetCardA } = cardASlice.actions;
export default cardASlice.reducer;
