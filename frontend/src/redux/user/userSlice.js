import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  currentUser: null,
  error: null,
  loading: false,
};

const authSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signInStart: (state) => {
      state.loading = true;
    },
    signInSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
    },
    signInFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    updateUserStart: (state) => {
      state.loading = true;
    },
    updateUserSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
    },
    updateUserFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;

    },
    signOutStart: (state) => {
      state.currentUser = null;
    },
    signOutSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;    
    }, 
    signOutFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  }
});

export const { signInStart, signInSuccess, signInFailure, updateUserFailure, updateUserSuccess, updateUserStart, signOutFailure, signOutSuccess, signOutStart } = authSlice.actions;

export default authSlice.reducer;