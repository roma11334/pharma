import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchGoods = createAsyncThunk('goods/fetchGoods', async (params) => {
    const {activePage, searchGet, categoryGet} = params
    const {data} = await axios.get(`https://65637ea2ee04015769a74a85.mockapi.io/drugs?page=${activePage}&limit=6`  + categoryGet + searchGet)
    return data
  }
)

export const fetchItem = createAsyncThunk('goods/fetchItem', async (id) => {
  const {data} = await axios.get(`https://65637ea2ee04015769a74a85.mockapi.io/drugs/${id}`)
  return data
})

export const fetchAllGoods = createAsyncThunk('goods/fetchAllGoods', async () => {
  const {data} = await axios.get('https://65637ea2ee04015769a74a85.mockapi.io/drugs')
  return data
})

const initialState = {
  allGoods:[],
  goods: [],
  item:{},
  goodsForPagination:[],
  status: 'loading',
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
    setGoodsForPagination: (state, action) => {
      state.goodsForPagination = [...action.payload]
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
    setFilters: (state, action) => {
      state.activeCategory = action.payload.activeCategory;
      state.activePage = action.payload.activePage
    },
    clearItem: (state) => {
      state.item = {}
    }
  },
  extraReducers: (builder) => {
    builder
       .addCase(fetchGoods.pending, (state) => {
          state.status = "loading"
          state.goods = []
       })
       .addCase(fetchGoods.fulfilled, (state, action) => {
          state.goods = [...action.payload]
          state.status = "success"
       })
       .addCase(fetchGoods.rejected, (state) => {
          state.status = "error"
          state.goods = []
       })
       .addCase(fetchAllGoods.fulfilled, (state, action) => {
          state.allGoods = [...action.payload]
          state.goodsForPagination = [...action.payload]
       })
       .addCase(fetchItem.fulfilled, (state, action) => {
          state.item = action.payload
          state.status = "success"
       })
       .addCase(fetchItem.pending, (state) => {
        state.status = "loading"
     })
 }
})

// Action creators are generated for each case reducer function
export const { setGoods, setActiveCategory, setSearch, setActivePage, setAllGoods, setFilters, setGoodsForPagination, clearItem} = goodsSlice.actions

export default goodsSlice.reducer