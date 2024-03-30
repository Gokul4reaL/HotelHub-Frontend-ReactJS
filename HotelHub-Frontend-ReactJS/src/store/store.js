// store.js

import { configureStore } from "@reduxjs/toolkit";
import bookingReducer from "./bookingSlice"; // Import your bookingSlice or whatever you named it

// Create the Redux store
const store = configureStore({
  reducer: {
    // Add your Redux slices/reducers here
    bookings: bookingReducer, // This assumes you have a bookings slice
    // Add other reducers if you have more slices
  },
});

export default store;
