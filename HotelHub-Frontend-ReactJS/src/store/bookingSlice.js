// bookingSlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bookings: [], // Array to store booking details
};

const bookingSlice = createSlice({
  name: "bookings",
  initialState,
  reducers: {
    addBooking: (state, action) => {
      // Add the new booking to the bookings array
      state.bookings.push(action.payload);
    },
  },
});

export const { addBooking } = bookingSlice.actions;
export const selectBookings = (state) => state.bookings.bookings;
export default bookingSlice.reducer;
