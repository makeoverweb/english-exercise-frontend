import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:9000/api/",
  }),
  endpoints: (builder) => ({
    fetchAuth: builder.mutation<any, any>({
      query: (params) => ({
        url: "registration",
        method: "POST",
        body: params,
      }),
    }),
  }),
});

export const { useFetchAuthMutation } = authApi;
