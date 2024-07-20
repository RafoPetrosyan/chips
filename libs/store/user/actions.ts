import { createAsyncThunk } from '@reduxjs/toolkit'
import httpClient from '@/libs/httpClient'
import { SignInPayload, User } from '@/libs/store/user/types'

export const signInRequest = createAsyncThunk<User, SignInPayload>(
   'user/signInRequest',
   async ({ email, password }) => {
      try {
         const { data } = await httpClient.post('/login', { email, password })
         return data
      } catch (e) {
         console.log(e)
      }
   },
)
