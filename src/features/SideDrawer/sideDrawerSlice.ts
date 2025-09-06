// features/sideDrawer/sideDrawerSlice.ts
import { createSlice } from "@reduxjs/toolkit";

interface SideDrawerState {
  isOpen: boolean;
}

const initialState: SideDrawerState = {
  isOpen: false,
};

const sideDrawerSlice = createSlice({
  name: "sideDrawer",
  initialState,
  reducers: {
    toggleSideDrawer: (state) => {
      state.isOpen = !state.isOpen;
    },
    closeSideDrawer: (state) => {
      state.isOpen = false;
    },
  },
});

export const { toggleSideDrawer, closeSideDrawer } = sideDrawerSlice.actions;
export default sideDrawerSlice.reducer;
