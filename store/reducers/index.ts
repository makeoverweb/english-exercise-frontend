import userReducer, { userActions } from "./user";

export const reducers = {
  userReducer,
};

export const allActions = { ...userActions };
