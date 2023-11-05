import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchOrder = createAsyncThunk(
  "order/fetchOrder",
  async (userId, thunkAPI) => {
    try {
      const { data } = await axios.get(
        `https://654707d9902874dff3abe845.mockapi.io/orders?search=${userId}`
      );
      return data;
    } catch (error) {
      thunkAPI.rejectWithValue("Error receiving order");
    }
  }
);

const initialState = {
  order: [],
  isLoading: false,
  error: null,
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchOrder.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchOrder.fulfilled, (state, action) => {
      state.isLoading = false;
      state.order = action.payload;
    });
    builder.addCase(fetchOrder.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});
export default orderSlice.reducer;
