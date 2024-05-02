import { createAsyncThunk } from '@reduxjs/toolkit'
import httpClient from '@/libs/httpClient'
import { Product } from '@/libs/store/home/types'

export const fetchHomeProducts = createAsyncThunk<Product[], void>(
   'home/fetchProducts',
   async () => {
      try {
         const response = await httpClient.get('/api/products')
         return response.data
      } catch (e) {
         console.log(e)
      }
   },
)
