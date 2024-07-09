import axios from "axios";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

import {
  deleteDataToSessionStorage,
  getDataToSessionStorage,
  saveDataToSessionStorage,
} from "../../utils/sessionStorageHandler";
import { Product } from "../products/products.type";
import { toggleSuccessOrderModal } from "src/store/modal/modal.slice";

export const postOrder = createAsyncThunk(
  "cart/postOder",
  async (order: CartState, thunkAPI) => {
    try {
      await axios.post(
        "https://654707d9902874dff3abe845.mockapi.io/orders",
        order
      );
      await thunkAPI.dispatch(sendOrder());
      thunkAPI.dispatch(toggleSuccessOrderModal(true));
    } catch (error) {
      return thunkAPI.rejectWithValue("Error sending order");
    }
  }
);

const storageCartData = getDataToSessionStorage("cart");
const storageUserData = getDataToSessionStorage("userId");

type CartState = {
  products: Product[];
  totalPrice: number;
  userId: string;
};

const initialState: CartState = {
  products: storageCartData ? storageCartData : [],
  totalPrice: 0,
  userId: storageUserData ? storageUserData : "",
};
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setUserId: (state, action: PayloadAction<string>) => {
      state.userId = action.payload;
      saveDataToSessionStorage("userId", state.userId);
    },
    removeUserId: (state) => {
      state.userId = "";
      deleteDataToSessionStorage("userId");
    },
    addToCart: (state, action: PayloadAction<Product>) => {
      state.products.push({
        ...action.payload,
        quantity: 1,
        total: action.payload.price,
      });
      toast.success("장바구니에 추가되었습니다.");
      saveDataToSessionStorage("cart", state.products);
    },
    deleteFromCart: (state, action: PayloadAction<number>) => {
      state.products = state.products.filter(
        (item) => item.id !== action.payload
      );
      toast.warning("장바구니에서 삭제되었습니다.");
      saveDataToSessionStorage("cart", state.products);
    },
    incrementProduct: (state, action: PayloadAction<number>) => {
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
    decrementProduct: (state, action: PayloadAction<number>) => {
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
    sendOrder: (state) => {
      state.products = [];
      saveDataToSessionStorage("cart", state.products);
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
  sendOrder,
} = cartSlice.actions;
export default cartSlice.reducer;
