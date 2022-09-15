import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { authApi } from "../services/authService";

import { reducers } from "../store/reducers";

const rootReducer = combineReducers({
  ...reducers,
  [authApi.reducerPath]: authApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
