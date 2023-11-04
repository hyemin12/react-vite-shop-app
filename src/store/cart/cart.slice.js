import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  products: [],
  totalPrice: 0,
  userId: "",
};
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
});

export default cartSlice.reducer;
