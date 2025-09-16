import { configureStore } from "@reduxjs/toolkit";
import cardAReducer from "../features/CardA/cardASlice";
import cardBReducer from "../features/CardB/cardBSlice";
import cardCReducer from "../features/CardC/cardCSlice";
import { apiSlice } from "../features/api/apiSlice";
import userSelectionReducer from "../features/CardD/userSelectionSlice";
import sideDrawerReducer from "../features/SideDrawer/sideDrawerSlice";
import planReducer from "../features/Plan/planSlice";

export const store = configureStore({
  reducer: {
    cardA: cardAReducer,
    cardB: cardBReducer,
    cardC: cardCReducer,
    travelCard: cardCReducer, // Example reuse of cardC reducer for travelCard
    [apiSlice.reducerPath]: apiSlice.reducer, // ✅ add api reducer
    userSelection: userSelectionReducer,
    sideDrawer: sideDrawerReducer,
    plan: planReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware), // ✅ add api middleware
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
