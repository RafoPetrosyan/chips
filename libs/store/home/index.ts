import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { HomeState, Product } from '@/libs/store/home/types'
import { fetchHomeProducts } from '@/libs/store/home/actions'

const initialState = {
   products: [],
   loading: false,
} satisfies HomeState as HomeState

const slice = createSlice({
   name: 'home',
   initialState,
   reducers: {
      // fill in primary logic here
   },
   extraReducers: (builder) => {
      builder.addCase(fetchHomeProducts.fulfilled, (state, action: PayloadAction<Product[]>) => {
         state.products = action.payload
      })
   },
})

export default slice
