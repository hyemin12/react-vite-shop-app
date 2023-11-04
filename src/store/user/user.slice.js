import { createSlice } from "@reduxjs/toolkit";

const initialState = sessionStorage.getItem("user")
  ? JSON.parse(sessionStorage.getItem("user"))
  : { email: "", token: "", id: "" };

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.id = action.payload.id;
      sessionStorage.setItem("user", JSON.stringify(state));
    },
    removeUser: (state) => {
      state.email = "";
      state.token = "";
      state.id = "";
      sessionStorage.setItem("user", JSON.stringify(state));
    },
  },
});
export const { setUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
