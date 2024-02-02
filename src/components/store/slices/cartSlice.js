import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartItems:[],
  sumItems:0,
  animate:false
}

export const cartSlice = createSlice({
  name: 'goods',
  initialState,
  reducers: {
    setCartItem: (state, action) => {
        const findItem = state.cartItems.find(el => el.id === action.payload.id)
        if(findItem){
            findItem.count++
        }else{
            state.cartItems.push(action.payload)
        }
        state.sumItems = state.cartItems.reduce((acc, el) =>{
           return Number(el.price * el.count  + acc)
        },0 )
        state.animate = action.payload.img
    },

    clearCart: (state) => {
        state.cartItems = []
        state.sumItems = 0
    },

    removeItem: (state, action) => {
       state.cartItems = state.cartItems.filter(el => el.id !== action.payload.id)
       state.sumItems = state.sumItems - action.payload.price * action.payload.count
    },

    incCount: (state, action) => {
        const findItem = state.cartItems.find(el => el.id === action.payload.id)
        if(findItem){
            findItem.count++
            state.sumItems += action.payload.price
        }
    },

    decCount: (state, action) => {
        const findItem = state.cartItems.find(el => el.id === action.payload.id)
        if(findItem.count > 1){
            findItem.count--
            state.sumItems -= action.payload.price
        }
    },
    setAnimate:(state) => {
        state.animate = false
    }
  },
})

// Action creators are generated for each case reducer function
export const {setCartItem, removeItem, incCount, decCount, clearCart, setAnimate} = cartSlice.actions

export default cartSlice.reducer