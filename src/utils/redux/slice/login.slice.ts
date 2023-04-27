// loginSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoginState } from 'interfaces/LoginState.interfaces';

const initialState: LoginState = {
    isLoggedIn: false,
    name: 'noname',
    token: null,
    error: null,
    role: null,
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    loginSuccess: (state, action: PayloadAction<string>) => {
      state.isLoggedIn = true;
      state.token = action.payload;
      state.error = null;
      state.role = 'USER';
    },
    loginFailure: (state, action: PayloadAction<string>) => {
      state.isLoggedIn = false;
      state.token = null;
      state.error = action.payload;
      state.role = null;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.token = null;
      state.error = null;
      state.role = null;
    },
  },
});

export const { loginSuccess, loginFailure, logout } = loginSlice.actions;
export const loginReducer = loginSlice.reducer;