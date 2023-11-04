import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProduct = createAsyncThunk(
  "product/fetchProduct",
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products/${id}`
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Error loading product");
    }
  }
);

const initialState = {
  isLoading: false,
  product: {},
  error: null,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.product = action.payload;
      })
      .addCase(fetchProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default productSlice.reducer;
