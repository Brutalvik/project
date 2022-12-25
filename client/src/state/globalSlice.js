import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {},
  theme: false,
};

export const globalSlice = createSlice({
  name: 'globalSlice',
  initialState,
  reducers: {
    getUser: (state, action) => {
      state.user = action.payload;
    },
    getTheme: (state, action) => {
      state.theme = action.payload;
    },
  },
});

export const { getUser, getTheme } = globalSlice.actions;
export default globalSlice.reducer;
