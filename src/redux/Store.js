import { configureStore } from '@reduxjs/toolkit'
import ClothesDataReducer from './ClothesData'
import CartReducer from './CartSlice'

export const store = configureStore({
  reducer: {
    detail: ClothesDataReducer,
    cart: CartReducer,
  },
})