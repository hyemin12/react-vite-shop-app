import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./user/user.slice";
import categoriesSlice from "./categories/categories.slice";
import productsSlice from "./products/products.slice";
import productSlice from "./products/product.slice";
import cartSlice from "./cart/cart.slice";
import orderSlice from "./order/order.slice";
import modalSlice from "./modal/modal.slice";

export const store = configureStore({
  reducer: {
    userSlice,
    categoriesSlice,
    productsSlice,
    cartSlice,
    productSlice,
    orderSlice,
    modalSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
