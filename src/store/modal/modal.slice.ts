import { createSlice } from "@reduxjs/toolkit";
import { Order } from "@store/order/order.type";

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
