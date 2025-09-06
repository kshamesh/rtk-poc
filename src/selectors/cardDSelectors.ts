// selectors/cardDSelectors.ts

import { apiSlice } from "../features/apiSlice";
import type { RootState } from "../store/store";

export const selectUsers = (state: RootState) =>
  apiSlice.endpoints.getUsers.select()(state).data ?? [];
