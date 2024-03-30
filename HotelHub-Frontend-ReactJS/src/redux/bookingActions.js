// bookingActions.js

export const addBooking = (paymentId, hotelId, totalPrice) => {
  return {
    type: "ADD_BOOKING",
    payload: {
      paymentId,
      hotelId,
      totalPrice,
    },
  };
};
