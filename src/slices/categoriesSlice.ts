import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import { GenericStatusType } from "../Utils"

interface Filters {
  color?: string
  gender?: string
}

interface Item {
  id: number
  sku: string
  path: string
  image: string;
  name: string
  price: number
  specialPrice?: number
  filter: any[]
}

export interface Category {
  id: number
  name: string
  path: string
  items?: Item[]
}

export interface CategoriesSlice {
  categories: Category[]
  responseStatus: GenericStatusType
  items?: Item[]
  filters?: Filters[]
  selectedCategory?: Category
}

const initialState: CategoriesSlice = {
  categories: [],
  filters: undefined,
  responseStatus: {
    loading: false,
    success: false,
    error: false,
  },
  items: undefined,
  selectedCategory: undefined,
}

export const fetchCategories = createAsyncThunk("categories/fetchCategories", async () => {
  try {
    const response = await axios.get("http://localhost:8888/api/V1/categories/list")
    return response.data
  } catch (error) {
    throw error
  }
})

export const fetchItems = createAsyncThunk("categories/fetchItems", async (id: number) => {
  try {
    const response = await axios.get(`http://localhost:8888/api/V1/categories/${id}`)
    return response.data
  } catch (error) {
    throw error
  }
})

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
    clearSelectedCategory: (state) => {
      state.selectedCategory = undefined;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchItems.pending, (state) => {
      state.responseStatus = {
        loading: true,
        success: false,
        error: false,
      }
      state.items = undefined
      state.selectedCategory = undefined
      state.filters = undefined
    })
    builder.addCase(fetchItems.fulfilled, (state, action) => {
      state.responseStatus = {
        loading: false,
        success: true,
        error: false,
      }
      state.items = action.payload.items
      state.filters = action.payload.filters
    })
    builder.addCase(fetchItems.rejected, (state) => {
      state.responseStatus = {
        loading: false,
        success: false,
        error: true,
      }
      state.items = undefined
      state.selectedCategory = undefined
      state.filters = undefined
    })
    builder.addCase(fetchCategories.pending, (state) => {
      state.categories = []
      state.responseStatus = {
        loading: true,
        success: false,
        error: false,
      }
    })
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.categories = action.payload.items
      state.responseStatus = {
        loading: false,
        success: true,
        error: false,
      }
    })
    builder.addCase(fetchCategories.rejected, (state) => {
      state.categories = []
      state.responseStatus = {
        loading: false,
        success: false,
        error: true,
      }
    })
  },
})

export default categoriesSlice.reducer
export const { setSelectedCategory, clearSelectedCategory } = categoriesSlice.actions
