// selectors/cardDSelectors.ts

import { apiSlice } from "../features/api/apiSlice";
import type { RootState } from "../store/store";

// ✅ all users cached from RTK Query
export const selectUsers = (state: RootState) =>
  apiSlice.endpoints.getUsers.select()(state).data ?? [];

// ✅ selected IDs only
export const selectSelectedUserIds = (state: RootState) =>
  Object.entries(state.userSelection.selectedMap)
    .filter(([_, selected]) => selected)
    .map(([id]) => Number(id));

// ✅ selected users (actual objects, joined with RTK Query cache)
export const selectSelectedUsers = (state: RootState) => {
  const users = selectUsers(state);
  const selectedMap = state.userSelection.selectedMap;
  return users.filter((u) => selectedMap[u.id]);
};

// ✅ just selected usernames
export const selectSelectedUserNames = (state: RootState) =>
  selectSelectedUsers(state).map((u) => u.name);
