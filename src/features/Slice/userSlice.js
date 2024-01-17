import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: undefined,
  isLoggedIn: false,
}

const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    signIn: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true
    },
    signOut: (state) => {
      state.user = undefined
      state.isLoggedIn = false
    }
  }
})

export const {signIn, signOut} = userSlice.actions
export default userSlice.reducer