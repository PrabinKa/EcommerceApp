import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data: "",
  items: ""
}

export const ClothesData = createSlice({
    name: "cloth",
    initialState,
    reducers: {
        getClothDetails : (state, action) => {
            state.data = action.payload
        },
        productsFromList: (state, action) => {
            state.items = action.payload
        }
    }
})

export const { getClothDetails, productsFromList } = ClothesData.actions

export default ClothesData.reducer
