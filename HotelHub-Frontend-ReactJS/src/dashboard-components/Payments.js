import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import axios from "axios"; // Import Axios for sending data to the backend
import "../styles/Payments.css";
import { useUser } from "../components/UserContext";

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [paymentId, setPaymentId] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);
  const [hotelData, setHotelData] = useState(null);
  const [numRoomsBooked, setNumRoomsBooked] = useState(0); // New state for number of rooms booked
  const { userEmail } = useUser();

  useEffect(() => {
    if (location.state && location.state.hotel) {
      setHotelData(location.state.hotel);
    }

    if (location.state && location.state.bookingDetails) {
      // Access the booking details, but the structure of bookingDetails may vary based on what you're sending from the previous page
      const bookingDetails = location.state.bookingDetails;
      // You may need to update the following code based on the structure of bookingDetails
      const totalPrice = bookingDetails.roomCost;
      setTotalPrice(totalPrice);
      if (location.state && location.state.numRoomsBooked) {
        setNumRoomsBooked(location.state.numRoomsBooked); // Set the number of rooms booked
      }
    }
  }, [location.state]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (totalPrice === 0) {
      alert("Payment Not Possible");
    } else {
      var options = {
        key: "rzp_test_37MbLXJMCUd3yL",
        key_secret: "FQwGGUeSjZm6VW8IwVeoj2d0",
        amount: totalPrice * 100, // Convert total price to paise
        currency: "INR",
        name: "HOTELHUB",
        description: "For Testing",
        handler: function (response) {
          const paymentId = response.razorpay_payment_id;
          setPaymentId(paymentId);
          alert(paymentId);

          if (hotelData) {
            // Prepare data to send to the backend
            const bookingRequest = {
              userEmail: userEmail,
              hotelId: hotelData.id,
              checkInDate: hotelData.checkInDate,
              checkOutDate: hotelData.checkOutDate,
              numberOfRooms: numRoomsBooked,
              costOfRooms: totalPrice,
              // Add more fields as needed
            };

            // Send the booking data to the backend using Axios
            axios
              .post(
                "http://localhost:8080/api/bookings/bookHotel",
                bookingRequest
              )
              .then((response) => {
                alert("Booking successful!");
                console.log(bookingRequest); // Display a success message
                navigate("/dashboard"); // Redirect to the dashboard page
              })
              .catch((error) => {
                console.error("Error in booking:", error);
                alert("Booking failed. Please try again.");
              });
          }
        },
        prefill: {
          name: "Gokul Krishna",
          email: "gravekrishna@email.com",
          contact: "8667829061",
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#ff8c00",
        },
      };
      var pay = new window.Razorpay(options);
      pay.open();
    }
  };

  return (
    <div>
      <Header />
      <div className="Payment-container">
        <h2 className="Payment-heading">Payment</h2>
        <form className="Payment-form" onSubmit={handleSubmit}>
          <div className="Payment-form-group">
            <label className="Payment-label" htmlFor="totalPrice">
              Total Price:
            </label>
            <input
              type="text"
              id="totalPrice"
              name="totalPrice"
              className="Payment-input"
              value={`₹${totalPrice}`}
              readOnly
            />
          </div>
          <button
            type="submit"
            className="Payment-button"
            onClick={handleSubmit}
          >
            Proceed to Pay
          </button>
        </form>
      </div>
    </div>
  );
};

export default Payment;
