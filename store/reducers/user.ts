import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setIsAuth: (state, action) => {
      state.isAuth = action.payload;
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice.reducer;
