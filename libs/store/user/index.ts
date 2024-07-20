import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { UserState, User } from '@/libs/store/user/types'
import { signInRequest } from '@/libs/store/user/actions'

const initialState = {
   currentUser: null,
   loading: false,
} satisfies UserState as UserState

const slice = createSlice({
   name: 'user',
   initialState,
   reducers: {
      // fill in primary logic here
   },
   extraReducers: (builder) => {
      builder.addCase(signInRequest.fulfilled, (state, action: PayloadAction<User>) => {
         state.currentUser = action.payload
      })
   },
})

export default slice
