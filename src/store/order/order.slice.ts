import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Order } from "./order.type";

export const fetchOrder = createAsyncThunk("order/fetchOrder", async (userId: string, thunkAPI) => {
  try {
    const { data } = await axios.get<Order[]>(`https://654707d9902874dff3abe845.mockapi.io/orders?search=${userId}`);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue("Error receiving order");
  }
});

type OrderType = {
  order: Order[];
  recentOrder: Order | undefined;
  isLoading: boolean;
  error: string | null;
};

const initialState: OrderType = {
  order: [],
  recentOrder: undefined,
  isLoading: false,
  error: null,
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {},
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
      state.error = action.payload as string;
    });
  },
});
export default orderSlice.reducer;
