import { configureStore } from "@reduxjs/toolkit";
import cardAReducer from "../features/cardA/cardASlice";
import cardBReducer from "../features/cardB/cardBSlice";
import cardCReducer from "../features/cardC/cardCSlice";

export const store = configureStore({
  reducer: {
    cardA: cardAReducer,
    cardB: cardBReducer,
    cardC: cardCReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
