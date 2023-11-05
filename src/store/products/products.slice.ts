import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Product } from "./products.type";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (category: string, thunkAPI) => {
    let response;
    try {
      if (category === "all") {
        response = await axios.get<Product[]>(
          "https://fakestoreapi.com/products"
        );
      } else {
        response = await axios.get<Product[]>(
          `https://fakestoreapi.com/products/category/${category}`
        );
      }
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Error loading products");
    }
  }
);

type ProductsType = {
  products: Product[];
  isLoading: boolean;
  error: string | null;
};

const initialState: ProductsType = {
  products: [],
  isLoading: false,
  error: null,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
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
      state.error = action.payload as string;
    });
  },
});

export default productsSlice.reducer;
