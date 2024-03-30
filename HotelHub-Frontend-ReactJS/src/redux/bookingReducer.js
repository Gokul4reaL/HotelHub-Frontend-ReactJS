// bookingReducer.js

const initialState = {
  bookingHistory: [],
};

const bookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_BOOKING":
      return {
        ...state,
        bookingHistory: [...state.bookingHistory, action.payload],
      };
    default:
      return state;
  }
};

export default bookingReducer;
