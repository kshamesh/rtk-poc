import { configureStore } from "@reduxjs/toolkit";
import cardAReducer from "../features/cardA/cardASlice";
import cardBReducer from "../features/cardB/cardBSlice";
import cardCReducer from "../features/cardC/cardCSlice";
import { apiSlice } from "../features/apiSlice";

export const store = configureStore({
  reducer: {
    cardA: cardAReducer,
    cardB: cardBReducer,
    cardC: cardCReducer,
    [apiSlice.reducerPath]: apiSlice.reducer, // ✅ add api reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware), // ✅ add api middleware
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
