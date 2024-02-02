import { configureStore } from '@reduxjs/toolkit'
import goodsReducer from './slices/goodsSlice'
import cartSlice from './slices/cartSlice'

export const store = configureStore({
  reducer: {
    goodsReducer,
    cartSlice
  },
})

