import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

export interface Category {
  id: number;
  name: string;
  path: string;
}

export interface CategoriesSlice {
  items: Category[];
  isLoading: boolean;
}

const initialState: CategoriesSlice = {
  items: [],
  isLoading: false,
};

export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async () => {
    try {
      const response = await axios.get('http://localhost:8888/api/V1/categories/list');
      return response.data;
    } catch (error) {
      throw(error)
    }
  }
);

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.pending, (state) => {
      state.items = [];
      state.isLoading = true;
    });
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.items = action.payload.items;
      state.isLoading = false;
    });
    builder.addCase(fetchCategories.rejected, (state) => {
      state.items = [];
      state.isLoading = false;
    });
  },
});

export default categoriesSlice.reducer;
