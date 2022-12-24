import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
};

export const globalSlice = createSlice({
  name: 'globalSlice',
  initialState,
  reducers: {
    getUser: ({ value }, { payload }) => {
      value = payload;
    },
  },
});

export const { getUser } = globalSlice.actions;
export default globalSlice.reducer;
