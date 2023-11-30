import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  allGoods:[],
  goods: [],
  filterGoods: [],
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
      state.filterGoods = [...action.payload]
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
    },
    setFilterGoods: (state, action) => {
        state.filterGoods = [...state.allGoods.filter(res => {
        return action.payload ?   res.category === action.payload : res.category
        } )]
    }
  },
})

// Action creators are generated for each case reducer function
export const { setGoods, setActiveCategory, setSearch, setActivePage, setAllGoods, setFilterGoods } = goodsSlice.actions

export default goodsSlice.reducer