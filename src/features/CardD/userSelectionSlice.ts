// features/users/userSelectionSlice.ts
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface UserSelectionState {
  selectedMap: Record<number, boolean>;
}

const initialState: UserSelectionState = {
  selectedMap: {},
};

const userSelectionSlice = createSlice({
  name: "userSelection",
  initialState,
  reducers: {
    toggleUserSelection: (state, action: PayloadAction<number>) => {
      const userId = action.payload;
      state.selectedMap[userId] = !state.selectedMap[userId];
    },
    setUserSelection: (
      state,
      action: PayloadAction<{ id: number; selected: boolean }>
    ) => {
      const { id, selected } = action.payload;
      state.selectedMap[id] = selected;
    },
  },
});

export const { toggleUserSelection, setUserSelection } =
  userSelectionSlice.actions;
export default userSelectionSlice.reducer;
