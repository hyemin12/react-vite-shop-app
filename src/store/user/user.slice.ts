import { createSlice } from "@reduxjs/toolkit";
import {
  deleteDataToSessionStorage,
  getDataToSessionStorage,
  saveDataToSessionStorage,
} from "src/utils/sessionStorageHandler";

const storageData = getDataToSessionStorage("user");

const initialState = storageData
  ? storageData
  : { email: "", token: "", id: "" };

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.id = action.payload.id;
      saveDataToSessionStorage("user", state);
    },
    removeUser: (state) => {
      state.email = "";
      state.token = "";
      state.id = "";
      deleteDataToSessionStorage("user");
    },
  },
});
export const { setUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
