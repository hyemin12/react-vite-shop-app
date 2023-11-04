import { createSlice } from "@reduxjs/toolkit";
import {
  deleteDataToSessionStorage,
  getDataToSessionStorage,
  saveDataToSessionStorage,
} from "../../utils/sessionStorageHandler";

const storageCartData = getDataToSessionStorage("cart");
const storageUserData = getDataToSessionStorage("userId");

const initialState = {
  products: storageCartData ? storageCartData : [],
  totalPrice: 0,
  userId: storageUserData ? storageUserData : "",
};
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setUserId: (state, action) => {
      state.userId = action.payload;
      saveDataToSessionStorage("userId", state.userId);
    },
    removeUserId: (state) => {
      state.userId = "";
      deleteDataToSessionStorage("userId");
    },
    addToCart: (state, action) => {
      state.products.push({
        ...action.payload,
        quantity: 1,
        total: action.payload.price,
      });
      saveDataToSessionStorage("cart", state.products);
    },
    deleteFromCart: (state, action) => {
      state.products.filter((item) => item.id !== action.payload);
      saveDataToSessionStorage("cart", state.products);
    },
    incrementProduct: (state, action) => {
      state.products = state.products.map((item) =>
        item.id === action.payload
          ? {
              ...item,
              quantity: item.quantity + 1,
              total: item.price * (item.quantity + 1),
            }
          : item
      );
      saveDataToSessionStorage("cart", state.products);
    },
    decrementProduct: (state, action) => {
      state.products = state.products.map((item) =>
        item.id === action.payload
          ? {
              ...item,
              quantity: item.quantity - 1,
              total: item.price * (item.quantity - 1),
            }
          : item
      );
      saveDataToSessionStorage("cart", state.products);
    },
    getTotalPrice: (state) => {
      state.totalPrice = state.products.reduce(
        (acc, cur) => (acc += cur.total),
        0
      );
    },
  },
});
export const {
  addToCart,
  deleteFromCart,
  incrementProduct,
  decrementProduct,
  getTotalPrice,
  setUserId,
  removeUserId,
} = cartSlice.actions;
export default cartSlice.reducer;
