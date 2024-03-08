import { configureStore } from '@reduxjs/toolkit'
import categoriesSlice from './slices/categoriesSlice'

const Store = configureStore({
    reducer: {
      categoriesSlice: categoriesSlice,
    }
  })
  
  export type RootState = ReturnType<typeof Store.getState>
  export type AppDispatch = typeof Store.dispatch
  
  export default Store