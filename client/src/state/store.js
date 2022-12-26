import { configureStore } from '@reduxjs/toolkit';
import bookingSlice from './bookingSlice';
import globalSlice from './globalSlice';

const store = configureStore({
  reducer: {
    global: globalSlice,
    booking: bookingSlice,
  },
});

export default store;
