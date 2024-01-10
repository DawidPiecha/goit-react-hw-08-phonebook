import { createSlice } from '@reduxjs/toolkit';
import { register, login, logout, me } from './operations';

const initialState = {
  isLoggedIn: false,
  user: { name: null, email: null },
  token: null,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder.addCase(register.fulfilled, (state, action) => {
      state.isLoggedIn = true;
      state.user.name = action.payload.user.name;
      state.user.email = action.payload.user.email;
      state.token = action.payload.token;
    });

    builder.addCase(login.fulfilled, (state, action) => {
      state.isLoggedIn = true;
      state.user.name = action.payload.user.name;
      state.user.email = action.payload.user.email;
      state.token = action.payload.token;
    });
    builder.addCase(logout.fulfilled, () => initialState);

    builder.addCase(me.pending, state => {
      state.isRefreshing = true;
    });

    builder.addCase(me.fulfilled, (state, action) => {
      state.isLoggedIn = true;
      state.user.name = action.payload.name;
      state.user.email = action.payload.email;
      state.isRefreshing = false;
    });
    builder.addCase(me.rejected, state => {
      state.isRefreshing = false;
    });
  },
});

export const authReducer = authSlice.reducer;
