import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (args, thunkApi) => {
    try {
      const response = await axios.get(import.meta.env.VITE_FAKE_STORE_API);
      return response.data;
    } catch (error) {
      console.log(`Failed to fetch data: ${error}`);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

const INITIAL_STATE = {
  isLoading: false,
  error: null,
  products: [],
};

const productsSlice = createSlice({
  name: "products",
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});

// export selector
export const productsSelector = (state) => state.products;
// export reducer
export default productsSlice.reducer;
