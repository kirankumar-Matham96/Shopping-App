import { createSlice } from "@reduxjs/toolkit";
import translations from "../../locales/languages.json";

const languageSlice = createSlice({
  name: "language",
  initialState: {
    language: localStorage.getItem("language") || "en",
    translations,
  },
  reducers: {
    setLanguage: (state, action) => {
      state.language = action.payload;
      localStorage.setItem("language", action.payload);
    },
  },
});

export default languageSlice.reducer;
export const { setLanguage } = languageSlice.actions;
export const languageSelector = (state) => state.language;
