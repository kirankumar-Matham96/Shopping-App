import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (args, thunkApi) => {
    const { products } = thunkApi.getState().products;
    if (products.length > 0) return products;

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
  products: JSON.parse(localStorage.getItem("products")) || [],
  categories: [],
  filters: {
    categories: [],
    price: 0,
    rating: [],
  },
  recommendedProducts:
    JSON.parse(localStorage.getItem("recommended_products")) || [],
  filteredProducts: JSON.parse(localStorage.getItem("products")) || [],
  cartProducts: JSON.parse(localStorage.getItem("cart_products")) || [],
};

const productsSlice = createSlice({
  name: "products",
  initialState: INITIAL_STATE,
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    setFilters: (state, action) => {
      const { filterType, values } = action.payload;
      state.filters[filterType] = values;
    },

    filterProducts: (state) => {
      const { searchTerm, products, filters } = state;
      let filtered = [...products]; // Start with a copy of the full products list

      // Apply search filter
      if (searchTerm) {
        filtered = filtered.filter((product) =>
          product.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }

      // Apply category filter
      if (filters.categories.length > 0) {
        filtered = filtered.filter((product) =>
          filters.categories.includes(product.category)
        );
      }

      // Apply rating filter
      if (filters.rating.length > 0) {
        filtered = filtered.filter((product) =>
          filters.rating.some(
            (rating) => product.rating.rate >= parseInt(rating)
          )
        );
      }

      // Apply price filter
      if (filters.price) {
        filtered = filtered.filter(
          (product) => product.price <= Number(filters.price)
        );
      }
      state.filteredProducts = filtered; // Finally update the filteredProducts state
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        // state.filteredProducts = action.payload;
        state.categories = [
          ...new Set(action.payload.map((product) => product.category)),
        ];
        state.recommendedProducts = action.payload
          .filter((product) => product.rating >= 4)
          .slice(0, 6);
        state.isLoading = false;

        localStorage.setItem("products", JSON.stringify(action.payload));
        localStorage.setItem(
          "recommended_products",
          JSON.stringify(state.recommendedProducts)
        );
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});

// export actions
export const { filterProducts, setFilters, setSearchTerm } =
  productsSlice.actions;
// export selector
export const productsSelector = (state) => state.products;
// export reducer
export default productsSlice.reducer;
