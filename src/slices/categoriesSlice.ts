import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
import { GenericStatusType } from "../Utils";

export interface Category {
  id: number;
  name: string;
  path: string;
}

export interface CategoriesSlice {
  items: Category[];
  responseStatus: GenericStatusType;
}

const initialState: CategoriesSlice = {
  items: [],
  responseStatus: {
    loading: false,
    success: false,
    error: false,
  },
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
      state.responseStatus = {
        loading: true,
        success: false,
        error: false,
      };
    });
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.items = action.payload.items;
      state.responseStatus = {
        loading: false,
        success: true,
        error: false,
      };
    });
    builder.addCase(fetchCategories.rejected, (state) => {
      state.items = [];
      state.responseStatus = {
        loading: false,
        success: false,
        error: true,
      }
    });
  },
});

export default categoriesSlice.reducer;
