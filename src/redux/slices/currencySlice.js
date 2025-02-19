import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currency: localStorage.getItem("currency") || "USD",
};

const currencySlice = createSlice({
  name: "currency",
  initialState,
  reducers: {
    setCurrency: (state, action) => {
      state.currency = action.payload;
      localStorage.setItem("currency", action.payload);
    },
  },
});

export default currencySlice.reducer;
export const { setCurrency } = currencySlice.actions;
export const currencySelector = (state) => state.currency;
