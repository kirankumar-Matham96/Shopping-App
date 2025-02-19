import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const getCurrencyValue = createAsyncThunk(
  "currency/getCurrencyValue",
  async (currency) => {
    const response = await fetch(
      `https://api.exchangerate-api.com/v4/latest/${currency}`
    );
    const data = await response.json();
    return data;
  }
);

const initialState = {
  currency: "USD",
};

const currencySlice = createSlice({
  name: "currency",
  initialState,
  reducers: {
    setCurrency: (state, action) => {
      state.currency = action.payload;
    },
  },
});

export default currencySlice.reducer;
export const { setCurrency } = currencySlice.actions;
export const currencySelector = (state) => state.currency;
