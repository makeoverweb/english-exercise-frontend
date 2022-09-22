import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IAuthResponse } from "../models/response/IAuthResponse";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:9000/api/",
  }),
  endpoints: (builder) => ({
    signUp: builder.mutation<any, any>({
      query: (params) => ({
        url: "registration",
        method: "POST",
        body: params,
      }),
    }),
    signIn: builder.mutation<any, any>({
      query: (params) => ({
        url: "login",
        method: "POST",
        body: params,
      }),
    }),
    logout: builder.mutation<any, any>({
      query: () => ({
        url: "logout",
        method: "POST",
      }),
    }),
    checkAuth: builder.query<IAuthResponse, unknown>({
      query: () => ({
        url: "/refresh",
      }),
    }),
  }),
});

export const { useSignUpMutation, useSignInMutation, useLogoutMutation } =
  authApi;
