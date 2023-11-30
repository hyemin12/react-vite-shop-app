import { createSlice } from "@reduxjs/toolkit";

type Modal = {
  viewSuccessOrder: boolean;
};

const initialState: Modal = {
  viewSuccessOrder: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    toggleSuccessOrderModal: (state, { payload }) => {
      state.viewSuccessOrder = payload;
    },
  },
});

export const { toggleSuccessOrderModal } = modalSlice.actions;
export default modalSlice.reducer;
