import { createSlice } from "@reduxjs/toolkit";
import { CategoriesName } from "./categories.type";

const initialState = CategoriesName.All;

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setActiveCategory: (_, action) => action.payload,
  },
});
export const { setActiveCategory } = categorySlice.actions;
export default categorySlice.reducer;
