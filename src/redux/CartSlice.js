import { createSlice } from '@reduxjs/toolkit'

const initialState = [];

export const CartSlice = createSlice({
    name: "Cart",
    initialState,
    reducers: {
        addProductToCart : (state, action) => {
            let myIndex = -1;
            state.map((item, index) => {
                if(item.id == action.payload.id){
                    myIndex = index
                }
            })
            if(myIndex == -1){
                state.push({
                    id: action.payload.id,
                    image: action.payload.image,
                    title: action.payload.title,
                    name: action.payload.name,
                    company: action.payload.company,
                    discount: action.payload.discount,
                    dis_price: action.payload.dis_price,
                    price: action.payload.price,
                    rating: action.payload.rating,
                    shipping: action.payload.shipping,
                    quantity: action.payload.quantity + 1,
                    detail: action.payload.detail
                })
            } else {
                state[myIndex].quantity = state[myIndex].quantity + 1
            }
        },
        
        removeProductFromCart : (state, action) => {
            let myIndex = -1;
            state.map((item, index) => {
                if(item.id == action.payload.id){
                    myIndex = index
                }
            })

            if(myIndex == -1){

            } else {
                state[myIndex].quantity = state[myIndex].quantity - 1
            }
        },

        deleteProductFromCart : (state, action) => {
            return (
                state = state.filter((item, index) => {
                    return item.id != action.payload
                })
            )
            // console.warn("state", state)
        }
    }
})

export const { addProductToCart, removeProductFromCart, deleteProductFromCart } = CartSlice.actions

export default CartSlice.reducer