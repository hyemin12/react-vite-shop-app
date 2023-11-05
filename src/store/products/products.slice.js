import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (category, thunkAPI) => {
    let response;
    try {
      if (category === "all") {
        response = await axios.get("https://fakestoreapi.com/products");
      } else {
        response = await axios.get(
          `https://fakestoreapi.com/products/category/${category}`
        );
      }
      return response.data;
    } catch (error) {
      thunkAPI.rejectetWithValue("Error loading products");
    }
  }
);

const initialState = {
  products: [],
  isLoading: false,
  error: null,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.products = action.payload;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export default productsSlice.reducer;
