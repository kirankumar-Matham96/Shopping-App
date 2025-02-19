import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./slices/productsSlice";
import languageReducer from "./slices/languageSlice";
import currencyReducer from "./slices/currencySlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    language: languageReducer,
    currency: currencyReducer,
  },
});
