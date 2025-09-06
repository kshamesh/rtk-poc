import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { type User } from "../types/User";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: (builder) => ({
    getUsers: builder.query<User[], void>({
      query: () => "/users?_limit=3",
    }),
  }),
});

export const { useGetUsersQuery } = apiSlice;
