import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  allGoods:[],
  goods: [],
  activeCategory:'',
  search:'',
  activePage:1
}

export const goodsSlice = createSlice({
  name: 'goods',
  initialState,
  reducers: {
    setAllGoods: (state, action) => {
      state.allGoods = [...action.payload]
    },
    setGoods: (state, action) => {
      state.goods = [...action.payload]
    },
    setActiveCategory: (state, action) => {
      state.activeCategory = action.payload
    },
    setSearch: (state, action) => {
        state.search = action.payload
    },
    setActivePage: (state, action) => {
        state.activePage = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setGoods, setActiveCategory, setSearch, setActivePage, setAllGoods } = goodsSlice.actions

export default goodsSlice.reducer