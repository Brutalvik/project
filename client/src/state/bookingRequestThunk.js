import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
const POST_BOOKING_REQUEST_ENDPOINT =
  'http://localhost:5001/api/bookingrequest';
// THUNK TO POST BOOKING REQUEST DATA
export const postBookingRequest = createAsyncThunk(
  'bookingRequestData',
  async (data) => {
    console.log('received data', data);
    const postResponse = await axios.post(POST_BOOKING_REQUEST_ENDPOINT, data);
    postResponse
      .then((res) => {
        console.log(res.data);
        return res.data;
      })
      .catch((error) => console.log(error));
  }
);
