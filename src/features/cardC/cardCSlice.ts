import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface CardCState {
  notes: string;
  flag: boolean;
}

const initialState: CardCState = { notes: "", flag: false };

const cardCSlice = createSlice({
  name: "cardC",
  initialState,
  reducers: {
    updateCardC(state, action: PayloadAction<Partial<CardCState>>) {
      return { ...state, ...action.payload };
    },
  },
});

export const { updateCardC } = cardCSlice.actions;
export default cardCSlice.reducer;
