import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  bookingRequest: {},
};

export const bookingSlice = createSlice({
  name: 'bookingSlice',
  initialState,
  reducers: {
    getBooking: (state, { payload }) => {
      state.bookingRequest = payload;
    },
  },
});

export const { getBooking } = bookingSlice.actions;
export default bookingSlice.reducer;
